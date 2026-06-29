// app/services/digital-marketing/content-writing/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import ContentWritingContent from './ContentWritingContent';


const baseMetadata = generatePageMetadata({
  title: 'Content Writing Services | Professional Article Writers | Mezzex',
  description: 'Get professional content writing services and expert article writers to create SEO-friendly content that drives traffic, engagement, and growth.',
  path: '/services/digital-marketing/content-writing',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'content writing services',
    'professional article writers',
    'SEO content writing',
    'blog writing services',
    'website content writing',
    'product description writing',
    'marketing copywriting',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/digital-marketing/content-writing/#service",
  "name": "Content Writing Services",
  "description": "Professional content writing services by Mezzex including website content, blog writing, SEO content, product descriptions, and marketing copywriting for businesses in the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Content Writing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Content Writing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blog Writing Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Content Writing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Description Writing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Copywriting" } }
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
    { "@type": "ListItem", "position": 4, "name": "Content Writing", "item": "https://mezzex.com/services/digital-marketing/content-writing" }
  ]
};

export default function ContentWritingPage() {
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
      <ContentWritingContent />
    </>
  );
}