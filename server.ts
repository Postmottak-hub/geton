import 'dotenv/config';
import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { createServer as createViteServer } from 'vite';

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const IS_PROD = process.env.NODE_ENV === 'production';
const CONTACT_RECIPIENT = 'contact@getontechs.com';
const UPSTREAM_TIMEOUT_MS = 10000;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
  source?: unknown;
  _honey?: unknown;
  gameProof?: unknown;
}

interface GameProofPayload {
  score?: unknown;
  eligible?: unknown;
  token?: unknown;
  digest?: unknown;
  durationSec?: unknown;
  cleared?: unknown;
  collected?: unknown;
}

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_REQUESTS = 15;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

const pruneTimer = setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateBuckets.entries()) {
    if (entry.resetAt <= now) {
      rateBuckets.delete(key);
    }
  }
}, 10 * 60 * 1000);
pruneTimer.unref();

function getClientIp(req: Request): string {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff.trim().length > 0) {
    return xff.split(',')[0].trim().slice(0, 64);
  }
  return (req.socket?.remoteAddress || 'unknown').slice(0, 64);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const current = rateBuckets.get(ip);
  if (!current || current.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (current.count >= RATE_MAX_REQUESTS) {
    return false;
  }
  current.count += 1;
  return true;
}

function cleanSingleLine(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\0]+/g, ' ').trim().slice(0, maxLen);
}

function cleanMultiline(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\0/g, '').trim().slice(0, maxLen);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_REGEX = /^[^\s@<>()[\]\\,;:\s@"]+@[^\s@<>()[\]\\,;:\s@"]+\.[^\s@<>()[\]\\,;:\s@"]{2,}$/;

async function sendViaResend(params: {
  apiKey: string;
  subject: string;
  replyTo: string;
  rows: { label: string; value: string }[];
}): Promise<{ ok: boolean; error?: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  const fromEmail =
    cleanSingleLine(process.env.RESEND_FROM_EMAIL, 120) ||
    `Geton AS Website <onboarding@resend.dev>`;

  const tableRows = params.rows
    .map(
      (r) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;color:#0f172a;">${escapeHtml(r.label)}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;color:#1e293b;white-space:pre-wrap;">${escapeHtml(r.value)}</td></tr>`
    )
    .join('');

  const textBody = params.rows.map((r) => `${r.label}: ${r.value}`).join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${params.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [CONTACT_RECIPIENT],
        reply_to: params.replyTo,
        subject: params.subject,
        text: textBody,
        html: `<div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;"><h2 style="color:#0f172a;margin-bottom:16px;">${escapeHtml(params.subject)}</h2><table style="border-collapse:collapse;width:100%;font-size:14px;">${tableRows}</table></div>`,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      return { ok: false, error: `Upstream rejected (${res.status})` };
    }
    return { ok: true };
  } catch (err) {
    const isAbort = err instanceof Error && err.name === 'AbortError';
    return { ok: false, error: isAbort ? 'Upstream request timed out' : 'Upstream network error' };
  } finally {
    clearTimeout(timer);
  }
}

function isLocalOrigin(urlStr: string): boolean {
  return /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:|\/|$)/i.test(urlStr);
}

function resolveSafeOrigin(req: Request): { origin: string; referer: string } {
  const rawOrigin = cleanSingleLine(req.headers.origin, 200);
  if (/^https?:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(rawOrigin) && !isLocalOrigin(rawOrigin)) {
    return { origin: rawOrigin, referer: `${rawOrigin}/` };
  }
  const rawReferer = cleanSingleLine(req.headers.referer, 300);
  if (/^https?:\/\//i.test(rawReferer) && !isLocalOrigin(rawReferer)) {
    try {
      const parsed = new URL(rawReferer);
      return { origin: parsed.origin, referer: rawReferer };
    } catch {
      // ignore invalid referer
    }
  }
  const envUrl = cleanSingleLine(process.env.APP_URL, 200).replace(/\/+$/, '');
  const fallbackOrigin =
    envUrl && /^https?:\/\//i.test(envUrl) && !isLocalOrigin(envUrl) && !envUrl.includes('MY_APP_URL')
      ? envUrl
      : 'https://getontechs.com';
  return { origin: fallbackOrigin, referer: `${fallbackOrigin}/` };
}

