import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { shippingSchema } from '../../features/shipping/types';
import type { ShippingFormData } from '../../features/shipping/types';

export function useShippingForm(defaultValues?: Partial<ShippingFormData>) {
  return useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      width: 0,
      height: 0,
      length: 0,
      weight: 0,
      isFragile: false,
      isOversized: false,
      ...defaultValues
    }
  });
}