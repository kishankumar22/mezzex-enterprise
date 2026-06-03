'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-0 md:pt-12 md:pb-0 lg:pt-16 lg:pb-0 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h5 className="text-[#2f5a84] font-semibold text-lg md:text-xl mb-4 tracking-wide text-left">
                IT Solutions &amp; Technology Services
              </h5>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Web Design, Develop, Implement & <span className="text-[#2f5a84]">IT Solutions</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Building Digital Foundations: Trusted code, intuitive experiences, and unwavering data security – partner with us to engineer your digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/about" 
                className="bg-transparent border-2 border-[#2f5a84] text-[#2f5a84] hover:bg-[#2f5a84] hover:text-white px-8 py-3.5 rounded-full font-medium text-center transition-all duration-300"
              >
                Learn More
              </Link>
              <Link 
                href="#services" 
                className="bg-[#2f5a84] text-white hover:bg-[#1a3855] px-8 py-3.5 rounded-full font-medium text-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                alt="IT Solutions and Web Development" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#4BEAFF]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
