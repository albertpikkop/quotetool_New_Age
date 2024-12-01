import { TranslationSchema } from '../types';

export async function loadTranslations(language: string): Promise<TranslationSchema> {
  try {
    const translations = await import(`../locales/${language}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${language}`, error);
    const fallback = await import('../locales/en.json');
    return fallback.default;
  }
}