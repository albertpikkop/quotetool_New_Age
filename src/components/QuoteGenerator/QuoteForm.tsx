import React from 'react';
import { useTranslation } from 'react-i18next';
import { PackageDetails } from './PackageDetails';
import { LocationSelector } from './LocationSelector';
import { ServiceSelector } from './ServiceSelector';
import { BulkShipping } from './BulkShipping';

export function QuoteForm() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Package Details Section */}
      <section>
        <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
          {t('quote.packageDetails')}
        </h2>
        <PackageDetails />
      </section>

      {/* Location Section */}
      <section>
        <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
          {t('quote.locations')}
        </h2>
        <LocationSelector />
      </section>

      {/* Service Selection */}
      <section>
        <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
          {t('quote.services')}
        </h2>
        <ServiceSelector />
      </section>

      {/* Bulk Shipping */}
      <section>
        <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
          {t('quote.bulkShipping')}
        </h2>
        <BulkShipping />
      </section>

      {/* Submit Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-500 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
        {t('quote.getQuotes')}
      </button>
    </div>
  );
}