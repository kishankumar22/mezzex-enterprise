
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import AboutContent from './AboutContent';



export const metadata: Metadata = {
  title: {
    default: 'About Us | Mezzex',
    template: '%s | Mezzex',
  },
  description: siteConfig.description,
  keywords: ['IT services', 'digital solutions', 'Mezzex', 'UK', 'web development', 'software development'],
  openGraph: {
    title: 'About Us | Mezzex',
    description: siteConfig.description,
    url: 'https://mezzex.com/about',
    siteName: 'Mezzex',
    images: [
      {
        url: 'https://mezzex.com/assets/img/about-hero.png',
        width: 1200,
        height: 630,
        alt: 'Mezzex team collaboration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Mezzex',
    description: siteConfig.description,
    images: ['https://mezzex.com/assets/img/about-hero.png'],
  },
  alternates: {
    canonical: 'https://mezzex.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://mezzex.com/about/#about",
            "url": "https://mezzex.com/about",
            "name": "About Mezzex",
            "description": "Learn more about Mezzex, a UK-based IT and digital solutions company offering website development, mobile app development, software development, SEO, digital marketing, and eCommerce services.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://mezzex.com/#website"
            },
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://mezzex.com/#organization",
              "name": "Mezzex",
              "url": "https://mezzex.com/",
              "logo": "https://mezzex.com/assets/img/MZ%20Mezzex%20Stroc.png"
            }
          })
        }}
      />
    </>
  );
}
