import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package } from '../../types/shipping';
import { Box, Scale, AlertTriangle } from 'lucide-react';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

interface PackageDetailsFormProps {
  values: Package;
  onChange: (updates: Partial<Package>) => void;
}

export default function PackageDetailsForm({ values, onChange }: PackageDetailsFormProps) {
  const { t } = useTranslation();
  const { triggerHaptic } = useHapticFeedback();

  const handleInputChange = (field: keyof Package, value: number | boolean) => {
    triggerHaptic('light');
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-1">
              <Box className="w-4 h-4" />
              {t('shipping.dimensions.width')} (in)
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={values.width || ''}
            onChange={(e) => handleInputChange('width', parseFloat(e.target.value))}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-1">
              <Box className="w-4 h-4" />
              {t('shipping.dimensions.height')} (in)
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={values.height || ''}
            onChange={(e) => handleInputChange('height', parseFloat(e.target.value))}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-1">
              <Box className="w-4 h-4" />
              {t('shipping.dimensions.length')} (in)
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={values.length || ''}
            onChange={(e) => handleInputChange('length', parseFloat(e.target.value))}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-1">
              <Scale className="w-4 h-4" />
              {t('shipping.dimensions.weight')} (lbs)
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={values.weight || ''}
            onChange={(e) => handleInputChange('weight', parseFloat(e.target.value))}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={values.isFragile}
            onChange={(e) => handleInputChange('isFragile', e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="flex items-center gap-1 text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            {t('shipping.options.fragile')}
          </span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={values.isOversized}
            onChange={(e) => handleInputChange('isOversized', e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="flex items-center gap-1 text-sm">
            <Box className="w-4 h-4 text-blue-500" />
            {t('shipping.options.oversized')}
          </span>
        </label>
      </div>
    </div>
  );
}