import React from 'react';
import { useTranslation } from 'react-i18next';
import { Truck, Zap, Clock } from 'lucide-react';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

type ServiceLevel = 'standard' | 'express' | 'same_day';

interface ServiceOptionsSelectorProps {
  selected: ServiceLevel;
  onChange: (level: ServiceLevel) => void;
}

export default function ServiceOptionsSelector({
  selected,
  onChange
}: ServiceOptionsSelectorProps) {
  const { t } = useTranslation();
  const { triggerHaptic } = useHapticFeedback();

  const handleSelect = (level: ServiceLevel) => {
    triggerHaptic('medium');
    onChange(level);
  };

  const options = [
    {
      id: 'standard',
      icon: Truck,
      title: t('shipping.services.standard.title'),
      description: t('shipping.services.standard.description'),
      estimate: t('shipping.services.standard.estimate')
    },
    {
      id: 'express',
      icon: Zap,
      title: t('shipping.services.express.title'),
      description: t('shipping.services.express.description'),
      estimate: t('shipping.services.express.estimate')
    },
    {
      id: 'same_day',
      icon: Clock,
      title: t('shipping.services.sameDay.title'),
      description: t('shipping.services.sameDay.description'),
      estimate: t('shipping.services.sameDay.estimate')
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {options.map(({ id, icon: Icon, title, description, estimate }) => (
        <button
          key={id}
          onClick={() => handleSelect(id as ServiceLevel)}
          className={`relative p-4 rounded-lg border-2 text-left transition-all ${
            selected === id
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${
              selected === id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500 mt-1">{description}</p>
              <p className="text-sm font-medium text-blue-600 mt-2">{estimate}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}