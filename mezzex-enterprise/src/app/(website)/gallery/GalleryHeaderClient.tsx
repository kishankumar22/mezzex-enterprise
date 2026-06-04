// src/app/(website)/gallery/GalleryHeaderClient.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TypewriterHeading from '@/components/common/TypewriterHeading';

export default function GalleryHeaderClient() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-12">
      <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <Image
            src="https://mezzex.com/images/hero-gallery-1500w.jpg"
            alt="Hero Gallery"
            width={650}
            height={400}
            priority
            className="\n w-full\n max-w-[520px]\n              rounded-xl\n              object-cover\n              shadow-lg\n            "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-2 lg:order-1"
        >
          <TypewriterHeading
            words={[
              'Welcome to Our Gallery',
              'Explore Life at Mezzex',
              'Discover Our Creative Workspace',
              'Driven by Innovation & Excellence',
            ]}
            className="mb-2  min-h-[48px] text-2xl md:text-3xl font-bold text-[#2563eb]\n            "
          />
          <div className="space-y-4 text-gray-600">
            <p className="text-[15px] md:text-base leading-7">
            Step into the heart of Mezzex through our gallery, where innovation meets comfort. This space reflects our ethos of crafting, designing, and managing projects with precision and passion. From concept to completion, our environment fosters the creativity and focus needed to deliver results that exceed expectations.
            </p>
            <p className="text-[15px] md:text-base leading-7">
Our sophisticated interiors are designed to inspire creativity and collaboration. Every detail, from the warm lighting to the thoughtfully curated decor, creates a welcoming atmosphere that drives productivity. At Mezzex, we believe that a comfortable and dynamic workspace is key to shaping extraordinary ideas and bringing them to life.
            </p>
            <p className="text-[15px] md:text-base leading-7">
            Explore our gallery and experience the essence of Mezzex, a hub where ideas flourish, teamwork thrives, and every project is approached with unparalleled dedication.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
