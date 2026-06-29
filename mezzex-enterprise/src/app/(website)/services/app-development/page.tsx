import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import AppDevelopmentContent from './AppDevelopmentContent';

const baseMetadata = generatePageMetadata({
  title: 'Mobile App Development | Expert App Development Company | Mezzex',
  description: 'Get expert mobile app development services from a trusted app development company. Build scalable, user-friendly apps for growth.',
  path: '/services/app-development',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'mobile app development',
    'app development company',
    'android app development',
    'ios app development',
    'hybrid app development',
    'UI/UX design app',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/app-development/#service",
  "name": "Mobile App Development Services",
  "description": "Professional mobile app development services by Mezzex including Android app development, iOS app development, hybrid app development, UI/UX design, and scalable mobile solutions for businesses in the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile App Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hybrid App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design for Mobile Apps" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Maintenance & Support" } }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mezzex.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mezzex.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "App Development", "item": "https://mezzex.com/services/app-development" }
  ]
};

export default function AppDevelopmentPage() {
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
      <AppDevelopmentContent />
    </>
  );
}
