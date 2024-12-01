import { z } from 'zod';
import { translationSchema } from '../types';

export function validateTranslations(resources: Record<string, any>) {
  try {
    // First validate the structure of each language's translations
    Object.entries(resources).forEach(([lang, content]) => {
      const result = translationSchema.safeParse(content.translation);
      
      if (!result.success) {
        console.warn(`Translation validation warnings for ${lang}:`, result.error);
      }
    });

    // Validate that all languages have the same keys
    const languages = Object.keys(resources);
    const baseLanguage = languages[0];
    const baseKeys = getAllKeys(resources[baseLanguage].translation);

    languages.slice(1).forEach(lang => {
      const currentKeys = getAllKeys(resources[lang].translation);
      const missingKeys = baseKeys.filter(key => !currentKeys.includes(key));
      
      if (missingKeys.length > 0) {
        console.warn(`Missing translations in ${lang}:`, missingKeys);
      }
    });

    return true;
  } catch (error) {
    console.warn('Translation validation warning:', error);
    return true; // Continue loading the app even if validation fails
  }
}

// Helper function to get all nested keys from an object
function getAllKeys(obj: any, prefix = ''): string[] {
  if (!obj || typeof obj !== 'object') return [];
  
  return Object.entries(obj).reduce((keys: string[], [key, value]) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return [...keys, ...getAllKeys(value, newKey)];
    }
    return [...keys, newKey];
  }, []);
}