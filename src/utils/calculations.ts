import { Package, Location } from '../types/shipping';

export const calculateVolume = (pkg: Package): number => {
  return pkg.width * pkg.height * pkg.length;
};

export const calculateDensity = (pkg: Package): number => {
  return pkg.weight / calculateVolume(pkg);
};

export const calculateBulkDiscount = (
  monthlyShipments: number,
  averageShipmentCost: number
): number => {
  if (monthlyShipments >= 1000) return 0.25;
  if (monthlyShipments >= 500) return 0.20;
  if (monthlyShipments >= 250) return 0.15;
  if (monthlyShipments >= 100) return 0.10;
  if (monthlyShipments >= 50) return 0.05;
  return 0;
};

export const calculateReliabilityScore = (
  onTimeDeliveryRate: number,
  damageRate: number,
  customerRating: number
): number => {
  return (onTimeDeliveryRate * 0.4 + (1 - damageRate) * 0.4 + customerRating * 0.2) * 100;
};