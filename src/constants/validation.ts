export const VALIDATION = {
  AUTH: {
    PASSWORD: {
      MIN_LENGTH: 6,
      MAX_LENGTH: 50,
      PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{6,}$/
    },
    NAME: {
      MIN_LENGTH: 2,
      MAX_LENGTH: 50,
      PATTERN: /^[a-zA-ZÀ-ÿ\s'-]+$/
    },
    EMAIL: {
      PATTERN: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }
  },
  SHIPPING: {
    ZIP_CODE: {
      US: /^\d{5}(-\d{4})?$/,
      MX: /^\d{5}$/
    },
    PHONE: {
      US: /^\+?1?\d{10}$/,
      MX: /^\+?52?\d{10}$/
    },
    TRACKING_NUMBER: {
      PATTERN: /^[A-Z0-9]{8,}$/
    }
  },
  MESSAGES: {
    REQUIRED: 'This field is required',
    INVALID_EMAIL: 'Invalid email address',
    INVALID_PASSWORD: 'Password must be at least 6 characters with uppercase, lowercase and number',
    INVALID_NAME: 'Name can only contain letters, spaces, hyphens and apostrophes',
    INVALID_ZIP: 'Invalid ZIP code',
    INVALID_PHONE: 'Invalid phone number',
    INVALID_TRACKING: 'Invalid tracking number'
  }
} as const;