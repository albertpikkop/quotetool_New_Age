import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Package, MapPin, Clock, Cloud, Car, AlertTriangle, Search } from 'lucide-react';
import { useHapticFeedback } from '../hooks/useHapticFeedback';
import { Card } from '../components/shared/Card';

export default function TrackingPage() {
  const { t } = useTranslation();
  const { triggerHaptic } = useHapticFeedback();
  const [trackingNumber, setTrackingNumber] = useState('');

  // Mock data for demonstration
  const mockTracking = {
    carrier: "Express Carrier",
    trackingNumber: "1234567890",
    status: "In Transit",
    currentLocation: {
      address: "New York, NY",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    estimatedDelivery: new Date("2024-03-19"),
    lastUpdate: "2 hours ago",
    progress: 65,
    onSchedule: true
  };

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerHaptic('medium');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Search Section */}
      <Card className="p-6">
        <form onSubmit={handleTrackingSubmit} className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Search className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              {t('tracking.enterNumber')}
            </h2>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Package className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t('tracking.numberPlaceholder')}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              {t('tracking.track')}
            </button>
          </div>
        </form>
      </Card>

      {/* Tracking Result */}
      <Card>
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {mockTracking.carrier}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t('tracking.number')}: {mockTracking.trackingNumber}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {mockTracking.status}
              </span>
              {mockTracking.onSchedule && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {t('tracking.onSchedule')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Map and Info Grid */}
        <div className="grid lg:grid-cols-2 gap-6 p-6">
          {/* Map View */}
          <div className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden">
            {/* Weather and Traffic Overlay */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm text-sm">
                <Cloud className="w-4 h-4 text-blue-500" />
                <span>{t('weather.sunny')}</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm text-sm">
                <Car className="w-4 h-4 text-red-500" />
                <span>35%</span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              {t('tracking.mapView')}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{t('tracking.progress')}</span>
                  <span>{mockTracking.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${mockTracking.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tracking Details */}
          <div className="space-y-6">
            {/* Current Location */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                {t('tracking.currentLocation')}
              </h4>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {mockTracking.currentLocation.address}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('tracking.lastUpdate')}: {mockTracking.lastUpdate}
                  </p>
                </div>
              </div>
            </div>

            {/* Estimated Delivery */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                {t('tracking.estimatedDelivery')}
              </h4>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {mockTracking.estimatedDelivery.toLocaleDateString()}
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    {t('tracking.onSchedule')}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="border-t pt-6">
              <h4 className="text-sm font-medium text-gray-500 mb-4">
                {t('tracking.timeline')}
              </h4>
              <div className="space-y-6">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      {index < 2 && <div className="w-px h-full bg-gray-200 flex-1" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="font-medium text-gray-900">
                        {t('tracking.eventTitle')}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {t('tracking.eventDescription')}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {t('tracking.eventTime')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}