import { z } from 'zod';

export const packageSchema = z.object({
  width: z.number().min(0),
  height: z.number().min(0),
  length: z.number().min(0),
  weight: z.number().min(0),
  isFragile: z.boolean(),
  isOversized: z.boolean()
});

export const locationSchema = z.object({
  zipCode: z.string(),
  country: z.string(),
  city: z.string().optional(),
  state: z.string().optional(),
  address: z.string().optional()
});

export const quoteSchema = z.object({
  id: z.string(),
  carrier: z.string(),
  service: z.string(),
  price: z.number(),
  currency: z.string(),
  estimatedDays: z.number(),
  guaranteedDelivery: z.boolean(),
  restrictions: z.array(z.string()).optional()
});

export type Package = z.infer<typeof packageSchema>;
export type Location = z.infer<typeof locationSchema>;
export type Quote = z.infer<typeof quoteSchema>;

export interface QuoteRequest {
  package: Package;
  origin: Location;
  destination: Location;
  serviceLevel?: 'standard' | 'express' | 'same_day';
}

export interface QuoteResponse {
  quotes: Quote[];
  validUntil: Date;
}