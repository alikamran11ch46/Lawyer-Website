// Cloudinary helper functions for image optimization and delivery

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'drcz5iunc';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * Get optimized Cloudinary URL for images
 * @param path - Path to the image in Cloudinary (e.g., 'bar-council/team/president.jpg')
 * @param options - Transformation options
 */
export function getCloudinaryUrl(
  path: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number | 'auto';
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    crop?: 'fill' | 'scale' | 'fit' | 'limit';
  }
): string {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill'
  } = options || {};

  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);

  const transformStr = transformations.join(',');

  return `${BASE_URL}/image/upload/${transformStr}/${path}`;
}

/**
 * Get Cloudinary URL for videos
 * @param path - Path to the video in Cloudinary
 * @param options - Transformation options
 */
export function getCloudinaryVideoUrl(
  path: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number | 'auto';
  }
): string {
  const { width, height, quality = 'auto' } = options || {};

  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  transformations.push(`q_${quality}`);

  const transformStr = transformations.join(',');

  return `${BASE_URL}/video/upload/${transformStr}/${path}`;
}

/**
 * Get Cloudinary URL for raw files (PDFs, etc.)
 * @param path - Path to the file in Cloudinary
 */
export function getCloudinaryRawUrl(path: string): string {
  return `${BASE_URL}/raw/upload/${path}`;
}

/**
 * Convert local /public path to Cloudinary path
 * @param localPath - Local path (e.g., '/team/president.jpg')
 */
export function localToCloudinaryPath(localPath: string): string {
  // Remove leading slash if present
  const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;

  // Add bar-council prefix if not present
  if (cleanPath.startsWith('bar-council/')) {
    return cleanPath;
  }

  return `bar-council/${cleanPath}`;
}

// Mapping for common images
export const CLOUDINARY_IMAGES = {
  // Logos
  barLogo: 'bar-council/bar-logo.png',
  barLogoNew: 'bar-council/bar-logo-new.png',
  barLogoGolden: 'bar-council/bar-logo-golden.svg',
  barLogoCard: 'bar-council/bar-logo-card.png',

  // Backgrounds
  contactBg: 'bar-council/contact-bg.jpg',
  findLawyerBg: 'bar-council/find-lawyer-bg.jpg',
  historyBg: 'bar-council/history-bg.jpg',
  lawBooksBg: 'bar-council/law-books-bg.jpg',
  lawyerBg1: 'bar-council/lawyer-bg-1.jpg',
  lawyerBg2: 'bar-council/lawyer-bg-2.jpg',
  policyBg: 'bar-council/policy-bg.jpg',
  pressReleaseBg: 'bar-council/press-release-bg.jpg',
  mediaContactBg: 'bar-council/media-contact-bg.jpg',
  teamBg: 'bar-council/team-bg.jpg',
  ecardBg: 'bar-council/ecard-bg.jpg',
  missionBg: 'bar-council/mission-bg.jpg',
  visionBg: 'bar-council/vision-bg.jpg',
  valuesBg: 'bar-council/values-bg.jpg',
  bgAboutUs: 'bar-council/bg-about-us.png',

  // Other images
  aboutHistory: 'bar-council/about-history.png',
  dbaPresident: 'bar-council/dba-president.jpg',
  dbaSitting: 'bar-council/dba-sitting.jpg',
  justice: 'bar-council/justice.png',
  justiceLady: 'bar-council/justice-lady.png',
  phoneCall: 'bar-council/phone-call.png',
  phoneNew: 'bar-council/phone-new.png',
  phoneIconGold: 'bar-council/phone-icon-gold.svg',
  loadingAnimation: 'bar-council/loading-animation.gif',

  // Videos
  logoAnimated: 'bar-council/logo-animated.mp4',
  logoAnimatedNew: 'bar-council/logo-animated-new.mp4',
  barLogoAnimated: 'bar-council/bar-logo-animated.mp4',

  // Team
  president: 'bar-council/team/president.jpg',
  vicePresident: 'bar-council/team/vice-president.jpg',
  generalSecretary: 'bar-council/team/general-secretary.jpg',
  jointSecretary: 'bar-council/team/joint-secretary.jpg',
  librarySecretary: 'bar-council/team/library-secretary.jpg',
  treasurer: 'bar-council/team/treasurer.jpg',

  // Campaigns
  treePlantation: 'bar-council/campaigns/tree-plantation.jpg',
  independenceCelebration: 'bar-council/campaigns/independence-celebration.jpg',

  // Circulars
  circular1: 'bar-council/circulars/1000252807.jpg',
  circular2: 'bar-council/circulars/1000252808.jpg',
  circular3: 'bar-council/circulars/1000252809.jpg',
  circular4: 'bar-council/circulars/1000252810.jpg',
} as const;

