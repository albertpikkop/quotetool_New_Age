import React, { useState } from 'react';
import { X, Package } from 'lucide-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthView = 'login' | 'register';

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [view, setView] = useState<AuthView>('login');
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {view === 'login' ? t('auth.welcomeBack') : t('auth.createAccount')}
            </h2>
          </div>

          <div className="relative">
            <div className={`transition-all duration-300 ${
              view === 'login' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              {view === 'login' && (
                <LoginForm
                  onSuccess={onClose}
                  onRegisterClick={() => setView('register')}
                />
              )}
            </div>
            <div className={`absolute top-0 left-0 w-full transition-all duration-300 ${
              view === 'register' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
              {view === 'register' && (
                <RegisterForm
                  onSuccess={onClose}
                  onLoginClick={() => setView('login')}
                />
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-600">
          {view === 'login' ? (
            <>
              {t('auth.noAccount')}{' '}
              <button
                onClick={() => setView('register')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {t('auth.registerLink')}
              </button>
            </>
          ) : (
            <>
              {t('auth.hasAccount')}{' '}
              <button
                onClick={() => setView('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {t('auth.loginLink')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}