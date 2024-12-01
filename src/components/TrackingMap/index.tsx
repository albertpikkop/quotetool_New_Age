import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cloud, Car, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { TrackingInfo, WeatherData, TrafficData } from '../../types/shipping';

interface TrackingMapProps {
  tracking: TrackingInfo;
  weather: WeatherData;
  traffic: TrafficData;
}

export default function TrackingMap({ tracking, weather, traffic }: TrackingMapProps) {
  const { t } = useTranslation();

  // Mock route coordinates for demonstration
  const routeCoordinates = [
    { lat: 40.7128, lng: -74.0060 }, // New York
    { lat: 39.9526, lng: -75.1652 }, // Philadelphia
    { lat: 38.9072, lng: -77.0369 }, // Washington DC
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Map Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                {tracking.currentLocation.address}
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                {t('tracking.lastUpdate')}: 2 hours ago
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-lg">
              <Cloud className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                {t('weather.sunny')}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 rounded-lg">
              <Car className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900">
                35%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div className="w-full aspect-video bg-blue-50">
          {/* Interactive Map Container */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
            {/* Route Line */}
            <svg className="absolute inset-0 w-full h-full">
              <path
                d="M 200,400 L 400,300 L 600,200"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeDasharray="6 3"
              />
              {/* Current Location Marker */}
              <circle
                cx="400"
                cy="300"
                r="6"
                fill="#3b82f6"
                stroke="white"
                strokeWidth="2"
              />
              {/* Destination Marker */}
              <circle
                cx="600"
                cy="200"
                r="6"
                fill="#ef4444"
                stroke="white"
                strokeWidth="2"
              />
            </svg>

            {/* Weather Overlay */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">72°F</p>
                    <p className="text-xs text-gray-600">Clear skies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Information */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">
                      {t('tracking.estimatedDelivery')}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">
                    March 19, 2024
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">65%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{ width: '65%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Status */}
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-gray-900">On Schedule</span>
          </div>
          {traffic.congestionLevel > 30 && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-900">
                Moderate Traffic
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}