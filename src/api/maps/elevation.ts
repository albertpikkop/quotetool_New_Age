import { AppError } from '../../utils/errorHandling';

export interface ElevationPoint {
  lat: number;
  lng: number;
  elevation: number;
}

export async function getElevation(points: Array<{ lat: number; lng: number; }>): Promise<ElevationPoint[]> {
  try {
    const response = await fetch('/api/maps/elevation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ points }),
    });
    
    if (!response.ok) {
      throw new AppError('Failed to fetch elevation data', 'ELEVATION_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching elevation data',
      'ELEVATION_ERROR',
      { originalError: error }
    );
  }
}