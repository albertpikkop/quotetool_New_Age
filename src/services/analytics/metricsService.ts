import { apiClient } from '../api/apiClient';
import type { AnalyticsMetrics, ShipmentTrend, CarrierPerformance } from '../../types/analytics';

export class MetricsService {
  public async getPerformanceMetrics(): Promise<AnalyticsMetrics> {
    const response = await apiClient.get<AnalyticsMetrics>('/analytics/metrics');
    return response.data;
  }

  public async getShipmentTrends(
    startDate: Date,
    endDate: Date
  ): Promise<ShipmentTrend[]> {
    const response = await apiClient.get<ShipmentTrend[]>('/analytics/trends', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ startDate, endDate })
    });
    return response.data;
  }

  public async getCarrierPerformance(): Promise<CarrierPerformance[]> {
    const response = await apiClient.get<CarrierPerformance[]>('/analytics/carriers');
    return response.data;
  }

  public async generateOptimizationInsights(): Promise<string[]> {
    const response = await apiClient.get<string[]>('/analytics/insights');
    return response.data;
  }
}

export const metricsService = new MetricsService();