import React, { useState } from 'react';
import { ArrowUpRight, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface DigitalSolutionsSectionProps {
  onGetStarted: () => void;
  onExploreServices?: () => void;
}

export const DigitalSolutionsSection: React.FC<DigitalSolutionsSectionProps> = ({
  onGetStarted,
  onExploreServices,
}) => {
  const { t, language } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cardsData = t.digitalSolutions.cards;

  // 4 HIGH-END SOFTWARE & ARCHITECTURE CREATIVE IMAGERY
  const cardImages = [
    {
      src: '/src/assets/images/software_multidisciplinary_ui_1793710478928.jpg',
      badge: 'MODERN UI & CODE',
      alt: 'Multidisciplinary React TypeScript and Mobile Architecture',
    },
    {
      src: '/src/assets/images/software_bespoke_architecture_1793710479073.jpg',
      badge: 'MODULAR BACKEND',
      alt: 'Tailored 3D Modular Cloud & API Microservices Infrastructure',
    },
    {
      src: '/src/assets/images/software_idea_to_launch_1793710481314.jpg',
      badge: 'DESIGN TO PROD',
      alt: 'Design System Compiling Into Live Mobile and Web Platform',
    },
    {
      src: '/src/assets/images/software_devops_monitoring_1793710481343.jpg',
      badge: 'DEVOPS & TELEMETRY',
      alt: '24/7 Real-Time Cloud Monitoring & Microservice Topology',
    },
  ];

  return (
    <section
      id="digital-solutions"
      className="relative z-20 w-full py-28 sm:py-36 bg-[#fafaf9] text-neutral-900 overflow-hidden border-t border-b border-neutral-200/80"
    >
      {/* 
        SUBTLE SCANDINAVIAN VISUAL DEPTH:
        - Warm-white canvas with micro dot matrix pattern
        - Gentle blurred ambient light forms
      */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.06) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            SECTION HEADER: EDITORIAL TYPOGRAPHY & ZERO-PILL DISCIPLINE
        ======================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase mb-4">
            <span>{t.digitalSolutions.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-neutral-900 tracking-tight leading-[1.12] [text-wrap:balance]">
            {t.digitalSolutions.headline}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            {t.digitalSolutions.description}
          </p>
        </div>

        {/* ========================================================
            EXACTLY 4 LARGE FEATURE CARDS:
            - Desktop: 4 equal columns (lg:grid-cols-4)
            - Tablet: 2 columns (sm:grid-cols-2)
            - Mobile: Stacked
            - High-end creative studio artwork images
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cardsData.map((card, idx) => {
            const visual = cardImages[idx] || cardImages[0];

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={onGetStarted}
                className="group relative rounded-[26px] p-6 sm:p-7 bg-white border border-[#e7e7e5] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  {/* Top Bar: Index & Highlight */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-neutral-400 tracking-wider">
                      {card.number}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-400 tracking-wide truncate max-w-[170px]">
                      {card.highlight}
                    </span>
                  </div>

                  {/* 
                    CREATIVE SOFTWARE ARTWORK IMAGE:
                    - High-resolution software and architecture product photography
                    - Hover zoom effect
                  */}
                  <div className="relative w-full aspect-[16/11] rounded-[20px] overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs mb-5">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Minimalist studio label inside visual */}
                    <div className="absolute bottom-2.5 right-2.5 text-[9px] sm:text-[10px] font-semibold text-neutral-800 bg-white/90 px-2 py-0.5 rounded border border-neutral-200/70 backdrop-blur-sm pointer-events-none">
                      {visual.badge}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-neutral-900 mb-2 group-hover:text-black transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 font-normal">
                    {card.description}
                  </p>

                  {/* Pillars Checklist: Zero-pill clean typographic items */}
                  <div className="space-y-2 pt-4 border-t border-neutral-100">
                    {card.pillars.map((pillar, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                        <span className="leading-snug">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {language === 'no' ? 'Les mer om løsningen' : 'Explore capability'}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            NORDIC STUDIO TRUST & CONSULTATION FOOTNOTE
        ======================================================== */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#e7e7e5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                {language === 'no'
                  ? 'Skapt for ambisjoner — bygget for kontinuerlig ytelse.'
                  : 'Crafted for ambition — built for sustained performance.'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                {language === 'no'
                  ? 'Senior ingeniørteam med base i Bergen & Straume, Norge. Direkte arkitektkontakt fra første samtale.'
                  : 'Senior engineering team based in Bergen & Straume, Norway. Direct architect access from Day 1.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onGetStarted}
              className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <span>{t.digitalSolutions.consultationCTA}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
