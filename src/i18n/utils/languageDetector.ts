import { DetectorOptions } from 'i18next-browser-languagedetector';

export const languageDetector = {
  name: 'customDetector',
  
  lookup() {
    let language;
    
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    language = urlParams.get('lang');
    if (language) return language;

    // Check localStorage
    language = localStorage.getItem('i18nextLng');
    if (language) return language;

    // Check navigator language
    language = navigator.language;
    if (language) {
      // Only support en and es
      return language.startsWith('es') ? 'es' : 'en';
    }

    return 'en'; // Default fallback
  },

  cacheUserLanguage(lng: string) {
    localStorage.setItem('i18nextLng', lng);
  }
} as DetectorOptions;