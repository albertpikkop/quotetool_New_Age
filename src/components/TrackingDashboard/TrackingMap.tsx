import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrackingInfo, WeatherData, TrafficData } from '../../types/shipping';
import { MapIcon, CloudRain, Car } from 'lucide-react';

interface TrackingMapProps {
  tracking: TrackingInfo;
  weather: WeatherData;
  traffic: TrafficData;
}

export default function TrackingMap({ tracking, weather, traffic }: TrackingMapProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MapIcon className="w-5 h-5" />
          {t('tracking.title')}
        </h2>
        
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-blue-500" />
            <span>{t(`weather.${weather.condition.toLowerCase()}`)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-red-500" />
            <span>{t('tracking.congestionLevel', { level: traffic.congestionLevel })}</span>
          </div>
        </div>
      </div>

      <div className="aspect-video bg-gray-100 rounded-lg mb-4">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          {t('tracking.mapView')}
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-medium">
          {t('tracking.currentLocation')}: {tracking.currentLocation.address}
        </p>
        <p className="text-gray-600">
          {t('tracking.estimatedDelivery')}: {tracking.estimatedDelivery.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}