import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Scale, AlertTriangle } from 'lucide-react';

export function PackageDetails() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Box className="w-4 h-4 text-blue-400" />
              {t('quote.width')}
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            className="w-full bg-slate-800/50 border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.0"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Box className="w-4 h-4 text-blue-400" />
              {t('quote.height')}
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            className="w-full bg-slate-800/50 border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.0"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Box className="w-4 h-4 text-blue-400" />
              {t('quote.length')}
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            className="w-full bg-slate-800/50 border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.0"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-400" />
              {t('quote.weight')}
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            className="w-full bg-slate-800/50 border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.0"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <label className="flex items-center gap-2 text-slate-300">
          <input
            type="checkbox"
            className="rounded border-slate-700 bg-slate-800/50 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
          />
          <span className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            {t('quote.fragile')}
          </span>
        </label>

        <label className="flex items-center gap-2 text-slate-300">
          <input
            type="checkbox"
            className="rounded border-slate-700 bg-slate-800/50 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
          />
          <span className="flex items-center gap-2">
            <Box className="w-4 h-4 text-blue-400" />
            {t('quote.oversized')}
          </span>
        </label>
      </div>
    </div>
  );
}