import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Package, ArrowRight, Globe, Truck, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const particles = Array(20).fill(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#1A1F2E] to-[#2A2F3E] flex items-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {particles.map((_, index) => (
            <div
              key={index}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              <div className="w-1 h-1 bg-blue-400 rounded-full opacity-50" />
            </div>
          ))}
        </div>
      </div>

      {/* Innovative Floating Elements */}
      <div className="absolute right-0 h-full w-1/2 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 right-10 w-72 h-72 rounded-3xl"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            backdropFilter: 'blur(10px)',
            transform: 'rotate(10deg)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-32 w-56 h-56 rounded-3xl"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))',
            backdropFilter: 'blur(10px)',
            transform: 'rotate(-15deg)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        
        {/* Animated Icons */}
        <div className="absolute top-1/3 right-24 animate-bounce delay-100">
          <Globe className="w-8 h-8 text-blue-400 opacity-50" />
        </div>
        <div className="absolute top-2/3 right-48 animate-bounce delay-300">
          <Truck className="w-8 h-8 text-purple-400 opacity-50" />
        </div>
        <div className="absolute bottom-1/4 right-16 animate-bounce delay-500">
          <Box className="w-8 h-8 text-indigo-400 opacity-50" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div 
          className={\`max-w-3xl transform transition-all duration-1000 \${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }\`}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
            <span className="text-sm text-blue-400 font-medium">
              {t('home.hero.badge')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6">
            {t('home.hero.title')}
          </h1>
          
          <p className="text-xl text-slate-300/80 mb-8 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/quote" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <Package className="w-5 h-5" />
              <span>{t('home.hero.quoteButton')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/track" 
              className="px-8 py-4 bg-slate-800/60 hover:bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              {t('home.hero.trackButton')}
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
            {[
              { label: 'Active Users', value: '10K+' },
              { label: 'Countries', value: '50+' },
              { label: 'Deliveries', value: '1M+' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={\`text-center transform transition-all duration-1000 delay-\${index * 200} \${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }\`}
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}