import { useState, useCallback } from 'react';
import { Package, Location, ShippingQuote } from '../../types/shipping';
import { generateShippingQuotes } from '../../utils/quoteCalculator';
import { useAsync } from '../common/useAsync';

export function useShippingCalculator() {
  const [quotes, setQuotes] = useState<ShippingQuote[]>([]);

  const { execute: calculateQuotes, isLoading, error } = useAsync(async (
    pkg: Package,
    origin: Location,
    destination: Location
  ) => {
    const generatedQuotes = generateShippingQuotes(pkg, origin, destination);
    setQuotes(generatedQuotes);
    return generatedQuotes;
  });

  const clearQuotes = useCallback(() => {
    setQuotes([]);
  }, []);

  return {
    quotes,
    calculateQuotes,
    clearQuotes,
    isLoading,
    error
  };
}