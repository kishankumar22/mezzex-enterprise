'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HireSection() {
  return (
  <section
  className="relative mt-8 py-20 overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(11,29,70,.6), rgba(11,29,70,.6)), url('https://mezzex.com/assets/img/banner-bg.jpg')",
  }}
>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h6 className="text-[#ff9f1c] font-semibold uppercase tracking-wide mb-4 text-sm md:text-base">
            Contact Us For A Free Consultation
          </h6>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            24x7 Expert Technical Support
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:08447819083"
              className="inline-flex items-center justify-center bg-[#2f5a84] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1f4364] transition-all duration-300"
            >
              Call Now
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#2f5a84] px-10 py-4 rounded-full font-semibold hover:bg-[#2f5a84] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}