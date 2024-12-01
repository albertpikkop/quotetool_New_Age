export * from './shipping/quotes';
export * from './shipping/tracking';
export * from './auth/login';
export * from './auth/register';
export * from './weather/forecast';

export const API_CONFIG = {
  baseUrl: process.env.VITE_API_URL || '/api',
  timeout: 10000,
  retryAttempts: 3,
};