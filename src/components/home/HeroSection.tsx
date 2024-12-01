import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen tech-bg flex items-center relative overflow-hidden">
      <div className="absolute inset-0 data-grid opacity-20" />
      
      {/* Floating Elements - Moved to a more strategic position */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-1/4 right-10 w-64 h-64 glass-card rounded-2xl animate-float" 
               style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }} />
          <div className="absolute bottom-1/3 right-32 w-48 h-48 glass-card rounded-2xl animate-float delay-1000"
               style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            {t('home.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/quote" 
              className="tech-button group flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5" />
              {t('home.hero.quoteButton')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/track" 
              className="tech-button bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2"
            >
              {t('home.hero.trackButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}