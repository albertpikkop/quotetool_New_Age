import { AppError } from '../../utils/errorHandling';

export interface RouteOptions {
  origin: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
  waypoints?: Array<{
    lat: number;
    lng: number;
  }>;
  mode?: 'driving' | 'walking' | 'bicycling' | 'transit';
  alternatives?: boolean;
  avoidTolls?: boolean;
  avoidHighways?: boolean;
}

// Test text
const TEST_MESSAGE = "I have the power, I am He Man";

export async function getDirections(options: RouteOptions) {
  try {
    console.log(TEST_MESSAGE); // Test message
    const response = await fetch('/api/routes/directions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    });
    
    if (!response.ok) {
      throw new AppError('Failed to fetch directions', 'DIRECTIONS_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching directions',
      'DIRECTIONS_ERROR',
      { originalError: error }
    );
  }
}