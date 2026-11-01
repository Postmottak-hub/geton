import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Layers, Cpu, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface DigitalSolutionsSectionProps {
  onGetStarted: () => void;
  onExploreServices?: () => void;
}

export const DigitalSolutionsSection: React.FC<DigitalSolutionsSectionProps> = ({
  onGetStarted,
  onExploreServices,
}) => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cardsData = t.digitalSolutions.cards;

  return (
    <section
      id="digital-solutions"
      className="relative z-20 w-full py-28 sm:py-36 bg-[#fafaf9] text-neutral-900 overflow-hidden border-t border-b border-neutral-200/80"
    >
      {/* 
        SUBTLE SCANDINAVIAN VISUAL DEPTH:
        - Very soft warm-white gradient
        - Micro dot matrix pattern (barely perceptible 3% opacity)
        - Ambient blurred light forms
      */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.06) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Soft blurred ambient glow spheres for gentle light depth */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* ========================================================
            SECTION HEADER: EDITORIAL TYPOGRAPHY & ZERO-PILL DISCIPLINE
        ======================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-24">
          
          {/* Small Eyebrow: Unboxed text with typographic separators */}
          <div className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase mb-4">
            <span>{t.digitalSolutions.eyebrow}</span>
          </div>

          {/* Main Headline: Bold, editorial-style typography with balanced wrapping */}
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-neutral-900 tracking-tight leading-[1.12] [text-wrap:balance]">
            {t.digitalSolutions.headline}
          </h2>

          {/* Narrower Supporting Description in Dark Charcoal (not pure black) */}
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            {t.digitalSolutions.description}
          </p>
        </div>

        {/* ========================================================
            3 LARGE FEATURE CARDS:
            - Horizontal on desktop, stacked on mobile
            - Soft off-white backgrounds (bg-white)
            - Subtle light-gray borders (border-[#e7e7e5])
            - 28px rounded corners (24-32px)
            - Soft shadows with hover lift
            - Unique minimal abstract 3D visuals
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 mb-20">
          
          {/* CARD 1: MULTIDISCIPLINARY EXPERTISE */}
          <div
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[28px] p-8 sm:p-9 bg-white border border-[#e7e7e5] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.09)] hover:-translate-y-2 cursor-pointer"
            onClick={onGetStarted}
          >
            {/* Top Bar: Index & Abstract Visual */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold text-neutral-400 tracking-wider">
                  {cardsData[0]?.number || '01'}
                </span>
                <span className="text-[11px] font-medium text-neutral-400 tracking-wide">
                  {cardsData[0]?.highlight || 'Unified Product Execution'}
                </span>
              </div>

              {/* Bespoke Abstract 3D Visual: Convergent Multidimensional Rings & Nodes */}
              <div className="w-full h-44 rounded-2xl bg-[#f7f7f6] border border-neutral-100 flex items-center justify-center relative overflow-hidden mb-8 group-hover:bg-[#f3f4f6] transition-colors">
                {/* Background light glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-transparent to-sky-50/40 pointer-events-none" />
                
                <svg
                  viewBox="0 0 200 140"
                  className="w-44 h-32 text-neutral-800 transition-transform duration-500 ease-out group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0f172a" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#64748b" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Outer Orbit ellipse */}
                  <ellipse
                    cx="100"
                    cy="70"
                    rx="75"
                    ry="38"
                    stroke="url(#ringGrad2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="group-hover:rotate-6 transition-transform duration-700 origin-center"
                  />

                  {/* Intersecting primary ring */}
                  <ellipse
                    cx="100"
                    cy="70"
                    rx="52"
                    ry="26"
                    transform="rotate(-25 100 70)"
                    stroke="url(#ringGrad1)"
                    strokeWidth="2"
                    className="group-hover:-rotate-12 transition-transform duration-700 origin-center"
                  />

                  {/* Secondary counter ring */}
                  <ellipse
                    cx="100"
                    cy="70"
                    rx="52"
                    ry="26"
                    transform="rotate(25 100 70)"
                    stroke="#1e293b"
                    strokeWidth="1.75"
                    strokeOpacity="0.75"
                    className="group-hover:rotate-12 transition-transform duration-700 origin-center"
                  />

                  {/* Central convergent core */}
                  <circle cx="100" cy="70" r="14" fill="#0f172a" />
                  <circle cx="100" cy="70" r="8" fill="#38bdf8" className="animate-pulse" />
                  
                  {/* Peripheral node points */}
                  <circle cx="58" cy="48" r="4.5" fill="#4f46e5" />
                  <circle cx="142" cy="92" r="4" fill="#0284c7" />
                  <circle cx="138" cy="46" r="3.5" fill="#0f172a" />
                  <circle cx="62" cy="94" r="3.5" fill="#64748b" />
                </svg>

                {/* Minimalist label inside visual */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-400 bg-white/80 px-2 py-0.5 rounded border border-neutral-200/60 backdrop-blur-sm">
                  CROSS-FUNCTIONAL
                </div>
              </div>

              {/* Title: 1. MULTIDISCIPLINARY EXPERTISE */}
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-neutral-900 mb-3 group-hover:text-black transition-colors">
                {cardsData[0]?.title || 'MULTIDISCIPLINARY EXPERTISE'}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                {cardsData[0]?.description ||
                  'Design, development, strategy, and technology — all in one place.'}
              </p>

              {/* Four Pillars List: Zero-pill clean typographic items */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                {(cardsData[0]?.pillars || [
                  'Product Design & UX',
                  'Full-Stack Development',
                  'Technical Architecture',
                  'Product Strategy',
                ]).map((pillar, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
              <span className="group-hover:translate-x-0.5 transition-transform">
                Explore capabilities
              </span>
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CARD 2: TAILORED SOLUTIONS */}
          <div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[28px] p-8 sm:p-9 bg-white border border-[#e7e7e5] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.09)] hover:-translate-y-2 cursor-pointer"
            onClick={onGetStarted}
          >
            {/* Top Bar: Index & Abstract Visual */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold text-neutral-400 tracking-wider">
                  {cardsData[1]?.number || '02'}
                </span>
                <span className="text-[11px] font-medium text-neutral-400 tracking-wide">
                  {cardsData[1]?.highlight || 'Zero Off-The-Shelf Compromise'}
                </span>
              </div>

              {/* Bespoke Abstract 3D Visual: Modular Adaptive Architectural Grid */}
              <div className="w-full h-44 rounded-2xl bg-[#f7f7f6] border border-neutral-100 flex items-center justify-center relative overflow-hidden mb-8 group-hover:bg-[#f3f4f6] transition-colors">
                {/* Background light glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-sky-50/40 pointer-events-none" />
                
                <svg
                  viewBox="0 0 200 140"
                  className="w-44 h-32 text-neutral-800 transition-transform duration-500 ease-out group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="cubeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <linearGradient id="cubeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>

                  {/* Isometric Grid Base */}
                  <path
                    d="M30 75 L100 115 L170 75 L100 35 Z"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Modular Building Blocks (Interlocking Architecture) */}
                  {/* Left Block */}
                  <g transform="translate(48, 52)">
                    <path d="M25 0 L50 14 L25 28 L0 14 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                    <path d="M0 14 L25 28 L25 56 L0 42 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                    <path d="M25 28 L50 14 L50 42 L25 56 Z" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
                  </g>

                  {/* Center Floating Custom Module */}
                  <g transform="translate(75, 26)" className="group-hover:-translate-y-2 transition-transform duration-500">
                    <path d="M25 0 L50 14 L25 28 L0 14 Z" fill="url(#cubeGrad2)" stroke="#0284c7" strokeWidth="1" />
                    <path d="M0 14 L25 28 L25 56 L0 42 Z" fill="#0369a1" stroke="#0284c7" strokeWidth="1" />
                    <path d="M25 28 L50 14 L50 42 L25 56 Z" fill="#075985" stroke="#0284c7" strokeWidth="1" />
                  </g>

                  {/* Right Foundation Block */}
                  <g transform="translate(102, 52)">
                    <path d="M25 0 L50 14 L25 28 L0 14 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
                    <path d="M0 14 L25 28 L25 56 L0 42 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                    <path d="M25 28 L50 14 L50 42 L25 56 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                  </g>

                  {/* Tailored Connection Ray */}
                  <line x1="100" y1="54" x2="100" y2="92" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="100" cy="92" r="3" fill="#0284c7" />
                </svg>

                {/* Minimalist label inside visual */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-400 bg-white/80 px-2 py-0.5 rounded border border-neutral-200/60 backdrop-blur-sm">
                  BESPOKE CODE
                </div>
              </div>

              {/* Title: 2. TAILORED SOLUTIONS */}
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-neutral-900 mb-3 group-hover:text-black transition-colors">
                {cardsData[1]?.title || 'TAILORED SOLUTIONS'}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                {cardsData[1]?.description ||
                  'We build technology around your business — not the other way around.'}
              </p>

              {/* Four Pillars List: Zero-pill clean typographic items */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                {(cardsData[1]?.pillars || [
                  'Bespoke Architecture',
                  'Seamless API Integrations',
                  'Domain-Specific Workflows',
                  'Scalable Cloud Systems',
                ]).map((pillar, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
              <span className="group-hover:translate-x-0.5 transition-transform">
                Custom engineering
              </span>
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CARD 3: FROM IDEA TO LAUNCH */}
          <div
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-[28px] p-8 sm:p-9 bg-white border border-[#e7e7e5] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.09)] hover:-translate-y-2 cursor-pointer"
            onClick={onGetStarted}
          >
            {/* Top Bar: Index & Abstract Visual */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold text-neutral-400 tracking-wider">
                  {cardsData[2]?.number || '03'}
                </span>
                <span className="text-[11px] font-medium text-neutral-400 tracking-wide">
                  {cardsData[2]?.highlight || 'End-to-End Partnership'}
                </span>
              </div>

              {/* Bespoke Abstract 3D Visual: Launch Trajectory & Continuous Growth Arc */}
              <div className="w-full h-44 rounded-2xl bg-[#f7f7f6] border border-neutral-100 flex items-center justify-center relative overflow-hidden mb-8 group-hover:bg-[#f3f4f6] transition-colors">
                {/* Background light glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-rose-50/30 pointer-events-none" />
                
                <svg
                  viewBox="0 0 200 140"
                  className="w-44 h-32 text-neutral-800 transition-transform duration-500 ease-out group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="launchGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#94a3b8" />
                      <stop offset="50%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal baseline plane */}
                  <line x1="20" y1="110" x2="180" y2="110" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Ascendant curved trajectory curve */}
                  <path
                    d="M30 108 C 65 106, 90 85, 120 55 C 145 30, 160 22, 175 18"
                    stroke="url(#launchGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="group-hover:stroke-sky-600 transition-colors duration-500"
                  />

                  {/* Phased Milestone Rings along trajectory */}
                  {/* Phase 1: Idea / Concept */}
                  <circle cx="34" cy="108" r="5" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
                  <circle cx="34" cy="108" r="2" fill="#0f172a" />

                  {/* Phase 2: Sprint Development */}
                  <circle cx="95" cy="78" r="6" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
                  <circle cx="95" cy="78" r="2.5" fill="#0f172a" />

                  {/* Phase 3: Launch / Go-Live */}
                  <circle cx="140" cy="38" r="7" fill="#f8fafc" stroke="#0284c7" strokeWidth="2.5" />
                  <circle cx="140" cy="38" r="3.5" fill="#38bdf8" className="animate-pulse" />

                  {/* Phase 4: Forward Momentum Rocket / Vector */}
                  <g transform="translate(172, 12)" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <path
                      d="M2 12 L10 2 L14 6 L4 16 Z"
                      fill="#0f172a"
                    />
                    <path
                      d="M10 2 L14 6 L18 2 Z"
                      fill="#0284c7"
                    />
                    {/* Propulsion exhaust whisper */}
                    <circle cx="2" cy="16" r="2" fill="#f97316" />
                  </g>

                  {/* Continuous Growth vector rays */}
                  <path
                    d="M140 38 Q 160 50 180 60"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                </svg>

                {/* Minimalist label inside visual */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-400 bg-white/80 px-2 py-0.5 rounded border border-neutral-200/60 backdrop-blur-sm">
                  FULL LIFECYCLE
                </div>
              </div>

              {/* Title: 3. FROM IDEA TO LAUNCH */}
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-neutral-900 mb-3 group-hover:text-black transition-colors">
                {cardsData[2]?.title || 'FROM IDEA TO LAUNCH'}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                {cardsData[2]?.description ||
                  'We take projects from concept and design through development, launch, and continuous growth.'}
              </p>

              {/* Four Pillars List: Zero-pill clean typographic items */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                {(cardsData[2]?.pillars || [
                  'Rapid Prototyping',
                  'Agile Sprint Delivery',
                  'Production Go-Live',
                  '24/7 Post-Launch Evolution',
                ]).map((pillar, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900">
              <span className="group-hover:translate-x-0.5 transition-transform">
                Lifecycle process
              </span>
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            NORDIC STUDIO TRUST & CONSULTATION FOOTNOTE
            - Scandinavian minimalism
            - Direct CTA trigger to inquiry modal
        ======================================================== */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#e7e7e5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                Crafted for ambition — built for sustained performance.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                Senior engineering teams based in Bergen & Straume, Norway. Direct architect access from Day 1.
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
