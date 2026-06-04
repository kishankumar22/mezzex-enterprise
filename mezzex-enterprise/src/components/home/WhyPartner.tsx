'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Proven Expertise',
  'Commitment to Excellence',
  'Customer-Centric Focus',
  'Data-Driven Decisions',
  'Innovation in Your Pocket',
  'Committed Partnerships',
];

export function WhyPartner() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[400px]">

              {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://mezzex.com/assets/img/choose-1.jpg"
              alt="Why partner with Mezzex"
              fill
              className="object-cover"
            />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f5a84]/80 to-transparent" />
            {/* Trust badge overlay */}
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Years of Trust</div>
            </div>
          </motion.div>
          {/* Left text/content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center h-full"
          >
            <h6 className="text-orange-400 font-semibold tracking-wider uppercase mb-2">
              Why Partner With Mezzex?
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology For The New World And Everyone
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              With Mezzex, you have the best partnership, and here is why:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 bg-white rounded-xl border border-gray-100 transition-colors duration-300 hover:bg-[#2f5a84] hover:text-white group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#4BEAFF]/20 flex items-center justify-center mr-3 shrink-0">
                    <Check className="w-5 h-5 text-[#2f5a84] group-hover:text-white" />
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

      
        </div>
      </div>
    </section>
  );
}
