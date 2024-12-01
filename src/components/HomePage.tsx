import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Map, BarChart, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Logo3D } from './Logo3D';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <section className="text-center space-y-6 py-12">
        <Logo3D />
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-tight">
          {t('home.hero.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t('home.hero.subtitle')}
        </p>
      </section>

      {/* Rest of the HomePage component remains the same */}
    </div>
  );
}

export default HomePage;