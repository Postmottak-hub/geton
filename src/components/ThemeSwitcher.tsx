import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ThemeSwitcherProps {
  className?: string;
  size?: 'sm' | 'md';
  forceDarkSurface?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = '',
  size = 'md',
  forceDarkSurface = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const isLight = theme === 'light';
  const useLightPill = forceDarkSurface ? false : isLight;

  const label = isLight
    ? language === 'no'
      ? 'LYS'
      : 'LIGHT'
    : language === 'no'
    ? 'MØRK'
    : 'DARK';

  const ariaLabel = isLight
    ? language === 'no'
      ? 'Valgt tema: Lys modus. Trykk for å bytte til mørk modus'
      : 'Selected theme: Light mode. Click to switch to dark mode'
    : language === 'no'
    ? 'Valgt tema: Mørk modus. Trykk for å bytte til lys modus'
    : 'Selected theme: Dark mode. Click to switch to light mode';

  const title = isLight
    ? language === 'no'
      ? 'Bytt til mørk modus'
      : 'Switch to dark mode'
    : language === 'no'
    ? 'Bytt til lys modus'
    : 'Switch to light mode';

  const sizeClasses =
    size === 'sm'
      ? 'h-8 px-2 sm:px-2.5 text-[11px] gap-1 sm:gap-1.5'
      : 'h-9 px-3 text-xs gap-2';

  const iconClasses = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  const surfaceClasses = useLightPill
    ? 'bg-white/95 hover:bg-white border-slate-300 hover:border-slate-900 text-slate-900 shadow-[0_2px_10px_rgba(15,23,42,0.06)]'
    : 'bg-white/[0.08] hover:bg-white/[0.15] border-white/20 hover:border-cyan-400/60 text-white shadow-[0_2px_14px_rgba(0,0,0,0.35)]';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      aria-pressed={isLight}
      title={title}
      className={`${sizeClasses} ${surfaceClasses} inline-flex items-center justify-center rounded-full backdrop-blur-xl border font-bold tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap shrink-0 ${className}`}
    >
      {isLight ? (
        <Sun className={`${iconClasses} text-amber-500 shrink-0`} aria-hidden="true" />
      ) : (
        <Moon className={`${iconClasses} text-cyan-300 shrink-0`} aria-hidden="true" />
      )}
      <span>{label}</span>
    </button>
  );
};
