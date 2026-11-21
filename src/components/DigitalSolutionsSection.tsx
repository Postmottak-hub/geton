import React from 'react';
import { Wrench, Compass, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import { CAPABILITY_LIST, CapabilitySlug } from '../data/capabilities.ts';
import { trackEvent } from '../utils/analytics.ts';

interface DigitalSolutionsSectionProps {
  onGetStarted: () => void;
  onSelectCapability: (slug: CapabilitySlug) => void;
}

export const DigitalSolutionsSection: React.FC<DigitalSolutionsSectionProps> = ({
  onGetStarted,
  onSelectCapability,
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const pillars =
    language === 'no'
      ? [
          {
            icon: Wrench,
            number: '01',
            title: 'Skreddersydde løsninger',
            desc: 'Vi bygger programvare og nettsider tilpasset måten bedriften faktisk jobber på – uten tunge standardmaler eller unødvendige begrensninger.',
          },
          {
            icon: Compass,
            number: '02',
            title: 'Fra idé til ferdig produkt',
            desc: 'Produktdesign, arkitektur, koding og lansering samlet i ett norsk team på Straume i Øygarden og Bergen. Én partner hele veien.',
          },
          {
            icon: ShieldCheck,
            number: '03',
            title: 'Langsiktig samarbeid',
            desc: 'Vi forlater deg ikke ved lansering. Du får trygg oppfølging, sikkerhetsoppdateringer og kontinuerlig videreutvikling etter behov.',
          },
        ]
      : [
          {
            icon: Wrench,
            number: '01',
            title: 'Bespoke engineering',
            desc: 'We design and build software tailored around how your company actually operates – free from rigid templates and unnecessary bloat.',
          },
          {
            icon: Compass,
            number: '02',
            title: 'Idea to finished product',
            desc: 'UX design, system architecture, fullstack code, and launch unified in one dedicated Norwegian engineering team.',
          },
          {
            icon: ShieldCheck,
            number: '03',
            title: 'Long-term partnership',
            desc: 'Launch is day one. We provide proactive monitoring, security updates, and continuous feature evolution as your business grows.',
          },
        ];

  return (
    <section
      id="digital-solutions"
      aria-labelledby="trust-heading"
      className={`relative z-20 w-full py-20 sm:py-28 transition-colors duration-300 border-b ${
        isLight
          ? 'bg-[#fafaf9] text-neutral-900 border-neutral-200/80'
          : 'bg-[#040816] text-white border-white/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span
              className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-3 ${
                isLight ? 'text-sky-700' : 'text-cyan-300'
              }`}
            >
              {language === 'no' ? 'HVORFOR VELGE GETON' : 'WHY CHOOSE GETON'}
            </span>
            <h2
              id="trust-heading"
              className={`text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-[1.12] [text-wrap:balance] ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}
            >
              {language === 'no'
                ? 'Teknologi, kreativitet og erfaring'
                : 'Technology, creativity, and experience'}
            </h2>
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed max-w-xl ${
                isLight ? 'text-neutral-600' : 'text-slate-300'
              }`}
            >
              {language === 'no'
                ? 'Et fokusert teknologiselskap i Bergen og Øygarden som leverer kvalitet i alle ledd.'
                : 'A focused software engineering partner delivering clarity, speed, and measurable business outcomes.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              trackEvent('cta_click', { label: 'why_geton_cta', location: 'why_geton' });
              onGetStarted();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white btn-cyan-gradient cursor-pointer shrink-0 w-fit"
          >
            <span>{language === 'no' ? 'Snakk med oss' : 'Talk to our team'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Clean Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-10">
          {pillars.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.number}
                className={`rounded-2xl p-7 sm:p-8 border flex flex-col justify-between transition-colors ${
                  isLight
                    ? 'bg-white border-[#e7e7e5] shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                    : 'bg-[#081026]/85 border-white/10 shadow-[0_6px_26px_rgba(0,0,0,0.3)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center ${
                        isLight
                          ? 'bg-neutral-900 border-neutral-900 text-white'
                          : 'bg-cyan-950/60 border-cyan-400/35 text-cyan-300'
                      }`}
                    >
                      <IconComp className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span
                      className={`text-xs font-bold tracking-widest tabular-nums ${
                        isLight ? 'text-neutral-400' : 'text-slate-500'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-display font-bold mb-3 ${
                      isLight ? 'text-neutral-900' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isLight ? 'text-neutral-600' : 'text-slate-300'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Capability Deep-Dive Links (preserves full crawlability & access to all 4 detail pages) */}
        <div
          className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
            isLight ? 'border-neutral-200' : 'border-white/10'
          }`}
        >
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isLight ? 'text-neutral-500' : 'text-slate-400'
            }`}
          >
            {language === 'no' ? 'Les mer om vår arbeidsmåte:' : 'Explore how we work:'}
          </span>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {CAPABILITY_LIST.map((cap) => (
              <a
                key={cap.slug}
                href={cap.routePath}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCapability(cap.slug);
                }}
                className={`text-xs font-semibold inline-flex items-center gap-1 transition-colors ${
                  isLight
                    ? 'text-neutral-800 hover:text-sky-700'
                    : 'text-cyan-300 hover:text-cyan-200'
                }`}
              >
                <span>{language === 'no' ? cap.titleNo : cap.titleEn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
