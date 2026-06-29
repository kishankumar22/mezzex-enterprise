// app/services/digital-marketing/e-commerce-marketing/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import ECommerceMarketingContent from './ECommerceMarketingContent';


const baseMetadata = generatePageMetadata({
  title: 'Ecommerce Marketing Agencies | Grow Sales Online | Mezzex',
  description: 'Grow your online sales with expert ecommerce marketing agencies. Drive traffic, increase conversions, and scale your ecommerce business.',
  path: '/services/digital-marketing/e-commerce-marketing',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'ecommerce marketing',
    'ecommerce marketing agencies',
    'online store promotion',
    'product advertising',
    'conversion optimisation',
    'ecommerce seo',
    'marketplace marketing',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/digital-marketing/e-commerce-marketing/#service",
  "name": "E-commerce Marketing Services",
  "description": "Professional e-commerce marketing services by Mezzex including online store promotion, product advertising, conversion optimisation, SEO for eCommerce, and paid advertising campaigns to grow online sales in the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "E-commerce Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce SEO" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Advertising Campaigns" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimisation (CRO)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketplace Marketing (Amazon / eBay)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid E-commerce Ads" } }
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
    { "@type": "ListItem", "position": 4, "name": "E-commerce Marketing", "item": "https://mezzex.com/services/digital-marketing/e-commerce-marketing" }
  ]
};

export default function ECommerceMarketingPage() {
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
      <ECommerceMarketingContent />
    </>
  );
}