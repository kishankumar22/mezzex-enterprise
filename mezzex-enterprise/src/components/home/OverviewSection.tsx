'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const overviewFeatures = [
  'Unbreakable Security',
  'Consistent Transparency',
  'Time‑Proved Track Record',
  'Reliable Expertise',
  'Who Puts Clients First',
  'Relationships for Life',
];

export function OverviewSection() {
  return (
    <section className="pt-20 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overview-content">
              <h6 className="text-[#2f5a84] font-semibold uppercase mb-2">WHY CONFIDENCE?</h6>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Broad SOLUTION to Attain Your Business Vision and Mission
              </h2>
              <ul className="space-y-2 text-gray-700">
                {overviewFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/assets/img/choose-2.jpg"
              alt="Why confidence illustration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
