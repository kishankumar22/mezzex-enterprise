'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const logos = [
  { href: 'https://flaxlinenofficial.com/', src: '/images/flax-linen-logo.webp', alt: 'Flax Linen' },
  { href: 'https://www.direct-care.co.uk/', src: '/images/direct_carelogo.webp', alt: 'Direct Care' },
  { href: 'https://astircare.co.uk/', src: '/images/astircare.webp', alt: 'Astircare' },
  { href: 'https://promortgages.co.uk/', src: '/images/pro-mortgages.webp', alt: 'Pro Mortgages' },
  { href: 'https://ultior.co.uk/', src: '/images/ultior.webp', alt: 'Ultior' },
  { href: 'https://www.spaceboxstorage.co.uk/', src: '/images/spacebox-logo.webp', alt: 'Spacebox' },
  { href: 'https://houszy.co.uk/', src: '/images/houszy-logo.webp', alt: 'Houszy' },
];

export function PartnerSection() {
  return (
<section className="overflow-hidden">
          {/* HEADING */}
{/* HEADING */}
<div className="bg-white py-20">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center"
  >
    <p className="text-[#f59e0b] text-sm md:text-base font-semibold uppercase tracking-[3px] mb-4">
      Trusted By Over 1200
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937]">
      Our Clients
    </h2>
  </motion.div>
</div>
   <div className="bg-[#2f5a84] py-10">
  <div className="relative max-w-[1600px] mx-auto px-14">

        {/* LEFT BUTTON */}
        <button className="partner-prev absolute left-2 top-1/2 z-30 -translate-y-1/2 w-10 h-10 rounded-full border border-white/70 bg-[#2f5a84] flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* RIGHT BUTTON */}
        <button className="partner-next absolute right-2 top-1/2 z-30 -translate-y-1/2 w-10 h-10 rounded-full border border-white/70 bg-[#2f5a84] flex items-center justify-center">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.partner-prev',
            nextEl: '.partner-next',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={900}
          spaceBetween={18}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 6,
            },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-[118px]
                  bg-white
                  rounded-md
                  flex
                  items-center
                  justify-center
                  px-6
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                <div className="relative w-full h-[65px]">
                  <Image
                  src={`https://mezzex.com${logo.src}`}
                    alt={logo.alt}
                    fill
                    sizes="220px"
                    className="object-contain"
                    priority={idx < 4}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
     </div>
</div>
    </section>
  );
}