import React, { useState, useEffect } from 'react';
import {
  Workflow,
  Compass,
  Code2,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Play,
  Pause,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ProcessRouteSectionProps {
  onScheduleReview: () => void;
}

export const ProcessRouteSection: React.FC<ProcessRouteSectionProps> = ({
  onScheduleReview,
}) => {
  const { t } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // 4 Delivery Lifecycle Route Stages
  const routeStages = [
    {
      number: '01',
      title: 'Discovery & Architectural Blueprint',
      subtitle: 'Week 1 – 2 // Deep Scoping',
      status: 'PHASE 01: FOUNDATION',
      icon: Compass,
      color: 'from-cyan-400 to-blue-500',
      borderColor: 'border-cyan-400/50',
      glowColor: 'shadow-[0_0_30px_rgba(6,182,212,0.35)]',
      summary:
        'We unpack your business objectives, reverse-engineer requirements, design interactive Figma prototypes, and produce the comprehensive Technical Architecture Document (TAD).',
      deliverables: [
        'Interactive Figma high-fidelity prototypes & design tokens',
        'Full cloud topology diagram (AWS / Azure / Edge CDN)',
        'Database schema definitions & Entity Relationship diagrams',
        'Security compliance specifications (SOC2 / HIPAA / GDPR)',
      ],
      tools: 'Figma · Miro · Mermaid.js · Terraform Stubs',
      sla: 'Guaranteed 10-day milestone sign-off',
    },
    {
      number: '02',
      title: 'High-Velocity Agile Engineering',
      subtitle: 'Week 3 – 8 // Iterative Sprints',
      status: 'PHASE 02: DEVELOPMENT',
      icon: Code2,
      color: 'from-blue-400 to-indigo-500',
      borderColor: 'border-blue-400/50',
      glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.35)]',
      summary:
        'Our senior full-stack engineers build in bi-weekly sprints with daily preview builds. Strict test-driven development (TDD) ensures rock-solid stability from day one.',
      deliverables: [
        'Bi-weekly sprint demos with working staging environments',
        'Unit, integration, and end-to-end automated testing suites',
        'API contract verification with Swagger / OpenAPI / Postman',
        'Shared Slack/Teams channel with direct lead architect access',
      ],
      tools: 'GitHub · Docker · Vitest · Playwright · SonarQube',
      sla: '90%+ code coverage & 0 open blocker bugs',
    },
    {
      number: '03',
      title: 'Automated Multi-Cloud Deployment',
      subtitle: 'Week 9 – 10 // Zero-Downtime Launch',
      status: 'PHASE 03: GO-LIVE',
      icon: Rocket,
      color: 'from-purple-400 to-fuchsia-500',
      borderColor: 'border-purple-400/50',
      glowColor: 'shadow-[0_0_30px_rgba(168,85,247,0.35)]',
      summary:
        'Blue/green canary deployment across distributed edge networks. We stress-test under 100k+ concurrent requests, run penetration audits, and execute seamless DNS cutover.',
      deliverables: [
        'Canary blue/green zero-downtime deployment cutover',
        'Stress & load benchmark reports (JMeter / k6 under peak load)',
        'App Store & Google Play approval submission management',
        'WAF security, SSL/TLS 1.3 hardening & DDoS mitigation',
      ],
      tools: 'Kubernetes · ArgoCD · AWS EKS · Azure AKS · Cloudflare',
      sla: 'Zero-downtime production cutover guarantee',
    },
    {
      number: '04',
      title: 'Mission Control & 24/7 SLA Support',
      subtitle: 'Post-Launch // Continuous Growth',
      status: 'PHASE 04: EVOLUTION',
      icon: ShieldCheck,
      color: 'from-emerald-400 to-cyan-500',
      borderColor: 'border-emerald-400/50',
      glowColor: 'shadow-[0_0_30px_rgba(52,211,153,0.35)]',
      summary:
        'Our partnership continues post-launch with real-time APM telemetry, guaranteed 15-minute response SLAs, monthly performance tuning, and feature roadmap sprints.',
      deliverables: [
        '24/7 proactive synthetic monitoring & alerting (Datadog / Sentry)',
        '15-minute response SLA for critical production incidents',
        'Monthly infrastructure optimization & cloud cost reduction audits',
        'Continuous feature sprints, OS version upgrades, and security patches',
      ],
      tools: 'Datadog · Sentry · PagerDuty · Grafana · OpenTelemetry',
      sla: '99.999% uptime guarantee with financial SLA backing',
    },
  ];

  // Fast animation: route advances every 2 seconds with traveling light beam
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % routeStages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, routeStages.length]);

  const currentStage = routeStages[activeStage];
  const CurrentStageIcon = currentStage.icon;

  return (
    <section
      id="development-route"
      className="relative z-30 w-full py-20 sm:py-28 overflow-hidden text-white bg-gradient-to-b from-[#060e28] via-[#09153d] to-[#04091c]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            ANIMATED DEVELOPMENT & DEPLOYMENT ROUTE
            - Title: "How we start, develop, deploy & support"
            - Fast 2-second light pulse animation travelling between steps
            - Removed "<" from 15-minute response SLA
        ======================================================== */}
        <div className="rounded-3xl bg-[#0b163d]/90 border border-cyan-400/40 shadow-[0_0_60px_rgba(6,182,212,0.25)] p-6 sm:p-10 lg:p-12 mb-20 backdrop-blur-2xl relative overflow-hidden">
          {/* Ambient light flares */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Subheader */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-cyan-400/25">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase mb-2">
                <Workflow className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                <span>{t.showcase.routeBadge}</span>
              </div>
              {/* Exact text: "How we start, develop, deploy & support" */}
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                {t.showcase.routeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-100/90 mt-1 max-w-xl">
                {t.showcase.routeSubtitle}
              </p>
            </div>

            {/* Play/Pause Simulator */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="px-4 py-2 rounded-xl bg-cyan-950/80 hover:bg-cyan-500/20 border border-cyan-400/40 text-xs font-semibold text-cyan-300 flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                {isAutoPlaying ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>2s Light Pulse Active</span>
                    <Pause className="w-3.5 h-3.5 ml-1 text-cyan-400" />
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Resume Pulse</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 
            THE ANIMATED CIRCUIT ROUTE PIPELINE
            - Fast 2-second traveling laser beam connecting the 4 waypoints
          */}
          <div className="relative z-10 pt-10 pb-6">
            
            {/* The horizontal connecting circuit line with fast laser beam */}
            <div className="hidden sm:block absolute top-[72px] left-[8%] right-[8%] h-1.5 bg-slate-800/90 rounded-full overflow-hidden -z-0">
              {/* Active filled line with 2s transition */}
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-all duration-500 ease-out relative"
                style={{ width: `${((activeStage + 0.1) / (routeStages.length - 1)) * 100}%` }}
              >
                {/* Fast traveling laser light pulse shooting along the circuit line */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-[0_0_25px_rgba(34,211,238,1)] animate-ping" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-200 shadow-[0_0_15px_rgba(34,211,238,1)]" />
              </div>
            </div>

            {/* 4 Interactive Waypoint Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {routeStages.map((stage, idx) => {
                const StageIcon = stage.icon;
                const isSelected = activeStage === idx;
                const isCompleted = activeStage > idx;

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveStage(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? `bg-gradient-to-b from-[#102357] to-[#0c1a40] ${stage.borderColor} ${stage.glowColor} scale-[1.03] ring-1 ring-cyan-400/50`
                        : isCompleted
                        ? 'bg-[#091538]/80 border-cyan-400/40 hover:bg-[#0e2052]'
                        : 'bg-[#08122f]/60 border-white/10 hover:border-cyan-400/30'
                    }`}
                  >
                    {/* Node circle on top */}
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                          isSelected
                            ? `bg-gradient-to-br ${stage.color} text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.9)] scale-110`
                            : isCompleted
                            ? 'bg-cyan-950/80 border border-cyan-400/60 text-cyan-300'
                            : 'bg-white/5 border border-white/10 text-slate-400'
                        }`}
                      >
                        <StageIcon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-cyan-300/80">
                        STAGE {stage.number}
                      </span>
                    </div>

                    <div>
                      <h4
                        className={`text-sm sm:text-base font-bold font-display transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {stage.title}
                      </h4>
                      <div className="text-[11px] text-cyan-300/80 font-mono mt-0.5">
                        {stage.subtitle}
                      </div>
                    </div>

                    {/* Active indicator dot with 2s pulse */}
                    {isSelected && (
                      <div className="mt-3 pt-2 border-t border-cyan-400/30 flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)] animate-ping" />
                        <span>ACTIVE PULSE // STAGE {stage.number}</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* 
              STAGE DEEP DIVE DISPLAY CARD
            */}
            <div className="mt-8 rounded-3xl bg-[#070f2b]/95 border border-cyan-400/40 p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_rgba(6,182,212,0.2)] animate-in fade-in duration-300">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-cyan-400/20">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${currentStage.color} flex items-center justify-center text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.6)] shrink-0`}
                  >
                    <CurrentStageIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-400/40">
                        {currentStage.status}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{currentStage.subtitle}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>

                {/* SLA / Guarantee Pill - removed "<" */}
                <div className="px-4 py-2 rounded-xl bg-cyan-950/70 border border-cyan-400/40 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>SLA: {currentStage.sla}</span>
                </div>
              </div>

              {/* Stage Body Breakdown */}
              <div className="pt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Column 1 & 2: Overview & Deliverables */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-2">
                      Operational Workflow & Objectives
                    </h4>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      {currentStage.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-3">
                      Tangible Deliverables Handed Over
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStage.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-white/[0.03] border border-cyan-400/20 flex items-start gap-3 text-xs sm:text-sm text-cyan-100"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 3: Tools & Action */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      TOOLCHAIN & PLATFORMS
                    </span>
                    <div className="text-sm font-semibold text-white mb-6">
                      {currentStage.tools}
                    </div>

                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      DIRECT ARCHITECT CONTACT
                    </span>
                    <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                      Every project is led by a principal systems engineer with weekly video calls and shared code repositories.
                    </p>
                  </div>

                  <button
                    onClick={onScheduleReview}
                    className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white btn-cyan-gradient flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Initiate Project Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 
          BOTTOM CALLOUT BANNER:
          - Bright, illuminated gradient container
          - Direct sprint booking CTA
        */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-900/60 via-cyan-900/60 to-purple-900/60 border border-cyan-400/50 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_60px_rgba(6,182,212,0.3)]">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">
              DEPLOY WITH CONFIDENCE
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-2 mb-3">
              {t.showcase.readyToDeployHeading}
            </h3>
            <p className="text-cyan-100 text-sm leading-relaxed">
              {t.showcase.readyToDeployDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onScheduleReview}
              className="px-8 py-4 rounded-full text-sm font-bold text-white btn-cyan-gradient shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer hover:scale-105 active:scale-95 transition-all"
            >
              {t.showcase.talkToPrincipalEngineer}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
