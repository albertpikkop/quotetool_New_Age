import { AppError } from '../../utils/errorHandling';
import { EXTERNAL_APIS } from '../../constants';

export async function getRouteOptimization(
  shipments: Array<{
    origin: { lat: number; lng: number };
    destination: { lat: number; lng: number };
  }>
): Promise<{
  routes: Array<{
    points: Array<{ lat: number; lng: number }>;
    distance: number;
    duration: number;
  }>;
  totalDistance: number;
  totalDuration: number;
}> {
  try {
    const response = await fetch(`${EXTERNAL_APIS.GOOGLE_MAPS.BASE_URL}${EXTERNAL_APIS.GOOGLE_MAPS.SERVICES.DIRECTIONS}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shipments }),
    });

    if (!response.ok) {
      throw new AppError('Failed to optimize routes', 'ROUTE_OPTIMIZATION_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error optimizing routes',
      'ROUTE_OPTIMIZATION_ERROR',
      { originalError: error }
    );
  }
}

export async function getTrafficData(
  points: Array<{ lat: number; lng: number }>
): Promise<Array<{
  point: { lat: number; lng: number };
  congestionLevel: number;
  incidents?: string[];
}>> {
  try {
    const response = await fetch(`${EXTERNAL_APIS.GOOGLE_MAPS.BASE_URL}/traffic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ points }),
    });

    if (!response.ok) {
      throw new AppError('Failed to fetch traffic data', 'TRAFFIC_DATA_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching traffic data',
      'TRAFFIC_DATA_ERROR',
      { originalError: error }
    );
  }
}