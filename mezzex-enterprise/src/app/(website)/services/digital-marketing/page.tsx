import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import DigitalMarketingContent from './DigitalMarketingContent';

const baseMetadata = generatePageMetadata({
  title: 'Top Digital Marketing Agency in The UK | Mezzex',
  description: 'Professional digital marketing services by Mezzex including SEO, social media marketing, PPC advertising, content marketing, and online brand growth strategies for businesses in the UK.',
  path: '/services/digital-marketing',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'digital marketing agency',
    'performance marketing agency',
    'SEO agency',
    'PPC agency',
    'social media marketing',
    'influencer marketing',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/digital-marketing/#service",
  "name": "Digital Marketing Services",
  "description": "Professional digital marketing services by Mezzex including SEO, social media marketing, PPC advertising, content marketing, and online brand growth strategies for businesses in the UK.",
  "provider": {
    "@type": "Organization",
    "@id": "https://mezzex.com/#organization",
    "name": "Mezzex",
    "url": "https://mezzex.com/"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimisation (SEO)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pay Per Click Advertising (PPC)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Brand Strategy" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Digital Marketing", "item": "https://mezzex.com/services/digital-marketing" }
  ]
};

export default function DigitalMarketingPage() {
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
      <DigitalMarketingContent />
    </>
  );
}
