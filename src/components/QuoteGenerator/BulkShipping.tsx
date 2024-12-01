import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package, DollarSign } from 'lucide-react';

export function BulkShipping() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-400" />
              {t('quote.monthlyShipments')}
            </span>
          </label>
          <input
            type="number"
            min="0"
            className="w-full bg-slate-800/50 border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-blue-400" />
              {t('quote.averageShipmentCost')}
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            className="w-full bg-slate-800/50 border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-2">
          {t('quote.bulkDiscounts.title')}
        </h4>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            <span className="line-clamp-2">{t('quote.bulkDiscounts.tier1')}</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            <span className="line-clamp-2">{t('quote.bulkDiscounts.tier2')}</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            <span className="line-clamp-2">{t('quote.bulkDiscounts.tier3')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}