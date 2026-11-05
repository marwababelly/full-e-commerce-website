import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './Translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // اللغة الافتراضية هي الإنجليزية 'en' كما طلبتِ
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  // تحديث اتجاه الموقع (RTL/LTR) ولغة المستند تلقائياً
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);