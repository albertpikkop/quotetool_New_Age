import React from 'react';
import { Package } from '../../types/shipping';

interface PackageDimensionsProps {
  packageDetails: Package;
  onChange: (updates: Partial<Package>) => void;
}

export default function PackageDimensions({ packageDetails, onChange }: PackageDimensionsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Width (in)</label>
        <input
          type="number"
          min="0"
          step="0.1"
          value={packageDetails.width || ''}
          onChange={(e) => onChange({ width: parseFloat(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Height (in)</label>
        <input
          type="number"
          min="0"
          step="0.1"
          value={packageDetails.height || ''}
          onChange={(e) => onChange({ height: parseFloat(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Length (in)</label>
        <input
          type="number"
          min="0"
          step="0.1"
          value={packageDetails.length || ''}
          onChange={(e) => onChange({ length: parseFloat(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Weight (lbs)</label>
        <input
          type="number"
          min="0"
          step="0.1"
          value={packageDetails.weight || ''}
          onChange={(e) => onChange({ weight: parseFloat(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
    </div>
  );
}