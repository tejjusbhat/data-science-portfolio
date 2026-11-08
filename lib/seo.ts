import type { Metadata } from 'next';
import { profile } from '@/data/profile';

export const SITE_URL = 'https://tejjusbhat.com';
export const SITE_NAME = 'Tejjus Bhat';
export const DEFAULT_TITLE = 'Tejjus Bhat | R&D Engineer & Data Scientist';
export const DEFAULT_DESCRIPTION =
  'Tejjus Bhat is an R&D Engineer at Kinewell (offshore wind energy) and a Newcastle University MSc Data Science & AI graduate with Distinction, building full-stack AI software with Python and machine learning.';

const OG_IMAGE = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Tejjus Bhat, R&D Engineer at Kinewell, shown as a character card in a dark gothic RPG style',
};

/**
 * Page-level metadata. Next replaces (rather than merges) openGraph/twitter
 * objects per page, so each page rebuilds them here with the shared image.
 */
export function pageMetadata({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  return {
    title: title ?? { absolute: DEFAULT_TITLE },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tejjusbhat',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** schema.org Person, rendered as JSON-LD on the home page */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}/tejjus.jpg`,
  jobTitle: 'Research & Development Engineer',
  worksFor: { '@type': 'Organization', name: 'Kinewell' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Newcastle University' },
    { '@type': 'CollegeOrUniversity', name: 'ABES Engineering College' },
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Newcastle upon Tyne', addressCountry: 'GB' },
  knowsAbout: ['Data Science', 'Machine Learning', 'Large Language Models', 'RAG', 'Python', 'SQL', 'Power BI', 'Offshore Wind Energy'],
  sameAs: Object.entries(profile.links).filter(([k]) => k !== 'email').map(([, v]) => v),
};
