import { z } from 'zod';

export const shippingSchema = z.object({
  width: z.number().min(0),
  height: z.number().min(0),
  length: z.number().min(0),
  weight: z.number().min(0),
  isFragile: z.boolean(),
  isOversized: z.boolean()
});

export type ShippingFormData = z.infer<typeof shippingSchema>;

export interface ShippingContextType {
  currentQuote: ShippingQuote | null;
  setCurrentQuote: (quote: ShippingQuote) => void;
}