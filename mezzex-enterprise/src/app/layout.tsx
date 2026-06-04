import type { Metadata } from 'next';
import { Jost, Geist } from 'next/font/google';
import '../app/globals.css';
import { siteConfig } from '@/config/site';
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });

export const metadata: Metadata = {
  title: {
    default: 'IT Service Provider in UK | Web, App & Digital Solutions',
    template: '%s | Mezzex',
  },
  description: siteConfig.description,
  keywords: ['IT services in UK', 'website development company', 'digital marketing advertising companies', 'industrial warehouse for rent'],
  openGraph: {
    type: 'website',
    siteName: 'Mezzex',
    title: 'IT Service Provider in UK | Web, App & Digital Solutions',
    description: 'Read the latest blogs, insights and articles from Mezzex on SEO, web development, digital marketing and technology.',
    url: 'https://mezzex.com/',
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
    description: 'Read the latest blogs, insights and articles from Mezzex on SEO, web development, digital marketing and technology.',
    images: ['https://mezzex.com/assets/img/logo.png'],
  },
  verification: {
    google: 'RQDV3I0y5_6XZ2qxqtehXqyFN_cD2wZpsceLfU1K7ls',
  },
  alternates: {
    canonical: 'https://mezzex.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mezzex",
              url: "https://mezzex.com/",
              logo: "https://mezzex.com/assets/img/MZ%20Mezzex%20Stroc.png",
              description: "Mezzex is a UK-based IT and digital solutions company offering website development, mobile app development, software development, SEO services, digital marketing, eCommerce solutions, and warehouse management systems.",
              foundingDate: "2018",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Spacebox Business Park, Unit E 38, Plume Street",
                addressLocality: "Birmingham",
                postalCode: "B6 7RT",
                addressCountry: "GB"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-121-6616357",
                contactType: "customer service",
                email: "info@mezzex.com",
                availableLanguage: "English"
              },
              sameAs: [
                "https://www.facebook.com/officialmezzex",
                "https://twitter.com/MezzexM",
                "https://www.linkedin.com/company/mezzex-pvt-ltd",
                "https://www.instagram.com/officialmezzex/"
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              var _gtmLoaded = false;
              function loadGTM() {
                  if (_gtmLoaded) return;
                  _gtmLoaded = true;
                  dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                  var gtmScript = document.createElement('script');
                  gtmScript.async = true;
                  gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N3NDTHV';
                  document.head.appendChild(gtmScript);
                  var gaScript = document.createElement('script');
                  gaScript.async = true;
                  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-NCZ9QNMXBF';
                  gaScript.onload = function () {
                      gtag('js', new Date());
                      gtag('config', 'G-NCZ9QNMXBF');
                  };
                  document.head.appendChild(gaScript);
              }
              ['mousemove', 'keydown', 'touchstart', 'scroll'].forEach(function (evt) {
                  window.addEventListener(evt, loadGTM, { once: true, passive: true });
              });
              setTimeout(loadGTM, 5000);
            `
          }}
        />
      </head>
      <body className={`${jost.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3NDTHV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
  <SmoothScrollProvider>
    <Header />

    {/* REMOVE mt-6 md:mt-0 */}
    <main className="min-h-screen overflow-hidden">
      {children}
    </main>

    <Footer />
  </SmoothScrollProvider>
</body>
    </html>
  );
}
