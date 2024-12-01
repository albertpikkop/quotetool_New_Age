import React from 'react';
import { useTranslation } from 'react-i18next';
import { Truck, Zap, Clock } from 'lucide-react';

export function ServiceSelector() {
  const { t } = useTranslation();
  const [selected, setSelected] = React.useState('standard');

  const services = [
    {
      id: 'standard',
      icon: Truck,
      title: t('quote.services.standard.title'),
      description: t('quote.services.standard.description'),
      estimate: t('quote.services.standard.estimate')
    },
    {
      id: 'express',
      icon: Zap,
      title: t('quote.services.express.title'),
      description: t('quote.services.express.description'),
      estimate: t('quote.services.express.estimate')
    },
    {
      id: 'sameDay',
      icon: Clock,
      title: t('quote.services.sameDay.title'),
      description: t('quote.services.sameDay.description'),
      estimate: t('quote.services.sameDay.estimate')
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map(({ id, icon: Icon, title, description, estimate }) => (
        <button
          key={id}
          onClick={() => setSelected(id)}
          className={`relative p-4 rounded-xl border-2 text-left transition-all ${
            selected === id
              ? 'border-blue-500 bg-blue-500/10'
              : 'border-slate-700 hover:border-slate-600'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg shrink-0 ${
              selected === id ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
            }`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-white">{title}</h3>
              <p className="text-sm text-slate-400 mt-1 line-clamp-2">{description}</p>
              <p className="text-sm font-medium text-blue-400 mt-2">{estimate}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}