import { AppError } from '../../utils/errorHandling';

export interface StreetViewOptions {
  location: {
    lat: number;
    lng: number;
  };
  size?: {
    width: number;
    height: number;
  };
  heading?: number;
  pitch?: number;
  fov?: number;
}

export async function getStreetView(options: StreetViewOptions) {
  try {
    const params = new URLSearchParams({
      location: `${options.location.lat},${options.location.lng}`,
      size: `${options.size?.width || 600}x${options.size?.height || 400}`,
      ...(options.heading !== undefined && { heading: options.heading.toString() }),
      ...(options.pitch !== undefined && { pitch: options.pitch.toString() }),
      ...(options.fov !== undefined && { fov: options.fov.toString() })
    });

    const response = await fetch(`/api/maps/streetview?${params}`);
    
    if (!response.ok) {
      throw new AppError('Failed to fetch Street View image', 'STREET_VIEW_ERROR');
    }

    return response.blob();
  } catch (error) {
    throw new AppError(
      'Error fetching Street View image',
      'STREET_VIEW_ERROR',
      { originalError: error }
    );
  }
}

export async function publishStreetView(
  panorama: Blob,
  metadata: {
    location: {
      lat: number;
      lng: number;
    };
    connections?: Array<{
      targetPanoId: string;
      heading: number;
    }>;
  }
) {
  try {
    const formData = new FormData();
    formData.append('panorama', panorama);
    formData.append('metadata', JSON.stringify(metadata));

    const response = await fetch('/api/maps/streetview/publish', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new AppError('Failed to publish Street View panorama', 'STREET_VIEW_PUBLISH_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error publishing Street View panorama',
      'STREET_VIEW_PUBLISH_ERROR',
      { originalError: error }
    );
  }
}