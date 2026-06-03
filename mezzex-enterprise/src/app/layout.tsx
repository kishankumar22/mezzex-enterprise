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
      </head>
      <body className={`${jost.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <Header />
          <main className="min-h-screen mt-6 md:mt-0">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
