import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="glass-card px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-colors"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-blue-400" />
      <span className="text-sm font-medium text-white">
        {i18n.language === 'en' ? 'EN' : 'ES'}
      </span>
    </button>
  );
}