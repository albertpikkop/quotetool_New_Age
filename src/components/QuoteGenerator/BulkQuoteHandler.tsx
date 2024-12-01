import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Truck, DollarSign } from 'lucide-react';
import { calculateBulkDiscount } from '../../utils/calculations/shippingCalculator';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

interface BulkQuoteHandlerProps {
  onBulkDiscountChange: (discount: number) => void;
}

export default function BulkQuoteHandler({ onBulkDiscountChange }: BulkQuoteHandlerProps) {
  const { t } = useTranslation();
  const { triggerHaptic } = useHapticFeedback();
  const [monthlyShipments, setMonthlyShipments] = useState<number>(0);
  const [averageShipmentCost, setAverageShipmentCost] = useState<number>(0);

  const handleCalculate = () => {
    triggerHaptic('medium');
    const discount = calculateBulkDiscount(monthlyShipments, averageShipmentCost);
    onBulkDiscountChange(discount);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Package className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">
            {t('shipping.bulk.title')}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {t('shipping.bulk.description')}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-1">
              <Truck className="w-4 h-4" />
              {t('shipping.bulk.monthlyShipments')}
            </span>
          </label>
          <input
            type="number"
            min="0"
            value={monthlyShipments}
            onChange={(e) => setMonthlyShipments(parseInt(e.target.value, 10))}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              {t('shipping.bulk.averageCost')}
            </span>
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={averageShipmentCost}
            onChange={(e) => setAverageShipmentCost(parseFloat(e.target.value))}
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {t('shipping.bulk.calculate')}
      </button>
    </div>
  );
}