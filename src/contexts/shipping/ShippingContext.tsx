import React, { createContext, useContext, useState, useCallback } from 'react';
import { Package, Location, ShippingQuote } from '../../types/shipping';
import { calculateShippingCost } from '../../utils/calculations/shippingCalculator';
import { calculateDistance } from '../../utils/calculations/distanceCalculator';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

interface ShippingContextType {
  currentQuote: ShippingQuote | null;
  setCurrentQuote: (quote: ShippingQuote) => void;
  calculateQuote: (pkg: Package, origin: Location, destination: Location) => Promise<ShippingQuote[]>;
  clearQuote: () => void;
}

const ShippingContext = createContext<ShippingContextType | undefined>(undefined);

export function ShippingProvider({ children }: { children: React.ReactNode }) {
  const [currentQuote, setCurrentQuote] = useState<ShippingQuote | null>(null);
  const { triggerHaptic } = useHapticFeedback();

  const calculateQuote = useCallback(async (
    pkg: Package,
    origin: Location,
    destination: Location
  ): Promise<ShippingQuote[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const distance = calculateDistance(origin, destination);
    
    const quotes: ShippingQuote[] = [
      {
        carrier: 'Express Carrier',
        serviceName: 'Overnight Express',
        cost: calculateShippingCost(pkg, distance, 45.99, { isExpress: true }),
        estimatedDays: 1,
        confidenceInterval: { min: 1, max: 1 },
        reliabilityScore: 95,
        fuelSurcharge: 15,
        additionalFees: []
      },
      {
        carrier: 'Ground Carrier',
        serviceName: 'Standard Ground',
        cost: calculateShippingCost(pkg, distance, 12.99),
        estimatedDays: 3,
        confidenceInterval: { min: 3, max: 5 },
        reliabilityScore: 90,
        fuelSurcharge: 10,
        additionalFees: []
      }
    ];

    triggerHaptic('light');
    return quotes;
  }, [triggerHaptic]);

  const clearQuote = useCallback(() => {
    setCurrentQuote(null);
  }, []);

  return (
    <ShippingContext.Provider
      value={{
        currentQuote,
        setCurrentQuote,
        calculateQuote,
        clearQuote
      }}
    >
      {children}
    </ShippingContext.Provider>
  );
}

export function useShipping() {
  const context = useContext(ShippingContext);
  if (context === undefined) {
    throw new Error('useShipping must be used within a ShippingProvider');
  }
  return context;
}