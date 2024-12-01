export const isRTL = (language: string): boolean => {
  const rtlLanguages = ['ar', 'he', 'fa'];
  return rtlLanguages.includes(language);
};

export const applyRTLStyles = (language: string) => {
  document.documentElement.dir = isRTL(language) ? 'rtl' : 'ltr';
  document.documentElement.lang = language;
};