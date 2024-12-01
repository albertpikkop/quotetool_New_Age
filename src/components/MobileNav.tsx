import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Package, Map, Menu, LogIn, UserPlus, HelpCircle, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHapticFeedback } from '../hooks/useHapticFeedback';

export default function MobileNav() {
  const { t } = useTranslation();
  const location = useLocation();
  const { triggerHaptic } = useHapticFeedback();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainActions = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/quote', icon: Package, label: t('nav.getQuote') },
    { path: '/tracking', icon: Map, label: t('nav.trackShipment') }
  ];

  const menuItems = [
    { path: '/login', icon: LogIn, label: t('nav.login') },
    { path: '/signup', icon: UserPlus, label: t('nav.signup') },
    { path: '/faq', icon: HelpCircle, label: t('nav.faq') },
    { path: '/blog', icon: BookOpen, label: t('nav.blog') }
  ];

  const handleNavClick = () => {
    triggerHaptic('medium');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    triggerHaptic('light');
  };

  return (
    <>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t safe-area-bottom z-40 max-[1056px]:block hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 h-16">
            {mainActions.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                onClick={handleNavClick}
                className={`flex flex-col items-center justify-center touch-target ${
                  location.pathname === path 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1 font-medium">{label}</span>
              </Link>
            ))}
            <button
              onClick={toggleMenu}
              className={`flex flex-col items-center justify-center touch-target transition-colors ${
                isMenuOpen ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Menu className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
              <span className="text-xs mt-1 font-medium">{t('nav.menu')}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Panel with Animation */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 max-[1056px]:block hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            toggleMenu();
          }
        }}
      >
        <div
          className={`absolute bottom-[4.5rem] left-4 right-4 bg-white rounded-lg shadow-xl safe-area-bottom transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="p-2 grid grid-cols-2 gap-2">
            {menuItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => {
                  handleNavClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors active:bg-gray-100"
              >
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}