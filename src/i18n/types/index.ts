import { z } from 'zod';

// Define nested schemas for better organization
const commonSchema = z.object({
  fullName: z.object({
    line1: z.string(),
    line2: z.string()
  }).optional(),
  copyright: z.string().optional()
}).passthrough();

const navSchema = z.object({
  home: z.string(),
  getQuote: z.string(),
  trackShipment: z.string(),
  analytics: z.string(),
  login: z.string(),
  signup: z.string(),
  logout: z.string()
}).passthrough();

const homeSchema = z.object({
  hero: z.object({
    title: z.string(),
    subtitle: z.string()
  }).optional(),
  features: z.object({
    quote: z.string(),
    track: z.string(),
    analytics: z.string()
  }).optional(),
  quoteDescription: z.string().optional(),
  trackingDescription: z.string().optional(),
  analyticsDescription: z.string().optional()
}).passthrough();

const shippingSchema = z.object({
  packageDetails: z.string(),
  options: z.object({
    fragile: z.string(),
    oversized: z.string()
  }).optional(),
  locations: z.object({
    title: z.string(),
    origin: z.string(),
    destination: z.string()
  }).optional(),
  placeholders: z.object({
    zipCode: z.string()
  }).optional(),
  getQuotes: z.string().optional(),
  availableOptions: z.string().optional(),
  errors: z.object({
    originRequired: z.string(),
    destinationRequired: z.string()
  }).optional()
}).passthrough();

// Make all schemas more flexible with optional fields and passthrough
export const translationSchema = z.object({
  common: commonSchema.optional(),
  nav: navSchema.optional(),
  home: homeSchema.optional(),
  shipping: shippingSchema.optional(),
  tracking: z.record(z.string()).optional(),
  analytics: z.record(z.string()).optional(),
  auth: z.record(z.string()).optional(),
  weather: z.record(z.string()).optional()
}).passthrough();

export type TranslationSchema = z.infer<typeof translationSchema>;