async function sendViaFormSubmit(params: {
  subject: string;
  replyTo: string;
  fields: Record<string, string>;
  origin: string;
  referer: string;
}): Promise<{ ok: boolean; error?: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_RECIPIENT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Origin: params.origin,
        Referer: params.referer,
      },
      body: JSON.stringify({
        _subject: params.subject,
        _replyto: params.replyTo,
        _template: 'table',
        _captcha: 'false',
        _honey: '',
        ...params.fields,
      }),
      signal: controller.signal,
    });

    const data = (await res.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;

    if (!res.ok) {
      return {
        ok: false,
        error: data?.message || `Upstream mailer returned HTTP ${res.status}`,
      };
    }
    if (!data || data.success === false || data.success === 'false') {
      return {
        ok: false,
        error: data?.message || 'Form endpoint did not confirm delivery',
      };
    }
    return { ok: true };
  } catch (err) {
    const isAbort = err instanceof Error && err.name === 'AbortError';
    return { ok: false, error: isAbort ? 'Mail relay timed out' : 'Mail relay unreachable' };
  } finally {
    clearTimeout(timer);
  }
}

async function startServer() {
  const app = express();
  app.disable('x-powered-by');

  // Security headers compatible with iframe preview
  app.use((_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    res.setHeader('X-DNS-Prefetch-Control', 'on');
    next();
  });

  app.use(express.json({ limit: '32kb' }));

  // Malformed JSON error handler
  app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SyntaxError && 'status' in err) {
      res.status(400).json({ ok: false, error: 'Invalid JSON request body.' });
      return;
    }
    next(err);
  });

  app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({ ok: true, service: 'geton-web' });
  });

  app.post('/api/contact', async (req: Request, res: Response) => {
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      res.status(429).json({
        ok: false,
        errorCode: 'RATE_LIMITED',
        error: 'Too many requests. Please wait a few minutes or email contact@getontechs.com directly.',
      });
      return;
    }

    const body = (req.body || {}) as ContactPayload;

    // Silent honeypot drop for bots
    if (typeof body._honey === 'string' && body._honey.trim().length > 0) {
      res.status(200).json({ ok: true, delivered: true });
      return;
    }

    const name = cleanSingleLine(body.name, 120);
    const email = cleanSingleLine(body.email, 160).toLowerCase();
    const phone = cleanSingleLine(body.phone, 40) || 'Ikke oppgitt';
    const company = cleanSingleLine(body.company, 120) || 'Ikke oppgitt';
    const projectType = cleanSingleLine(body.projectType, 100) || 'Generell henvendelse';
    const budget = cleanSingleLine(body.budget, 80) || 'Ikke oppgitt';
    const timeline = cleanSingleLine(body.timeline, 80) || 'Ikke oppgitt';
    const source = cleanSingleLine(body.source, 60) || 'website';
    const message = cleanMultiline(body.message, 5000);

    if (name.length < 1) {
      res.status(400).json({
        ok: false,
        errorCode: 'INVALID_NAME',
        error: 'Please provide your name.',
      });
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      res.status(400).json({
        ok: false,
        errorCode: 'INVALID_EMAIL',
        error: 'Please provide a valid email address.',
      });
      return;
    }

    if (message.length < 5) {
      res.status(400).json({
        ok: false,
        errorCode: 'INVALID_MESSAGE',
        error: 'Please include a brief description (at least 5 characters).',
      });
      return;
    }

    // Optional verified game proof payload validation
    let gameScoreStr = '';
    let gameStatusStr = '';
    let gameTokenStr = '';
    let gameDigestStr = '';
    let gameMetaStr = '';
    let hasDiscountBadge = false;

    if (body.gameProof && typeof body.gameProof === 'object') {
      const gp = body.gameProof as GameProofPayload;
      const numericScore =
        typeof gp.score === 'number' && Number.isFinite(gp.score)
          ? Math.max(0, Math.min(3000, Math.round(gp.score)))
          : 0;
      const eligible = Boolean(gp.eligible) && numericScore >= 1000;
      const token = cleanSingleLine(gp.token, 36);
      const digest = cleanSingleLine(gp.digest, 80);
      const durationSec =
        typeof gp.durationSec === 'number' && Number.isFinite(gp.durationSec)
          ? Math.max(0, Math.round(gp.durationSec))
          : 0;
      const cleared =
        typeof gp.cleared === 'number' && Number.isFinite(gp.cleared)
          ? Math.max(0, Math.round(gp.cleared))
          : 0;
      const collected =
        typeof gp.collected === 'number' && Number.isFinite(gp.collected)
          ? Math.max(0, Math.round(gp.collected))
          : 0;

      gameScoreStr = `${numericScore} poeng`;
      if (eligible && /^GTS-\d{3,4}-[A-F0-9]{8}$/.test(token)) {
        hasDiscountBadge = true;
        gameStatusStr = `VERIFISERT – 5 % prosjektrabatt (${token})`;
        gameTokenStr = token;
        gameDigestStr = digest || 'N/A';
      } else {
        gameStatusStr = 'Ikke kvalifisert (under 1000 verifiserte poeng)';
        gameTokenStr = 'Ikke aktivert';
        gameDigestStr = 'N/A';
      }
      gameMetaStr = `${durationSec}s · ${cleared} passert · ${collected} samlet`;
    }

    const subject = hasDiscountBadge
      ? `[5% RABATT VERIFISERT – ${gameScoreStr}] Geton Gaming Studio: ${company !== 'Ikke oppgitt' ? company : name}`
      : `Ny henvendelse (${projectType}) fra ${name}`;

    const fields: Record<string, string> = {
      Kilde: source,
      Navn: name,
      Epost: email,
      Telefon: phone,
      Bedrift: company,
      Prosjekttype: projectType,
      Budsjett: budget,
      Oppstart: timeline,
      Prosjektbeskrivelse: message,
    };

    if (gameScoreStr) {
      fields.Verifisert_Poengsum = gameScoreStr;
      fields.Rabatt_Status = gameStatusStr;
      fields.Verifiserings_Token = gameTokenStr;
      fields.Proof_Digest_SHA256 = gameDigestStr;
      fields.Spill_Telemetri = gameMetaStr;
    }

    const resendKey = cleanSingleLine(process.env.RESEND_API_KEY, 160);
    const hasResendKey =
      resendKey.length > 10 &&
      !resendKey.startsWith('MY_') &&
      !resendKey.includes('YOUR_');

    let deliveryResult: { ok: boolean; error?: string };

    if (hasResendKey) {
      const rows = Object.entries(fields).map(([label, value]) => ({ label, value }));
      deliveryResult = await sendViaResend({
        apiKey: resendKey,
        subject,
        replyTo: email,
        rows,
      });
    } else {
      const { origin, referer } = resolveSafeOrigin(req);
      deliveryResult = await sendViaFormSubmit({
        subject,
        replyTo: email,
        fields,
        origin,
        referer,
      });
    }

    if (!deliveryResult.ok) {
      res.status(502).json({
        ok: false,
        errorCode: 'DELIVERY_UNAVAILABLE',
        error: deliveryResult.error || 'Could not deliver message right now.',
        mailtoFallbackAvailable: true,
      });
      return;
    }

    res.status(200).json({ ok: true, delivered: true });
  });

  if (!IS_PROD) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');

    // Long-term immutable cache for fingerprinted assets & media
    app.use(
      '/assets',
      express.static(path.join(distDir, 'assets'), {
        maxAge: '365d',
        immutable: true,
      })
    );

    app.use(
      express.static(distDir, {
        index: false,
        maxAge: '1h',
        setHeaders(res, filePath) {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
          }
        },
      })
    );

    // Serve pre-rendered SEO HTML for clean crawlable paths, fallback to dist/index.html
    app.get('*', (req: Request, res: Response) => {
      const cleanPath = (req.path || '/').replace(/\/+$/, '') || '/';
      if (cleanPath === '/sitemap.xml') {
        const sitemapPath = path.join(distDir, 'sitemap.xml');
        if (fs.existsSync(sitemapPath)) {
          res.type('application/xml').sendFile(sitemapPath);
          return;
        }
      }
      if (cleanPath === '/robots.txt') {
        const robotsPath = path.join(distDir, 'robots.txt');
        if (fs.existsSync(robotsPath)) {
          res.type('text/plain').sendFile(robotsPath);
          return;
        }
      }

      const safeSegments = cleanPath
        .split('/')
        .filter((s) => s.length > 0 && !s.includes('..'));
      const candidateHtml =
        safeSegments.length === 0
          ? path.join(distDir, 'index.html')
          : path.join(distDir, ...safeSegments, 'index.html');

      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      if (fs.existsSync(candidateHtml)) {
        res.sendFile(candidateHtml);
        return;
      }

      const fallbackIndex = path.join(distDir, 'index.html');
      if (fs.existsSync(fallbackIndex)) {
        res.sendFile(fallbackIndex);
        return;
      }

      res.status(404).send('Not found');
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`[geton-server] listening on http://${HOST}:${PORT} (${IS_PROD ? 'production' : 'dev'})`);
  });
}

startServer().catch((err) => {
  console.error('[geton-server] failed to start:', err instanceof Error ? err.message : 'unknown error');
  process.exit(1);
});
