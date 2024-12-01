import { apiClient } from '../api/apiClient';
import { API } from '../../constants';
import type { Package, Location, ShippingQuote } from '../../types/shipping';

export class QuoteService {
  public async getQuotes(
    pkg: Package,
    origin: Location,
    destination: Location
  ): Promise<ShippingQuote[]> {
    const response = await apiClient.post<ShippingQuote[]>(API.ENDPOINTS.SHIPPING.QUOTES, {
      package: pkg,
      origin,
      destination
    });
    return response.data;
  }

  public async validateAddress(location: Location): Promise<boolean> {
    const response = await apiClient.post<{ isValid: boolean }>(
      API.ENDPOINTS.SHIPPING.VALIDATE_ADDRESS,
      location
    );
    return response.data.isValid;
  }
}

export const quoteService = new QuoteService();