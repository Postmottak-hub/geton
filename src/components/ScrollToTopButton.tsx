import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const ScrollToTopButton: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 380);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={language === 'no' ? 'Tilbake til toppen' : 'Back to top'}
      title={language === 'no' ? 'Tilbake til toppen' : 'Back to top'}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full backdrop-blur-xl border flex items-center justify-center transition-all duration-300 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        isLight
          ? 'bg-white/95 hover:bg-sky-50 border-slate-200 hover:border-sky-400 text-sky-700 hover:text-sky-900 shadow-[0_8px_28px_rgba(15,23,42,0.14)]'
          : 'bg-[#091128]/85 hover:bg-[#0e1a3d] border-cyan-400/40 hover:border-cyan-300 text-cyan-300 hover:text-white shadow-[0_8px_28px_rgba(6,182,212,0.28)]'
      } ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};
