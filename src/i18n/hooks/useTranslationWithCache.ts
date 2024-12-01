import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export function useTranslationWithCache() {
  const { t, i18n } = useTranslation();

  const translateWithCache = useCallback((key: string, options = {}) => {
    const cacheKey = `i18n_${i18n.language}_${key}_${JSON.stringify(options)}`;
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
      return cached;
    }

    const translation = t(key, options);
    if (translation !== key) { // Only cache if translation exists
      sessionStorage.setItem(cacheKey, translation);
    }
    return translation;
  }, [t, i18n.language]);

  return {
    t: translateWithCache,
    i18n,
  };
}