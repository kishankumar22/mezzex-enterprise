import { Metadata } from 'next';
import { generatePageMetadata } from '@/seo/metadata';
import Link from 'next/link';
import { Home, ArrowRight, Heart } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Thank You for Applying – Careers',
  description: 'Thank you for submitting your job application to Mezzex. We will get back to you shortly.',
  path: '/careers/thank-you',
});

export default function ThankYouPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb section */}
      <section className="relative bg-[#2f5a84] py-16 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <nav className="flex items-center space-x-2 text-sm text-[#4BEAFF] mb-4">
            <Link href="/" className="hover:underline flex items-center gap-1 font-medium">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <Link href="/careers" className="hover:underline font-medium">
              Careers
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Thank You</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Application Received</h1>
        </div>
      </section>

      {/* Thank you message container */}
      <section className="py-20 md:py-32 max-w-2xl mx-auto px-4 text-center space-y-8">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto shadow-sm border border-green-100">
          <Heart className="w-10 h-10 fill-green-500/10" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Thank You!
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Thank you for contacting us and submitting your job application. We have received your query and resume. Our HR recruitment team will review your qualifications and get back to you shortly.
          </p>
        </div>
        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            Go to Home Page <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
