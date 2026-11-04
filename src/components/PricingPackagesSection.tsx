import React from 'react';
import { Check, ArrowRight, Sparkles, Smartphone, Globe, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface PricingPackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingPackagesSection: React.FC<PricingPackagesSectionProps> = ({
  onSelectPackage,
}) => {
  const { t, language } = useLanguage();

  return (
    <section
      id="pricing-packages"
      className="relative z-20 w-full py-24 sm:py-32 bg-[#060c1d] text-white overflow-hidden border-t border-b border-white/10"
    >
      {/* 
        SUBTLE EMERALD & CYAN AMBIENT GLOW (Matching reference image style)
      */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            HEADER (Clean, Centered, Human Typography)
        ======================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-400/30 text-[11px] font-mono font-semibold tracking-widest text-emerald-300 uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.15] [text-wrap:balance]">
            {t.pricing.title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* ========================================================
            3 PRICING CARDS (Desktop 3 Columns, matching user's reference)
            - Card 1: Nettside (Fra 15 000 kr)
            - Card 2: Mobilapp (Fra 300 000 kr) - POPULÆR with emerald highlight
            - Card 3: Webapplikasjon (Fra 250 000 kr)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          
          {/* CARD 1: NETTSIDE */}
          <div className="relative rounded-[26px] p-7 sm:p-9 bg-[#0b1226]/90 border border-white/10 hover:border-slate-500 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6 text-sky-400" />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  STARTER & GROWTH
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-2">
                {t.pricing.website.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.pricing.website.description}
              </p>

              {/* Price display */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {language === 'no' ? 'VEILEDENDE PRIS' : 'STARTING FROM'}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight flex items-baseline gap-1.5">
                  <span>{t.pricing.website.price}</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => onSelectPackage(t.pricing.website.title)}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 mb-8"
              >
                <span>{t.pricing.website.button}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  {language === 'no' ? 'INKLUDERT I LEVERANSEN' : 'INCLUDED IN PACKAGE'}
                </div>
                {t.pricing.website.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-slate-400">
              {language === 'no' ? 'Estimert leveringstid: 2–3 uker' : 'Estimated delivery: 2–3 weeks'}
            </div>
          </div>

          {/* CARD 2: MOBILAPP (POPULÆR - Elevated with Emerald Accent) */}
          <div className="relative rounded-[26px] p-7 sm:p-9 bg-[#0b162c] border-2 border-emerald-400/80 shadow-[0_0_50px_rgba(16,185,129,0.2)] lg:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
            {/* Top Popular Floating Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{t.pricing.popularBadge}</span>
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/70 border border-emerald-400/40 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <Smartphone className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-300 uppercase tracking-wider">
                  IOS & ANDROID
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-2">
                {t.pricing.mobileApp.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                {t.pricing.mobileApp.description}
              </p>

              {/* Price display */}
              <div className="mb-6 pb-6 border-b border-emerald-400/20">
                <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider mb-1">
                  {language === 'no' ? 'VEILEDENDE PRIS' : 'STARTING FROM'}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight flex items-baseline gap-1.5">
                  <span>{t.pricing.mobileApp.price}</span>
                </div>
              </div>

              {/* Prominent Emerald Button (matching reference) */}
              <button
                onClick={() => onSelectPackage(t.pricing.mobileApp.title)}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] mb-8"
              >
                <span>{t.pricing.mobileApp.button}</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-emerald-300 uppercase tracking-wider mb-3">
                  {language === 'no' ? 'INKLUDERT I LEVERANSEN' : 'INCLUDED IN PACKAGE'}
                </div>
                {t.pricing.mobileApp.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
                    <div className="w-4 h-4 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-400/20 text-[11px] text-emerald-300/90 font-medium">
              {language === 'no' ? 'Estimert leveringstid: 8–12 uker (agile sprinter)' : 'Estimated delivery: 8–12 weeks (agile sprints)'}
            </div>
          </div>

          {/* CARD 3: WEBAPPLIKASJON */}
          <div className="relative rounded-[26px] p-7 sm:p-9 bg-[#0b1226]/90 border border-white/10 hover:border-slate-500 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  ENTERPRISE & SAAS
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-2">
                {t.pricing.webApp.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.pricing.webApp.description}
              </p>

              {/* Price display */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {language === 'no' ? 'VEILEDENDE PRIS' : 'STARTING FROM'}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight flex items-baseline gap-1.5">
                  <span>{t.pricing.webApp.price}</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => onSelectPackage(t.pricing.webApp.title)}
                className="w-full py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 mb-8"
              >
                <span>{t.pricing.webApp.button}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  {language === 'no' ? 'INKLUDERT I LEVERANSEN' : 'INCLUDED IN PACKAGE'}
                </div>
                {t.pricing.webApp.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-slate-400">
              {language === 'no' ? 'Estimert leveringstid: 6–10 uker (skalerbar arkitektur)' : 'Estimated delivery: 6–10 weeks (scalable architecture)'}
            </div>
          </div>

        </div>

        {/* ========================================================
            FOOTNOTE
        ======================================================== */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 italic leading-relaxed">
            {t.pricing.footnote}
          </p>
        </div>

      </div>
    </section>
  );
};
