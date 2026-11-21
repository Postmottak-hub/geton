export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  source: string;
  honeypot?: string;
  gameProof?: {
    score: number;
    eligible: boolean;
    token: string;
    digest: string;
    durationSec: number;
    cleared: number;
    collected: number;
  } | null;
}

export interface ContactSubmissionResult {
  ok: boolean;
  error?: string;
}

const API_TIMEOUT_MS = 11500;
const FALLBACK_TIMEOUT_MS = 10000;

export function formatContactSubmitError(
  rawError: string | undefined,
  language: 'no' | 'en'
): string {
  const msg = (rawError || '').trim();
  if (/activat|confirm/i.test(msg)) {
    return language === 'no'
      ? 'Skjemaet krever engangsaktivering for dette domenet (sjekk e-posten til contact@getontechs.com og klikk «Activate Form»), eller send direkte til contact@getontechs.com nedenfor.'
      : 'This form requires one-time activation for this domain (check contact@getontechs.com inbox and click "Activate Form"), or email contact@getontechs.com directly below.';
  }
  if (/too many requests|rate/i.test(msg)) {
    return language === 'no'
      ? 'For mange forespørsler på kort tid. Vent noen minutter eller send e-post direkte til contact@getontechs.com.'
      : 'Too many requests in a short time. Please wait a few minutes or email contact@getontechs.com directly.';
  }
  return language === 'no'
    ? 'Kunne ikke sende skjemaet automatisk akkurat nå. Send oss gjerne en e-post direkte til contact@getontechs.com.'
    : 'Unable to send automatically right now. Please email us directly at contact@getontechs.com.';
}

export async function submitContactInquiry(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResult> {
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    return { ok: true };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        phone: payload.phone?.trim() || '',
        company: payload.company?.trim() || '',
        projectType: payload.projectType?.trim() || '',
        budget: payload.budget?.trim() || '',
        timeline: payload.timeline?.trim() || '',
        message: payload.message.trim(),
        source: payload.source,
        _honey: payload.honeypot || '',
        gameProof: payload.gameProof || undefined,
      }),
      signal: controller.signal,
    });

    const data = (await response.json().catch(() => null)) as {
      ok?: boolean;
      error?: string;
      errorCode?: string;
    } | null;

    if (response.ok && data?.ok) {
      return { ok: true };
    }

    // Never bypass client/server validation or rate limiting
    if (response.status === 400 || response.status === 429) {
      return {
        ok: false,
        error: data?.error || 'Please check your form details and try again.',
      };
    }

    // If /api/contact is unavailable or its upstream mail relay failed (404/405/502/503/504),
    // fall back to direct browser submission to FormSubmit (preserves original browser origin/session).
    if (
      response.status === 404 ||
      response.status === 405 ||
      response.status >= 500
    ) {
      return await submitViaDirectFormSubmit(payload);
    }

    return {
      ok: false,
      error: data?.error || 'Could not deliver message automatically.',
    };
  } catch {
    // Network error or backend timeout: try direct browser submission once
    return await submitViaDirectFormSubmit(payload);
  } finally {
    clearTimeout(timer);
  }
}

async function submitViaDirectFormSubmit(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FALLBACK_TIMEOUT_MS);

  try {
    const fields: Record<string, string> = {
      _subject: payload.gameProof?.eligible
        ? `[5% RABATT VERIFISERT – ${payload.gameProof.score} poeng] Geton Gaming Studio: ${payload.company || payload.name}`
        : `Ny henvendelse (${payload.projectType || payload.source}) fra ${payload.name}`,
      _replyto: payload.email.trim(),
      _template: 'table',
      _captcha: 'false',
      _honey: payload.honeypot || '',
      Kilde: payload.source,
      Navn: payload.name.trim(),
      Epost: payload.email.trim(),
      Telefon: payload.phone?.trim() || 'Ikke oppgitt',
      Bedrift: payload.company?.trim() || 'Ikke oppgitt',
      Prosjekttype: payload.projectType?.trim() || 'Generell henvendelse',
      Budsjett: payload.budget?.trim() || 'Ikke oppgitt',
      Oppstart: payload.timeline?.trim() || 'Ikke oppgitt',
      Prosjektbeskrivelse: payload.message.trim(),
    };

    if (payload.gameProof) {
      fields.Verifisert_Poengsum = `${payload.gameProof.score} poeng`;
      fields.Rabatt_Status = payload.gameProof.eligible
        ? `VERIFISERT – 5 % prosjektrabatt (${payload.gameProof.token})`
        : 'Ikke kvalifisert';
      fields.Verifiserings_Token = payload.gameProof.token || 'Ikke aktivert';
    }

    const res = await fetch('https://formsubmit.co/ajax/contact@getontechs.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(fields),
      signal: controller.signal,
    });

    const data = (await res.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;

    if (
      !res.ok ||
      !data ||
      data.success === false ||
      data.success === 'false'
    ) {
      return {
        ok: false,
        error: data?.message || 'Submission could not be verified.',
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: 'Direct submission failed or timed out.',
    };
  } finally {
    clearTimeout(timer);
  }
}
