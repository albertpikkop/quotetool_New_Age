import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import MobileNav from './MobileNav';

export default function Layout() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pb-24">
        <Outlet />
      </main>

      <MobileNav />

      <footer className="bg-white border-t mt-12 pb-20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            {t('common.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  );
}