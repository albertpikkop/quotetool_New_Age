import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart3, TrendingUp, Package, Clock, AlertTriangle, Star, DollarSign, Map, ArrowUp, ArrowDown } from 'lucide-react';
import { Card } from '../components/shared/Card';

export default function AnalyticsPage() {
  const { t } = useTranslation();

  const performanceMetrics = {
    onTimeDelivery: 95,
    averageCost: 45.99,
    exceptions: 12,
    customerSatisfaction: 4.8
  };

  const carrierPerformance = [
    { name: 'DHL', reliability: 96, volume: 1250 },
    { name: 'FedEx', reliability: 94, volume: 980 },
    { name: 'UPS', reliability: 95, volume: 1100 },
    { name: 'Estafeta', reliability: 92, volume: 750 }
  ];

  const monthlyTrends = [
    { month: 'Jan', shipments: 980, onTime: 940 },
    { month: 'Feb', shipments: 1100, onTime: 1050 },
    { month: 'Mar', shipments: 1250, onTime: 1200 }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t('analytics.title')}
        </h1>
        <p className="mt-2 text-gray-600">
          {t('analytics.subtitle')}
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-50 rounded-lg">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <ArrowUp className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-600">{t('analytics.metrics.onTimeDelivery')}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{performanceMetrics.onTimeDelivery}%</p>
            <p className="text-sm text-green-600 mt-2">+2.5% from last month</p>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <ArrowDown className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-600">{t('analytics.metrics.averageCost')}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">${performanceMetrics.averageCost}</p>
            <p className="text-sm text-green-600 mt-2">-3.2% from last month</p>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-amber-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <ArrowDown className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-600">{t('analytics.metrics.exceptions')}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{performanceMetrics.exceptions}</p>
            <p className="text-sm text-green-600 mt-2">-1 from last month</p>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <ArrowUp className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-600">{t('analytics.metrics.satisfaction')}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{performanceMetrics.customerSatisfaction}/5</p>
            <p className="text-sm text-green-600 mt-2">+0.2 from last month</p>
          </div>
        </Card>
      </div>

      {/* Carrier Performance */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Carrier Performance</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="space-y-4">
          {carrierPerformance.map(carrier => (
            <div key={carrier.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Package className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{carrier.name}</p>
                  <p className="text-sm text-gray-500">{carrier.volume} shipments</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${carrier.reliability}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">{carrier.reliability}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Monthly Trends */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Monthly Trends</h2>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-sm">
              <div className="w-3 h-3 bg-blue-600 rounded-full" />
              Total Shipments
            </span>
            <span className="inline-flex items-center gap-1 text-sm">
              <div className="w-3 h-3 bg-green-600 rounded-full" />
              On-Time Delivery
            </span>
          </div>
        </div>
        <div className="h-64 flex items-end justify-between gap-2">
          {monthlyTrends.map(trend => (
            <div key={trend.month} className="flex-1">
              <div className="relative h-full">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-lg"
                  style={{ height: `${(trend.shipments / 1500) * 100}%` }}
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-green-600 rounded-t-lg"
                  style={{ height: `${(trend.onTime / 1500) * 100}%` }}
                />
              </div>
              <p className="text-center text-sm font-medium text-gray-600 mt-2">{trend.month}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Test Message */}
      <p className="text-blue-600 font-medium">I have the power, I am He Man</p>
    </div>
  );
}