export interface AnalyticsMetrics {
  onTimeDelivery: number;
  averageCost: number;
  exceptions: number;
  customerSatisfaction: number;
}

export interface ShipmentTrend {
  month: string;
  shipments: number;
  onTime: number;
}

export interface CarrierPerformance {
  carrier: string;
  reliability: number;
  avgDelay: number;
}

export interface OptimizationInsight {
  category: string;
  recommendations: string[];
  potentialSavings?: number;
}