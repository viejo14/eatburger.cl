import { useEffect, useMemo, useState } from "react";

const LOCALE_KEY = "locale";
const DEFAULT_LOCALE = "es";
const VALID_LOCALES = ["es", "en"];

const resolveStoredLocale = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const stored = window.localStorage.getItem(LOCALE_KEY);
  return VALID_LOCALES.includes(stored) ? stored : DEFAULT_LOCALE;
};

export const useLocale = () => {
  const [locale, setLocale] = useState(resolveStoredLocale);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_KEY, locale);
    }
  }, [locale]);

  const isSpanish = useMemo(() => locale === "es", [locale]);

  return {
    locale,
    isSpanish,
    setLocale
  };
};

export const getDefaultLocale = () => DEFAULT_LOCALE;