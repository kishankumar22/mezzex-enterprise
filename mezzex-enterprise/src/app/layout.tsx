import type { Metadata } from 'next';
import { Jost, Geist } from 'next/font/google';
import Script from 'next/script';
import '../app/globals.css';

import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import ScrollButton from '@/components/common/ScrollButton';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mezzex.com'),

  title: {
    default: 'IT Service Provider in UK | Web, App & Digital Solutions',
    template: '%s | Mezzex',
  },

  description:
    'Mezzex is a UK-based IT company providing website development, mobile app development, software development, SEO, digital marketing, ecommerce and warehouse management solutions.',

  keywords: [
    'IT services in UK',
    'website development company',
    'web development company',
    'mobile app development',
    'software development',
    'SEO services',
    'digital marketing',
    'ecommerce solutions',
    'warehouse management system',
  ],

  alternates: {
    canonical: 'https://mezzex.com',
  },
icons: {
  icon: '/favicon.webp',
  shortcut: '/favicon.webp',
  apple: '/favicon.webp',
},

  verification: {
    google: 'RQDV3I0y5_6XZ2qxqtehXqyFN_cD2wZpsceLfU1K7ls',
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mezzex.com',
    siteName: 'Mezzex',
    title: 'IT Service Provider in UK | Web, App & Digital Solutions',
    description:
      'Mezzex is a UK-based IT company providing website development, mobile app development, software development, SEO, digital marketing, ecommerce and warehouse management solutions.',
    images: [
      {
        url: 'https://mezzex.com/assets/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mezzex',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'IT Service Provider in UK | Web, App & Digital Solutions',
    description:
      'Mezzex is a UK-based IT company providing website development, mobile app development, software development, SEO, digital marketing, ecommerce and warehouse management solutions.',
    images: ['https://mezzex.com/assets/img/logo.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mezzex.com/#organization',
  name: 'Mezzex',
  url: 'https://mezzex.com/',
  logo: 'https://mezzex.com/assets/img/MZ%20Mezzex%20Stroc.png',
  description:
    'Mezzex is a UK-based IT and digital solutions company offering website development, mobile app development, software development, SEO services, digital marketing, ecommerce solutions, and warehouse management systems.',
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Spacebox Business Park, Unit E 38, Plume Street',
    addressLocality: 'Birmingham',
    postalCode: 'B6 7RT',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-121-6616357',
    contactType: 'customer service',
    email: 'info@mezzex.com',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/officialmezzex',
    'https://twitter.com/MezzexM',
    'https://www.linkedin.com/company/mezzex-pvt-ltd',
    'https://www.instagram.com/officialmezzex/',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://mezzex.com/#website',
  name: 'Mezzex',
  url: 'https://mezzex.com/',
  publisher: {
    '@id': 'https://mezzex.com/#organization',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('font-sans', geist.variable)}>
      <body className={`${jost.variable} font-sans antialiased`}>
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* GTM + GA Lazy Load */}
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              var _gtmLoaded = false;

              function loadGTM() {
                if (_gtmLoaded) return;
                _gtmLoaded = true;

                dataLayer.push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
                });

                var gtmScript = document.createElement('script');
                gtmScript.async = true;
                gtmScript.src =
                  'https://www.googletagmanager.com/gtm.js?id=GTM-N3NDTHV';
                document.head.appendChild(gtmScript);

                var gaScript = document.createElement('script');
                gaScript.async = true;
                gaScript.src =
                  'https://www.googletagmanager.com/gtag/js?id=G-NCZ9QNMXBF';

                gaScript.onload = function () {
                  gtag('js', new Date());
                  gtag('config', 'G-NCZ9QNMXBF');
                };

                document.head.appendChild(gaScript);
              }

              ['mousemove','keydown','touchstart','scroll']
                .forEach(function(evt) {
                  window.addEventListener(evt, loadGTM, {
                    once: true,
                    passive: true
                  });
                });

              setTimeout(loadGTM, 5000);
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3NDTHV"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          />
        </noscript>

        <SmoothScrollProvider>
          <Header />
          

          <main className="min-h-screen overflow-hidden">
            {children}
          </main>

          <Footer />
          <ScrollButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}