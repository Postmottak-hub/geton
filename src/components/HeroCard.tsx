import React from 'react';
import { ArrowRight, Play, Smartphone, Monitor, Sparkles, Cloud } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export interface ServiceItemData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface HeroCardProps {
  onExploreWork: () => void;
  onWatchShowreel: () => void;
  onSelectService: (service: ServiceItemData) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  onExploreWork,
  onWatchShowreel,
  onSelectService,
}) => {
  const { t } = useLanguage();

  const servicesData: ServiceItemData[] = [
    {
      id: 'app',
      title: t.hero.services.appDev.title,
      subtitle: t.hero.services.appDev.subtitle,
      description: t.hero.services.appDev.desc,
      features: t.hero.services.appDev.features,
    },
    {
      id: 'web',
      title: t.hero.services.webDev.title,
      subtitle: t.hero.services.webDev.subtitle,
      description: t.hero.services.webDev.desc,
      features: t.hero.services.webDev.features,
    },
    {
      id: 'branding',
      title: t.hero.services.branding.title,
      subtitle: t.hero.services.branding.subtitle,
      description: t.hero.services.branding.desc,
      features: t.hero.services.branding.features,
    },
    {
      id: 'saas',
      title: t.hero.services.saas.title,
      subtitle: t.hero.services.saas.subtitle,
      description: t.hero.services.saas.desc,
      features: t.hero.services.saas.features,
    },
  ];

  return (
    <div className="relative w-full max-w-4xl lg:max-w-[780px] xl:max-w-[850px] rounded-[24px] sm:rounded-[28px] overflow-hidden group">
      {/* Outer Neon Glow Layer */}
      <div className="absolute -inset-[1px] rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-cyan-400/50 via-cyan-500/20 to-purple-500/30 blur-sm -z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Main Glassmorphic Container: Calibrated responsive padding and moderate transparency */}
      <div className="relative rounded-[24px] sm:rounded-[28px] border border-cyan-400/40 bg-[#060a17]/70 backdrop-blur-xl p-5 sm:p-7 md:p-8 lg:p-10 shadow-[0_0_40px_rgba(6,182,212,0.22),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300">
        
        {/* Subtle specular highlights */}
        <div className="absolute top-0 left-0 w-40 sm:w-52 h-40 sm:h-52 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 right-0 w-40 sm:w-52 h-40 sm:h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10">
          {/* Subheader / Tagline */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.22em] text-cyan-300/90 uppercase font-display">
              {t.hero.tagline}
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-cyan-400/60 inline-block" />
          </div>

          {/* Main Headline */}
          <h1 className="mt-3 sm:mt-4 mb-3 sm:mb-4 font-display font-extrabold tracking-tight text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] sm:leading-[1.08] text-white">
            <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {t.hero.headlinePrefix}
            </span>
            <span className="block mt-0.5 sm:mt-1 bg-gradient-to-r from-[#22d3ee] via-[#93c5fd] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              {t.hero.headlineGradient}
            </span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-slate-300 text-[13px] sm:text-[15px] leading-relaxed max-w-[620px] mb-6 sm:mb-8 font-normal tracking-wide">
            {t.hero.description}
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-6 mb-6 sm:mb-9">
            {/* Explore Our Work CTA */}
            <button
              onClick={onExploreWork}
              className="group/btn relative inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white btn-explore-gradient cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
            >
              <span>{t.hero.exploreWork}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>

            {/* Watch Showreel */}
            <button
              onClick={onWatchShowreel}
              className="group/play flex items-center gap-3 text-white/90 hover:text-white transition-colors cursor-pointer py-1"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 border border-white/25 flex items-center justify-center text-white group-hover/play:border-cyan-400/80 group-hover/play:bg-cyan-950/40 group-hover/play:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300">
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white translate-x-0.5 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wide">{t.hero.watchShowreel}</span>
            </button>
          </div>

          {/* 
            4 Services Responsive Grid:
            - NO TRUNCATION (...) - Full text displayed everywhere on all devices
            - Clean wrapping with items-start / items-center alignment
            - Generous padding and zero clipping
          */}
          <div className="pt-4 sm:pt-6 border-t border-cyan-400/20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-3">
            
            {/* 1. App Development */}
            <button
              onClick={() => onSelectService(servicesData[0])}
              className="text-left flex items-start sm:items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-white/5 active:bg-white/10 transition-all group/item lg:border-r lg:border-white/10 lg:pr-3 cursor-pointer min-w-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 shrink-0 rounded-full bg-cyan-950/50 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover/item:border-cyan-300 group-hover/item:shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-all mt-0.5 sm:mt-0">
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] sm:text-[13px] font-semibold text-white leading-tight sm:leading-snug group-hover/item:text-cyan-300 transition-colors whitespace-normal break-words">
                  {servicesData[0].title}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 leading-tight mt-0.5 whitespace-normal break-words">
                  {servicesData[0].subtitle}
                </div>
              </div>
            </button>

            {/* 2. Web Development */}
            <button
              onClick={() => onSelectService(servicesData[1])}
              className="text-left flex items-start sm:items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-white/5 active:bg-white/10 transition-all group/item lg:border-r lg:border-white/10 lg:px-3 cursor-pointer min-w-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 shrink-0 rounded-full bg-cyan-950/50 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover/item:border-cyan-300 group-hover/item:shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-all mt-0.5 sm:mt-0">
                <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] sm:text-[13px] font-semibold text-white leading-tight sm:leading-snug group-hover/item:text-cyan-300 transition-colors whitespace-normal break-words">
                  {servicesData[1].title}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 leading-tight mt-0.5 whitespace-normal break-words">
                  {servicesData[1].subtitle}
                </div>
              </div>
            </button>

            {/* 3. Branding */}
            <button
              onClick={() => onSelectService(servicesData[2])}
              className="text-left flex items-start sm:items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-white/5 active:bg-white/10 transition-all group/item lg:border-r lg:border-white/10 lg:px-3 cursor-pointer min-w-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 shrink-0 rounded-full bg-cyan-950/50 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover/item:border-cyan-300 group-hover/item:shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-all mt-0.5 sm:mt-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] sm:text-[13px] font-semibold text-white leading-tight sm:leading-snug group-hover/item:text-cyan-300 transition-colors whitespace-normal break-words">
                  {servicesData[2].title}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 leading-tight mt-0.5 whitespace-normal break-words">
                  {servicesData[2].subtitle}
                </div>
              </div>
            </button>

            {/* 4. SaaS Solutions */}
            <button
              onClick={() => onSelectService(servicesData[3])}
              className="text-left flex items-start sm:items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-white/5 active:bg-white/10 transition-all group/item lg:pl-3 cursor-pointer min-w-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 shrink-0 rounded-full bg-cyan-950/50 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover/item:border-cyan-300 group-hover/item:shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-all mt-0.5 sm:mt-0">
                <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] sm:text-[13px] font-semibold text-white leading-tight sm:leading-snug group-hover/item:text-cyan-300 transition-colors whitespace-normal break-words">
                  {servicesData[3].title}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 leading-tight mt-0.5 whitespace-normal break-words">
                  {servicesData[3].subtitle}
                </div>
              </div>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
