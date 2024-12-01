import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Map, BarChart, Zap } from 'lucide-react';
import { Card } from '../shared/Card';

export function FeaturesGrid() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Package,
      title: t('features.quote.title'),
      description: t('features.quote.description')
    },
    {
      icon: Map,
      title: t('features.tracking.title'),
      description: t('features.tracking.description')
    },
    {
      icon: BarChart,
      title: t('features.analytics.title'),
      description: t('features.analytics.description')
    },
    {
      icon: Zap,
      title: t('features.optimization.title'),
      description: t('features.optimization.description')
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-300">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}