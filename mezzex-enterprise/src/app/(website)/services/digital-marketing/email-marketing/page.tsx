// app/services/digital-marketing/email-marketing/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import EmailMarketingContent from './EmailMarketingContent';


const baseMetadata = generatePageMetadata({
  title: 'Email Marketing Services | Email Marketing Consultant | Mezzex',
  description: 'Drive more leads and sales with expert email marketing services. Partner with an email marketing consultant to build campaigns that convert.',
  path: '/services/digital-marketing/email-marketing',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'email marketing services',
    'email marketing consultant',
    'email campaign strategy',
    'newsletter design',
    'marketing automation',
    'lead nurturing',
    'customer retention',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/digital-marketing/email-marketing/#service",
  "name": "Email Marketing Services",
  "description": "Professional email marketing services by Mezzex including email campaign strategy, newsletter design, automation setup, lead nurturing, and customer retention campaigns for businesses in the UK.",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Email Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Campaign Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Newsletter Design & Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Automation Setup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Nurturing Campaigns" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Retention Emails" } }
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
    { "@type": "ListItem", "position": 4, "name": "Email Marketing", "item": "https://mezzex.com/services/digital-marketing/email-marketing" }
  ]
};

export default function EmailMarketingPage() {
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
      <EmailMarketingContent />
    </>
  );
}