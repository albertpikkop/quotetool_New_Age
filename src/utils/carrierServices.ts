import { CarrierService } from '../types/shipping';

export const carrierServices: Record<string, CarrierService[]> = {
  'Express Carrier': [
    {
      id: 'express-overnight',
      name: 'Overnight Express',
      description: 'Next day delivery by 10:30 AM',
      transitTime: { min: 1, max: 1 },
      restrictions: ['Not available for oversized packages']
    },
    {
      id: 'express-2day',
      name: '2-Day Express',
      description: 'Delivery within 2 business days',
      transitTime: { min: 2, max: 2 }
    }
  ],
  'Ground Carrier': [
    {
      id: 'ground-standard',
      name: 'Standard Ground',
      description: 'Cost-effective ground shipping',
      transitTime: { min: 3, max: 5 }
    },
    {
      id: 'ground-freight',
      name: 'Freight Ground',
      description: 'For large or heavy items',
      transitTime: { min: 4, max: 7 },
      restrictions: ['Minimum weight 150 lbs']
    }
  ]
};