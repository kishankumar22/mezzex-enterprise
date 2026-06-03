'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


// Logos (same as before)
const logos = [
  { href: 'https://flaxlinenofficial.com/', src: '/images/flax-linen-logo.webp', alt: 'Flax Linen' },
  { href: 'https://www.direct-care.co.uk/', src: '/images/Direct-care-logo.webp', alt: 'Direct Care' },
  { href: 'https://astircare.co.uk/', src: '/images/astircare.webp', alt: 'Astircare' },
  { href: 'https://promortgages.co.uk/', src: '/images/pro-mortgages.webp', alt: 'Pro Mortgages' },
  { href: 'https://ultior.co.uk/', src: '/images/ultior.webp', alt: 'Ultior' },
  { href: 'https://www.spaceboxstorage.co.uk/', src: '/images/spacebox-logo.webp', alt: 'Spacebox' },
  { href: 'https://houszy.co.uk/', src: '/images/houszy-logo.webp', alt: 'Houszy' },
];

export function PartnerSection() {
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <section className="relative bg-[#f7f9fc] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[#2f5a84] font-semibold uppercase tracking-widest mb-3">
            Trusted By Over 1200
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Clients
          </h2>
        </motion.div>

        {/* Swiper carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          loop={true}
          navigation={{
            prevEl: '.partner-prev',
            nextEl: '.partner-next',
          }}
          autoplay={
            autoPlay ? { delay: 3000, disableOnInteraction: false } : false
          }
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="relative "
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[140px] w-[250px] items-center justify-center rounded-3xlp-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="250px"
                  className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </a>
            </SwiperSlide>
          ))}

          {/* Navigation arrows */}
          <button
            className="partner-prev absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg border border-gray-200 hover:scale-105 transition z-30"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="partner-next absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg border border-gray-200 hover:scale-105 transition z-30"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          
        </Swiper>
      </div>
    </section>
  );
}