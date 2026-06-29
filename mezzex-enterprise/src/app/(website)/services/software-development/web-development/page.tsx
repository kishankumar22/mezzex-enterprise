// app/services/software-development/web-development/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import WebDevelopmentContent from './WebDevelopmentContent';


const baseMetadata = generatePageMetadata({
  title: 'Website Development Company | Expert Web Development | Mezzex',
  description: 'Choose a trusted website development company for expert web development services. Build fast, scalable, and high-performing websites.',
  path: '/services/software-development/web-development',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'web development',
    'website development company',
    'custom web development',
    'frontend development',
    'backend development',
    'responsive web design',
    'web application development',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/software-development/web-development/#service",
  "name": "Web Development Services",
  "description": "Professional web development services by Mezzex including custom website development, responsive web applications, frontend and backend development, and scalable web solutions for businesses in the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Website Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frontend Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backend Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Responsive Web Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Software Development", "item": "https://mezzex.com/services/software-development/" },
    { "@type": "ListItem", "position": 4, "name": "Web Development", "item": "https://mezzex.com/services/software-development/web-development" }
  ]
};

export default function WebDevelopmentPage() {
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
      <WebDevelopmentContent />
    </>
  );
}