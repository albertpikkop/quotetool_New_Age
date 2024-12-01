import { Location } from '../../types/shipping';

const EARTH_RADIUS_KM = 6371;

function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function calculateDistance(origin: Location, destination: Location): number {
  // This is a simplified version. In a real app, we'd use a mapping service API
  const lat1 = parseInt(origin.zipCode.slice(0, 2));
  const lon1 = parseInt(origin.zipCode.slice(2, 4));
  const lat2 = parseInt(destination.zipCode.slice(0, 2));
  const lon2 = parseInt(destination.zipCode.slice(2, 4));

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = EARTH_RADIUS_KM * c;

  return Math.round(distance);
}

export function estimateDeliveryTime(
  distance: number,
  options: {
    isExpress?: boolean;
    isInternational?: boolean;
    hasWeatherDelays?: boolean;
    hasTrafficDelays?: boolean;
  } = {}
): { min: number; max: number } {
  let baseTime = Math.ceil(distance / 500); // Base days for every 500km

  if (options.isExpress) {
    baseTime = Math.max(1, Math.ceil(baseTime / 2));
  }

  if (options.isInternational) {
    baseTime += 2;
  }

  if (options.hasWeatherDelays) {
    baseTime += 1;
  }

  if (options.hasTrafficDelays) {
    baseTime = Math.ceil(baseTime * 1.2);
  }

  return {
    min: baseTime,
    max: baseTime + 2
  };
}