import { getServices } from '@/services/services/getServices';
import { generatePageMetadata } from '@/seo/metadata';
import Link from 'next/link';
import { ArrowRight, Monitor, TrendingUp, Code, Smartphone, ShoppingCart, Package } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Our Services',
  description: 'Explore our range of IT services including Web Design, Digital Marketing, Software Development, App Development, and E-commerce Services.',
  path: '/services',
});

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  Package: <Package className="w-8 h-8" />,
};

export default async function ServicesPage() {
  const { data: services } = await getServices();

  return (
    <div className="pt-3 pb-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our IT Services</h1>
          <p className="text-lg text-gray-600">
            From web development to comprehensive digital marketing strategies, we provide end-to-end IT solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              <div className="w-16 h-16 bg-[#2f5a84]/10 rounded-xl flex items-center justify-center text-[#2f5a84] mb-6 group-hover:bg-[#2f5a84] group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon] || <Monitor className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2f5a84] transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-8 line-clamp-4 flex-grow">
                {service.shortDescription}
              </p>
              <Link 
                href={`/services/${service.slug}`} 
                className="inline-flex items-center text-[#2f5a84] font-semibold hover:text-[#4BEAFF] transition-colors mt-auto"
              >
                Explore Service <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
