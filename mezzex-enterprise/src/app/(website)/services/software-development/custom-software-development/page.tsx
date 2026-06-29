// app/services/software-development/custom-software-development/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import CustomSoftwareDevelopmentContent from './CustomSoftwareDevelopmentContent';

const baseMetadata = generatePageMetadata({
  title: 'Best Software Development Companies in Birmingham UK | Mezzex',
  description: 'Explore the best software development companies in Birmingham UK. Compare expert teams, custom solutions, and trusted tech services.',
  path: '/services/software-development/custom-software-development',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'custom software development',
    'software development companies',
    'enterprise application development',
    'business automation software',
    'api development',
    'software maintenance',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/software-development/#service",
  "name": "Software Development Services",
  "description": "Professional software development services by Mezzex including custom software solutions, enterprise applications, business automation software, API development, and scalable software systems for businesses in the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Application Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation Software" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Development & Integration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Maintenance & Support" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Software Development", "item": "https://mezzex.com/services/software-development" }
  ]
};

export default function CustomSoftwareDevelopmentPage() {
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
      <CustomSoftwareDevelopmentContent />
    </>
  );
}