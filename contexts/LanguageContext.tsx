'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sd';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.lawyers': 'Lawyers',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.blog': 'Blog',
    'nav.petitions': 'Sample Petitions',

    // Hero Section
    'hero.title': 'District Bar Association, TMK',

    // Services Section
    'services.title': 'What Services Do You Receive From Us',
    'services.criminal': 'Criminal Law',
    'services.legal': 'Legal Affairs',
    'services.commercial': 'Commercial Law',
    'services.family': 'Family Law',
    'services.consultation': 'Consultation',

    // Join Section
    'join.title': 'Join Sindh Bar Council',
    'join.subtitle': 'Become a member of our prestigious legal community',
    'join.button': 'Join Now',
    'verification.title': 'Advocate Verification',
    'verification.subtitle': 'Access your member portal and resources',
    'verification.button': 'Advocate Verification',

    // Footer
    'footer.quickAccess': 'Quick Access',
    'footer.contact': 'Contact Information',
    'footer.supremeCourt': 'Supreme Court of Pakistan',
    'footer.highCourt': 'High Court of Sindh',
    'footer.pakistanBar': 'Pakistan Bar Council',
    'footer.sindhBar': 'Sindh Bar Council',
    'footer.sindhJudicial': 'Sindh Judicial Academy',
    'footer.address': 'District Bar Association Judicial Complex, Tando Muhammad Khan.',
    'footer.copyright': 'Copyright © 2025',
    'footer.rights': '. All rights reserved. | Powered by',

    // Contact
    'contact.title': 'Contact Us',
    'contact.home': 'Home',
    'contact.consultation': 'Consultation',
    'contact.requestForm': 'Request Submission Form',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.description': 'Description',
    'contact.submit': 'Submit Request',

    // Stats
    'stats.successfulCases': 'Successful Cases',
    'stats.legalCases': 'Successful Legal Cases',
    'stats.clientSatisfaction': 'Client Satisfaction',
    'stats.satisfaction': 'Your Satisfaction',
  },
  sd: {
    // Navigation (Sindhi translations)
    'nav.home': 'گھر',
    'nav.lawyers': 'وڪيل',
    'nav.about': 'اسان جي باري ۾',
    'nav.contact': 'رابطو',
    'nav.blog': 'بلاگ',
    'nav.petitions': 'نموني درخواستون',

    // Hero Section
    'hero.title': 'ضلعي بار ايسوسيئيشن، ٽنڊو محمد خان',

    // Services Section
    'services.title': 'توهان اسان کان ڪهڙيون خدمتون حاصل ڪندا آهيو',
    'services.criminal': 'فوجداري قانون',
    'services.legal': 'قانوني معاملا',
    'services.commercial': 'تجارتي قانون',
    'services.family': 'خانداني قانون',
    'services.consultation': 'مشورو',

    // Join Section
    'join.title': 'سنڌ بار ڪائونسل ۾ شامل ٿيو',
    'join.subtitle': 'اسان جي معزز قانوني برادري جو ميمبر بڻجو',
    'join.button': 'هاڻي شامل ٿيو',
    'verification.title': 'وڪيل جي تصديق',
    'verification.subtitle': 'توهان جي ميمبر پورٽل ۽ وسائل تائين رسائي',
    'verification.button': 'وڪيل جي تصديق',

    // Footer
    'footer.quickAccess': 'فوري رسائي',
    'footer.contact': 'رابطي جي معلومات',
    'footer.supremeCourt': 'پاڪستان جي سپريم ڪورٽ',
    'footer.highCourt': 'سنڌ هاءِ ڪورٽ',
    'footer.pakistanBar': 'پاڪستان بار ڪائونسل',
    'footer.sindhBar': 'سنڌ بار ڪائونسل',
    'footer.sindhJudicial': 'سنڌ جوڊيشل اڪيڊمي',
    'footer.address': 'ضلعي بار ايسوسيئيشن جوڊيشل ڪمپليڪس، ٽنڊو محمد خان.',
    'footer.copyright': 'حق اشاعت © 2025',
    'footer.rights': '. تمام حق محفوظ آهن. | طرفان هلايل',

    // Contact
    'contact.title': 'اسان سان رابطو ڪريو',
    'contact.home': 'گھر',
    'contact.consultation': 'مشورو',
    'contact.requestForm': 'درخواست جمع ڪرائڻ جو فارم',
    'contact.fullName': 'پورو نالو',
    'contact.email': 'اي ميل پتو',
    'contact.phone': 'فون نمبر',
    'contact.subject': 'موضوع',
    'contact.description': 'تفصيل',
    'contact.submit': 'درخواست جمع ڪريو',

    // Stats
    'stats.successfulCases': 'ڪامياب ڪيس',
    'stats.legalCases': 'ڪامياب قانوني ڪيس',
    'stats.clientSatisfaction': 'ڪلائنٽ جي اطمينان',
    'stats.satisfaction': 'توهان جي اطمينان',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sd' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default values if context is not available
    return {
      language: 'en' as Language,
      toggleLanguage: () => {},
      t: (key: string) => key,
    };
  }
  return context;
};