import { generatePageMetadata } from '@/seo/metadata';

export const metadata = generatePageMetadata({
  title: 'About Us',
  description: 'Learn more about Mezzex, a leading IT service provider in the UK offering digital marketing, website designing, app development, and more.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Mezzex</h1>
          <p className="text-lg text-gray-600">
            Mezzex is a UK-based IT and digital solutions company offering website development, mobile app development, software development, SEO services, digital marketing, eCommerce solutions, and warehouse management systems.
          </p>
        </div>
      </div>
    </div>
  );
}
