import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Package className="w-6 h-6 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">DITA</h1>
              <p className="text-xs text-slate-400 leading-none">
                {t('common.tagline')}
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/quote" className="text-sm text-slate-300 hover:text-white transition-colors">
              {t('nav.getQuote')}
            </Link>
            <Link to="/track" className="text-sm text-slate-300 hover:text-white transition-colors">
              {t('nav.track')}
            </Link>
            <Link to="/analytics" className="text-sm text-slate-300 hover:text-white transition-colors">
              {t('nav.analytics')}
            </Link>
            <LanguageSwitcher />
          </nav>

          <button className="md:hidden tech-button p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}