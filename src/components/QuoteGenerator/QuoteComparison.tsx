import React from 'react';
import { ShippingQuote } from '../../types/shipping';
import { Truck, Clock, Star, DollarSign, AlertTriangle } from 'lucide-react';

interface QuoteComparisonProps {
  quotes: ShippingQuote[];
  onSelect: (quote: ShippingQuote) => void;
}

export default function QuoteComparison({ quotes, onSelect }: QuoteComparisonProps) {
  const sortedQuotes = [...quotes].sort((a, b) => a.cost - b.cost);

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {sortedQuotes.map((quote, index) => (
          <div
            key={`${quote.carrier}-${quote.serviceName}`}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-500" />
                  {quote.carrier} - {quote.serviceName}
                </h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <Clock className="w-4 h-4" />
                  {quote.estimatedDays} days
                  <span className="text-sm">
                    ({quote.confidenceInterval.min}-{quote.confidenceInterval.max} days)
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">${quote.cost.toFixed(2)}</p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{quote.reliabilityScore.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600 mb-4">
              {quote.fuelSurcharge > 0 && (
                <p className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Fuel Surcharge: ${quote.fuelSurcharge.toFixed(2)}
                </p>
              )}
              {quote.additionalFees.length > 0 && (
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <div>
                    Additional Fees:
                    <ul className="list-disc list-inside ml-4">
                      {quote.additionalFees.map((fee, i) => (
                        <li key={i}>
                          {fee.name}: ${fee.amount.toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onSelect(quote)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Select This Rate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}