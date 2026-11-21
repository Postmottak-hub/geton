import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationSchema } from '../i18n/translations.ts';

export type Language = 'no' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANG_STORAGE_KEY = 'geton_lang_v2';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined' && window.location.search) {
        const params = new URLSearchParams(window.location.search);
        const queryLang = params.get('lang')?.toLowerCase();
        if (queryLang === 'en') return 'en';
        if (queryLang === 'nb' || queryLang === 'no') return 'no';
      }
      const saved = localStorage.getItem(LANG_STORAGE_KEY) as Language;
      if (saved === 'no' || saved === 'en') {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'no';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      document.documentElement.lang = lang === 'no' ? 'nb' : 'en';
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        if (lang === 'en') {
          url.searchParams.set('lang', 'en');
        } else {
          url.searchParams.delete('lang');
        }
        const nextUrl = `${url.pathname}${url.search}${url.hash}`;
        if (nextUrl !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
          window.history.replaceState(null, '', nextUrl);
        }
      }
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'no' ? 'nb' : 'en';
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
