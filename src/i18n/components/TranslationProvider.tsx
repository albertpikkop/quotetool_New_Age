import React, { createContext, useContext, useCallback } from 'react';
import { useTranslationWithCache } from '../hooks/useTranslationWithCache';

interface TranslationContextType {
  translate: (key: string, options?: any) => string;
  changeLanguage: (lang: string) => Promise<void>;
  currentLanguage: string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslationWithCache();

  const translate = useCallback((key: string, options?: any) => {
    return t(key, options);
  }, [t]);

  const changeLanguage = useCallback(async (lang: string) => {
    await i18n.changeLanguage(lang);
  }, [i18n]);

  return (
    <TranslationContext.Provider value={{
      translate,
      changeLanguage,
      currentLanguage: i18n.language,
    }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useAppTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useAppTranslation must be used within a TranslationProvider');
  }
  return context;
}