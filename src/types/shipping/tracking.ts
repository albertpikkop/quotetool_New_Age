import { z } from 'zod';

export const trackingEventSchema = z.object({
  timestamp: z.date(),
  location: z.string(),
  status: z.string(),
  description: z.string(),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number()
  }).optional()
});

export const trackingInfoSchema = z.object({
  trackingNumber: z.string(),
  carrier: z.string(),
  service: z.string(),
  status: z.string(),
  estimatedDelivery: z.date(),
  events: z.array(trackingEventSchema),
  origin: z.string(),
  destination: z.string(),
  currentLocation: z.object({
    address: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    })
  })
});

export type TrackingEvent = z.infer<typeof trackingEventSchema>;
export type TrackingInfo = z.infer<typeof trackingInfoSchema>;

export interface TrackingUpdate {
  trackingNumber: string;
  newEvent: TrackingEvent;
}