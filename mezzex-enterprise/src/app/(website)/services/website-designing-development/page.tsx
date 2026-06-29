import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import WebsiteServiceContent from './WebsiteServiceContent';

const baseMetadata = generatePageMetadata({
  title: 'Partner With a Top Web Development Company in the UK | Mezzex',
  description: 'Improve your online presence with modern website development and design in the UK. We are a web design company that is ready to make you compete in the dynamic UK market.',
  path: '/services/website-designing-development',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'web development company', 
    'website development', 
    'web design company', 
    'WordPress website designer', 
    'Shopify developer', 
    'WordPress developer'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/website-designing-development/#service",
  "name": "Website Designing & Development",
  "description": "Professional website designing and development services by Mezzex, including custom website design, responsive development, UI/UX design, and CMS-based solutions for businesses in the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Website Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Website Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Responsive Website Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CMS Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Website Development" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Website Designing & Development", "item": "https://mezzex.com/services/website-designing-development" }
  ]
};

export default function WebsiteDesigningDevelopmentPage() {
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
      <WebsiteServiceContent />
    </>
  );
}
