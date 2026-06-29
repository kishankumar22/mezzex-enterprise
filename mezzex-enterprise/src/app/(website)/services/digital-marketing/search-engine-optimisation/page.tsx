// app/services/digital-marketing/search-engine-optimisation/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import SearchEngineOptimisationContent from './SearchEngineOptimisationContent';

const baseMetadata = generatePageMetadata({
  title: 'Search Engine Optimisation (SEO) Services | Mezzex',
  description: 'Boost your online visibility with professional SEO services including on-page, off-page, technical SEO, keyword research, and reporting.',
  path: '/services/digital-marketing/search-engine-optimisation',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'search engine optimisation',
    'seo services',
    'digital marketing',
    'keyword research',
    'technical seo',
    'on-page seo',
    'off-page seo',
    'Mezzex',
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/digital-marketing/search-engine-optimisation/#service",
  "name": "Search Engine Optimisation (SEO) Services",
  "description": "Professional SEO services by Mezzex including on-page SEO, off-page SEO, technical SEO, keyword research, and ranking improvement strategies for businesses in the UK.",
  "provider": {
    "@type": "Organization",
    "@id": "https://mezzex.com/#organization",
    "name": "Mezzex",
    "url": "https://mezzex.com/"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SEO Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Page SEO" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Off-Page SEO" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Research" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Audit & Reporting" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Digital Marketing", "item": "https://mezzex.com/services/digital-marketing/" },
    { "@type": "ListItem", "position": 4, "name": "Search Engine Optimisation", "item": "https://mezzex.com/services/digital-marketing/search-engine-optimisation" }
  ]
};

export default function SearchEngineOptimisationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SearchEngineOptimisationContent />
    </>
  );
}