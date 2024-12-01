import { Package, Location, ShippingQuote } from '../../types/shipping';
import { AppError } from '../../utils/errorHandling';

export async function getShippingQuotes(
  pkg: Package,
  origin: Location,
  destination: Location
): Promise<ShippingQuote[]> {
  try {
    // Mock API call - replace with actual API integration
    const response = await fetch('/api/shipping/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ package: pkg, origin, destination }),
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

export async function validateAddress(location: Location): Promise<boolean> {
  try {
    const response = await fetch('/api/shipping/validate-address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    });

    if (!response.ok) {
      throw new AppError('Failed to validate address', 'ADDRESS_VALIDATION_ERROR');
    }

    const { isValid } = await response.json();
    return isValid;
  } catch (error) {
    throw new AppError(
      'Error validating address',
      'ADDRESS_VALIDATION_ERROR',
      { originalError: error }
    );
  }
}