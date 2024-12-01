import { TrackingInfo, TrackingEvent } from '../../types/shipping';
import { AppError } from '../../utils/errorHandling';
import { API } from '../../constants';

export async function getTrackingInfo(trackingNumber: string): Promise<TrackingInfo> {
  try {
    const response = await fetch(`${API.BASE_URL}/tracking/${trackingNumber}`);
    
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
    const response = await fetch(`${API.BASE_URL}/tracking/${trackingNumber}/history`);
    
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

export async function subscribeToTrackingUpdates(
  trackingNumber: string,
  onUpdate: (event: TrackingEvent) => void
): Promise<() => void> {
  const ws = new WebSocket(`${API.BASE_URL.replace('http', 'ws')}/tracking/ws/${trackingNumber}`);
  
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onUpdate(data);
  };

  return () => ws.close();
}