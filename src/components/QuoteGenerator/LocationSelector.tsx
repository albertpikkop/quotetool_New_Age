import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

export function LocationSelector() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            {t('quote.origin')}
          </span>
        </label>
        <input
          type="text"
          className="w-full bg-slate-800/50 border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={t('quote.zipCodePlaceholder')}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            {t('quote.destination')}
          </span>
        </label>
        <input
          type="text"
          className="w-full bg-slate-800/50 border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={t('quote.zipCodePlaceholder')}
        />
      </div>
    </div>
  );
}