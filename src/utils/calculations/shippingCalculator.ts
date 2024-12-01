import { Package, Location, ShippingQuote } from '../../types/shipping';

export function calculateVolume(pkg: Package): number {
  return pkg.width * pkg.height * pkg.length;
}

export function calculateDensity(pkg: Package): number {
  const volume = calculateVolume(pkg);
  return volume > 0 ? pkg.weight / volume : 0;
}

export function calculateBulkDiscount(
  monthlyShipments: number,
  averageShipmentCost: number
): number {
  if (monthlyShipments >= 1000) return 0.25;
  if (monthlyShipments >= 500) return 0.20;
  if (monthlyShipments >= 250) return 0.15;
  if (monthlyShipments >= 100) return 0.10;
  if (monthlyShipments >= 50) return 0.05;
  return 0;
}

export function calculateShippingCost(
  pkg: Package,
  distance: number,
  baseRate: number,
  options: {
    isExpress?: boolean;
    isInternational?: boolean;
    bulkDiscount?: number;
  } = {}
): number {
  const volume = calculateVolume(pkg);
  const density = calculateDensity(pkg);
  
  let cost = baseRate;
  
  // Add volume-based cost
  cost += volume * 0.01;
  
  // Add weight-based cost
  cost += pkg.weight * 0.5;
  
  // Add distance-based cost
  cost += distance * 0.1;
  
  // Add density factor
  if (density > 0.1) {
    cost *= 1.1;
  }
  
  // Add options
  if (options.isExpress) {
    cost *= 1.5;
  }
  
  if (options.isInternational) {
    cost *= 1.8;
  }
  
  if (pkg.isFragile) {
    cost += 12.99;
  }
  
  if (pkg.isOversized) {
    cost += 25.99;
  }
  
  // Apply bulk discount
  if (options.bulkDiscount) {
    cost *= (1 - options.bulkDiscount);
  }
  
  return Math.round(cost * 100) / 100;
}