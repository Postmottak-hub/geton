import React, { useState } from 'react';
import {
  Smartphone,
  Monitor,
  Server,
  Cpu,
  Database,
  Terminal,
  Zap,
  ArrowRight,
  Layers,
  Code2,
  Boxes,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Shield,
  Activity,
  Globe,
  Cloud,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface SoftwareShowcaseSectionProps {
  onScheduleReview: () => void;
  onInspectProject: (title: string, desc: string, metrics: string) => void;
}

export const SoftwareShowcaseSection: React.FC<SoftwareShowcaseSectionProps> = ({
  onScheduleReview,
  onInspectProject,
}) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'mobile' | 'frontend' | 'backend' | 'ai'>('all');

  // 9 Complete Technology Cards
  const techStackGroups = [
    // --- 1. MOBILE APP LANGUAGES & FRAMEWORKS ---
    {
      id: 'react-native',
      category: 'mobile',
      tag: 'Mobile App Framework',
      badge: 'iOS & Android Parity',
      badgeColor: 'border-cyan-400/50 bg-cyan-950/60 text-cyan-300',
      glowColor: 'shadow-[0_0_35px_rgba(34,211,238,0.25)]',
      borderGrad: 'from-cyan-400/50 via-sky-500/30 to-blue-600/40',
      icon: Smartphone,
      title: 'React Native & Expo Ecosystem',
      subtitle: 'Native Performance · Single Codebase',
      desc: 'High-velocity native iOS and Android apps powered by React Native’s New Architecture (Fabric renderer & TurboModules). Zero-bridge synchronous execution with native UI feel.',
      highlights: [
        'Hermes JIT engine with sub-second launch times',
        'Fabric UI renderer with fluid 120Hz gesture physics',
        'Direct C++ TurboModules for high-performance hardware access',
        'CodePush live edge updates & offline SQLite / WatermelonDB sync',
      ],
      metric: '60 FPS Smooth Gestures',
      metricLabel: 'FRAME BUDGET',
    },
    {
      id: 'flutter',
      category: 'mobile',
      tag: 'Mobile App Framework',
      badge: 'Dart & Skia Engine',
      badgeColor: 'border-sky-400/50 bg-sky-950/60 text-sky-300',
      glowColor: 'shadow-[0_0_35px_rgba(56,189,248,0.25)]',
      borderGrad: 'from-sky-400/50 via-blue-500/30 to-indigo-600/40',
      icon: Smartphone,
      title: 'Flutter & Dart Mobile Architecture',
      subtitle: 'Pixel-Perfect Impeller Rendering',
      desc: 'Custom-rendered mobile applications engineered with Dart and Flutter’s Impeller engine. Ideal for complex graphics, custom audio pipelines, and unified cross-device experiences.',
      highlights: [
        'AOT (Ahead-of-Time) compilation to ARM64 machine code',
        'Impeller GPU graphics engine eliminating shader compilation jank',
        'BLoC & Riverpod reactive architecture with predictable state',
        'Multi-platform target: iOS, Android, macOS & Embedded screens',
      ],
      metric: '100% Native Code Gen',
      metricLabel: 'COMPILER EFFICIENCY',
    },
    {
      id: 'swift-kotlin',
      category: 'mobile',
      tag: 'Native Languages',
      badge: 'SwiftUI & Jetpack Compose',
      badgeColor: 'border-purple-400/50 bg-purple-950/60 text-purple-300',
      glowColor: 'shadow-[0_0_35px_rgba(192,132,252,0.25)]',
      borderGrad: 'from-purple-400/50 via-fuchsia-500/30 to-indigo-600/40',
      icon: Code2,
      title: 'Native Swift (iOS) & Kotlin (Android)',
      subtitle: 'Pure Platform Hardware Mastery',
      desc: 'When raw hardware capabilities are paramount, our engineers write native Swift and Kotlin modules for biometric Secure Enclave, ARKit spatial audio, and low-level BLE telemetry.',
      highlights: [
        'Apple Secure Enclave & Android KeyStore biometric cryptosystems',
        'Metal & Vulkan shader pipelines for real-time video processing',
        'Background WorkManager & CoreBluetooth real-time streaming',
        'Kotlin Multiplatform (KMP) shared business logic cores',
      ],
      metric: '< 15MB Binary Footprint',
      metricLabel: 'APP SIZE OPTIMIZATION',
    },

    // --- 2. FRONTEND & WEB ARCHITECTURE ---
    {
      id: 'react-web',
      category: 'frontend',
      tag: 'Frontend Architecture',
      badge: 'React 19 & Next.js',
      badgeColor: 'border-cyan-400/50 bg-cyan-950/60 text-cyan-300',
      glowColor: 'shadow-[0_0_35px_rgba(34,211,238,0.25)]',
      borderGrad: 'from-cyan-400/50 via-teal-500/30 to-blue-600/40',
      icon: Monitor,
      title: 'React 19, Next.js & Modern JS/TS',
      subtitle: 'Server Components · Edge Streaming',
      desc: 'Production web platforms built on React 19 Server Components, streaming SSR, and Next.js App Router. Tuned for instantaneous sub-second page loads and perfect Lighthouse 100 scores.',
      highlights: [
        'React Server Components (RSC) with zero-bundle-size server execution',
        'Selective hydration and Suspense streaming over HTTP/2 & HTTP/3',
        'Full TypeScript strict mode with automated schema validation',
        'Tailwind CSS v4 design systems with GPU-accelerated micro-animations',
      ],
      metric: '99+ Lighthouse Score',
      metricLabel: 'CORE WEB VITALS',
    },
    {
      id: 'javascript-typescript',
      category: 'frontend',
      tag: 'Web Languages',
      badge: 'ES2024 / TypeScript 7',
      badgeColor: 'border-amber-400/50 bg-amber-950/60 text-amber-300',
      glowColor: 'shadow-[0_0_35px_rgba(251,191,36,0.2)]',
      borderGrad: 'from-amber-400/50 via-yellow-500/30 to-orange-600/40',
      icon: Code2,
      title: 'JavaScript & Deep TypeScript Mastery',
      subtitle: 'Architectural Type Safety & Web Workers',
      desc: 'Engineered beyond basic scripting. We construct complex client-side applications with multi-threaded Web Workers, WebAssembly modules, and strict end-to-end type invariants.',
      highlights: [
        'End-to-end type safety syncing backend models with frontend UI',
        'Web Workers & OffscreenCanvas for background computation without lag',
        'High-density data tables handling 100k+ rows with virtual scrolling',
        'State architectures with Zustand, Redux Toolkit, and TanStack Query',
      ],
      metric: '0.1s Perceived Latency',
      metricLabel: 'INTERACTIVITY SPEED',
    },

    // --- 3. BACKEND & HIGH-THROUGHPUT APIS ---
    {
      id: 'dotnet-csharp',
      category: 'backend',
      tag: 'Enterprise Backend',
      badge: '.NET 9 & C# 13',
      badgeColor: 'border-indigo-400/50 bg-indigo-950/60 text-indigo-300',
      glowColor: 'shadow-[0_0_35px_rgba(129,140,248,0.25)]',
      borderGrad: 'from-indigo-400/50 via-purple-500/30 to-blue-600/40',
      icon: Server,
      title: '.NET 9, C# & ASP.NET Core',
      subtitle: 'High-Concurrency Enterprise Engines',
      desc: 'Ultra-fast, enterprise-grade backends built with .NET 9 and C#. Delivering raw throughput matching Go and Rust while offering rich architectural patterns for fintech and mission-critical SaaS.',
      highlights: [
        'ASP.NET Core Minimal APIs processing millions of requests per second',
        'Entity Framework Core with optimized compiled SQL queries & pooling',
        'Native AOT (Ahead-of-Time) compilation for 5ms cold starts',
        'gRPC binary contracts and Azure Enterprise Service Bus orchestrations',
      ],
      metric: '2.5M+ req/sec',
      metricLabel: 'RAW THROUGHPUT',
    },
    {
      id: 'nodejs-backend',
      category: 'backend',
      tag: 'Backend & Cloud',
      badge: 'Node.js & NestJS',
      badgeColor: 'border-emerald-400/50 bg-emerald-950/60 text-emerald-300',
      glowColor: 'shadow-[0_0_35px_rgba(52,211,153,0.25)]',
      borderGrad: 'from-emerald-400/50 via-teal-500/30 to-cyan-600/40',
      icon: Boxes,
      title: 'Node.js, NestJS & Event Streams',
      subtitle: 'Non-Blocking Real-Time Architectures',
      desc: 'Scalable event-driven backends using Node.js, Fastify, and NestJS. Engineered with non-blocking I/O, WebSockets, Kafka pub/sub, and distributed cache hierarchies for dynamic digital services.',
      highlights: [
        'NestJS modular architecture with dependency injection and decorators',
        'Redis pub/sub channels powering instant collaborative sync',
        'Worker threads and cluster processes for multi-core scaling',
        'PostgreSQL, MongoDB, and Redis hybrid polyglot persistence',
      ],
      metric: '< 12ms P99 Latency',
      metricLabel: 'API RESPONSE TIME',
    },
    {
      id: 'cloud-aws-azure',
      category: 'backend',
      tag: 'Cloud & Integrations',
      badge: 'AWS · Azure · Hybrid Cloud',
      badgeColor: 'border-blue-400/50 bg-blue-950/60 text-blue-300',
      glowColor: 'shadow-[0_0_35px_rgba(59,130,246,0.25)]',
      borderGrad: 'from-blue-400/50 via-cyan-500/30 to-purple-600/40',
      icon: Cloud,
      title: 'AWS, Azure & Systems Integration',
      subtitle: 'Terraform IaC · Serverless · Enterprise APIs',
      desc: 'Resilient multi-cloud engineering on AWS (ECS, Lambda, EKS) and Microsoft Azure (AKS, Functions, CosmosDB). Seamless integration with third-party ecosystems (Stripe, Salesforce, Twilio, SAP, Auth0).',
      highlights: [
        'Multi-region active-active failover across AWS & Azure with zero downtime',
        'Infrastructure as Code (IaC) via Terraform, OpenTofu & Pulumi',
        'Enterprise integrations: Stripe billing, Salesforce CRM, Auth0, ERP connectors',
        'Automated GitHub Actions & ArgoCD zero-drift deployment pipelines',
      ],
      metric: '99.999% SLA Uptime',
      metricLabel: 'CLOUD RESILIENCY',
    },

    // --- 4. ARTIFICIAL INTELLIGENCE & AGENTS ---
    {
      id: 'ai-engineering',
      category: 'ai',
      tag: 'Intelligent Systems',
      badge: 'Generative AI & LLMs',
      badgeColor: 'border-fuchsia-400/50 bg-fuchsia-950/60 text-fuchsia-300',
      glowColor: 'shadow-[0_0_35px_rgba(232,121,249,0.25)]',
      borderGrad: 'from-fuchsia-400/50 via-purple-500/30 to-pink-600/40',
      icon: Cpu,
      title: 'AI Agents, RAG & Vector Architectures',
      subtitle: 'Gemini, OpenAI, Claude & PyTorch',
      desc: 'Production-ready AI integrations that turn generative models into reliable, autonomous business assets. Complete with contextual retrieval pipelines, tool calling, and automated verification.',
      highlights: [
        'Multi-agent workflow orchestration with structured tool schemas',
        'Hybrid vector search (Qdrant / pgvector) with re-ranking algorithms',
        'Streaming inference with real-time UI token updates',
        'Automated model evaluation (LLM-as-a-judge) guarding output quality',
      ],
      metric: '99.4% Extraction Accuracy',
      metricLabel: 'AGENTIC RELIABILITY',
    },
  ];

  const filteredCards =
    activeCategory === 'all'
      ? techStackGroups
      : techStackGroups.filter((card) => card.category === activeCategory);

  return (
    <section
      id="software-systems"
      className="relative z-30 w-full py-24 sm:py-32 overflow-hidden text-white bg-gradient-to-b from-[#060e28] via-[#09153d] to-[#04091c]"
    >
      {/* 
        EXPANDED AMBIENT LIGHTING & VOLUMETRIC GLOWS
      */}
      <div className="absolute top-10 left-1/4 w-[650px] h-[650px] bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[150px] pointer-events-none -z-0" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/15 rounded-full blur-[130px] pointer-events-none -z-0" />

      {/* Subtle illuminated technical grid background */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px), radial-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header with luminous gradient typography */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/50 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-5 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>{t.showcase.badge}</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
              {t.showcase.heading}
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-cyan-100/90 leading-relaxed max-w-3xl mx-auto font-normal">
            {t.showcase.subheading}
          </p>
        </div>

        {/* Category Filter Pills (Mobile, Frontend, Backend & Cloud, AI) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {[
            { id: 'all', label: t.showcase.categories.all },
            { id: 'mobile', label: t.showcase.categories.mobile },
            { id: 'frontend', label: t.showcase.categories.frontend },
            { id: 'backend', label: t.showcase.categories.backend },
            { id: 'ai', label: t.showcase.categories.ai },
          ].map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`group relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.5)] border border-cyan-300'
                    : 'bg-[#0d1b45]/70 hover:bg-[#13255c]/80 text-cyan-200/90 border border-cyan-400/25 hover:border-cyan-400/50 backdrop-blur-xl'
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* 
          9 TECHNOLOGY CARDS GRID (3x3 on desktop)
          - Lighter, illuminated frosted glass cards
          - Vivid accent colors and glowing border highlights
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {filteredCards.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.id}
                className={`relative rounded-3xl p-6 sm:p-8 bg-[#0d1a42]/80 backdrop-blur-2xl border border-cyan-400/35 hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between group ${tech.glowColor} hover:-translate-y-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]`}
              >
                {/* Top Glowing Ambient Mesh */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.borderGrad} rounded-t-3xl`} />
                <div className="absolute top-2 right-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full border ${tech.badgeColor}`}>
                      {tech.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-[11px] font-mono font-semibold tracking-wider text-cyan-300/80 uppercase mb-1">
                    {tech.tag}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1 group-hover:text-cyan-200 transition-colors">
                    {tech.title}
                  </h3>
                  <div className="text-xs text-sky-200/90 font-medium mb-4">
                    {tech.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                    {tech.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-cyan-400/20">
                    {tech.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-cyan-100/90">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric & Action */}
                <div className="pt-4 border-t border-cyan-400/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {tech.metricLabel}
                    </div>
                    <div className="text-base font-bold font-mono text-cyan-300">
                      {tech.metric}
                    </div>
                  </div>

                  <button
                    onClick={() => onInspectProject(tech.title, tech.desc, tech.metric)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-cyan-300 transition-all cursor-pointer"
                    title="View Architectural Spec"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
