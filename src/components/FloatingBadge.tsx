import React from 'react';
import { Gamepad2, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FloatingBadgeProps {
  onClick?: () => void;
  className?: string;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({ onClick, className = '' }) => {
  const { language } = useLanguage();

  const title = 'Geton Gaming Studio';
  const subtitle =
    language === 'no'
      ? 'Spill og få rabatt på prosjektet ditt'
      : 'Play & Get a Project Discount';
  const ctaText = language === 'no' ? 'Få prosjektrabatt' : 'Get Project Discount';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#070d22]/90 hover:bg-[#0c1638]/95 backdrop-blur-xl border border-cyan-400/50 hover:border-purple-400/80 shadow-[0_0_28px_rgba(6,182,212,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_38px_rgba(139,92,246,0.45)] transition-all duration-300 cursor-pointer text-left select-none ${className}`}
      title={subtitle}
      aria-label={`${title} — ${subtitle}`}
    >
      {/* Subtle brand gradient aura */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/25 via-indigo-500/20 to-purple-500/25 blur-sm -z-10 group-hover:opacity-100 opacity-65 transition-opacity" />

      {/* High-contrast Gaming Studio Icon */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/30 via-indigo-500/30 to-purple-600/35 border border-cyan-300/60 flex items-center justify-center text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.4)] group-hover:scale-105 group-hover:-rotate-3 group-hover:border-purple-300 transition-all duration-300 shrink-0">
        <Gamepad2 className="w-5 h-5 text-cyan-200" strokeWidth={2.2} aria-hidden="true" />
      </div>

      {/* Text & Discount CTA */}
      <div className="flex flex-col min-w-0">
        <span className="font-display text-sm font-extrabold text-white tracking-wide leading-tight flex items-center gap-1.5 group-hover:text-cyan-200 transition-colors">
          <span>{title}</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" aria-hidden="true" />
        </span>
        <span className="text-[11.5px] font-medium text-slate-200 leading-tight mt-0.5">
          {subtitle}
        </span>
        <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors">
          <span>{ctaText}</span>
          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </button>
  );
};
