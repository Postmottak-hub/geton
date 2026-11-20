import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  Trophy,
  Gamepad2,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Gift,
  Sparkles,
  CheckCircle2,
  Send,
  AlertCircle,
  Heart,
  Flame,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import {
  createGameRunSession,
  GameRunSession,
  REWARD_SCORE_TARGET,
  VerifiedClaimProof,
} from '../utils/gameReward.ts';

type GameState = 'TITLE_MENU' | 'PLAYING' | 'CELEBRATION' | 'GAME_OVER' | 'CLAIM_FORM';
type ObstacleKind = 'patrol' | 'hopper' | 'firewall' | 'bird' | 'fireball';
type CollectibleKind = 'coin' | 'gem' | 'star';

interface GetonJumpGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartProject?: () => void;
}

interface Platform {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface FireTrap {
  x: number;
  y: number; // surface top Y (ground or platform top)
  width: number;
  cycleTimer: number; // 0..2.75s repeating cycle
  passed: boolean;
}

interface Obstacle {
  x: number;
  y: number;
  baseY: number;
  originX: number;
  width: number;
  height: number;
  kind: ObstacleKind;
  passed: boolean;
  phase: number;
  patrolDir: number;
  patrolRange: number;
  hopVy: number;
}

interface Collectible {
  x: number;
  y: number;
  radius: number;
  kind: CollectibleKind;
  collected: boolean;
  bobOffset: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  gravity?: number;
}

interface FloatingText {
  x: number;
  y: number;
  text: string;
  color: string;
  life: number;
  maxLife: number;
}

interface AmbientBird {
  x: number;
  y: number;
  speed: number;
  scale: number;
  phase: number;
}

interface Cloud {
  x: number;
  y: number;
  width: number;
  speed: number;
  opacity: number;
}

const LOGICAL_WIDTH = 780;
const LOGICAL_HEIGHT = 350;
const GROUND_Y = 294;
const PLAYER_X = 112;
const PLAYER_HALF_W = 15;
const PLAYER_HEIGHT = 42;
const MAX_LIVES = 3;

const BASE_SPEED = 198;
const MAX_SPEED = 325;
const GRAVITY = 1520;
const JUMP_VELOCITY = -620;
const DOUBLE_JUMP_VELOCITY = -560;
const HIGH_SCORE_STORAGE_KEY = 'geton_gaming_studio_best_v3';

// Fire trap cycle timing (seconds): dormant -> warning telegraph -> active flame -> cooldown
const TRAP_DORMANT_END = 0.95;
const TRAP_WARNING_END = 1.72;
const TRAP_ACTIVE_END = 2.68;

const STARS = Array.from({ length: 34 }, (_, i) => ({
  x: (i * 97 + 41) % LOGICAL_WIDTH,
  y: (i * 53 + 17) % (GROUND_Y - 130),
  r: i % 3 === 0 ? 1.6 : 1.0,
  twinkle: i * 0.9,
}));

const createInitialAmbientBirds = (): AmbientBird[] => [
  { x: 190, y: 50, speed: 22, scale: 0.85, phase: 0.4 },
  { x: 440, y: 78, speed: 18, scale: 0.65, phase: 1.9 },
  { x: 670, y: 42, speed: 26, scale: 0.75, phase: 3.1 },
];

const createInitialClouds = (): Cloud[] => [
  { x: 80, y: 60, width: 92, speed: 11, opacity: 0.08 },
  { x: 340, y: 40, width: 118, speed: 8.5, opacity: 0.06 },
  { x: 610, y: 74, width: 98, speed: 13, opacity: 0.07 },
];

export const GetonJumpGameModal: React.FC<GetonJumpGameModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { language } = useLanguage();
  const [gameState, setGameState] = useState<GameState>('TITLE_MENU');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [comboMultiplier, setComboMultiplier] = useState(1);
  const [stageLevel, setStageLevel] = useState(1);
  const [bestScore, setBestScore] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(HIGH_SCORE_STORAGE_KEY);
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });
  const [clearedCount, setClearedCount] = useState(0);
  const [gemsCount, setGemsCount] = useState(0);
  const [isNewBest, setIsNewBest] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Verified server-bound proof generated strictly from active in-memory session telemetry
  const [verifiedProof, setVerifiedProof] = useState<VerifiedClaimProof | null>(null);
  const [isVerifyingClaim, setIsVerifyingClaim] = useState(false);

  // In-popup Claim & Build with Geton inquiry form state
  const [projectType, setProjectType] = useState(
    language === 'no' ? 'Nettside' : 'Website'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gameStateRef = useRef<GameState>('TITLE_MENU');
  const soundEnabledRef = useRef(true);
  const bestScoreRef = useRef(bestScore);
  const languageRef = useRef(language);
  const runSessionRef = useRef<GameRunSession | null>(null);
  const nextPlatformIdRef = useRef(1);

  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    bestScoreRef.current = bestScore;
  }, [bestScore]);

  useEffect(() => {
    languageRef.current = language;
  }, [language]);

  useEffect(() => {
    if (isOpen) {
      gameStateRef.current = 'TITLE_MENU';
      setGameState('TITLE_MENU');
      setSubmitSuccess(false);
      setSubmitError(null);
      setVerifiedProof(null);
      setProjectType(language === 'no' ? 'Nettside' : 'Website');
    }
  }, [isOpen, language]);

  const simRef = useRef({
    playerFeetY: GROUND_Y,
    prevFeetY: GROUND_Y,
    playerVy: 0,
    jumpsUsed: 0,
    dropThroughTimer: 0,
    invulnTimer: 0,
    screenShake: 0,
    lives: MAX_LIVES,
    streak: 0,
    scaleX: 1,
    scaleY: 1,
    speed: BASE_SPEED,
    runCycle: 0,
    unlockedMilestoneInRun: false,
    patternCooldown: 0.9,
    fireballCooldown: 3.4,
    gridOffset: 0,
    skylineOffset: 0,
    hillOffset: 0,
    platforms: [] as Platform[],
    fireTraps: [] as FireTrap[],
    obstacles: [] as Obstacle[],
    collectibles: [] as Collectible[],
    particles: [] as Particle[],
    floatingTexts: [] as FloatingText[],
    ambientBirds: createInitialAmbientBirds(),
    clouds: createInitialClouds(),
  });

  const playTone = useCallback(
    (type: 'jump' | 'double' | 'drop' | 'gem' | 'unlock' | 'hit' | 'gameover') => {
      if (!soundEnabledRef.current || typeof window === 'undefined') return;
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        if (!AudioCtx) return;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          void ctx.resume();
        }

        const now = ctx.currentTime;

        if (type === 'unlock') {
          const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
          notes.forEach((freq, idx) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g);
            g.connect(ctx.destination);
            o.type = 'triangle';
            const t = now + idx * 0.075;
            o.frequency.setValueAtTime(freq, t);
            g.gain.setValueAtTime(0.085, t);
            g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
            o.start(t);
            o.stop(t + 0.27);
          });
          return;
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'jump') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(320, now);
          osc.frequency.exponentialRampToValueAtTime(610, now + 0.11);
          gain.gain.setValueAtTime(0.07, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
          osc.start(now);
          osc.stop(now + 0.13);
        } else if (type === 'double') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(480, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.14);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
          osc.start(now);
          osc.stop(now + 0.15);
        } else if (type === 'drop') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(380, now);
          osc.frequency.exponentialRampToValueAtTime(170, now + 0.09);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
        } else if (type === 'gem') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(740, now);
          osc.frequency.setValueAtTime(1060, now + 0.055);
          gain.gain.setValueAtTime(0.075, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
          osc.start(now);
          osc.stop(now + 0.16);
        } else if (type === 'hit') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(210, now);
          osc.frequency.exponentialRampToValueAtTime(75, now + 0.18);
          gain.gain.setValueAtTime(0.09, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
        } else {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.exponentialRampToValueAtTime(48, now + 0.32);
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);
          osc.start(now);
          osc.stop(now + 0.34);
        }
      } catch {
        // Ignore blocked Web Audio errors silently
      }
    },
    []
  );

  const spawnParticles = useCallback(
    (
      x: number,
      y: number,
      colors: string[],
      count: number,
      spreadVy = 180,
      gravity = 360
    ) => {
      const sim = simRef.current;
      for (let i = 0; i < count; i++) {
        sim.particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 230,
          vy: (Math.random() - 0.72) * spreadVy,
          life: 0.38 + Math.random() * 0.32,
          maxLife: 0.7,
          color: colors[i % colors.length],
          size: 2.2 + Math.random() * 3.2,
          gravity,
        });
      }
    },
    []
  );

  const spawnFloatingText = useCallback(
    (x: number, y: number, text: string, color: string) => {
      simRef.current.floatingTexts.push({
        x,
        y,
        text,
        color,
        life: 1.05,
        maxLife: 1.05,
      });
    },
    []
  );

  const getComboMultiplier = (streak: number): number => {
    if (streak >= 10) return 2.5;
    if (streak >= 7) return 2.0;
    if (streak >= 4) return 1.5;
    if (streak >= 2) return 1.25;
    return 1.0;
  };

  const resetAndStartGame = useCallback(() => {
    runSessionRef.current = createGameRunSession();
    simRef.current = {
      playerFeetY: GROUND_Y,
      prevFeetY: GROUND_Y,
      playerVy: 0,
      jumpsUsed: 0,
      dropThroughTimer: 0,
      invulnTimer: 0,
      screenShake: 0,
      lives: MAX_LIVES,
      streak: 0,
      scaleX: 1,
      scaleY: 1,
      speed: BASE_SPEED,
      runCycle: 0,
      unlockedMilestoneInRun: false,
      patternCooldown: 0.8,
      fireballCooldown: 4.5,
      gridOffset: 0,
      skylineOffset: 0,
      hillOffset: 0,
      platforms: [
        {
          id: nextPlatformIdRef.current++,
          x: 420,
          y: GROUND_Y - 78,
          width: 135,
          height: 14,
        },
      ],
      fireTraps: [],
      obstacles: [],
      collectibles: [
        {
          x: 465,
          y: GROUND_Y - 108,
          radius: 10,
          kind: 'coin',
          collected: false,
          bobOffset: 0.4,
        },
        {
          x: 515,
          y: GROUND_Y - 108,
          radius: 10,
          kind: 'coin',
          collected: false,
          bobOffset: 1.1,
        },
      ],
      particles: [],
      floatingTexts: [],
      ambientBirds: createInitialAmbientBirds(),
      clouds: createInitialClouds(),
    };
    setScore(0);
    setLives(MAX_LIVES);
    setComboMultiplier(1);
    setStageLevel(1);
    setClearedCount(0);
    setGemsCount(0);
    setIsNewBest(false);
    setVerifiedProof(null);
    setSubmitSuccess(false);
    setSubmitError(null);
    gameStateRef.current = 'PLAYING';
    setGameState('PLAYING');
    playTone('jump');
  }, [playTone]);

  const openClaimForm = useCallback(async () => {
    setSubmitSuccess(false);
    setSubmitError(null);
    setIsVerifyingClaim(true);
    gameStateRef.current = 'CLAIM_FORM';
    setGameState('CLAIM_FORM');

    try {
      if (runSessionRef.current) {
        const proof = await runSessionRef.current.verifyAndIssueProof();
        setVerifiedProof(proof);
      } else {
        setVerifiedProof(null);
      }
    } finally {
      setIsVerifyingClaim(false);
    }
  }, []);

  const continueAfterCelebration = useCallback(() => {
    if (gameStateRef.current === 'CELEBRATION') {
      gameStateRef.current = 'PLAYING';
      setGameState('PLAYING');
    }
  }, []);

  const triggerJump = useCallback(() => {
    if (gameStateRef.current === 'CLAIM_FORM' || gameStateRef.current === 'CELEBRATION') {
      return;
    }
    if (
      gameStateRef.current === 'TITLE_MENU' ||
      gameStateRef.current === 'GAME_OVER'
    ) {
      resetAndStartGame();
      return;
    }

    const sim = simRef.current;
    if (sim.jumpsUsed < 2) {
      const isDouble = sim.jumpsUsed === 1;
      sim.playerVy = isDouble ? DOUBLE_JUMP_VELOCITY : JUMP_VELOCITY;
      sim.jumpsUsed += 1;
      sim.scaleX = 0.86;
      sim.scaleY = 1.16;
      runSessionRef.current?.recordJump(isDouble);
      spawnParticles(
        PLAYER_X - 2,
        sim.playerFeetY - 2,
        isDouble ? ['#c084fc', '#38bdf8', '#f472b6'] : ['#22d3ee', '#60a5fa'],
        isDouble ? 12 : 7
      );
      playTone(isDouble ? 'double' : 'jump');
    }
  }, [playTone, resetAndStartGame, spawnParticles]);

  const triggerFastDrop = useCallback(() => {
    if (gameStateRef.current !== 'PLAYING') return;
    const sim = simRef.current;
    sim.dropThroughTimer = 0.24;
    if (sim.playerFeetY < GROUND_Y) {
      sim.playerVy = Math.max(sim.playerVy, 480);
      sim.scaleX = 0.9;
      sim.scaleY = 1.12;
      playTone('drop');
    }
  }, [playTone]);

  // Spawn creative platform + hazard + reward patterns scaled by current stage (1..4)
  const spawnCreativePattern = useCallback((stage: number) => {
    const sim = simRef.current;
    const roll = Math.random();
    const startX = LOGICAL_WIDTH + 40;

    if (roll < 0.24) {
      // Pattern 1: Elevated platform with fire trap below OR on platform + sky gems
      const platW = 148 + Math.random() * 34;
      const platY = GROUND_Y - (stage >= 2 && Math.random() > 0.45 ? 128 : 78);
      sim.platforms.push({
        id: nextPlatformIdRef.current++,
        x: startX,
        y: platY,
        width: platW,
        height: 14,
      });

      // Place reward coins/gems along platform
      const count = 3;
      for (let i = 0; i < count; i++) {
        sim.collectibles.push({
          x: startX + 28 + i * 44,
          y: platY - 26,
          radius: i === 1 && stage >= 2 ? 12 : 10,
          kind: i === 1 && stage >= 2 ? 'gem' : 'coin',
          collected: false,
          bobOffset: i * 0.7,
        });
      }

      // Ground patrol or ground fire trap beneath platform
      if (stage >= 2 && Math.random() > 0.4) {
        sim.fireTraps.push({
          x: startX + platW * 0.5 - 16,
          y: GROUND_Y,
          width: 32,
          cycleTimer: Math.random() * 1.4,
          passed: false,
        });
      } else {
        sim.obstacles.push({
          x: startX + 20,
          originX: startX + platW * 0.5,
          y: GROUND_Y - 32,
          baseY: GROUND_Y - 32,
          width: 32,
          height: 32,
          kind: 'patrol',
          passed: false,
          phase: Math.random() * Math.PI * 2,
          patrolDir: 1,
          patrolRange: 44,
          hopVy: 0,
        });
      }
    } else if (roll < 0.48) {
      // Pattern 2: Ground Fire Trap / Firewall + arc of collectible gems over it
      if (stage >= 2 && Math.random() > 0.35) {
        sim.fireTraps.push({
          x: startX,
          y: GROUND_Y,
          width: 34,
          cycleTimer: 0.45 + Math.random() * 0.8,
          passed: false,
        });
      } else {
        const fwHeight = 46 + Math.min(18, stage * 4);
        sim.obstacles.push({
          x: startX,
          originX: startX,
          y: GROUND_Y - fwHeight,
          baseY: GROUND_Y - fwHeight,
          width: 28,
          height: fwHeight,
          kind: 'firewall',
          passed: false,
          phase: 0,
          patrolDir: 0,
          patrolRange: 0,
          hopVy: 0,
        });
      }

      sim.collectibles.push({
        x: startX + 16,
        y: GROUND_Y - 108,
        radius: 12,
        kind: stage >= 3 ? 'star' : 'gem',
        collected: false,
        bobOffset: 0.5,
      });
    } else if (roll < 0.72) {
      // Pattern 3: Two-tier platform staircase with a Star gem + Fire Trap on lower tier
      const p1Y = GROUND_Y - 78;
      const p2Y = GROUND_Y - 140;
      sim.platforms.push({
        id: nextPlatformIdRef.current++,
        x: startX,
        y: p1Y,
        width: 125,
        height: 14,
      });
      sim.platforms.push({
        id: nextPlatformIdRef.current++,
        x: startX + 145,
        y: p2Y,
        width: 120,
        height: 14,
      });

      if (stage >= 2) {
        sim.fireTraps.push({
          x: startX + 46,
          y: p1Y,
          width: 30,
          cycleTimer: 0.2,
          passed: false,
        });
      }

      sim.collectibles.push({
        x: startX + 205,
        y: p2Y - 28,
        radius: 12,
        kind: 'star',
        collected: false,
        bobOffset: 1.2,
      });

      if (stage >= 3) {
        sim.obstacles.push({
          x: startX + 160,
          originX: startX + 160,
          y: GROUND_Y - 30,
          baseY: GROUND_Y - 30,
          width: 32,
          height: 30,
          kind: 'hopper',
          passed: false,
          phase: Math.random() * Math.PI * 2,
          patrolDir: 0,
          patrolRange: 0,
          hopVy: -360,
        });
      }
    } else {
      // Pattern 4: Swooping Sky Bird / Drone + Hopper Slime or Patrol Bot
      const isHighBird = Math.random() > 0.45;
      const birdY = isHighBird ? GROUND_Y - 122 : GROUND_Y - 64;
      sim.obstacles.push({
        x: startX,
        originX: startX,
        y: birdY,
        baseY: birdY,
        width: 38,
        height: 24,
        kind: 'bird',
        passed: false,
        phase: Math.random() * Math.PI * 2,
        patrolDir: 0,
        patrolRange: 0,
        hopVy: 0,
      });

      if (stage >= 2) {
        sim.obstacles.push({
          x: startX + 95,
          originX: startX + 95,
          y: GROUND_Y - 30,
          baseY: GROUND_Y - 30,
          width: 32,
          height: 30,
          kind: Math.random() > 0.5 ? 'hopper' : 'patrol',
          passed: false,
          phase: Math.random() * Math.PI * 2,
          patrolDir: -1,
          patrolRange: 38,
          hopVy: -330,
        });
      }

      sim.collectibles.push({
        x: startX + 42,
        y: isHighBird ? GROUND_Y - 48 : GROUND_Y - 124,
        radius: 11,
        kind: 'gem',
        collected: false,
        bobOffset: 0.9,
      });
    }
  }, []);

  // Draw Original Human-Like 2D Platformer Hero
  const drawPlatformerHero = (
    ctx: CanvasRenderingContext2D,
    sim: typeof simRef.current,
    nowMs: number,
    isPlaying: boolean
  ) => {
    const feetY = sim.playerFeetY;
    const heightAboveGround = Math.max(0, GROUND_Y - feetY);
    const shadowScale = Math.max(0.35, 1 - heightAboveGround / 200);

    // Dynamic ground shadow
    ctx.fillStyle = 'rgba(34, 211, 238, 0.28)';
    ctx.beginPath();
    ctx.ellipse(PLAYER_X, GROUND_Y + 4, 18 * shadowScale, 4.2 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Invulnerability blink
    if (sim.invulnTimer > 0 && Math.floor(nowMs / 85) % 2 === 0) {
      ctx.globalAlpha = 0.42;
    }

    const isGrounded = Math.abs(sim.playerVy) < 12;
    const stride = isPlaying && isGrounded ? Math.sin(sim.runCycle * 13) : 0;
    const bounceY = isPlaying && isGrounded ? Math.abs(Math.sin(sim.runCycle * 13)) * -2.2 : 0;
    const tiltRad = isGrounded
      ? stride * 0.045
      : Math.max(-0.22, Math.min(0.24, sim.playerVy * 0.00035));

    ctx.save();
    ctx.translate(PLAYER_X, feetY + bounceY);
    ctx.rotate(tiltRad);
    ctx.scale(sim.scaleX, sim.scaleY);

    // Subtle heroic aura around character
    const aura = ctx.createRadialGradient(0, -22, 4, 0, -22, 32);
    aura.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
    aura.addColorStop(0.7, 'rgba(139, 92, 246, 0.12)');
    aura.addColorStop(1, 'rgba(139, 92, 246, 0)');
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(0, -22, 32, 0, Math.PI * 2);
    ctx.fill();

    // Back Leg
    const backLegAngle = isGrounded ? -stride * 0.55 : 0.35;
    ctx.save();
    ctx.translate(-3, -12);
    ctx.rotate(backLegAngle);
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.roundRect(-3.5, 0, 7, 10, 3);
    ctx.fill();
    // Back Sneaker
    ctx.fillStyle = '#0ea5e9';
    ctx.beginPath();
    ctx.roundRect(-3.5, 8, 10, 4.5, 2);
    ctx.fill();
    ctx.restore();

    // Back Arm
    const backArmAngle = isGrounded ? stride * 0.5 : -0.55;
    ctx.save();
    ctx.translate(-5, -26);
    ctx.rotate(backArmAngle);
    ctx.fillStyle = '#312e81';
    ctx.beginPath();
    ctx.roundRect(-2.5, 0, 5.5, 11, 2.5);
    ctx.fill();
    ctx.fillStyle = '#f5cba7';
    ctx.beginPath();
    ctx.arc(0, 11.5, 2.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Torso — Sleek Cyan-to-Violet Studio Jacket
    const torsoGrad = ctx.createLinearGradient(-9, -30, 9, -11);
    torsoGrad.addColorStop(0, '#0ea5e9');
    torsoGrad.addColorStop(0.6, '#4f46e5');
    torsoGrad.addColorStop(1, '#7c3aed');
    ctx.fillStyle = torsoGrad;
    ctx.beginPath();
    ctx.roundRect(-9.5, -29, 19, 18.5, [6, 6, 4, 4]);
    ctx.fill();

    // Jacket zipper highlight & chest badge
    ctx.fillStyle = 'rgba(224, 242, 254, 0.8)';
    ctx.fillRect(-1, -27, 2, 14);
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.arc(4.5, -23.5, 2, 0, Math.PI * 2);
    ctx.fill();

    // Front Leg
    const frontLegAngle = isGrounded ? stride * 0.58 : -0.28;
    ctx.save();
    ctx.translate(3, -12);
    ctx.rotate(frontLegAngle);
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.roundRect(-3.5, 0, 7.2, 10, 3);
    ctx.fill();
    // Front Neon Sneaker
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.roundRect(-3, 8, 11, 4.5, 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-2, 11, 9, 1.5);
    ctx.restore();

    // Front Arm
    const frontArmAngle = isGrounded ? -stride * 0.55 : -0.7;
    ctx.save();
    ctx.translate(5, -25.5);
    ctx.rotate(frontArmAngle);
    ctx.fillStyle = '#2563eb';
    ctx.beginPath();
    ctx.roundRect(-2.8, 0, 5.8, 11.5, 2.5);
    ctx.fill();
    ctx.fillStyle = '#fbd3b6';
    ctx.beginPath();
    ctx.arc(0, 12, 2.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Head (Warm Human Skin + Expressive Face)
    ctx.fillStyle = '#fbd3b6';
    ctx.beginPath();
    ctx.arc(1, -36.5, 9.2, 0, Math.PI * 2);
    ctx.fill();

    // Cheek warmth
    ctx.fillStyle = 'rgba(244, 114, 182, 0.25)';
    ctx.beginPath();
    ctx.arc(5.5, -34.5, 2.2, 0, Math.PI * 2);
    ctx.fill();

    // Hair tuft & Futuristic Visor Cap
    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.arc(0.5, -39, 9.6, Math.PI * 0.92, Math.PI * 2.02);
    ctx.fill();

    // Studio Cap Crown & Brim facing right
    const capGrad = ctx.createLinearGradient(-9, -47, 12, -39);
    capGrad.addColorStop(0, '#7c3aed');
    capGrad.addColorStop(1, '#06b6d4');
    ctx.fillStyle = capGrad;
    ctx.beginPath();
    ctx.arc(0.5, -39.5, 9.5, Math.PI * 1.02, Math.PI * 2.0);
    ctx.closePath();
    ctx.fill();

    // Cap Visor Brim
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.roundRect(1, -40.5, 12, 2.8, 1.4);
    ctx.fill();

    // Expressive Eye & Smile
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.ellipse(5, -36.5, 1.6, 2.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(5.5, -37.3, 0.7, 0, Math.PI * 2);
    ctx.fill();

    // Friendly smile
    ctx.strokeStyle = '#9a3412';
    ctx.lineWidth = 1.3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(4.8, -34.2, 2.5, 0.15, Math.PI * 0.75);
    ctx.stroke();

    // Invulnerability Energy Shield Ring when flashing
    if (sim.invulnTimer > 0) {
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.ellipse(0, -23, 22, 26, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
    ctx.globalAlpha = 1;
  };

  // Render full hi-DPI canvas frame
  const drawScene = useCallback((nowMs: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (
      canvas.width !== LOGICAL_WIDTH * dpr ||
      canvas.height !== LOGICAL_HEIGHT * dpr
    ) {
      canvas.width = LOGICAL_WIDTH * dpr;
      canvas.height = LOGICAL_HEIGHT * dpr;
    }

    const sim = simRef.current;

    ctx.save();
    ctx.scale(dpr, dpr);

    // Subtle impact screen-shake
    if (sim.screenShake > 0) {
      const mag = sim.screenShake * 6;
      ctx.translate((Math.random() - 0.5) * mag, (Math.random() - 0.5) * mag);
    }

    // 1. Nordic Night Sky + Aurora Ribbon
    const skyGrad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
    skyGrad.addColorStop(0, '#04091b');
    skyGrad.addColorStop(0.55, '#0a173a');
    skyGrad.addColorStop(1, '#112554');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);

    ctx.save();
    ctx.globalAlpha = 0.18;
    const auroraGrad = ctx.createLinearGradient(0, 18, LOGICAL_WIDTH, 130);
    auroraGrad.addColorStop(0, '#06b6d4');
    auroraGrad.addColorStop(0.45, '#8b5cf6');
    auroraGrad.addColorStop(0.8, '#34d399');
    auroraGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = auroraGrad;
    ctx.beginPath();
    ctx.moveTo(0, 74);
    for (let x = 0; x <= LOGICAL_WIDTH; x += 40) {
      const waveY =
        54 +
        Math.sin(x * 0.008 + nowMs * 0.0007) * 18 +
        Math.cos(x * 0.015 - nowMs * 0.0004) * 9;
      ctx.lineTo(x, waveY);
    }
    ctx.lineTo(LOGICAL_WIDTH, 148);
    ctx.lineTo(0, 148);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Twinkling stars
    for (const s of STARS) {
      const alpha = 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(nowMs * 0.002 + s.twinkle));
      ctx.fillStyle = `rgba(224, 242, 254, ${alpha.toFixed(2)})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Drifting clouds
    for (const c of sim.clouds) {
      ctx.fillStyle = `rgba(186, 230, 253, ${c.opacity})`;
      ctx.beginPath();
      ctx.roundRect(c.x, c.y, c.width, 16, 999);
      ctx.roundRect(c.x + c.width * 0.2, c.y - 10, c.width * 0.55, 16, 999);
      ctx.fill();
    }

    // Scenic ambient gliding birds
    ctx.strokeStyle = 'rgba(186, 230, 253, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    for (const ab of sim.ambientBirds) {
      const flap = Math.sin(nowMs * 0.007 + ab.phase) * 4.5 * ab.scale;
      const w = 9 * ab.scale;
      ctx.beginPath();
      ctx.moveTo(ab.x - w, ab.y + flap);
      ctx.quadraticCurveTo(ab.x - w * 0.45, ab.y - 4 * ab.scale, ab.x, ab.y);
      ctx.quadraticCurveTo(ab.x + w * 0.45, ab.y - 4 * ab.scale, ab.x + w, ab.y + flap);
      ctx.stroke();
    }

    // Fjord mountains parallax
    ctx.fillStyle = 'rgba(15, 36, 78, 0.65)';
    const hillW = 260;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y);
    for (let i = -1; i < Math.ceil(LOGICAL_WIDTH / hillW) + 2; i++) {
      const hx = i * hillW - (sim.hillOffset % hillW);
      ctx.quadraticCurveTo(hx + hillW * 0.5, GROUND_Y - 124, hx + hillW, GROUND_Y);
    }
    ctx.lineTo(LOGICAL_WIDTH, GROUND_Y);
    ctx.closePath();
    ctx.fill();

    // Tech skyline silhouettes
    ctx.fillStyle = 'rgba(56, 189, 248, 0.075)';
    const buildingPatternW = 160;
    for (let i = -1; i < Math.ceil(LOGICAL_WIDTH / buildingPatternW) + 2; i++) {
      const bx = i * buildingPatternW - (sim.skylineOffset % buildingPatternW);
      ctx.fillRect(bx + 12, GROUND_Y - 68, 32, 68);
      ctx.fillRect(bx + 54, GROUND_Y - 104, 40, 104);
      ctx.fillRect(bx + 106, GROUND_Y - 52, 30, 52);
    }

    // 2. Ground Deck + Neon Perspective Grid
    ctx.fillStyle = '#040918';
    ctx.fillRect(0, GROUND_Y, LOGICAL_WIDTH, LOGICAL_HEIGHT - GROUND_Y);

    ctx.strokeStyle = 'rgba(34, 211, 238, 0.16)';
    ctx.lineWidth = 1;
    const gridGap = 44;
    const offset = sim.gridOffset % gridGap;
    for (let x = -offset; x < LOGICAL_WIDTH + gridGap; x += gridGap) {
      ctx.beginPath();
      ctx.moveTo(x, GROUND_Y);
      ctx.lineTo(x - 24, LOGICAL_HEIGHT);
      ctx.stroke();
    }

    const floorGrad = ctx.createLinearGradient(0, GROUND_Y, LOGICAL_WIDTH, GROUND_Y);
    floorGrad.addColorStop(0, '#06b6d4');
    floorGrad.addColorStop(0.5, '#6366f1');
    floorGrad.addColorStop(1, '#a855f7');
    ctx.strokeStyle = floorGrad;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y);
    ctx.lineTo(LOGICAL_WIDTH, GROUND_Y);
    ctx.stroke();

    // 3. Elevated One-Way Platforms
    for (const plat of sim.platforms) {
      ctx.save();
      const platGrad = ctx.createLinearGradient(plat.x, plat.y, plat.x, plat.y + plat.height);
      platGrad.addColorStop(0, '#1e293b');
      platGrad.addColorStop(1, '#0f172a');
      ctx.fillStyle = platGrad;
      ctx.beginPath();
      ctx.roundRect(plat.x, plat.y, plat.width, plat.height, 6);
      ctx.fill();

      // Glowing neon top rail
      const railGrad = ctx.createLinearGradient(plat.x, plat.y, plat.x + plat.width, plat.y);
      railGrad.addColorStop(0, '#22d3ee');
      railGrad.addColorStop(0.5, '#818cf8');
      railGrad.addColorStop(1, '#c084fc');
      ctx.fillStyle = railGrad;
      ctx.beginPath();
      ctx.roundRect(plat.x, plat.y, plat.width, 3.5, [6, 6, 0, 0]);
      ctx.fill();

      // Side energy nodes
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(plat.x + 10, plat.y + plat.height * 0.62, 2, 0, Math.PI * 2);
      ctx.arc(plat.x + plat.width - 10, plat.y + plat.height * 0.62, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 4. Periodic Fire Traps (Dormant -> Telegraphed Warning -> Active Flame Column)
    for (const trap of sim.fireTraps) {
      const t = trap.cycleTimer;
      const isWarning = t >= TRAP_DORMANT_END && t < TRAP_WARNING_END;
      const isActive = t >= TRAP_WARNING_END && t < TRAP_ACTIVE_END;

      ctx.save();
      // Burner nozzle base mounted flush on surface
      ctx.fillStyle = isActive ? '#7f1d1d' : isWarning ? '#78350f' : '#1e293b';
      ctx.strokeStyle = isActive ? '#fb923c' : isWarning ? '#fbbf24' : '#475569';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(trap.x, trap.y - 7, trap.width, 7, [4, 4, 0, 0]);
      ctx.fill();
      ctx.stroke();

      if (isWarning) {
        // Clear warning pulse telegraph before eruption
        const pulse = 0.5 + 0.5 * Math.sin(nowMs * 0.025);
        ctx.fillStyle = `rgba(251, 191, 36, ${0.25 + pulse * 0.35})`;
        ctx.beginPath();
        ctx.roundRect(trap.x + 2, trap.y - 26, trap.width - 4, 19, 6);
        ctx.fill();

        ctx.fillStyle = '#fde047';
        ctx.font = '800 10px Plus Jakarta Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('!', trap.x + trap.width / 2, trap.y - 12);
      } else if (isActive) {
        // Blazing tall animated flame column
        const flicker = Math.sin(nowMs * 0.032 + trap.x) * 5;
        const flameH = 54 + flicker;
        const cx = trap.x + trap.width / 2;

        // Outer orange glow
        const outerGrad = ctx.createLinearGradient(cx, trap.y, cx, trap.y - flameH);
        outerGrad.addColorStop(0, 'rgba(239, 68, 68, 0.95)');
        outerGrad.addColorStop(0.5, 'rgba(249, 115, 22, 0.9)');
        outerGrad.addColorStop(1, 'rgba(253, 224, 71, 0)');
        ctx.fillStyle = outerGrad;
        ctx.beginPath();
        ctx.moveTo(trap.x + 2, trap.y - 5);
        ctx.quadraticCurveTo(trap.x - 2, trap.y - flameH * 0.55, cx + flicker * 0.3, trap.y - flameH);
        ctx.quadraticCurveTo(trap.x + trap.width + 2, trap.y - flameH * 0.55, trap.x + trap.width - 2, trap.y - 5);
        ctx.closePath();
        ctx.fill();

        // Inner bright yellow core
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.moveTo(cx - 6, trap.y - 5);
        ctx.quadraticCurveTo(cx - 4, trap.y - flameH * 0.45, cx, trap.y - flameH * 0.72);
        ctx.quadraticCurveTo(cx + 4, trap.y - flameH * 0.45, cx + 6, trap.y - 5);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    // 5. Collectibles (Coins +20, Code Gems +40, Golden Stars +65)
    for (const gem of sim.collectibles) {
      if (gem.collected) continue;
      const bobY = gem.y + Math.sin(nowMs / 200 + gem.bobOffset) * 4.5;

      ctx.save();
      ctx.translate(gem.x, bobY);

      if (gem.kind === 'star') {
        ctx.fillStyle = 'rgba(251, 191, 36, 0.24)';
        ctx.beginPath();
        ctx.arc(0, 0, gem.radius + 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fbbf24';
        ctx.strokeStyle = '#fef9c3';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const r = i % 2 === 0 ? gem.radius + 1 : gem.radius * 0.48;
          const angle = (i * Math.PI) / 4 + nowMs * 0.002;
          const px = Math.cos(angle) * r;
          const py = Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (gem.kind === 'gem') {
        ctx.fillStyle = 'rgba(168, 85, 247, 0.24)';
        ctx.beginPath();
        ctx.arc(0, 0, gem.radius + 6, 0, Math.PI * 2);
        ctx.fill();

        const gGrad = ctx.createLinearGradient(-gem.radius, -gem.radius, gem.radius, gem.radius);
        gGrad.addColorStop(0, '#c084fc');
        gGrad.addColorStop(1, '#38bdf8');
        ctx.fillStyle = gGrad;
        ctx.strokeStyle = '#f3e8ff';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(0, -gem.radius);
        ctx.lineTo(gem.radius, 0);
        ctx.lineTo(0, gem.radius);
        ctx.lineTo(-gem.radius, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 8px Plus Jakarta Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('<>', 0, 0.5);
      } else {
        ctx.fillStyle = 'rgba(34, 211, 238, 0.2)';
        ctx.beginPath();
        ctx.arc(0, 0, gem.radius + 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#22d3ee';
        ctx.strokeStyle = '#cffafe';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, 0, gem.radius - 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#082f49';
        ctx.font = '800 9px Plus Jakarta Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('+', 0, 0.5);
      }
      ctx.restore();
    }

    // 6. Moving Obstacles & Enemies (Patrol Bot, Hopper Slime, Firewall, Swooping Bird, Fireball)
    for (const obs of sim.obstacles) {
      ctx.save();
      if (obs.kind === 'patrol') {
        const topY = obs.y;
        const obsGrad = ctx.createLinearGradient(obs.x, topY, obs.x, topY + obs.height);
        obsGrad.addColorStop(0, '#fb7185');
        obsGrad.addColorStop(1, '#e11d48');
        ctx.fillStyle = obsGrad;
        ctx.beginPath();
        ctx.roundRect(obs.x, topY, obs.width, obs.height, [10, 10, 4, 4]);
        ctx.fill();

        // Antennae & red eye visor
        ctx.strokeStyle = '#fda4af';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(obs.x + 8, topY);
        ctx.lineTo(obs.x + 4, topY - 7);
        ctx.moveTo(obs.x + obs.width - 8, topY);
        ctx.lineTo(obs.x + obs.width - 4, topY - 7);
        ctx.stroke();

        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.beginPath();
        ctx.roundRect(obs.x + 5, topY + 7, obs.width - 10, 8, 3);
        ctx.fill();
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(obs.x + 11, topY + 11, 1.8, 0, Math.PI * 2);
        ctx.arc(obs.x + obs.width - 11, topY + 11, 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffe4e6';
        ctx.font = '800 7.5px Plus Jakarta Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('BUG', obs.x + obs.width / 2, topY + obs.height - 6);
      } else if (obs.kind === 'hopper') {
        const topY = obs.y;
        const hopGrad = ctx.createLinearGradient(obs.x, topY, obs.x, topY + obs.height);
        hopGrad.addColorStop(0, '#c084fc');
        hopGrad.addColorStop(1, '#7c3aed');
        ctx.fillStyle = hopGrad;
        ctx.beginPath();
        ctx.roundRect(obs.x, topY, obs.width, obs.height, [14, 14, 5, 5]);
        ctx.fill();
        ctx.strokeStyle = 'rgba(233, 213, 255, 0.5)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(obs.x + 10, topY + 12, 2.3, 0, Math.PI * 2);
        ctx.arc(obs.x + obs.width - 10, topY + 12, 2.3, 0, Math.PI * 2);
        ctx.fill();
      } else if (obs.kind === 'firewall') {
        const topY = obs.y;
        const fwGrad = ctx.createLinearGradient(obs.x, topY, obs.x, topY + obs.height);
        fwGrad.addColorStop(0, '#fb923c');
        fwGrad.addColorStop(1, '#dc2626');
        ctx.fillStyle = fwGrad;
        ctx.beginPath();
        ctx.roundRect(obs.x, topY, obs.width, obs.height, [7, 7, 2, 2]);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
        for (let sy = topY + 9; sy < topY + obs.height - 10; sy += 10) {
          ctx.fillRect(obs.x + 5, sy, obs.width - 10, 3);
        }
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(obs.x + obs.width - 7, topY + 6, 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (obs.kind === 'fireball') {
        // Horizontal Blazing Fireball with flame tail
        const cx = obs.x + obs.width / 2;
        const cy = obs.y + obs.height / 2;
        ctx.translate(cx, cy);

        // Trailing flame cone to the right
        const tailGrad = ctx.createLinearGradient(-12, 0, 28, 0);
        tailGrad.addColorStop(0, 'rgba(251, 146, 60, 0.95)');
        tailGrad.addColorStop(0.55, 'rgba(239, 68, 68, 0.65)');
        tailGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = tailGrad;
        ctx.beginPath();
        ctx.moveTo(-4, -10);
        ctx.lineTo(28 + Math.sin(nowMs * 0.03) * 4, 0);
        ctx.lineTo(-4, 10);
        ctx.closePath();
        ctx.fill();

        // Glowing outer halo
        ctx.fillStyle = 'rgba(249, 115, 22, 0.32)';
        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fill();

        // Blazing fireball sphere
        const fbGrad = ctx.createRadialGradient(-3, -2, 2, 0, 0, 12);
        fbGrad.addColorStop(0, '#fef9c3');
        fbGrad.addColorStop(0.45, '#f97316');
        fbGrad.addColorStop(1, '#dc2626');
        ctx.fillStyle = fbGrad;
        ctx.beginPath();
        ctx.arc(0, 0, 11.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Animated Flapping Sky Bird / Cyber Falcon
        const cx = obs.x + obs.width / 2;
        const cy = obs.y + obs.height / 2;
        const wingFlap = Math.sin(nowMs / 80 + obs.phase);

        ctx.translate(cx, cy);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.16)';
        ctx.beginPath();
        ctx.ellipse(2, 0, 22, 13, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(22, -6);
        ctx.lineTo(19, 1);
        ctx.lineTo(22, 6);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(-2, -2);
        ctx.quadraticCurveTo(4, -18 * wingFlap - 4, 12, -3);
        ctx.closePath();
        ctx.fill();

        const birdGrad = ctx.createLinearGradient(-15, -8, 14, 10);
        birdGrad.addColorStop(0, '#67e8f9');
        birdGrad.addColorStop(0.55, '#0ea5e9');
        birdGrad.addColorStop(1, '#2563eb');
        ctx.fillStyle = birdGrad;
        ctx.beginPath();
        ctx.ellipse(-1, 1, 15, 9, -0.06, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#e0f2fe';
        ctx.beginPath();
        ctx.moveTo(-4, 0);
        ctx.quadraticCurveTo(2, -16 * wingFlap - 2, 10, 2);
        ctx.quadraticCurveTo(2, 5, -4, 0);
        ctx.fill();

        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.moveTo(-14, -2);
        ctx.lineTo(-22, 1.5);
        ctx.lineTo(-14, 4);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(-9.5, -1.5, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-10.1, -2.1, 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // 7. Particles
    for (const p of sim.particles) {
      const alpha = Math.max(0, p.life / p.maxLife);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // 8. Floating Score / Combo / Reward Toasts
    for (const ft of sim.floatingTexts) {
      const alpha = Math.max(0, ft.life / ft.maxLife);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = ft.color;
      ctx.font = '800 13px Plus Jakarta Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }

    // 9. Human-like 2D Platformer Hero
    drawPlatformerHero(ctx, sim, nowMs, gameStateRef.current === 'PLAYING');

    ctx.restore();
  }, []);

  // Main Physics & Simulation Loop
  useEffect(() => {
    if (!isOpen) return;

    let lastTime = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const sim = simRef.current;

      // Ambient parallax clouds & background sky birds always move gently
      for (const c of sim.clouds) {
        c.x -= c.speed * dt;
        if (c.x + c.width < -20) {
          c.x = LOGICAL_WIDTH + 30;
          c.y = 32 + Math.random() * 58;
        }
      }
      for (const ab of sim.ambientBirds) {
        ab.x -= ab.speed * dt;
        if (ab.x < -30) {
          ab.x = LOGICAL_WIDTH + 30 + Math.random() * 80;
          ab.y = 34 + Math.random() * 68;
        }
      }

      if (gameStateRef.current === 'PLAYING') {
        const snapshotBefore = runSessionRef.current?.getSnapshot();
        const currentScore = snapshotBefore?.verifiedScore ?? 0;

        // Progressive stage calibration (1..4) so 1000 points feels earned yet fair
        const stage =
          currentScore >= 850 ? 4 : currentScore >= 550 ? 3 : currentScore >= 250 ? 2 : 1;
        setStageLevel(stage);

        const targetMaxSpeed = stage === 4 ? MAX_SPEED : stage === 3 ? 285 : stage === 2 ? 250 : 220;
        sim.speed = Math.min(targetMaxSpeed, sim.speed + dt * (stage >= 3 ? 5.2 : 3.5));

        sim.runCycle += dt * (sim.speed / BASE_SPEED);
        sim.gridOffset += sim.speed * dt;
        sim.skylineOffset += sim.speed * 0.22 * dt;
        sim.hillOffset += sim.speed * 0.1 * dt;

        runSessionRef.current?.recordTick(dt, sim.speed);

        if (sim.dropThroughTimer > 0) sim.dropThroughTimer = Math.max(0, sim.dropThroughTimer - dt);
        if (sim.invulnTimer > 0) sim.invulnTimer = Math.max(0, sim.invulnTimer - dt);
        if (sim.screenShake > 0) sim.screenShake = Math.max(0, sim.screenShake - dt * 2.5);

        // Player vertical motion & one-way elevated platform landing
        sim.prevFeetY = sim.playerFeetY;
        sim.playerVy += GRAVITY * dt;
        sim.playerFeetY += sim.playerVy * dt;

        sim.scaleX += (1 - sim.scaleX) * Math.min(1, dt * 13);
        sim.scaleY += (1 - sim.scaleY) * Math.min(1, dt * 13);

        // Update Platforms
        for (const plat of sim.platforms) {
          plat.x -= sim.speed * dt;
        }
        sim.platforms = sim.platforms.filter((p) => p.x + p.width > -60);

        let landed = false;
        if (sim.playerVy >= 0 && sim.dropThroughTimer <= 0) {
          for (const plat of sim.platforms) {
            const overlapsX =
              PLAYER_X + PLAYER_HALF_W - 4 > plat.x &&
              PLAYER_X - PLAYER_HALF_W + 4 < plat.x + plat.width;
            const crossedTop = sim.prevFeetY <= plat.y + 8 && sim.playerFeetY >= plat.y;
            if (overlapsX && crossedTop) {
              if (sim.jumpsUsed > 0) {
                sim.scaleX = 1.14;
                sim.scaleY = 0.86;
              }
              sim.playerFeetY = plat.y;
              sim.playerVy = 0;
              sim.jumpsUsed = 0;
              landed = true;
              break;
            }
          }
        }

        if (!landed && sim.playerFeetY >= GROUND_Y) {
          if (sim.jumpsUsed > 0) {
            sim.scaleX = 1.14;
            sim.scaleY = 0.86;
          }
          sim.playerFeetY = GROUND_Y;
          sim.playerVy = 0;
          sim.jumpsUsed = 0;
        }

        // Spawn Creative Multi-Tier Patterns
        sim.patternCooldown -= dt;
        if (sim.patternCooldown <= 0) {
          spawnCreativePattern(stage);
          const baseGap = stage === 1 ? 1.55 : stage === 2 ? 1.38 : stage === 3 ? 1.24 : 1.12;
          sim.patternCooldown = baseGap + Math.random() * 0.55;
        }

        // Spawn Horizontal Blazing Fireballs in Stage 3+
        if (stage >= 3) {
          sim.fireballCooldown -= dt;
          if (sim.fireballCooldown <= 0) {
            const laneRoll = Math.random();
            const fbY =
              laneRoll < 0.4
                ? GROUND_Y - 34
                : laneRoll < 0.78
                ? GROUND_Y - 102
                : GROUND_Y - 160;
            sim.obstacles.push({
              x: LOGICAL_WIDTH + 48,
              originX: LOGICAL_WIDTH + 48,
              y: fbY,
              baseY: fbY,
              width: 24,
              height: 24,
              kind: 'fireball',
              passed: false,
              phase: Math.random() * Math.PI * 2,
              patrolDir: 0,
              patrolRange: 0,
              hopVy: 0,
            });
            sim.fireballCooldown = stage === 4 ? 2.1 + Math.random() * 1.4 : 2.9 + Math.random() * 1.5;
          }
        }

        const pLeft = PLAYER_X - PLAYER_HALF_W + 4;
        const pRight = PLAYER_X + PLAYER_HALF_W - 4;
        const pTop = sim.playerFeetY - PLAYER_HEIGHT + 6;
        const pBottom = sim.playerFeetY - 3;

        let tookDamage = false;

        // Update Periodic Fire Traps & Check Eruption Hitbox
        for (const trap of sim.fireTraps) {
          trap.x -= sim.speed * dt;
          trap.cycleTimer = (trap.cycleTimer + dt) % TRAP_ACTIVE_END;

          if (
            trap.cycleTimer >= TRAP_WARNING_END &&
            trap.cycleTimer < TRAP_ACTIVE_END
          ) {
            // Active flame column damage check
            const fLeft = trap.x + 5;
            const fRight = trap.x + trap.width - 5;
            const fTop = trap.y - 48;
            const fBottom = trap.y;
            if (pRight > fLeft && pLeft < fRight && pBottom > fTop && pTop < fBottom) {
              tookDamage = true;
            }
          }

          if (!trap.passed && trap.x + trap.width < PLAYER_X - PLAYER_HALF_W) {
            trap.passed = true;
            runSessionRef.current?.recordObstacleClear();
          }
        }
        sim.fireTraps = sim.fireTraps.filter((t) => t.x + t.width > -50);

        // Update Obstacles & Moving Enemies
        for (const obs of sim.obstacles) {
          const speedMult = obs.kind === 'fireball' ? 1.38 : obs.kind === 'bird' ? 1.14 : 1.0;
          obs.x -= sim.speed * speedMult * dt;
          obs.originX -= sim.speed * speedMult * dt;

          if (obs.kind === 'patrol') {
            obs.x += obs.patrolDir * 42 * dt;
            if (Math.abs(obs.x - obs.originX) > obs.patrolRange) {
              obs.patrolDir *= -1;
            }
          } else if (obs.kind === 'hopper') {
            obs.hopVy += 1180 * dt;
            obs.y += obs.hopVy * dt;
            if (obs.y >= obs.baseY) {
              obs.y = obs.baseY;
              obs.hopVy = -350;
            }
          } else if (obs.kind === 'bird') {
            obs.y = obs.baseY + Math.sin(now / 230 + obs.phase) * 14;
          } else if (obs.kind === 'fireball') {
            obs.y = obs.baseY + Math.sin(now / 160 + obs.phase) * 4;
            if (Math.random() < 0.45) {
              sim.particles.push({
                x: obs.x + obs.width,
                y: obs.y + obs.height * 0.5 + (Math.random() - 0.5) * 8,
                vx: 40 + Math.random() * 40,
                vy: (Math.random() - 0.5) * 40,
                life: 0.25,
                maxLife: 0.25,
                color: Math.random() > 0.5 ? '#fb923c' : '#fde047',
                size: 2.2,
                gravity: 40,
              });
            }
          }

          if (!obs.passed && obs.x + obs.width < PLAYER_X - PLAYER_HALF_W) {
            obs.passed = true;
            runSessionRef.current?.recordObstacleClear();
          }

          const oPadX = obs.kind === 'bird' || obs.kind === 'fireball' ? 5 : 4;
          const oPadY = obs.kind === 'bird' || obs.kind === 'fireball' ? 5 : 4;
          if (
            pRight > obs.x + oPadX &&
            pLeft < obs.x + obs.width - oPadX &&
            pBottom > obs.y + oPadY &&
            pTop < obs.y + obs.height - oPadY
          ) {
            tookDamage = true;
          }
        }
        sim.obstacles = sim.obstacles.filter((o) => o.x + o.width > -60);

        // Update Collectibles & Combo Streaks
        const playerCenterY = sim.playerFeetY - PLAYER_HEIGHT * 0.5;
        for (const gem of sim.collectibles) {
          gem.x -= sim.speed * dt;
          if (!gem.collected) {
            const dx = gem.x - PLAYER_X;
            const dy = gem.y - playerCenterY;
            if (Math.hypot(dx, dy) < PLAYER_HALF_W + gem.radius + 9) {
              gem.collected = true;
              sim.streak += 1;
              const mult = getComboMultiplier(sim.streak);
              setComboMultiplier(mult);
              const pts = runSessionRef.current?.recordCollect(gem.kind, mult) ?? 20;

              spawnParticles(
                gem.x,
                gem.y,
                gem.kind === 'star'
                  ? ['#fbbf24', '#fef08a', '#f59e0b']
                  : gem.kind === 'gem'
                  ? ['#c084fc', '#38bdf8', '#f472b6']
                  : ['#22d3ee', '#a5f3fc', '#38bdf8'],
                gem.kind === 'star' ? 14 : 10,
                210
              );
              spawnFloatingText(
                gem.x,
                gem.y - 14,
                mult > 1 ? `+${pts} ×${mult}` : `+${pts}`,
                gem.kind === 'star'
                  ? '#fde047'
                  : gem.kind === 'gem'
                  ? '#e879f9'
                  : '#67e8f9'
              );
              playTone('gem');
            }
          }
        }
        sim.collectibles = sim.collectibles.filter((g) => !g.collected && g.x > -30);

        // Handle Damage with 3-Lives Grace Shield
        if (tookDamage && sim.invulnTimer <= 0) {
          sim.lives -= 1;
          sim.streak = 0;
          sim.invulnTimer = 1.4;
          sim.screenShake = 1.0;
          sim.playerVy = Math.min(sim.playerVy, -260);
          setLives(sim.lives);
          setComboMultiplier(1);
          runSessionRef.current?.recordHit();
          spawnParticles(PLAYER_X, playerCenterY, ['#fb7185', '#f43f5e', '#fb923c'], 16, 250);
          spawnFloatingText(
            PLAYER_X,
            pTop - 10,
            languageRef.current === 'no' ? '-1 LIV!' : '-1 LIFE!',
            '#fb7185'
          );

          if (sim.lives <= 0) {
            playTone('gameover');
            const snap = runSessionRef.current?.getSnapshot();
            const finalScore = snap?.verifiedScore ?? 0;
            setScore(finalScore);
            setClearedCount(snap?.clearedCount ?? 0);
            setGemsCount(snap?.collectedCount ?? 0);

            if (finalScore > bestScoreRef.current) {
              setBestScore(finalScore);
              bestScoreRef.current = finalScore;
              setIsNewBest(true);
              try {
                localStorage.setItem(HIGH_SCORE_STORAGE_KEY, String(finalScore));
              } catch {
                // Ignore
              }
            }

            gameStateRef.current = 'GAME_OVER';
            setGameState('GAME_OVER');
          } else {
            playTone('hit');
          }
        }

        // Update Particles & Floating Text
        for (const p of sim.particles) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.vy += (p.gravity ?? 360) * dt;
          p.life -= dt;
        }
        sim.particles = sim.particles.filter((p) => p.life > 0);

        for (const ft of sim.floatingTexts) {
          ft.y -= 36 * dt;
          ft.life -= dt;
        }
        sim.floatingTexts = sim.floatingTexts.filter((ft) => ft.life > 0);

        // Sync verified HUD metrics
        const snap = runSessionRef.current?.getSnapshot();
        if (snap) {
          setScore(snap.verifiedScore);
          setClearedCount(snap.clearedCount);
          setGemsCount(snap.collectedCount);

          if (!sim.unlockedMilestoneInRun && snap.eligibleForReward) {
            sim.unlockedMilestoneInRun = true;
            playTone('unlock');
            spawnParticles(
              PLAYER_X,
              sim.playerFeetY - 24,
              ['#34d399', '#fbbf24', '#38bdf8', '#c084fc'],
              30,
              270,
              220
            );
            if (snap.verifiedScore > bestScoreRef.current) {
              setBestScore(snap.verifiedScore);
              bestScoreRef.current = snap.verifiedScore;
              setIsNewBest(true);
              try {
                localStorage.setItem(HIGH_SCORE_STORAGE_KEY, String(snap.verifiedScore));
              } catch {
                // Ignore
              }
            }
            gameStateRef.current = 'CELEBRATION';
            setGameState('CELEBRATION');
          }
        }
      } else {
        // Gentle idle background motion
        sim.skylineOffset += 12 * dt;
        sim.hillOffset += 6 * dt;
        for (const p of sim.particles) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.vy += (p.gravity ?? 360) * dt;
          p.life -= dt;
        }
        sim.particles = sim.particles.filter((p) => p.life > 0);
        for (const ft of sim.floatingTexts) {
          ft.y -= 28 * dt;
          ft.life -= dt;
        }
        sim.floatingTexts = sim.floatingTexts.filter((ft) => ft.life > 0);
      }

      if (gameStateRef.current !== 'CLAIM_FORM') {
        drawScene(now);
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [drawScene, isOpen, playTone, spawnCreativePattern, spawnFloatingText, spawnParticles]);

  // Keyboard Controls (never intercepts typing in CLAIM_FORM or inputs)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (gameStateRef.current === 'CLAIM_FORM') return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (
        e.code === 'Space' ||
        e.key === 'ArrowUp' ||
        e.key === 'w' ||
        e.key === 'W'
      ) {
        e.preventDefault();
        triggerJump();
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        triggerFastDrop();
      } else if (
        e.key === 'Enter' &&
        (gameStateRef.current === 'TITLE_MENU' || gameStateRef.current === 'GAME_OVER')
      ) {
        e.preventDefault();
        resetAndStartGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, resetAndStartGame, triggerFastDrop, triggerJump]);

  if (!isOpen) return null;

  const currentSnap = runSessionRef.current?.getSnapshot();
  const isRunVerifiedEligible = Boolean(
    verifiedProof?.valid || currentSnap?.eligibleForReward
  );
  const displayVerifiedScore = verifiedProof?.telemetry.score ?? currentSnap?.verifiedScore ?? score;
  const progressPercent = Math.min(
    100,
    Math.round(((currentSnap?.verifiedScore ?? score) / REWARD_SCORE_TARGET) * 100)
  );

  const studioSubtitle =
    language === 'no'
      ? 'Spill og få rabatt på prosjektet ditt'
      : 'Play & Get a Project Discount';
  const studioPrimaryCta =
    language === 'no' ? 'Få prosjektrabatt' : 'Get Project Discount';
  const unlockHeading =
    language === 'no'
      ? 'Gratulerer! Du har låst opp en prosjektrabatt!'
      : "Congratulations! You've unlocked a project discount!";
  const claimBtnLabel =
    language === 'no' ? 'Krev rabatten din' : 'Claim Your Discount';

  const projectTypeOptions =
    language === 'no'
      ? ['Nettside', 'Mobilapp', 'Webapp / System', 'AI & Automatisering', 'Annet']
      : ['Website', 'Mobile App', 'Web App / System', 'AI & Automation', 'Other'];

  const handleClaimSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Always re-run anti-tamper integrity verification at submission time
      const proof = runSessionRef.current
        ? await runSessionRef.current.verifyAndIssueProof()
        : null;
      const validDiscount = Boolean(proof?.valid);
      const claimScoreVal = proof?.telemetry.score ?? displayVerifiedScore;

      const response = await fetch(
        'https://formsubmit.co/ajax/contact@getontechs.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: validDiscount
              ? `[5% RABATT VERIFISERT – ${claimScoreVal} poeng] Geton Gaming Studio: ${formData.company || formData.name}`
              : `[Geton Gaming Studio – ${claimScoreVal} poeng] Forespørsel: ${formData.company || formData.name}`,
            _replyto: formData.email,
            _template: 'table',
            _honey: '',
            Kilde: 'Geton Gaming Studio',
            Verifisert_Poengsum: `${claimScoreVal} poeng`,
            Rabatt_Status: validDiscount
              ? `VERIFISERT – 5 % prosjektrabatt (${proof!.token})`
              : `Ikke kvalifisert (krevd ${REWARD_SCORE_TARGET} verifiserte poeng i aktiv runde)`,
            Verifiserings_Token: validDiscount ? proof!.token : 'Ikke aktivert',
            Proof_Digest_SHA256: validDiscount ? proof!.digest : 'N/A',
            Spilltid_Sekunder: String(proof?.telemetry.durationSec ?? 0),
            Hindringer_Passert: String(proof?.telemetry.cleared ?? clearedCount),
            Objekter_Samlet: String(proof?.telemetry.collected ?? gemsCount),
            Prosjekttype: projectType,
            Navn: formData.name,
            Epost: formData.email,
            Telefon: formData.phone || 'Ikke oppgitt',
            Bedrift: formData.company || 'Ikke oppgitt',
            Prosjektbeskrivelse: formData.details,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitSuccess(true);
    } catch {
      setSubmitError(
        language === 'no'
          ? 'Kunne ikke sende skjemaet automatisk akkurat nå. Bruk knappen under for å sende med e-post.'
          : 'Could not submit automatically right now. Use the button below to send via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:contact@getontechs.com?subject=${encodeURIComponent(
    isRunVerifiedEligible && verifiedProof?.token
      ? `Geton Gaming Studio Discount (${verifiedProof.token}) – ${projectType}`
      : `Geton Gaming Studio Inquiry (${displayVerifiedScore} pts) – ${projectType}`
  )}&body=${encodeURIComponent(
    `Hei Geton AS,\n\nVerifisert poengsum: ${displayVerifiedScore}\nRabattstatus: ${
      isRunVerifiedEligible && verifiedProof?.token
        ? `VERIFISERT (${verifiedProof.token})`
        : 'Ordinær henvendelse'
    }\nProsjekttype: ${projectType}\nNavn: ${formData.name}\nE-post: ${formData.email}\nTelefon: ${formData.phone}\nBedrift: ${formData.company}\n\nBeskrivelse:\n${formData.details}`
  )}`;

  return (
    <div
      id="geton-game-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="geton-game-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl bg-[#070f24] border border-cyan-400/40 shadow-[0_0_70px_rgba(6,182,212,0.28)] overflow-hidden text-white my-auto"
      >
        {/* Top Game HUD Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-white/10 bg-[#050b1c]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/25 to-purple-600/30 border border-cyan-400/50 flex items-center justify-center shadow-sm">
              <Gamepad2 className="w-5 h-5 text-cyan-200" strokeWidth={2.2} aria-hidden="true" />
            </div>
            <div>
              <h2
                id="geton-game-title"
                className="font-display text-sm sm:text-base font-extrabold text-white leading-none"
              >
                Geton Gaming Studio
              </h2>
              <p className="text-[11px] text-cyan-300 mt-0.5">{studioSubtitle}</p>
            </div>
          </div>

          {/* Live Lives, Score, Combo & Discount Meter */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs tabular-nums">
            {/* 3 Hearts Lives */}
            <div className="flex items-center gap-1" aria-label={`Lives: ${lives} of ${MAX_LIVES}`}>
              {Array.from({ length: MAX_LIVES }).map((_, idx) => {
                const alive = idx < lives;
                return (
                  <Heart
                    key={idx}
                    className={`w-4 h-4 transition-all duration-200 ${
                      alive
                        ? 'text-rose-500 fill-rose-500 drop-shadow-[0_0_6px_rgba(244,63,94,0.6)]'
                        : 'text-slate-600 fill-transparent'
                    }`}
                  />
                );
              })}
            </div>

            <div>
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block">
                {language === 'no' ? 'Poeng' : 'Score'}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">{score}</span>
                {comboMultiplier > 1 && (
                  <span className="px-1.5 py-0.5 rounded bg-purple-500/25 border border-purple-400/50 text-[10px] font-extrabold text-purple-200">
                    ×{comboMultiplier}
                  </span>
                )}
              </div>
            </div>

            <div className="hidden xs:block">
              <span className="text-slate-400 uppercase tracking-wider text-[10px] block">
                {language === 'no' ? 'Rekord' : 'Best'}
              </span>
              <span className="font-bold text-amber-300 text-sm inline-flex items-center gap-1">
                <Trophy className="w-3 h-3" aria-hidden="true" />
                {bestScore}
              </span>
            </div>

            {/* Progress to 1,000 pts Discount Target */}
            <div className="hidden sm:flex flex-col min-w-[126px]">
              <div className="flex items-center justify-between text-[10px] font-semibold">
                <span className={isRunVerifiedEligible ? 'text-emerald-300' : 'text-cyan-200'}>
                  {isRunVerifiedEligible
                    ? language === 'no'
                      ? 'RABATT LÅST OPP!'
                      : 'DISCOUNT UNLOCKED!'
                    : `Lv ${stageLevel}`}
                </span>
                <span className="text-slate-300">
                  {Math.min(score, REWARD_SCORE_TARGET)}/{REWARD_SCORE_TARGET}
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 mt-1 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isRunVerifiedEligible
                      ? 'bg-emerald-400'
                      : 'bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {isRunVerifiedEligible && gameState !== 'CLAIM_FORM' && (
              <button
                type="button"
                onClick={openClaimForm}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <Gift className="w-3.5 h-3.5" />
                <span>{claimBtnLabel}</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setSoundEnabled((v) => !v)}
              aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={language === 'no' ? 'Lukk spill' : 'Close game'}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* STAGE OR VERIFIED CLAIM SCHEMA */}
        {gameState === 'CLAIM_FORM' ? (
          <div className="p-5 sm:p-7 bg-[#070f24] max-h-[78vh] overflow-y-auto">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <button
                type="button"
                onClick={() => {
                  gameStateRef.current = 'GAME_OVER';
                  setGameState('GAME_OVER');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{language === 'no' ? 'Tilbake til spillet' : 'Back to game'}</span>
              </button>

              <span className="text-[11px] font-semibold text-slate-400">
                Geton AS · contact@getontechs.com
              </span>
            </div>

            {/* Verified Reward Status Banner */}
            <div
              className={`rounded-2xl p-4 mb-5 border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isRunVerifiedEligible
                  ? 'bg-emerald-500/12 border-emerald-400/40'
                  : 'bg-white/5 border-white/15'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isRunVerifiedEligible
                      ? 'bg-emerald-500 text-white'
                      : 'bg-cyan-500/20 text-cyan-300'
                  }`}
                >
                  {isRunVerifiedEligible ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : (
                    <Gift className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm sm:text-base font-extrabold text-white">
                      {isVerifyingClaim
                        ? language === 'no'
                          ? 'Verifiserer spilløkt...'
                          : 'Verifying run integrity...'
                        : isRunVerifiedEligible
                        ? unlockHeading
                        : language === 'no'
                        ? 'Send prosjektforespørsel til Geton'
                        : 'Send Your Project Inquiry to Geton'}
                    </h3>
                    {isRunVerifiedEligible && verifiedProof?.token && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-bold tracking-wider">
                        {verifiedProof.token}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {isRunVerifiedEligible
                      ? language === 'no'
                        ? 'Din spilløkt er kryptografisk verifisert (5 % prosjektrabatt legges automatisk ved forespørselen).'
                        : 'Your gameplay run is verified (configured 5% project discount token is automatically attached).'
                      : language === 'no'
                      ? `Du har ${displayVerifiedScore} verifiserte poeng. Nå ${REWARD_SCORE_TARGET} poeng i spillet for å låse opp prosjektrabatt — eller send en vanlig forespørsel nå.`
                      : `You scored ${displayVerifiedScore} verified pts. Reach ${REWARD_SCORE_TARGET} pts in an active run to unlock a project discount — or send a standard inquiry now.`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs tabular-nums shrink-0 pl-13 sm:pl-0">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">
                    {language === 'no' ? 'Verifisert' : 'Verified'}
                  </span>
                  <span className="text-base font-extrabold text-white">
                    {displayVerifiedScore}
                  </span>
                </div>
                <div className="h-7 w-[1px] bg-white/15" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">
                    {language === 'no' ? 'Passert' : 'Cleared'}
                  </span>
                  <span className="text-base font-extrabold text-cyan-300">
                    {verifiedProof?.telemetry.cleared ?? clearedCount}
                  </span>
                </div>
              </div>
            </div>

            {submitSuccess ? (
              <div className="py-8 px-4 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-300">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  {language === 'no'
                    ? 'Takk! Rabattforespørselen er sendt'
                    : 'Thank you! Discount inquiry submitted'}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {isRunVerifiedEligible && verifiedProof?.token
                    ? language === 'no'
                      ? `Vi har registrert ${displayVerifiedScore} verifiserte poeng og din prosjektrabatt (${verifiedProof.token}). Vi svarer innen 24 timer.`
                      : `We registered your ${displayVerifiedScore} verified pts and project discount token (${verifiedProof.token}). We will reply within 24 hours.`
                    : language === 'no'
                    ? 'Vi har mottatt forespørselen din og svarer innen 24 timer.'
                    : 'We received your project inquiry and will get back to you within 24 hours.'}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={resetAndStartGame}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white btn-cyan-gradient cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{language === 'no' ? 'Spill igjen' : 'Play Again'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 cursor-pointer"
                  >
                    {language === 'no' ? 'Lukk' : 'Close'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleClaimSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    {language === 'no' ? 'Hva ønsker du å bygge?' : 'What would you like to build?'}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setProjectType(option)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                          projectType === option
                            ? 'bg-cyan-500 text-white border-cyan-400 shadow-sm'
                            : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === 'no' ? 'Navn *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                      placeholder={language === 'no' ? 'Ola Nordmann' : 'Your full name'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === 'no' ? 'E-post *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                      placeholder="navn@bedrift.no"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === 'no' ? 'Telefon' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="+47 400 00 000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === 'no' ? 'Bedrift' : 'Company'}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData((f) => ({ ...f, company: e.target.value }))}
                      placeholder={language === 'no' ? 'Bedriftsnavn AS' : 'Company name'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'no'
                      ? 'Fortell kort om prosjektet ditt *'
                      : 'Tell us briefly about your project *'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData((f) => ({ ...f, details: e.target.value }))}
                    placeholder={
                      language === 'no'
                        ? 'Hva ønsker du å oppnå, og når ser du for deg oppstart?'
                        : 'What are you looking to build, and what is your ideal timeline?'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                {submitError && (
                  <div className="rounded-xl bg-rose-500/15 border border-rose-400/35 p-3 text-xs text-rose-200 space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-300" />
                      <span>{submitError}</span>
                    </div>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 font-bold text-white underline"
                    >
                      <span>
                        {language === 'no'
                          ? 'Åpne e-post med verifisert kode'
                          : 'Open email with verified claim'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <span className="text-[11px] text-slate-400">
                    {isRunVerifiedEligible && verifiedProof?.token
                      ? `${language === 'no' ? 'Verifisert token:' : 'Verified token:'} ${verifiedProof.token}`
                      : `${language === 'no' ? 'Verifisert poengsum:' : 'Verified score:'} ${displayVerifiedScore} pts`}
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting || isVerifyingClaim}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white shadow-lg transition-all cursor-pointer disabled:opacity-60 ${
                      isRunVerifiedEligible
                        ? 'bg-emerald-500 hover:bg-emerald-400'
                        : 'btn-cyan-gradient hover:scale-[1.02]'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? language === 'no'
                          ? 'Sender...'
                          : 'Sending...'
                        : isRunVerifiedEligible
                        ? claimBtnLabel
                        : language === 'no'
                        ? 'Send forespørsel'
                        : 'Send Inquiry'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Interactive Game Arena + Responsive Touch Controls */
          <div>
            <div className="relative bg-[#050b1d] select-none">
              <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                  e.preventDefault();
                  triggerJump();
                }}
                className="w-full h-auto block cursor-pointer touch-manipulation"
                style={{ aspectRatio: `${LOGICAL_WIDTH} / ${LOGICAL_HEIGHT}` }}
              />

              {/* Title Menu Overlay */}
              {gameState === 'TITLE_MENU' && (
                <div className="absolute inset-0 bg-[#050b1d]/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-5 text-center">
                  <div className="max-w-lg space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-[11px] font-bold tracking-wide">
                      <Flame className="w-3.5 h-3.5 text-amber-300" />
                      <span>
                        {language === 'no'
                          ? `3 liv · Plattformer · Ildkuler & Feller · Nå ${REWARD_SCORE_TARGET} poeng`
                          : `3 Lives · Platforms · Fireballs & Traps · Reach ${REWARD_SCORE_TARGET} pts`}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                      Geton Gaming Studio
                    </h3>

                    <p className="text-xs sm:text-sm text-cyan-200 font-semibold">
                      {studioSubtitle}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                      {language === 'no'
                        ? 'Hopp opp på lysende plattformer, unngå ildfeller, ildkuler, patruljerende bots og fugler, og bygg komboer med krystaller for å nå 1 000 poeng!'
                        : 'Leap onto elevated neon platforms, dodge periodic fire traps, fireballs, patrolling bots and drones, and chain gems to hit 1,000 points!'}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={resetAndStartGame}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white btn-cyan-gradient shadow-lg cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all whitespace-nowrap"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>{studioPrimaryCta}</span>
                      </button>

                      <button
                        type="button"
                        onClick={openClaimForm}
                        className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer whitespace-nowrap"
                      >
                        <span>
                          {language === 'no' ? 'Send forespørsel' : 'Project Inquiry'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 1,000-Point Discount Milestone Celebration Screen */}
              {gameState === 'CELEBRATION' && (
                <div className="absolute inset-0 bg-[#050b1d]/86 backdrop-blur-md flex flex-col items-center justify-center p-5 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="max-w-lg space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mx-auto text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                      <Sparkles className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                      {unlockHeading}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                      {language === 'no'
                        ? `Fantastisk prestasjon! Du har nådd ${score} verifiserte poeng med ${lives} liv igjen.`
                        : `Incredible run! You reached ${score} verified points with ${lives} ${lives === 1 ? 'life' : 'lives'} remaining.`}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={openClaimForm}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <Gift className="w-4 h-4" />
                        <span>{claimBtnLabel}</span>
                      </button>

                      <button
                        type="button"
                        onClick={continueAfterCelebration}
                        className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>{language === 'no' ? 'Spill videre' : 'Keep Playing'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Game Over Overlay */}
              {gameState === 'GAME_OVER' && (
                <div className="absolute inset-0 bg-[#050b1d]/86 backdrop-blur-sm flex flex-col items-center justify-center p-5 text-center animate-in fade-in duration-150">
                  <div className="max-w-lg space-y-3.5">
                    {isRunVerifiedEligible ? (
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-bold">
                        <Gift className="w-3.5 h-3.5" />
                        <span>{unlockHeading}</span>
                      </div>
                    ) : isNewBest ? (
                      <div className="text-xs font-bold uppercase tracking-widest text-amber-300">
                        {language === 'no' ? 'Ny personlig rekord!' : 'New Personal Best!'}
                      </div>
                    ) : (
                      <div className="text-xs font-medium text-cyan-200">
                        {language === 'no'
                          ? `${Math.max(0, REWARD_SCORE_TARGET - score)} poeng igjen til prosjektrabatt!`
                          : `${Math.max(0, REWARD_SCORE_TARGET - score)} pts away from your project discount!`}
                      </div>
                    )}

                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                      {language === 'no' ? 'Runden er over' : 'Game Over'}
                    </h3>

                    <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 tabular-nums">
                      <div>
                        <span className="text-slate-400 block text-[11px]">
                          {language === 'no' ? 'Poengsum' : 'Final Score'}
                        </span>
                        <span className="text-xl font-extrabold text-white">{score}</span>
                      </div>
                      <div className="h-8 w-[1px] bg-white/15" />
                      <div>
                        <span className="text-slate-400 block text-[11px]">
                          {language === 'no' ? 'Passert' : 'Cleared'}
                        </span>
                        <span className="text-xl font-extrabold text-cyan-300">
                          {clearedCount}
                        </span>
                      </div>
                      <div className="h-8 w-[1px] bg-white/15" />
                      <div>
                        <span className="text-slate-400 block text-[11px]">
                          {language === 'no' ? 'Krystaller' : 'Gems'}
                        </span>
                        <span className="text-xl font-extrabold text-amber-300">
                          {gemsCount}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1.5">
                      <button
                        type="button"
                        onClick={resetAndStartGame}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white btn-cyan-gradient cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all whitespace-nowrap"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>{language === 'no' ? 'Spill igjen' : 'Play Again'}</span>
                      </button>

                      {isRunVerifiedEligible ? (
                        <button
                          type="button"
                          onClick={openClaimForm}
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-400 border border-emerald-300/40 shadow-md transition-all cursor-pointer whitespace-nowrap"
                        >
                          <Gift className="w-4 h-4" />
                          <span>{claimBtnLabel}</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={openClaimForm}
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/12 hover:bg-white/18 border border-white/25 transition-all cursor-pointer whitespace-nowrap"
                        >
                          <span>
                            {language === 'no' ? 'Send forespørsel' : 'Contact Studio'}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Responsive Mobile & Quick Touch Controls */}
            <div className="px-4 sm:px-5 py-2.5 bg-[#060d20] border-t border-white/10 flex items-center justify-between gap-3">
              <div className="text-[11px] text-slate-400 hidden sm:block">
                {language === 'no'
                  ? `Hopp (2×): Mellomrom / W / Pil opp · Slipp ned: S / Pil ned · Mål: ${REWARD_SCORE_TARGET} poeng`
                  : `Jump (2×): Space / W / Up · Fast Drop: S / Down · Target: ${REWARD_SCORE_TARGET} pts`}
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    triggerFastDrop();
                  }}
                  className="flex-1 sm:flex-initial min-h-[42px] px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 border border-white/15 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation select-none"
                >
                  <ArrowDown className="w-4 h-4 text-purple-300" />
                  <span>{language === 'no' ? 'Slipp ned' : 'Drop'}</span>
                </button>
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    triggerJump();
                  }}
                  className="flex-1 sm:flex-initial min-h-[42px] px-5 rounded-xl bg-gradient-to-r from-cyan-500/80 to-indigo-600/80 hover:from-cyan-500 hover:to-indigo-500 active:scale-95 border border-cyan-300/40 text-xs font-bold text-white flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation select-none shadow-sm"
                >
                  <ArrowUp className="w-4 h-4" />
                  <span>{language === 'no' ? 'Hopp (2×)' : 'Jump (2×)'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer Legend */}
        <div className="px-4 sm:px-5 py-2.5 bg-[#040816] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
          <span>
            {language === 'no'
              ? 'Geton Gaming Studio · Verifisert antijuks-poengtelling'
              : 'Geton Gaming Studio · Verified Run Integrity'}
          </span>
          <span className="text-cyan-300/90 font-medium">
            Geton AS · Creative Software Studio
          </span>
        </div>
      </div>
    </div>
  );
};
