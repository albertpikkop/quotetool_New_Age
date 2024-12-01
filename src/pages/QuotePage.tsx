import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package } from 'lucide-react';
import { QuoteForm } from '../components/QuoteGenerator/QuoteForm';
import { Card } from '../components/shared/Card';

export default function QuotePage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 sm:mb-8">
          <div className="p-3 bg-blue-500/10 rounded-xl w-fit">
            <Package className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              {t('quote.title')}
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-1">
              {t('quote.subtitle')}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <Card className="p-4 sm:p-6">
          <QuoteForm />
        </Card>
      </div>
    </div>
  );
}