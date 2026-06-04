// src/app/(website)/gallery/page.tsx


import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import GalleryClient from './GalleryClient';
import GalleryHeaderClient from './GalleryHeaderClient';
import { PartnerSection } from '@/components/home/PartnerSection';



// JSON‑LD schema for the Gallery page (exactly as in the .NET version)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://mezzex.com/gallery/#gallery",
  "name": "Mezzex Project Gallery",
  "url": "https://mezzex.com/gallery",
  "description": "Explore Mezzex project gallery showcasing website development, mobile apps, software solutions, eCommerce projects, and digital marketing work.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://mezzex.com/#website"
  },
  "about": {
    "@type": "Organization",
    "@id": "https://mezzex.com/#organization",
    "name": "Mezzex"
  }
};

export const metadata: Metadata = {
  title: {
    default: 'Gallery | Mezzex',
    template: '%s | Mezzex',
  },
  description: siteConfig.description,
  openGraph: {
    title: 'Gallery | Mezzex',
    description: siteConfig.description,
    url: 'https://mezzex.com/gallery',
    siteName: 'Mezzex',
    images: [{
      url: 'https://mezzex.com/assets/img/gallery-hero.png',
      width: 1200,
      height: 630,
      alt: 'Mezzex Gallery',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Mezzex',
    description: siteConfig.description,
    images: ['https://mezzex.com/assets/img/gallery-hero.png'],
  },
  alternates: {
    canonical: 'https://mezzex.com/gallery',
  },
};

// Mock data – replace with real CMS data when available
// Mock data
const imageCount = 14;
const videoCount = 10;

const images = Array.from({ length: imageCount }, (_, i) => ({
  id: i + 1,
  src: `https://mezzex.com/images/video-image/office-image/office${i + 1}.jpg`,
  alt: `Image ${i + 1}`,
}));

const videos = Array.from({ length: videoCount }, (_, i) => ({
  id: i + 1,
  src: `https://mezzex.com/images/video-image/office-video/video${i + 1}.mp4`,
  thumb: `https://mezzex.com/images/video-image/office-video/video-bg.jpg`,
  alt: `Video ${i + 1}`,
}));

const mediaItems = [
  ...images.map((img) => ({
    type: 'image' as const,
    src: img.src,
    alt: img.alt,
  })),
  ...videos.map((vid) => ({
    type: 'video' as const,
    src: vid.src,
    alt: vid.alt,
  })),
];

export default function GalleryPage() {
  return (
    <main className="flex flex-col gap-4 bg-[#f8fbff]">
      {/* JSON‑LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <GalleryHeaderClient />

      {/* Client‑side interactive part */}

    <GalleryClient
  images={images}
  videos={videos}
  mediaItems={mediaItems}
/>
    <div className='mb-12'>
           <PartnerSection />   
       </div> 
    </main>
  );
}
