import { getServiceBySlug } from '@/services/services/getServices';
import { generatePageMetadata } from '@/seo/metadata';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return generatePageMetadata({ title: 'Not Found', description: '' });

  return generatePageMetadata({
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.shortDescription,
    image: service.featuredImage,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-3 pb-4 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        
        <Link href="/services" className="inline-flex items-center text-gray-500 hover:text-[#2f5a84] mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.fullDescription}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <ul className="space-y-4 mb-12">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#2f5a84] mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to start your project?</h4>
              <p className="text-gray-600 mb-6">Get in touch with our experts today to discuss how our {service.title} services can help your business grow.</p>
              <Link 
                href="/contact" 
                className="inline-block bg-[#2f5a84] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#1a3855] transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={service.featuredImage}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}