// SVG Icons mapping
export const CLOUDINARY_ICONS = {
  bag: 'bar-council/svgicon/bag.svg',
  law: 'bar-council/svgicon/lawsvg.svg',
  like: 'bar-council/svgicon/like.svg',
  logo: 'bar-council/svgicon/logo.svg',
  mail: 'bar-council/svgicon/mail.svg',
  map: 'bar-council/svgicon/map.svg',
  menu: 'bar-council/svgicon/menu.svg',
  person: 'bar-council/svgicon/person.svg',
  phone: 'bar-council/svgicon/phone.svg',
  quote: 'bar-council/svgicon/quote.svg',
  sec3: 'bar-council/svgicon/sec3.png',
} as const;

// PDFs mapping
export const CLOUDINARY_PDFS = {
  lawyerDirectory: 'bar-council/lawyer-directory.pdf',
  ppc: 'bar-council/law-books/law-books/ppc.pdf',
  electionByeLaws: 'bar-council/policy/election-bye-laws-2023.pdf',
  policyDocument: 'bar-council/policy/policy-document.pdf',
  hyderabadProtest1: 'bar-council/press-release/hyderabad_lawyers_protest_1.pdf',
  hyderabadProtest2: 'bar-council/press-release/hyderabad_lawyers_protest_2.pdf',
  hyderabadProtest3: 'bar-council/press-release/hyderabad_lawyers_protest_3.pdf',
  pjaljJune2022: 'bar-council/publications/pjalj-june-2022.pdf',

  // Split PDFs (Large files divided into parts)
  constitutionalHistoryPart1: 'bar-council/law-books/law-books/constitutional-history-pakistan-part1.pdf',
  constitutionalHistoryPart2: 'bar-council/law-books/law-books/constitutional-history-pakistan-part2.pdf',
  constitutionalHistoryPart3: 'bar-council/law-books/law-books/constitutional-history-pakistan-part3.pdf',
  constitutionalHistoryPart4: 'bar-council/law-books/law-books/constitutional-history-pakistan-part4.pdf',

  fundamentalLawPart1: 'bar-council/law-books/law-books/fundamental-law-pakistan-part1.pdf',
  fundamentalLawPart2: 'bar-council/law-books/law-books/fundamental-law-pakistan-part2.pdf',
  fundamentalLawPart3: 'bar-council/law-books/law-books/fundamental-law-pakistan-part3.pdf',
  fundamentalLawPart4: 'bar-council/law-books/law-books/fundamental-law-pakistan-part4.pdf',
  fundamentalLawPart5: 'bar-council/law-books/law-books/fundamental-law-pakistan-part5.pdf',
  fundamentalLawPart6: 'bar-council/law-books/law-books/fundamental-law-pakistan-part6.pdf',
  fundamentalLawPart7: 'bar-council/law-books/law-books/fundamental-law-pakistan-part7.pdf',
  fundamentalLawPart8: 'bar-council/law-books/law-books/fundamental-law-pakistan-part8.pdf',
  fundamentalLawPart9: 'bar-council/law-books/law-books/fundamental-law-pakistan-part9.pdf',
} as const;

// Helper: Get all parts of a split PDF
export function getSplitPDFParts(pdfName: 'constitutional-history' | 'fundamental-law'): string[] {
  if (pdfName === 'constitutional-history') {
    return [
      CLOUDINARY_PDFS.constitutionalHistoryPart1,
      CLOUDINARY_PDFS.constitutionalHistoryPart2,
      CLOUDINARY_PDFS.constitutionalHistoryPart3,
      CLOUDINARY_PDFS.constitutionalHistoryPart4,
    ];
  } else {
    return [
      CLOUDINARY_PDFS.fundamentalLawPart1,
      CLOUDINARY_PDFS.fundamentalLawPart2,
      CLOUDINARY_PDFS.fundamentalLawPart3,
      CLOUDINARY_PDFS.fundamentalLawPart4,
      CLOUDINARY_PDFS.fundamentalLawPart5,
      CLOUDINARY_PDFS.fundamentalLawPart6,
      CLOUDINARY_PDFS.fundamentalLawPart7,
      CLOUDINARY_PDFS.fundamentalLawPart8,
      CLOUDINARY_PDFS.fundamentalLawPart9,
    ];
  }
}
