export const ROUTES = {
  HOME: '/',
  QUOTE: '/quote',
  TRACKING: '/tracking',
  ANALYTICS: '/analytics',
  PARTNERS: '/partners',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FAQ: '/faq',
  BLOG: '/blog'
} as const;

export const NAVIGATION = {
  MAIN: [
    { path: ROUTES.HOME, key: 'nav.home' },
    { path: ROUTES.QUOTE, key: 'nav.getQuote' },
    { path: ROUTES.TRACKING, key: 'nav.trackShipment' },
    { path: ROUTES.ANALYTICS, key: 'nav.analytics' },
    { path: ROUTES.PARTNERS, key: 'nav.partners' }
  ],
  SECONDARY: [
    { path: ROUTES.FAQ, key: 'nav.faq' },
    { path: ROUTES.BLOG, key: 'nav.blog' }
  ],
  AUTH: [
    { path: ROUTES.LOGIN, key: 'nav.login' },
    { path: ROUTES.SIGNUP, key: 'nav.signup' }
  ]
} as const;