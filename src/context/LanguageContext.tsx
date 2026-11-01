import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationSchema } from '../i18n/translations.ts';

export type Language = 'no' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('geton_lang') as Language;
      if (saved === 'no' || saved === 'en') {
        return saved;
      }
      // Check browser navigator language
      if (typeof navigator !== 'undefined' && navigator.language) {
        const navLang = navigator.language.toLowerCase();
        if (navLang.startsWith('nb') || navLang.startsWith('nn') || navLang.startsWith('no')) {
          return 'no';
        }
      }
    } catch {
      // Fallback
    }
    return 'no'; // Default to Norwegian as requested for Norwegian studio
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('geton_lang', lang);
      document.documentElement.lang = lang === 'no' ? 'no' : 'en';
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'no' ? 'no' : 'en';
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
