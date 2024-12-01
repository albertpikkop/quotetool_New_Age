import { AppError } from '../../utils/errorHandling';

export interface MapTileOptions {
  zoom: number;
  x: number;
  y: number;
  style?: '2d' | '3d';
}

export interface MapViewOptions {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  type?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
}

export async function getMapTiles(options: MapTileOptions) {
  try {
    const response = await fetch(`/api/maps/tiles/${options.zoom}/${options.x}/${options.y}?style=${options.style || '2d'}`);
    
    if (!response.ok) {
      throw new AppError('Failed to fetch map tiles', 'MAP_TILES_ERROR');
    }

    return response.blob();
  } catch (error) {
    throw new AppError(
      'Error fetching map tiles',
      'MAP_TILES_ERROR',
      { originalError: error }
    );
  }
}

export async function getStaticMap(options: MapViewOptions) {
  try {
    const params = new URLSearchParams({
      center: `${options.center.lat},${options.center.lng}`,
      zoom: options.zoom.toString(),
      type: options.type || 'roadmap',
      size: '600x400'
    });

    const response = await fetch(`/api/maps/static?${params}`);
    
    if (!response.ok) {
      throw new AppError('Failed to fetch static map', 'STATIC_MAP_ERROR');
    }

    return response.blob();
  } catch (error) {
    throw new AppError(
      'Error fetching static map',
      'STATIC_MAP_ERROR',
      { originalError: error }
    );
  }
}