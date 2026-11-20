// Private Anti-Tamper Game Run Ledger & Cryptographic Proof Generator
// Reward eligibility is derived strictly from active in-memory simulation ticks & events,
// never from mutable React state, localStorage high scores, or URL parameters.

export const REWARD_SCORE_TARGET = 1000;
const MIN_TICKS_REQUIRED = 950; // ~16s+ of simulated physics ticks minimum
const MIN_REAL_DURATION_MS = 15000; // Prevents accelerated-clock speedhacks
const MAX_PLAUSIBLE_PTS_PER_SEC = 110;

type CollectKind = 'coin' | 'gem' | 'star';

const ALLOWED_COLLECT_BASE: Record<CollectKind, number> = {
  coin: 20,
  gem: 40,
  star: 65,
};

export interface VerifiedRunSnapshot {
  verifiedScore: number;
  clearedCount: number;
  collectedCount: number;
  hitsTaken: number;
  simulatedSec: number;
  ticks: number;
  eligibleForReward: boolean;
}

export interface VerifiedClaimProof {
  valid: boolean;
  reason?: string;
  token: string;
  digest: string;
  telemetry: {
    score: number;
    durationSec: number;
    ticks: number;
    cleared: number;
    collected: number;
    hits: number;
  };
}

function mixHash(state: number, value: number): number {
  let h = (state ^ (value | 0)) >>> 0;
  h = Math.imul(h, 2654435761) >>> 0;
  h = ((h << 13) | (h >>> 19)) >>> 0;
  return h;
}

function generateNonce(): string {
  try {
    const bytes = new Uint8Array(12);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return `${Date.now().toString(16)}${Math.random().toString(16).slice(2, 10)}`;
  }
}

async function computeSha256Hex(payload: string): Promise<string> {
  try {
    if (typeof window !== 'undefined' && window.crypto?.subtle) {
      const encoded = new TextEncoder().encode(payload);
      const buffer = await window.crypto.subtle.digest('SHA-256', encoded);
      return Array.from(new Uint8Array(buffer), (b) => b.toString(16).padStart(2, '0')).join('');
    }
  } catch {
    // Fallback below if SubtleCrypto is unavailable
  }
  let a = 0x811c9dc5;
  let b = 0x9e3779b9;
  for (let i = 0; i < payload.length; i++) {
    const code = payload.charCodeAt(i);
    a = mixHash(a, code + i);
    b = mixHash(b, code * 31);
  }
  return `${a.toString(16).padStart(8, '0')}${b.toString(16).padStart(8, '0')}`;
}

export interface GameRunSession {
  recordTick: (dt: number, speedPxPerSec: number) => void;
  recordJump: (isDouble: boolean) => void;
  recordCollect: (kind: CollectKind, comboMultiplier: number) => number;
  recordObstacleClear: () => number;
  recordHit: () => void;
  getSnapshot: () => VerifiedRunSnapshot;
  verifyAndIssueProof: () => Promise<VerifiedClaimProof>;
}

export function createGameRunSession(): GameRunSession {
  const sessionNonce = generateNonce();
  const startedAtPerf = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const startedAtEpoch = Date.now();

  let ticks = 0;
  let simulatedSec = 0;
  let distancePx = 0;
  let bonusScore = 0;
  let clearedCount = 0;
  let collectedCount = 0;
  let hitsTaken = 0;
  let chainDigest = 0x51a7f319;
  let eventDigestShadow = 0;

  const computeVerifiedScore = (): number => {
    const distancePoints = Math.floor(distancePx / 56);
    return distancePoints + bonusScore;
  };

  return {
    recordTick(dt: number, speedPxPerSec: number) {
      const safeDt = Math.max(0.001, Math.min(0.05, dt));
      const safeSpeed = Math.max(0, Math.min(420, speedPxPerSec));
      ticks += 1;
      simulatedSec += safeDt;
      distancePx += safeSpeed * safeDt;
      if (ticks % 15 === 0) {
        chainDigest = mixHash(chainDigest, Math.round(distancePx) + ticks);
      }
    },

    recordJump(isDouble: boolean) {
      chainDigest = mixHash(chainDigest, isDouble ? 202 : 101);
    },

    recordCollect(kind: CollectKind, comboMultiplier: number): number {
      const base = ALLOWED_COLLECT_BASE[kind];
      const clampedMult = Math.max(1, Math.min(2.5, comboMultiplier));
      const awarded = Math.round(base * clampedMult);
      bonusScore += awarded;
      collectedCount += 1;
      eventDigestShadow += awarded;
      chainDigest = mixHash(chainDigest, awarded * 17 + collectedCount);
      return awarded;
    },

    recordObstacleClear(): number {
      const clearPts = 10;
      bonusScore += clearPts;
      clearedCount += 1;
      eventDigestShadow += clearPts;
      chainDigest = mixHash(chainDigest, clearedCount * 31 + clearPts);
      return clearPts;
    },

    recordHit() {
      hitsTaken += 1;
      chainDigest = mixHash(chainDigest, hitsTaken * 97 + ticks);
    },

    getSnapshot(): VerifiedRunSnapshot {
      const verifiedScore = computeVerifiedScore();
      const eligibleForReward =
        verifiedScore >= REWARD_SCORE_TARGET &&
        ticks >= MIN_TICKS_REQUIRED &&
        simulatedSec >= 15 &&
        collectedCount >= 4 &&
        clearedCount >= 4 &&
        bonusScore === eventDigestShadow;

      return {
        verifiedScore,
        clearedCount,
        collectedCount,
        hitsTaken,
        simulatedSec,
        ticks,
        eligibleForReward,
      };
    },

    async verifyAndIssueProof(): Promise<VerifiedClaimProof> {
      const verifiedScore = computeVerifiedScore();
      const nowPerf = typeof performance !== 'undefined' ? performance.now() : Date.now();
      const elapsedRealMs = Math.max(0, nowPerf - startedAtPerf);
      const ptsPerSec = verifiedScore / Math.max(1, simulatedSec);

      const telemetry = {
        score: verifiedScore,
        durationSec: Math.round(simulatedSec),
        ticks,
        cleared: clearedCount,
        collected: collectedCount,
        hits: hitsTaken,
      };

      if (verifiedScore < REWARD_SCORE_TARGET) {
        return {
          valid: false,
          reason: 'score_below_target',
          token: '',
          digest: '',
          telemetry,
        };
      }

      if (
        ticks < MIN_TICKS_REQUIRED ||
        elapsedRealMs < MIN_REAL_DURATION_MS ||
        bonusScore !== eventDigestShadow ||
        collectedCount < 4 ||
        clearedCount < 4 ||
        ptsPerSec > MAX_PLAUSIBLE_PTS_PER_SEC
      ) {
        return {
          valid: false,
          reason: 'integrity_check_failed',
          token: '',
          digest: '',
          telemetry,
        };
      }

      const rawPayload = `${sessionNonce}|${startedAtEpoch}|${verifiedScore}|${ticks}|${collectedCount}|${clearedCount}|${hitsTaken}|${chainDigest.toString(16)}`;
      const digest = await computeSha256Hex(rawPayload);
      const token = `GTS-${verifiedScore}-${digest.slice(0, 8).toUpperCase()}`;

      return {
        valid: true,
        token,
        digest,
        telemetry,
      };
    },
  };
}
