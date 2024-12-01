import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Truck, Map, Cloud, Activity } from 'lucide-react';

export default function PartnersPage() {
  const { t } = useTranslation();

  const carriers = [
    { name: 'DHL', logo: 'https://images.unsplash.com/photo-1622044939799-a511e1496f78?auto=format&w=100&h=100&fit=crop' },
    { name: 'FedEx', logo: 'https://images.unsplash.com/photo-1585982152920-6a4813952955?auto=format&w=100&h=100&fit=crop' },
    { name: 'UPS', logo: 'https://images.unsplash.com/photo-1585982150128-7b8b24c2c561?auto=format&w=100&h=100&fit=crop' },
    { name: 'Paquete Express', logo: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&w=100&h=100&fit=crop' },
    { name: 'J&T Express', logo: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&w=100&h=100&fit=crop' },
    { name: 'Estafeta', logo: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&w=100&h=100&fit=crop' },
    { name: 'Sendex Express', logo: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&w=100&h=100&fit=crop' },
    { name: 'Borzo', logo: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&w=100&h=100&fit=crop' },
    { name: 'Volaris', logo: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&w=100&h=100&fit=crop' }
  ];

  const integrations = [
    {
      category: t('partners.integrations.categories.maps'),
      icon: <Map className="w-6 h-6" />,
      services: [
        'Maps JavaScript API',
        'Maps Elevation API',
        'Maps Static API',
        'Street View API',
        'Geocoding API',
        'Places API',
        'Time Zone API',
        'Distance Matrix API',
        'Roads API',
        'Route Optimization API'
      ]
    },
    {
      category: t('partners.integrations.categories.weather'),
      icon: <Cloud className="w-6 h-6" />,
      services: [
        'Weather API',
        'Air Quality API',
        'Pollen API',
        'Aerial View API'
      ]
    },
    {
      category: t('partners.integrations.categories.analytics'),
      icon: <Activity className="w-6 h-6" />,
      services: [
        'INEGI Integration',
        'Traffic Analysis',
        'Route Optimization',
        'Delivery Performance Analytics'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('partners.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('partners.subtitle')}
        </p>
      </div>

      {/* Carriers Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
          <Truck className="w-6 h-6 text-blue-600" />
          {t('partners.carriers.title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carriers.map((carrier) => (
            <div
              key={carrier.name}
              className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-medium text-gray-900">{carrier.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-600" />
          {t('partners.integrations.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service} className="text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}