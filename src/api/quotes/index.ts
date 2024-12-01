import { Package, Location, ShippingQuote } from '../../types/shipping';
import { AppError } from '../../utils/errorHandling';
import { API } from '../../constants';

export async function getShippingQuotes(
  pkg: Package,
  origin: Location,
  destination: Location,
  options?: {
    service?: 'standard' | 'express' | 'same_day';
    bulkShipments?: number;
  }
): Promise<ShippingQuote[]> {
  try {
    const response = await fetch(`${API.BASE_URL}/quotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        package: pkg,
        origin,
        destination,
        ...options
      }),
    });

    if (!response.ok) {
      throw new AppError('Failed to fetch shipping quotes', 'QUOTES_FETCH_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error fetching shipping quotes',
      'QUOTES_FETCH_ERROR',
      { originalError: error }
    );
  }
}

export async function validateAddress(location: Location): Promise<{
  isValid: boolean;
  suggestions?: string[];
}> {
  try {
    const response = await fetch(`${API.BASE_URL}/quotes/validate-address`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    });

    if (!response.ok) {
      throw new AppError('Failed to validate address', 'ADDRESS_VALIDATION_ERROR');
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Error validating address',
      'ADDRESS_VALIDATION_ERROR',
      { originalError: error }
    );
  }
}