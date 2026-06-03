'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, TrendingUp, Code, Smartphone, ShoppingCart, Package } from 'lucide-react';
import { Service } from '@/types/service';
import { getServices } from '@/services/services/getServices';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  Package: <Package className="w-8 h-8" />,
};

export function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function loadServices() {
      const { data } = await getServices();
      setServices(data.slice(0, 6)); // Show top 6 services
    }
    loadServices();
  }, []);

  return (
    <section id="services" className="pt-2 md:pt-3 lg:pt-4 pb-2 md:pb-3 lg:pb-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-[#2f5a84] font-semibold tracking-wider uppercase mb-2">What We Provide</h6>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our IT Services</h2>
          <p className="text-gray-600 mb-4">
            Although digital marketing and IT services in the UK are an ever‑changing industry, finding the right partner can be challenging. Mezzex is here to help you accelerate your brand growth to the top of the virtual revolution through expert digital marketing and other IT services.
          </p>
          <p className="text-gray-600 font-medium">
            Be among giants in your segment in organic searches, match your social web with your brand, and deliver tailored messages to the target audience cost‑effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#2f5a84]/10 rounded-xl flex items-center justify-center text-[#2f5a84] mb-6 group-hover:bg-[#2f5a84] group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon] || <Monitor className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2f5a84] transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-8 line-clamp-4 flex-grow">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-auto inline-flex items-center text-[#2f5a84] font-semibold hover:text-[#4BEAFF] transition-colors"
              >
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
