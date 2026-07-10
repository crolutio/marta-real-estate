"use client";

import * as React from "react";
import {
  DEFAULT_LOCALE,
  dictionaries,
  resolvePath,
  type Dictionary,
  type Locale,
} from "@/lib/i18n/dictionaries";

const STORAGE_KEY = "locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dict: Dictionary;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "es" || value === "de";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE);

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const t = React.useCallback(
    (key: string) => {
      return (
        resolvePath(dictionaries[locale], key) ??
        resolvePath(dictionaries.en, key) ??
        key
      );
    },
    [locale]
  );

  const value = React.useMemo(
    () => ({ locale, setLocale, t, dict: dictionaries[locale] }),
    [locale, setLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextValue {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return ctx;
}
