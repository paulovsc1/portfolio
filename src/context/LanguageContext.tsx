'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/types';
import { pt, Dictionary } from '@/locales/pt';
import { en } from '@/locales/en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
}

const dictionaries: Record<Language, Dictionary> = { pt, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('portfolio_lang') as Language;
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(nextLang);
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: dictionaries[language] || pt,
  };

  return (
    <LanguageContext.Provider value={value}>
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
