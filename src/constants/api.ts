export const API = {
  BASE_URL: '/api',
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout'
    },
    SHIPPING: {
      QUOTES: '/shipping/quotes',
      TRACKING: '/shipping/tracking',
      VALIDATE_ADDRESS: '/shipping/validate-address'
    },
    WEATHER: {
      FORECAST: '/weather/forecast',
      AIR_QUALITY: '/weather/air-quality'
    },
    MAPS: {
      TILES: '/maps/tiles',
      STATIC: '/maps/static',
      DIRECTIONS: '/maps/directions',
      PLACES: '/maps/places',
      ELEVATION: '/maps/elevation',
      STREET_VIEW: '/maps/streetview'
    }
  },
  CONFIG: {
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
    CACHE_DURATION: 5 * 60 * 1000 // 5 minutes
  }
} as const;

export const EXTERNAL_APIS = {
  GOOGLE_MAPS: {
    BASE_URL: 'https://maps.googleapis.com/maps/api',
    SERVICES: {
      DIRECTIONS: '/directions/json',
      PLACES: '/place',
      ELEVATION: '/elevation/json',
      GEOCODING: '/geocode/json'
    }
  },
  WEATHER: {
    METEOBLUE: {
      BASE_URL: 'https://content.meteoblue.com/api',
      VERSION: 'v1'
    }
  }
} as const;