import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext.tsx';

interface LanguageSwitcherProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  size = 'md',
}) => {
  const { language, setLanguage } = useLanguage();

  const handleSelect = (lang: Language) => {
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  const isSmall = size === 'sm';

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center p-0.5 sm:p-1 rounded-full bg-[#080d22]/80 backdrop-blur-xl border border-cyan-400/30 shadow-[0_2px_15px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all ${className}`}
    >
      {/* Norwegian Option */}
      <button
        type="button"
        onClick={() => handleSelect('no')}
        aria-pressed={language === 'no'}
        aria-label="Bytt til Norsk"
        className={`flex items-center gap-1 sm:gap-1.5 ${
          isSmall ? 'px-2 py-1 text-[11px]' : 'px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs'
        } rounded-full font-semibold transition-all duration-200 cursor-pointer select-none ${
          language === 'no'
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)] border border-cyan-300/40'
            : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
        }`}
      >
        <span className="text-sm leading-none drop-shadow-sm" role="img" aria-hidden="true">
          🇳🇴
        </span>
        <span className="tracking-wider">NO</span>
      </button>

      {/* English Option */}
      <button
        type="button"
        onClick={() => handleSelect('en')}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
        className={`flex items-center gap-1 sm:gap-1.5 ${
          isSmall ? 'px-2 py-1 text-[11px]' : 'px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs'
        } rounded-full font-semibold transition-all duration-200 cursor-pointer select-none ${
          language === 'en'
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)] border border-cyan-300/40'
            : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
        }`}
      >
        <span className="text-sm leading-none drop-shadow-sm" role="img" aria-hidden="true">
          🇬🇧
        </span>
        <span className="tracking-wider">EN</span>
      </button>
    </div>
  );
};
