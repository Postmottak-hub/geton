import React from 'react';
import {
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Users,
  Cpu,
  Wrench,
  GitBranch,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
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

  const trustPillars =
    language === 'no'
      ? [
          {
            icon: Wrench,
            title: 'Skreddersydd utvikling',
            desc: 'Løsninger bygget rundt bedriftens mål og arbeidsflyt — ikke standardmaler.',
          },
          {
            icon: Cpu,
            title: 'Moderne teknologi',
            desc: 'Velprøvde rammeverk som React, Next.js, TypeScript, React Native og .NET.',
          },
          {
            icon: Layers,
            title: 'Fleksible løsninger',
            desc: 'Tilpasset funksjonalitet og omfang som enkelt kan utvides etter behov.',
          },
          {
            icon: Users,
            title: 'Tett samarbeid',
            desc: 'Direkte dialog med utviklerne fra første samtale i Bergen og Øygarden til lansering.',
          },
          {
            icon: GitBranch,
            title: 'Skalerbar arkitektur',
            desc: 'Ryddige datamodeller og raske API-er laget for å tåle fremtidig vekst.',
          },
          {
            icon: ShieldCheck,
            title: 'Videreutvikling og support',
            desc: 'Trygg oppfølging, oppdateringer og videreutvikling etter at løsningen er lansert.',
          },
        ]
      : [
          {
            icon: Wrench,
            title: 'Bespoke development',
            desc: 'Solutions built around your goals and workflow — never rigid templates.',
          },
          {
            icon: Cpu,
            title: 'Modern technology',
            desc: 'Proven stacks including React, Next.js, TypeScript, React Native, and .NET.',
          },
          {
            icon: Layers,
            title: 'Flexible solutions',
            desc: 'Scope and functionality tailored to your needs and ready to evolve over time.',
          },
          {
            icon: Users,
            title: 'Close collaboration',
            desc: 'Direct contact with senior engineers from initial brief to final release.',
          },
          {
            icon: GitBranch,
            title: 'Scalable architecture',
            desc: 'Clean data models and fast APIs engineered to support future growth.',
          },
          {
            icon: ShieldCheck,
            title: 'Ongoing evolution & support',
            desc: 'Reliable maintenance, security updates, and continuous improvements post-launch.',
          },
        ];

  return (
    <section
      id="digital-solutions"
      aria-labelledby="trust-heading"
      className="relative z-20 w-full py-24 sm:py-32 bg-[#fafaf9] text-neutral-900 overflow-hidden border-t border-b border-neutral-200/80"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.06) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase mb-4">
            {language === 'no'
              ? 'HVORFOR VELGE GETON AS • BERGEN & ØYGARDEN'
              : 'WHY CHOOSE GETON AS • NORWAY'}
          </p>

          <h2
            id="trust-heading"
            className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-neutral-900 tracking-tight leading-[1.12] [text-wrap:balance]"
          >
            {language === 'no'
              ? 'Din teknologipartner fra idé til lansering'
              : 'Your technology partner from idea to launch'}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            {language === 'no'
              ? 'Vi utvikler skreddersydde digitale produkter med moderne teknologi, tett samarbeid og forutsigbare prosesser for bedrifter i Bergen, Vestland og hele Norge.'
              : 'We design and build custom digital products combining modern engineering, close partnership, and scalable architecture across Vestland and Norway.'}
          </p>
        </div>

        {/* 6 Core Trust Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14">
          {trustPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e7e7e5] flex items-start gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                  <IconComp className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Interactive Cards Navigating to Dedicated Full Pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-14">
          {CAPABILITY_LIST.map((pillar) => {
            const title = language === 'no' ? pillar.titleNo : pillar.titleEn;
            const desc = language === 'no' ? pillar.descriptionNo : pillar.descriptionEn;
            const tag = language === 'no' ? pillar.tagNo : pillar.tagEn;
            const alt = language === 'no' ? pillar.heroAltNo : pillar.heroAltEn;

            return (
              <a
                key={pillar.slug}
                href={pillar.routePath}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCapability(pillar.slug);
                }}
                className="text-left group relative rounded-[26px] p-6 sm:p-7 bg-white border border-[#e7e7e5] hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-neutral-400 tracking-wider tabular-nums">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider truncate max-w-[170px]">
                      {tag}
                    </span>
                  </div>

                  <div className="relative w-full aspect-video rounded-[20px] overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs mb-5">
                    <img
                      src={pillar.heroImage}
                      alt={alt}
                      width={1280}
                      height={714}
                      className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-2.5 right-2.5 text-[9px] sm:text-[10px] font-semibold text-neutral-800 bg-white/90 px-2 py-0.5 rounded border border-neutral-200/70 backdrop-blur-sm pointer-events-none">
                      {pillar.badge}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-neutral-900 mb-2 group-hover:text-black transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 font-normal line-clamp-3">
                    {desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
                  <span>{language === 'no' ? 'Les mer om vår arbeidsmåte' : 'Explore capability'}</span>
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Local Studio Footnote & CTA */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#e7e7e5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                {language === 'no'
                  ? 'Norsk teknologipartner med base på Straume i Øygarden, nær Bergen.'
                  : 'Norwegian software partner based in Øygarden near Bergen.'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                {language === 'no'
                  ? 'Direkte samarbeid med utviklere og designere — skreddersydd for virksomheter i Vestland og hele Norge.'
                  : 'Direct access to senior engineers and designers serving clients across Vestland and Norway.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              trackEvent('cta_click', { label: 'trust_section_cta', location: 'digital_solutions' });
              onGetStarted();
            }}
            className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 shrink-0"
          >
            <span>
              {language === 'no' ? 'Diskuter ditt prosjekt med oss' : 'Discuss your project with us'}
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
