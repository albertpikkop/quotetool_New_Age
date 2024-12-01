import { CarrierService } from '../../types/shipping';
import { AppError } from '../../utils/errorHandling';
import { API } from '../../constants';

export async function getCarrierServices(): Promise<CarrierService[]> {
  try {
    const response = await fetch(`${API.BASE_URL}/carriers/services`);
    
    if (!response.ok) {
      throw new AppError('Failed to fetch carrier services', 'CARRIER_SERVICES_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching carrier services',
      'CARRIER_SERVICES_ERROR',
      { originalError: error }
    );
  }
}

export async function getCarrierRates(trackingNumber: string): Promise<number[]> {
  try {
    const response = await fetch(`${API.BASE_URL}/carriers/rates/${trackingNumber}`);
    
    if (!response.ok) {
      throw new AppError('Failed to fetch carrier rates', 'CARRIER_RATES_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching carrier rates',
      'CARRIER_RATES_ERROR',
      { originalError: error }
    );
  }
}