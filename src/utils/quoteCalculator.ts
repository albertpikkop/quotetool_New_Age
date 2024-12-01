import { Package, Location, ShippingQuote } from '../types/shipping';
import { calculateVolume, calculateDensity } from './calculations';
import { carrierServices } from './carrierServices';

const BASE_RATES = {
  'Express Carrier': {
    'Overnight Express': 45.99,
    '2-Day Express': 29.99
  },
  'Ground Carrier': {
    'Standard Ground': 12.99,
    'Freight Ground': 89.99
  }
};

const calculateDistance = (origin: Location, destination: Location): number => {
  // This would typically use a real distance calculation API
  // For now, we'll generate a mock distance based on ZIP codes
  return Math.abs(
    parseInt(origin.zipCode.slice(0, 3)) - 
    parseInt(destination.zipCode.slice(0, 3))
  ) * 10;
};

export const generateShippingQuotes = (
  pkg: Package,
  origin: Location,
  destination: Location
): ShippingQuote[] => {
  const distance = calculateDistance(origin, destination);
  const volume = calculateVolume(pkg);
  const density = calculateDensity(pkg);

  const quotes: ShippingQuote[] = [];

  Object.entries(carrierServices).forEach(([carrier, services]) => {
    services.forEach(service => {
      // Skip if package violates service restrictions
      if (service.restrictions) {
        if (pkg.isOversized && service.restrictions.includes('Not available for oversized packages')) {
          return;
        }
        if (pkg.weight < 150 && service.restrictions.includes('Minimum weight 150 lbs')) {
          return;
        }
      }

      const baseRate = BASE_RATES[carrier][service.name];
      const distanceFactor = distance * 0.1;
      const volumeFactor = volume * 0.01;
      const densityFactor = density * 0.05;

      const baseCost = baseRate + distanceFactor + volumeFactor + densityFactor;
      const fuelSurcharge = baseCost * 0.15; // 15% fuel surcharge

      const additionalFees = [];
      if (pkg.isFragile) {
        additionalFees.push({ name: 'Fragile Handling', amount: 12.99 });
      }
      if (pkg.isOversized) {
        additionalFees.push({ name: 'Oversized Package', amount: 25.99 });
      }

      const totalCost = baseCost + fuelSurcharge + 
        additionalFees.reduce((sum, fee) => sum + fee.amount, 0);

      quotes.push({
        carrier,
        serviceName: service.name,
        cost: totalCost,
        estimatedDays: service.transitTime.max,
        confidenceInterval: {
          min: service.transitTime.min,
          max: service.transitTime.max
        },
        reliabilityScore: 85 + Math.random() * 10, // Mock reliability score
        fuelSurcharge,
        additionalFees
      });
    });
  });

  return quotes;
};