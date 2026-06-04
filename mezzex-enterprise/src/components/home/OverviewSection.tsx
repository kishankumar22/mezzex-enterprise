'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const overviewFeatures = [
  'Unbreakable Security',
  'Consistent Transparency',
  'Time-Proved Track Record',
  'Reliable Expertise',
  'Who Puts Clients First',
  'Relationships for Life',
];

export function OverviewSection() {
  return (
    <section className="overflow-hidden bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[620px]"
          >

            {/* TAG */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#f59e0b]">
              Why Confidence?
            </p>

            {/* HEADING */}
            <h2 className="mb-8 text-3xl font-bold leading-[1.25] text-[#1f2937] sm:text-4xl md:text-[46px]">
              Broad{' '}
              <span className="text-[#2f5a84]">
                SOLUTION
              </span>{' '}
              to Attain Your Business Vision and Mission
            </h2>

            {/* FEATURES */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {overviewFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-lg
                    border-l-[3px]
                    border-[#2f5a84]
                    bg-[#f8fafc]
                    px-5
                    py-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      origin-left
                      scale-x-0
                      bg-[#2f5a84]
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                  />

                  {/* Text */}
                  <span
                    className="
                      relative
                      z-10
                      text-base
                      font-semibold
                      text-[#374151]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4BEAFF]/10 blur-3xl" />

            {/* IMAGE */}
            <div className="relative h-[340px] w-full max-w-[520px] sm:h-[400px] lg:h-[460px]">

              <Image
                src="https://mezzex.com/assets/img/choose-2.jpg"
                alt="Business solution illustration"
                fill
                priority
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-contain"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}