import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

interface LanguageSwitcherProps {
  className?: string;
  size?: 'sm' | 'md';
  forceDarkSurface?: boolean;
}

const NorwayFlag: React.FC<{ className?: string }> = ({ className = 'w-4 h-3' }) => (
  <svg
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} rounded-[2px] shrink-0 shadow-xs`}
    aria-hidden="true"
  >
    <rect width="22" height="16" fill="#BA0C2F" />
    <rect x="6" width="4" height="16" fill="#FFFFFF" />
    <rect y="6" width="22" height="4" fill="#FFFFFF" />
    <rect x="7" width="2" height="16" fill="#00205B" />
    <rect y="7" width="22" height="2" fill="#00205B" />
  </svg>
);

const EnglishFlag: React.FC<{ className?: string }> = ({ className = 'w-4 h-3' }) => (
  <svg
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} rounded-[2px] shrink-0 shadow-xs`}
    aria-hidden="true"
  >
    <rect width="22" height="16" fill="#012169" />
    <path d="M0 0L22 16M22 0L0 16" stroke="#FFFFFF" strokeWidth="2.8" />
    <path d="M0 0L22 16M22 0L0 16" stroke="#C8102E" strokeWidth="1.4" />
    <rect x="9" width="4" height="16" fill="#FFFFFF" />
    <rect y="6" width="22" height="4" fill="#FFFFFF" />
    <rect x="9.8" width="2.4" height="16" fill="#C8102E" />
    <rect y="6.8" width="22" height="2.4" fill="#C8102E" />
  </svg>
);

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  size = 'md',
  forceDarkSurface = false,
}) => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();
  const isNorwegian = language === 'no';
  const isLight = forceDarkSurface ? false : theme === 'light';

  const handleToggle = () => {
    setLanguage(isNorwegian ? 'en' : 'no');
  };

  const sizeClasses =
    size === 'sm' ? 'h-8 px-2.5 text-[11px] gap-1.5' : 'h-9 px-3 text-xs gap-2';

  const surfaceClasses = isLight
    ? 'bg-white/90 hover:bg-white border-slate-200/90 hover:border-sky-400 text-slate-800 shadow-[0_2px_12px_rgba(15,23,42,0.08)]'
    : 'bg-white/[0.08] hover:bg-white/[0.15] border-white/20 hover:border-cyan-400/60 text-white shadow-[0_2px_14px_rgba(0,0,0,0.35)]';

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={
        isNorwegian
          ? 'Valgt språk: Norsk (NO). Trykk for å bytte til engelsk (EN)'
          : 'Selected language: English (EN). Click to switch to Norwegian (NO)'
      }
      title={isNorwegian ? 'Bytt til engelsk (EN)' : 'Switch to Norwegian (NO)'}
      className={`${sizeClasses} ${surfaceClasses} inline-flex items-center justify-center rounded-full backdrop-blur-xl border font-bold tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap shrink-0 ${className}`}
    >
      {isNorwegian ? (
        <>
          <NorwayFlag className={size === 'sm' ? 'w-4 h-3' : 'w-[18px] h-[13px]'} />
          <span>NO</span>
        </>
      ) : (
        <>
          <EnglishFlag className={size === 'sm' ? 'w-4 h-3' : 'w-[18px] h-[13px]'} />
          <span>EN</span>
        </>
      )}
    </button>
  );
};
