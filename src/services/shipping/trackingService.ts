import { apiClient } from '../api/apiClient';
import { API } from '../../constants';
import type { TrackingInfo, TrackingEvent } from '../../types/shipping';

export class TrackingService {
  public async getTrackingInfo(trackingNumber: string): Promise<TrackingInfo> {
    const response = await apiClient.get<TrackingInfo>(
      `${API.ENDPOINTS.SHIPPING.TRACKING}/${trackingNumber}`
    );
    return response.data;
  }

  public async getTrackingHistory(trackingNumber: string): Promise<TrackingEvent[]> {
    const response = await apiClient.get<TrackingEvent[]>(
      `${API.ENDPOINTS.SHIPPING.TRACKING}/${trackingNumber}/history`
    );
    return response.data;
  }

  public async subscribeToUpdates(
    trackingNumber: string,
    callback: (update: TrackingEvent) => void
  ): Promise<() => void> {
    // Implement WebSocket or polling mechanism for real-time updates
    const interval = setInterval(async () => {
      const events = await this.getTrackingHistory(trackingNumber);
      const latestEvent = events[events.length - 1];
      callback(latestEvent);
    }, 60000);

    return () => clearInterval(interval);
  }
}

export const trackingService = new TrackingService();