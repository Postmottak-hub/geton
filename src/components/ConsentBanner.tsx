import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';
import {
  getConsentStatus,
  setConsentStatus,
  initializeAnalyticsIfConsented,
} from '../utils/analytics.ts';

export const ConsentBanner: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const status = getConsentStatus();
    if (status === 'accepted') {
      initializeAnalyticsIfConsented();
      setVisible(false);
    } else if (status === 'pending') {
      // Delay gently so initial LCP/hero view isn't cluttered on arrival
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    setConsentStatus('accepted');
    setVisible(false);
  };

  const handleReject = () => {
    setConsentStatus('rejected');
    setVisible(false);
  };

  return (
    <aside
      aria-label={language === 'no' ? 'Informasjonskapsler og personvern' : 'Cookies and privacy'}
      className={`fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:max-w-sm z-40 rounded-2xl backdrop-blur-xl border p-4 animate-in fade-in slide-in-from-bottom-4 duration-300 ${
        isLight
          ? 'bg-white/95 border-slate-200 text-slate-800 shadow-[0_14px_40px_rgba(15,23,42,0.12)]'
          : 'bg-[#070d20]/95 border-cyan-400/25 text-slate-200 shadow-[0_12px_40px_rgba(0,0,0,0.65)]'
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div
          className={`flex items-center gap-2 text-xs font-semibold ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}
        >
          <ShieldCheck
            className={`w-4 h-4 shrink-0 ${isLight ? 'text-sky-600' : 'text-cyan-400'}`}
          />
          <span>{language === 'no' ? 'Personvern & analyse' : 'Privacy & Analytics'}</span>
        </div>
        <button
          type="button"
          onClick={handleReject}
          aria-label={language === 'no' ? 'Lukk personvernvarsel' : 'Dismiss privacy banner'}
          className={`p-0.5 rounded cursor-pointer ${
            isLight ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'
          }`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p
        className={`text-xs leading-relaxed mb-3 ${
          isLight ? 'text-slate-600' : 'text-slate-300'
        }`}
      >
        {language === 'no'
          ? 'Vi bruker kun nødvendig lagring for språkvalg, og laster ingen valgfri trafikkmåling før du samtykker.'
          : 'We only store essential preferences like language selection, and never load optional analytics without your consent.'}
      </p>

      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={handleReject}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
            isLight
              ? 'text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border-slate-200'
              : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border-white/10'
          }`}
        >
          {language === 'no' ? 'Kun nødvendige' : 'Essential only'}
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            isLight
              ? 'text-white bg-sky-600 hover:bg-sky-700'
              : 'text-slate-950 bg-cyan-400 hover:bg-cyan-300'
          }`}
        >
          {language === 'no' ? 'Godta analyse' : 'Accept analytics'}
        </button>
      </div>
    </aside>
  );
};
