import React from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, BarChart, Activity } from 'lucide-react';

interface PerformanceMetricsProps {
  metrics: {
    onTimeDelivery: number;
    averageCost: number;
    exceptions: number;
    customerSatisfaction: number;
  };
}

export default function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-500">{t('analytics.metrics.onTimeDelivery')}</h3>
          <LineChart className="w-5 h-5 text-green-500" />
        </div>
        <p className="text-2xl font-bold">{metrics.onTimeDelivery}%</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-500">{t('analytics.metrics.averageCost')}</h3>
          <BarChart className="w-5 h-5 text-blue-500" />
        </div>
        <p className="text-2xl font-bold">${metrics.averageCost}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-500">{t('analytics.metrics.exceptions')}</h3>
          <Activity className="w-5 h-5 text-red-500" />
        </div>
        <p className="text-2xl font-bold">{metrics.exceptions}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-500">{t('analytics.metrics.satisfaction')}</h3>
          <Activity className="w-5 h-5 text-yellow-500" />
        </div>
        <p className="text-2xl font-bold">{metrics.customerSatisfaction}/5</p>
      </div>
    </div>
  );
}