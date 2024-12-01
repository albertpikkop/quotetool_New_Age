export const SHIPPING = {
  PACKAGE_LIMITS: {
    MIN_WEIGHT: 0.1, // kg
    MAX_WEIGHT: 70, // kg
    MIN_LENGTH: 10, // cm
    MAX_LENGTH: 150, // cm
    MIN_WIDTH: 10, // cm
    MAX_WIDTH: 150, // cm
    MIN_HEIGHT: 10, // cm
    MAX_HEIGHT: 150, // cm
  },
  SERVICE_LEVELS: {
    STANDARD: 'standard',
    EXPRESS: 'express',
    SAME_DAY: 'same_day'
  },
  CARRIERS: {
    DHL: 'DHL',
    FEDEX: 'FedEx',
    UPS: 'UPS',
    PAQUETE_EXPRESS: 'Paquete Express',
    JT_EXPRESS: 'J&T Express',
    ESTAFETA: 'Estafeta',
    SENDEX: 'Sendex Express',
    BORZO: 'Borzo',
    VOLARIS: 'Volaris'
  },
  TRACKING_STATUS: {
    PENDING: 'pending',
    IN_TRANSIT: 'in_transit',
    DELIVERED: 'delivered',
    EXCEPTION: 'exception'
  },
  BULK_DISCOUNT_TIERS: [
    { shipments: 50, discount: 0.05 },
    { shipments: 100, discount: 0.10 },
    { shipments: 250, discount: 0.15 },
    { shipments: 500, discount: 0.20 },
    { shipments: 1000, discount: 0.25 }
  ]
} as const;

export const SHIPPING_FEES = {
  BASE_RATES: {
    STANDARD: 12.99,
    EXPRESS: 29.99,
    SAME_DAY: 49.99
  },
  SURCHARGES: {
    FUEL: 0.15, // 15%
    FRAGILE: 12.99,
    OVERSIZED: 25.99,
    INTERNATIONAL: 0.8 // 80% additional
  },
  DISTANCE_RATE: 0.1, // per km
  WEIGHT_RATE: 0.5, // per kg
  VOLUME_RATE: 0.01 // per cubic cm
} as const;