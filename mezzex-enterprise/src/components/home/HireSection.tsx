'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HireSection() {
  return (
    <section className="mt-8 py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h6 className="text-[#2f5a84] font-semibold uppercase mb-2">Contact Us For A Free Consultation</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">24x7 Expert Technical Support</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a href="tel:08447819083" className="inline-block bg-[#2f5a84] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1a3855] transition-colors">
              Call Now
            </a>
            <Link href="/contact" className="inline-block bg-white text-[#2f5a84] border border-[#2f5a84] px-8 py-3 rounded-full font-medium hover:bg-[#2f5a84] hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
