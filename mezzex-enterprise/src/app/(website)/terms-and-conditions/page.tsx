import { generatePageMetadata } from '@/seo/metadata';

export const metadata = generatePageMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Mezzex IT Services.',
  path: '/terms-and-conditions',
});

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">Last updated: May 2026</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-6">By accessing our website and using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website or services.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-6">Other than the content you own, under these Terms, Mezzex and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this website.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Restrictions</h2>
          <p className="mb-6">You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Publishing any website material in any other media.</li>
            <li>Selling, sublicensing and/or otherwise commercialising any website material.</li>
            <li>Publicly performing and/or showing any website material.</li>
            <li>Using this website in any way that is or may be damaging to this website.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
