import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import AmazonServicesContent from './AmazonServicesContent';

const baseMetadata = generatePageMetadata({
  title: 'Amazon Services | Managing Amazon Seller Account | Mezzex',
  description: 'Boost sales with expert Amazon services and professional Amazon seller account management to optimize listings and performance.',
  path: '/services/amazon-services',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'amazon services',
    'amazon seller account management',
    'product listing optimization',
    'amazon seo services',
    'amazon ppc advertising',
    'marketplace growth strategy',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/amazon-services/#service",
  "name": "Amazon Services",
  "description": "Professional Amazon services by Mezzex including Amazon seller account management, product listing optimization, Amazon SEO, PPC advertising, and marketplace growth strategies for businesses in the UK and global markets.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Amazon Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Amazon Seller Account Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Amazon Product Listing Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Amazon SEO Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Amazon PPC Advertising" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketplace Growth Strategy" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Amazon Services", "item": "https://mezzex.com/services/amazon-services" }
  ]
};

export default function AmazonServicesPage() {
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
      <AmazonServicesContent />
    </>
  );
}
