import { AppError } from '../../utils/errorHandling';

export interface PlaceDetails {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  types: string[];
  rating?: number;
  openNow?: boolean;
}

export interface PlaceSearchOptions {
  query: string;
  location?: {
    lat: number;
    lng: number;
  };
  radius?: number;
  type?: string;
}

export async function searchPlaces(options: PlaceSearchOptions): Promise<PlaceDetails[]> {
  try {
    const params = new URLSearchParams({
      query: options.query,
      ...(options.location && {
        location: `${options.location.lat},${options.location.lng}`
      }),
      ...(options.radius && { radius: options.radius.toString() }),
      ...(options.type && { type: options.type })
    });

    const response = await fetch(`/api/places/search?${params}`);
    
    if (!response.ok) {
      throw new AppError('Failed to search places', 'PLACES_SEARCH_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error searching places',
      'PLACES_SEARCH_ERROR',
      { originalError: error }
    );
  }
}

export async function getPlaceDetails(placeId: string): Promise<PlaceDetails> {
  try {
    const response = await fetch(`/api/places/${placeId}`);
    
    if (!response.ok) {
      throw new AppError('Failed to fetch place details', 'PLACE_DETAILS_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching place details',
      'PLACE_DETAILS_ERROR',
      { originalError: error }
    );
  }
}