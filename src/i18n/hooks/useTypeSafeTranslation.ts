import { useTranslation } from 'react-i18next';
import { TranslationSchema } from '../types';

export function useTypeSafeTranslation() {
  const { t, i18n } = useTranslation();
  
  return {
    t: (key: keyof TranslationSchema, options?: any) => t(key, options),
    i18n
  };
}