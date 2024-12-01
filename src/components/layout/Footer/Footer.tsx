import React from 'react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t mt-12 pb-20">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          {t('common.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}