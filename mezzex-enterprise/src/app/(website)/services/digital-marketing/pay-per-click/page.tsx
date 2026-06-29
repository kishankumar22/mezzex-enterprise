// app/services/digital-marketing/pay-per-click/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import PayPerClickContent from './PayPerClickContent';


const baseMetadata = generatePageMetadata({
  title: 'Pay Per Click (PPC) Advertising Services | Mezzex',
  description: 'Professional Pay Per Click (PPC) advertising services by Mezzex including Google Ads, Bing Ads, campaign management, keyword targeting, ad optimisation, and ROI-focused paid marketing strategies in the UK.',
  path: '/services/digital-marketing/pay-per-click',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'pay per click',
    'ppc advertising',
    'google ads management',
    'bing ads campaigns',
    'keyword targeting',
    'ppc optimisation',
    'performance marketing',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/digital-marketing/pay-per-click/#service",
  "name": "Pay Per Click (PPC) Advertising Services",
  "description": "Professional Pay Per Click (PPC) advertising services by Mezzex including Google Ads, Bing Ads, campaign management, keyword targeting, ad optimisation, and ROI-focused paid marketing strategies in the UK.",
  "provider": {
    "@type": "Organization",
    "@id": "https://mezzex.com/#organization",
    "name": "Mezzex",
    "url": "https://mezzex.com/"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "PPC Advertising Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bing Ads Campaigns" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Targeting & Research" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ad Copy & Creative Optimisation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Campaign Optimisation & Reporting" } }
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
    { "@type": "ListItem", "position": 4, "name": "Pay Per Click (PPC)", "item": "https://mezzex.com/services/digital-marketing/pay-per-click" }
  ]
};

export default function PayPerClickPage() {
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
      <PayPerClickContent />
    </>
  );
}