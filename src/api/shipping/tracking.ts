import { TrackingInfo, TrackingEvent } from '../../types/shipping';
import { AppError } from '../../utils/errorHandling';

export async function getTrackingInfo(trackingNumber: string): Promise<TrackingInfo> {
  try {
    const response = await fetch(`/api/shipping/tracking/${trackingNumber}`);
    
    if (!response.ok) {
      throw new AppError('Failed to fetch tracking info', 'TRACKING_FETCH_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching tracking information',
      'TRACKING_FETCH_ERROR',
      { originalError: error }
    );
  }
}

export async function getTrackingHistory(trackingNumber: string): Promise<TrackingEvent[]> {
  try {
    const response = await fetch(`/api/shipping/tracking/${trackingNumber}/history`);
    
    if (!response.ok) {
      throw new AppError('Failed to fetch tracking history', 'TRACKING_HISTORY_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching tracking history',
      'TRACKING_HISTORY_ERROR',
      { originalError: error }
    );
  }
}