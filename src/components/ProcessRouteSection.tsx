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
  const { t, language } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const stageIcons = [Compass, Code2, Rocket, ShieldCheck];
  const stageColors = [
    {
      color: 'from-cyan-400 to-blue-500',
      borderColor: 'border-cyan-400/50',
      glowColor: 'shadow-[0_0_24px_rgba(6,182,212,0.22)]',
      tools: 'Figma · OpenAPI · PostgreSQL · Terraform',
    },
    {
      color: 'from-blue-400 to-indigo-500',
      borderColor: 'border-blue-400/50',
      glowColor: 'shadow-[0_0_24px_rgba(59,130,246,0.22)]',
      tools: 'React · Next.js · React Native · TypeScript · .NET',
    },
    {
      color: 'from-purple-400 to-fuchsia-500',
      borderColor: 'border-purple-400/50',
      glowColor: 'shadow-[0_0_24px_rgba(168,85,247,0.22)]',
      tools: 'GitHub Actions · Docker · AWS · Azure · CDN',
    },
    {
      color: 'from-emerald-400 to-cyan-500',
      borderColor: 'border-emerald-400/50',
      glowColor: 'shadow-[0_0_24px_rgba(52,211,153,0.22)]',
      tools: 'Overvåking · Sikkerhetsoppdateringer · Videreutvikling',
    },
  ];

  // Combine first 4 stages cleanly from localized translations
  const routeStages = t.showcase.stages.slice(0, 4).map((stage, idx) => ({
    number: `0${idx + 1}`,
    title: stage.title,
    subtitle: stage.subtitle,
    status: language === 'no' ? `FASE 0${idx + 1}` : `PHASE 0${idx + 1}`,
    icon: stageIcons[idx],
    ...stageColors[idx],
    summary: stage.desc,
    deliverables: stage.deliverables,
    sla: stage.sla,
  }));

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % routeStages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, routeStages.length]);

  const currentStage = routeStages[activeStage];
  const CurrentStageIcon = currentStage.icon;

  return (
    <section
      id="development-route"
      className="relative z-30 w-full py-20 sm:py-28 overflow-hidden text-white bg-gradient-to-b from-[#060e28] via-[#09153d] to-[#04091c]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="rounded-3xl bg-[#0b163d]/90 border border-cyan-400/35 shadow-[0_0_50px_rgba(6,182,212,0.18)] p-6 sm:p-10 lg:p-12 mb-20 backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Subheader */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-cyan-400/20">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase mb-2">
                <Workflow className="w-4 h-4 text-cyan-300" aria-hidden="true" />
                <span>{t.showcase.routeBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight [text-wrap:balance]">
                {t.showcase.routeTitle}
              </h2>
              <p className="text-xs sm:text-sm text-cyan-100/90 mt-2 max-w-xl leading-relaxed">
                {t.showcase.routeSubtitle}
              </p>
            </div>

            {/* Play/Pause Walkthrough */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="px-4 py-2 rounded-xl bg-cyan-950/80 hover:bg-cyan-500/20 border border-cyan-400/40 text-xs font-semibold text-cyan-300 flex items-center gap-2 transition-all cursor-pointer"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{language === 'no' ? 'Pause gjennomgang' : 'Pause walkthrough'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{language === 'no' ? 'Spill av prosessen' : 'Auto-play steps'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="relative z-10 pt-10 pb-4">
            {/* Horizontal connecting progress line */}
            <div className="hidden sm:block absolute top-[72px] left-[8%] right-[8%] h-1.5 bg-slate-800/90 rounded-full overflow-hidden -z-0">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-all duration-500 ease-out"
                style={{ width: `${(activeStage / (routeStages.length - 1)) * 100}%` }}
              />
            </div>

            {/* 4 Interactive Waypoint Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {routeStages.map((stage, idx) => {
                const StageIcon = stage.icon;
                const isSelected = activeStage === idx;
                const isCompleted = activeStage > idx;

                return (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => {
                      setActiveStage(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? `bg-gradient-to-b from-[#102357] to-[#0c1a40] ${stage.borderColor} ${stage.glowColor} ring-1 ring-cyan-400/40`
                        : isCompleted
                        ? 'bg-[#091538]/80 border-cyan-400/35 hover:bg-[#0e2052]'
                        : 'bg-[#08122f]/60 border-white/10 hover:border-cyan-400/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          isSelected
                            ? `bg-gradient-to-br ${stage.color} text-slate-950`
                            : isCompleted
                            ? 'bg-cyan-950/80 border border-cyan-400/50 text-cyan-300'
                            : 'bg-white/5 border border-white/10 text-slate-400'
                        }`}
                      >
                        <StageIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-cyan-300/80 tabular-nums">
                        {stage.status}
                      </span>
                    </div>

                    <div>
                      <h3
                        className={`text-sm sm:text-base font-bold font-display transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {stage.title}
                      </h3>
                      <div className="text-xs text-cyan-300/80 mt-0.5">{stage.subtitle}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Deep Dive Card */}
            <div className="mt-8 rounded-3xl bg-[#070f2b]/95 border border-cyan-400/35 p-6 sm:p-8 lg:p-10 shadow-[0_0_35px_rgba(6,182,212,0.16)]">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-cyan-400/20">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${currentStage.color} flex items-center justify-center text-slate-950 shrink-0`}
                  >
                    <CurrentStageIcon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-cyan-300">{currentStage.status}</span>
                      <span className="text-xs text-slate-400">· {currentStage.subtitle}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-cyan-950/70 border border-cyan-400/35 text-xs text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <span>{currentStage.sla}</span>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-bold mb-2">
                      {language === 'no' ? 'Arbeidsmetodikk & mål' : 'Workflow & Objectives'}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      {currentStage.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-bold mb-3">
                      {language === 'no' ? 'Leveranser i denne fasen' : 'Phase Deliverables'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStage.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-white/[0.03] border border-cyan-400/20 flex items-start gap-3 text-xs sm:text-sm text-cyan-100"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      {language === 'no' ? 'TEKNOLOGI & VERKTØY' : 'TOOLCHAIN & PLATFORMS'}
                    </span>
                    <div className="text-sm font-semibold text-white mb-6">
                      {currentStage.tools}
                    </div>

                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      {language === 'no' ? 'TETT SAMARBEID' : 'DIRECT COLLABORATION'}
                    </span>
                    <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                      {language === 'no'
                        ? 'Du samarbeider direkte med våre utviklere gjennom hele løpet, med faste statusmøter og transparent fremdrift.'
                        : 'You work directly with our engineers throughout the lifecycle with regular demos and transparent progress.'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onScheduleReview}
                    className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white btn-cyan-gradient flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] transition-all"
                  >
                    <span>
                      {language === 'no' ? 'Fortell oss om prosjektet ditt' : 'Tell us about your project'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-900/60 via-cyan-900/60 to-purple-900/60 border border-cyan-400/45 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(6,182,212,0.22)]">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              {language === 'no' ? 'FRA IDÉ TIL LANSERING' : 'READY TO BUILD'}
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
              type="button"
              onClick={onScheduleReview}
              className="px-8 py-4 rounded-full text-sm font-bold text-white btn-cyan-gradient shadow-[0_0_24px_rgba(6,182,212,0.45)] cursor-pointer hover:scale-[1.02] transition-all"
            >
              {t.showcase.talkToPrincipalEngineer}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
