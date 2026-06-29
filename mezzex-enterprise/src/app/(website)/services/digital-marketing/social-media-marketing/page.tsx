// app/services/digital-marketing/social-media-marketing/page.tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import SocialMediaMarketingContent from './SocialMediaMarketingContent';


const baseMetadata = generatePageMetadata({
  title: 'Social Media Marketing | Expert Social Media Consultant | Mezzex',
  description: 'Boost your brand with expert social media marketing services. Work with a social media consultant to increase engagement, reach, leads, and business growth.',
  path: '/services/digital-marketing/social-media-marketing',
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    'social media marketing',
    'social media consultant',
    'facebook marketing',
    'instagram marketing',
    'linkedin marketing',
    'social media content creation',
    'paid social advertising',
    'Mezzex'
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mezzex.com/services/digital-marketing/social-media-marketing/#service",
  "name": "Social Media Marketing Services",
  "description": "Professional social media marketing services by Mezzex including Facebook marketing, Instagram marketing, LinkedIn marketing, content creation, and paid social campaigns for business growth in the UK.",
  "provider": {
    "@type": "Organization",
    "@id": "https://mezzex.com/#organization",
    "name": "Mezzex",
    "url": "https://mezzex.com/"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Social Media Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facebook Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instagram Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Content Creation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Social Advertising" } }
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
    { "@type": "ListItem", "position": 4, "name": "Social Media Marketing", "item": "https://mezzex.com/services/digital-marketing/social-media-marketing" }
  ]
};

export default function SocialMediaMarketingPage() {
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
      <SocialMediaMarketingContent />
    </>
  );
}