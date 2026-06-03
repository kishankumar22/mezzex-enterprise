import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'IT Service Provider in UK | Web, App & Digital Solutions | Mezzex',
    template: '%s | Mezzex',
  },
  description: siteConfig.description,
  keywords: ['IT services in UK', 'website development company', 'digital marketing UK', 'app development UK', 'software development company UK', 'SEO services UK'],
  authors: [{ name: 'Mezzex', url: siteConfig.url }],
  creator: 'Mezzex',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'IT Service Provider in UK | Web, App & Digital Solutions | Mezzex',
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Mezzex - IT Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Service Provider in UK | Web, App & Digital Solutions | Mezzex',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  verification: { google: 'RQDV3I0y5_6XZ2qxqtehXqyFN_cD2wZpsceLfU1K7ls' },
};

export function generatePageMetadata(params: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = params.path ? `${siteConfig.url}${params.path}` : siteConfig.url;
  return {
    title: params.title,
    description: params.description,
    alternates: { canonical: url },
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      images: [{ url: params.image || siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      title: params.title,
      description: params.description,
      images: [params.image || siteConfig.ogImage],
    },
  };
}
