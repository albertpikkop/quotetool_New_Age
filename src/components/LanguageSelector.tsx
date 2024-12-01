import React from 'react';
import { useAppTranslation } from '../i18n/components/TranslationProvider';

export default function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useAppTranslation();

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
      aria-label={`Switch to ${currentLanguage === 'en' ? 'Spanish' : 'English'}`}
    >
      <span className="text-base leading-none" aria-hidden="true">
        {currentLanguage === 'en' ? '🇺🇸' : '🇲🇽'}
      </span>
      <span className="font-medium hidden sm:inline">
        {currentLanguage.toUpperCase()}
      </span>
    </button>
  );
}