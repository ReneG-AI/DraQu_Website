import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import zh from './locales/zh.json';
import ar from './locales/ar.json';
import hi from './locales/hi.json';

type Translation = Record<string, string>;

const resources = {
  en: { translation: en as Translation },
  es: { translation: es as Translation },
  fr: { translation: fr as Translation },
  zh: { translation: zh as Translation },
  ar: { translation: ar as Translation },
  hi: { translation: hi as Translation },
};

const supportedLanguages = Object.keys(resources);

const normalizeLanguage = (value: string | null | undefined) => {
  if (!value) return null;
  const base = value.toLowerCase().split('-')[0];
  return supportedLanguages.includes(base) ? base : null;
};

const getStoredLanguage = () => {
  if (typeof localStorage === 'undefined') return null;
  return normalizeLanguage(localStorage.getItem('draqu-language'));
};

const getNavigatorLanguage = () => {
  if (typeof navigator === 'undefined') return null;
  const candidates = Array.isArray(navigator.languages)
    ? [...navigator.languages, navigator.language]
    : [navigator.language];
  for (const candidate of candidates) {
    const normalized = normalizeLanguage(candidate);
    if (normalized) return normalized;
  }
  return null;
};

i18n.use(initReactI18next).init({
  resources,
  lng: getStoredLanguage() || getNavigatorLanguage() || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
