import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { trackEvent } from '../utils/analytics.ts';
import { ServiceSlug } from '../data/services.ts';

export interface ServiceItemData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  serviceSlug?: ServiceSlug;
}

interface HeroCardProps {
  onStartProject: () => void;
  onExploreServices: () => void;
  onSelectService?: (service: ServiceItemData) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  onStartProject,
  onExploreServices,
}) => {
  const { language } = useLanguage();

  return (
    <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden group">
      {/* Subtle Border Aura */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-400/45 via-blue-500/20 to-purple-500/30 blur-sm -z-10 opacity-70 transition-opacity duration-500" />

      {/* Main Glassmorphic Container */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-cyan-400/35 bg-[#060b1c]/80 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_16px_60px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.18)]">
        <div className="relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-cyan-300 uppercase font-display">
              {language === 'no' ? 'GETON AS · PROGRAMVARE & DESIGN' : 'GETON AS · SOFTWARE & DESIGN'}
            </span>
            <span className="w-6 h-[1px] bg-cyan-400/60 inline-block shrink-0" aria-hidden="true" />
          </div>

          {/* Primary Page H1 */}
          <h1 className="mt-3.5 sm:mt-4 mb-3.5 sm:mb-4 font-display font-extrabold tracking-tight text-[27px] sm:text-5xl lg:text-[52px] leading-[1.12] text-white [text-wrap:balance]">
            {language === 'no' ? (
              <>
                Digitale løsninger som{' '}
                <span className="bg-gradient-to-r from-[#22d3ee] via-[#93c5fd] to-[#c084fc] bg-clip-text text-transparent">
                  driver bedriften din fremover.
                </span>
              </>
            ) : (
              <>
                Digital solutions that{' '}
                <span className="bg-gradient-to-r from-[#22d3ee] via-[#93c5fd] to-[#c084fc] bg-clip-text text-transparent">
                  move your business forward.
                </span>
              </>
            )}
          </h1>

          {/* Clear Concise Description */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mb-6 sm:mb-7 font-normal">
            {language === 'no'
              ? 'Vi utvikler moderne nettsider, mobilapper, AI-løsninger og skreddersydd programvare – fra idé til lansering.'
              : 'We design and build modern websites, mobile apps, AI solutions, and custom software – from idea to launch.'}
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Primary CTA: Få et tilbud */}
            <button
              type="button"
              onClick={() => {
                trackEvent('cta_click', { label: 'hero_primary_get_quote', location: 'hero' });
                onStartProject();
              }}
              className="group/btn inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm font-semibold text-white btn-cyan-gradient cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span>{language === 'no' ? 'Få et tilbud' : 'Get a quote'}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>

            {/* Secondary CTA: Se våre prosjekter */}
            <button
              type="button"
              onClick={() => {
                trackEvent('cta_click', { label: 'hero_secondary_projects', location: 'hero' });
                onExploreServices();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-cyan-400/50 text-sm font-semibold text-white transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span>{language === 'no' ? 'Se våre prosjekter' : 'View our projects'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
