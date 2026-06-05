'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Monitor,
  TrendingUp,
  Code,
  Smartphone,
  ShoppingCart,
  Package,
} from 'lucide-react';

import { Service } from '@/types/service';
import { getServices } from '@/services/services/getServices';
import { COMPANY_STATS, CounterSection } from './CounterSection';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="h-8 w-8" />,
  TrendingUp: <TrendingUp className="h-8 w-8" />,
  Code: <Code className="h-8 w-8" />,
  Smartphone: <Smartphone className="h-8 w-8" />,
  ShoppingCart: <ShoppingCart className="h-8 w-8" />,
  Package: <Package className="h-8 w-8" />,
};

export function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function loadServices() {
      const { data } = await getServices();
      setServices(data.slice(0, 6));
    }

    loadServices();
  }, []);

  return (
    <section
      id="services"
      className="bg-gray-50 py-14 md:py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">

        {/* HEADING */}
    <div className="mx-auto mb-12 max-w-6xl text-center">

  <span
    className="
      mb-3
      inline-block
      text-xs
      font-semibold
      uppercase
      tracking-[0.28em]
      text-[#f59e0b]
      md:text-sm
    "
  >
    WHAT WE PROVIDE
  </span>

  <h2
    className="
      mb-5
      text-4xl
      font-extrabold
      leading-tight
      text-gray-900
      md:text-5xl
    "
  >
    Our IT Services
  </h2>

  <p
  className="
    mx-auto
    mb-4
    max-w-[1200px]
    text-[13px]
    leading-8
    text-gray-600
    md:text-[15px]
  "
>
    Although digital marketing and IT services in the UK are an ever-changing industry, finding the right partner can be challenging, especially without the right expertise and approach. Mezzex is here to help you accelerate your brand growth to the top of the virtual revolution through expert digital marketing and other IT services, delivered according to your objectives.
  </p>

<p
  className="
    mx-auto
    max-w-[1200px]
    text-[11px]
    font-medium
    leading-8
    text-gray-700
    md:text-[12px]
  "
>
    Be among giants in your segment in organic searches, match your social web with your brand, and deliver tailored messages to the target audience cost-effectively.
  </p>

</div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                flex
                h-full
                flex-col
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* TOP */}
              <div className="mb-5 flex items-center gap-4">

                {/* ICON */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#2f5a84]/10
                    text-[#2f5a84]
                    transition-all
                    duration-300
                    group-hover:bg-[#2f5a84]
                    group-hover:text-white
                  "
                >
                  {iconMap[service.icon] || (
                    <Monitor className="h-7 w-7" />
                  )}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-xl
                    font-bold
                    leading-snug
                    text-gray-900
                    transition-colors
                    duration-300
                    group-hover:text-[#2f5a84]
                  "
                >
                  {service.title}
                </h3>

              </div>

              {/* DESCRIPTION */}
              <p className="mb-6 flex-grow text-[15px] leading-7 text-gray-600 line-clamp-4">
                {service.shortDescription}
              </p>

              {/* BUTTON */}
              <Link
                href={`/services/${service.slug}`}
                className="
                  mt-auto
                  inline-flex
                  items-center
                  font-semibold
                  text-[#2f5a84]
                  transition-colors
                  hover:text-[#4BEAFF]
                "
              >
                Read More

                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

            </motion.div>
          ))}

        </div>
      </div>

      <CounterSection stats={COMPANY_STATS} />
    </section>
  );
}