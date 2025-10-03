/**
 * Site Configuration
 *
 * This file contains core branding and theme settings.
 * ONLY DEVELOPERS should modify these settings.
 * Admin panel does NOT have access to these settings.
 */

export const SiteConfig = {
  // Site Information
  siteName: 'District Bar Association Tando Muhammad Khan',
  siteNameShort: 'DBA TMK',
  siteUrl: 'https://dbatmk.org',
  siteDescription: 'Official website of District Bar Association Tando Muhammad Khan. Find lawyers, download circulars, generate E-cards, and access legal resources.',

  // Branding
  logo: {
    main: '/bar-logo-new.png',
    golden: '/bar-logo-golden.svg',
    animated: '/logo-animated-new.mp4',
    favicon: '/favicon.ico',
  },

  // Theme Colors (Tailwind classes)
  theme: {
    primary: 'teal', // Main brand color
    secondary: 'blue',
    accent: 'amber',

    // Custom hex colors if needed
    colors: {
      primary: '#0d9488',      // teal-600
      primaryDark: '#115e59',   // teal-800
      primaryLight: '#5eead4',  // teal-300
      secondary: '#2563eb',     // blue-600
      accent: '#f59e0b',        // amber-500
    }
  },

  // Contact Information
  contact: {
    email: 'info@dbatmk.org',
    phone: '+92 XXX XXXXXXX',
    address: 'Tando Muhammad Khan, Sindh, Pakistan',
    mapLocation: 'https://maps.google.com/?q=Tando+Muhammad+Khan',
  },

  // Social Media
  social: {
    facebook: 'https://facebook.com/dbatmk',
    twitter: 'https://twitter.com/dbatmk',
    linkedin: 'https://linkedin.com/company/dbatmk',
    youtube: 'https://youtube.com/@dbatmk',
  },

  // Developer Credits
  developer: {
    name: 'SohMin',
    website: 'https://sohmin.com',
    portfolio: 'https://portfolio.sohmin.com',
    contact: 'contact@sohmin.com',
  },

  // Admin Settings
  admin: {
    password: '123456', // CHANGE THIS IN PRODUCTION!
    sessionTimeout: 3600000, // 1 hour in milliseconds
  },

  // Features
  features: {
    enableECards: true,
    enableCirculars: true,
    enableLawBooks: true,
    enableTeamSection: true,
    enableNewsTicker: true,
  },

  // SEO & Meta
  seo: {
    keywords: 'District Bar Association, Tando Muhammad Khan, DBA TMK, Lawyers, Advocates, Legal Services, Bar Council, Sindh Bar, Pakistan Bar Council, Find Lawyer, E-Card, Legal Directory',
    author: 'District Bar Association TMK',
    twitterCard: 'summary_large_image',
    ogType: 'website',
    ogLocale: 'en_US',
  },

  // Default News Ticker (if not set in admin)
  defaultNewsTicker: 'تازہ ترین خبر: بار کونسل ٹنڈو محمد خان کی اہم اطلاع - نئے اراکین کی رجسٹریشن جاری ہے',

  // File Upload Limits
  upload: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedImageTypes: ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'],
    allowedDocumentTypes: ['application/pdf'],
  },

  // Copyright
  copyright: {
    year: new Date().getFullYear(),
    text: `© ${new Date().getFullYear()} District Bar Association Tando Muhammad Khan. All rights reserved.`,
    developedBy: 'Developed with ❤️ by SohMin',
  },
};

// Export individual sections for easier imports
export const {
  siteName,
  siteNameShort,
  siteUrl,
  siteDescription,
  logo,
  theme,
  contact,
  social,
  developer,
  admin,
  features,
  seo,
  copyright
} = SiteConfig;

export default SiteConfig;
