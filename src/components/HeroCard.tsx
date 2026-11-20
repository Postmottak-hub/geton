import React from 'react';
import { ArrowRight, Smartphone, Code2, Palette, Cloud } from 'lucide-react';
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
  onSelectService: (service: ServiceItemData) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  onStartProject,
  onExploreServices,
  onSelectService,
}) => {
  const { t, language } = useLanguage();

  const servicesData: ServiceItemData[] = [
    {
      id: 'app',
      title: t.hero.services.appDev.title,
      subtitle: t.hero.services.appDev.subtitle,
      description: t.hero.services.appDev.desc,
      features: t.hero.services.appDev.features,
      serviceSlug: 'mobilapputvikling',
    },
    {
      id: 'web',
      title: t.hero.services.webDev.title,
      subtitle: t.hero.services.webDev.subtitle,
      description: t.hero.services.webDev.desc,
      features: t.hero.services.webDev.features,
      serviceSlug: 'nettsideutvikling',
    },
    {
      id: 'branding',
      title: t.hero.services.branding.title,
      subtitle: t.hero.services.branding.subtitle,
      description: t.hero.services.branding.desc,
      features: t.hero.services.branding.features,
      serviceSlug: 'nettsideutvikling',
    },
    {
      id: 'saas',
      title: t.hero.services.saas.title,
      subtitle: t.hero.services.saas.subtitle,
      description: t.hero.services.saas.desc,
      features: t.hero.services.saas.features,
      serviceSlug: 'webapplikasjoner-og-systemutvikling',
    },
  ];

  return (
    <div className="relative w-full max-w-4xl lg:max-w-[780px] xl:max-w-[850px] rounded-[24px] sm:rounded-[28px] overflow-hidden group">
      {/* Outer Glow Layer */}
      <div className="absolute -inset-[1px] rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-cyan-400/50 via-cyan-500/20 to-purple-500/30 blur-sm -z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Main Glassmorphic Container */}
      <div className="relative rounded-[24px] sm:rounded-[28px] border border-cyan-400/40 bg-[#060a17]/75 backdrop-blur-2xl p-5 sm:p-7 md:p-8 lg:p-10 shadow-[0_0_40px_rgba(6,182,212,0.22),inset_0_1px_1px_rgba(255,255,255,0.25)]">
        {/* Subtle specular highlights */}
        <div className="absolute top-0 left-0 w-40 sm:w-52 h-40 sm:h-52 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 right-0 w-40 sm:w-52 h-40 sm:h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10">
          {/* Eyebrow Tagline */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.22em] text-cyan-300/90 uppercase font-display">
              {t.hero.tagline}
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-cyan-400/60 inline-block" aria-hidden="true" />
          </div>

          {/* Primary Page H1 */}
          <h1 className="mt-3 sm:mt-4 mb-3 sm:mb-4 font-display font-extrabold tracking-tight text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-white [text-wrap:balance]">
            {language === 'no' ? (
              <>
                Vi utvikler digitale løsninger{' '}
                <span className="bg-gradient-to-r from-[#22d3ee] via-[#93c5fd] to-[#c084fc] bg-clip-text text-transparent">
                  som skaper vekst
                </span>
              </>
            ) : (
              <>
                We develop digital solutions{' '}
                <span className="bg-gradient-to-r from-[#22d3ee] via-[#93c5fd] to-[#c084fc] bg-clip-text text-transparent">
                  that drive growth
                </span>
              </>
            )}
          </h1>

          {/* Clear Benefit-Focused Value Proposition */}
          <p className="text-[13px] sm:text-[15px] text-slate-200 leading-relaxed max-w-[630px] mb-6 sm:mb-8 font-normal tracking-wide">
            {t.hero.description}
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 mb-6 sm:mb-9">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => {
                trackEvent('cta_click', { label: 'hero_primary_project_brief', location: 'hero' });
                onStartProject();
              }}
              className="group/btn relative inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white btn-explore-gradient cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span>
                {language === 'no' ? 'Fortell oss om prosjektet ditt' : 'Tell us about your project'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={() => {
                trackEvent('cta_click', { label: 'hero_secondary_explore_services', location: 'hero' });
                onExploreServices();
              }}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 hover:border-cyan-400/50 text-xs sm:text-sm font-semibold text-white transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span>{language === 'no' ? 'Utforsk våre tjenester' : 'Explore our services'}</span>
            </button>
          </div>

          {/* 4 Quick Service Highlights */}
          <div className="pt-4 sm:pt-6 border-t border-cyan-400/20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-3">
            {[
              {
                item: servicesData[0],
                Icon: Smartphone,
                border: 'lg:border-r lg:border-white/10 lg:pr-3',
                badgeClass:
                  'from-sky-500/30 via-blue-600/25 to-indigo-600/30 border-sky-400/60 text-sky-200 shadow-[0_0_16px_rgba(56,189,248,0.28)] group-hover/item:border-sky-300 group-hover/item:shadow-[0_0_22px_rgba(56,189,248,0.5)]',
              },
              {
                item: servicesData[1],
                Icon: Code2,
                border: 'lg:border-r lg:border-white/10 lg:px-3',
                badgeClass:
                  'from-cyan-500/30 via-teal-500/25 to-blue-600/30 border-cyan-400/60 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.28)] group-hover/item:border-cyan-300 group-hover/item:shadow-[0_0_22px_rgba(34,211,238,0.5)]',
              },
              {
                item: servicesData[2],
                Icon: Palette,
                border: 'lg:border-r lg:border-white/10 lg:px-3',
                badgeClass:
                  'from-purple-500/30 via-fuchsia-500/25 to-indigo-600/30 border-purple-400/60 text-purple-200 shadow-[0_0_16px_rgba(168,85,247,0.28)] group-hover/item:border-purple-300 group-hover/item:shadow-[0_0_22px_rgba(168,85,247,0.5)]',
              },
              {
                item: servicesData[3],
                Icon: Cloud,
                border: 'lg:pl-3',
                badgeClass:
                  'from-indigo-500/30 via-blue-500/25 to-cyan-500/30 border-indigo-400/60 text-indigo-200 shadow-[0_0_16px_rgba(99,102,241,0.28)] group-hover/item:border-indigo-300 group-hover/item:shadow-[0_0_22px_rgba(99,102,241,0.5)]',
              },
            ].map(({ item, Icon, border, badgeClass }) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectService(item)}
                className={`text-left flex items-start sm:items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-white/[0.06] active:bg-white/10 transition-all group/item ${border} cursor-pointer min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-gradient-to-br border flex items-center justify-center group-hover/item:scale-105 group-hover/item:-rotate-3 transition-all duration-300 mt-0.5 sm:mt-0 ${badgeClass}`}
                >
                  <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.2} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[12px] sm:text-[13px] font-semibold text-white group-hover/item:text-cyan-200 transition-colors leading-tight sm:leading-snug whitespace-normal break-words">
                    {item.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 leading-tight mt-0.5 whitespace-normal break-words">
                    {item.subtitle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
