import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../contexts/AuthContext';
import LanguageSelector from '../../shared/LanguageSelector';

export function Header() {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/quote', label: t('nav.getQuote') },
    { path: '/tracking', label: t('nav.trackShipment') },
    { path: '/partners', label: t('nav.partners') },
    { path: '/analytics', label: t('nav.analytics') }
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        {/* Main Navigation Bar */}
        <div className="h-12 px-2 flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-1.5">
            <div className="relative">
              <Package className="w-4 h-4 text-blue-600" />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold leading-none tracking-tight">DITA</span>
              <span className="text-[0.6rem] leading-tight text-gray-500 font-medium">
                {t('common.fullName.line1')}
              </span>
              <span className="text-[0.6rem] leading-tight text-gray-500 font-medium">
                {t('common.fullName.line2')}
              </span>
            </div>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Auth Buttons */}
            {!isAuthenticated && (
              <div className="flex items-center gap-1.5">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <span className="hidden sm:inline">{t('nav.login')}</span>
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <span className="hidden sm:inline">{t('nav.signup')}</span>
                </Link>
              </div>
            )}

            <LanguageSelector />
          </div>
        </div>

        {/* Secondary Navigation - Always visible */}
        <nav className="flex border-t overflow-x-auto scrollbar-thin">
          {menuItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex-shrink-0 px-3 py-2 text-xs font-medium transition-colors ${
                location.pathname === path
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}