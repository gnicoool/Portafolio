import { createContext, useContext, useEffect, useState } from 'react';
import es from './translations/es.json';
import en from './translations/en.json';

const translations = { es, en };

const LanguageContext = createContext(null);

export function interpolate(str, vars) {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? '');
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') ?? 'es');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
