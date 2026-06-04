'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-md"
    >
      <div className="mb-2 flex items-center justify-center text-4xl font-bold text-white md:text-5xl">
        <span>{count}</span>
        <span className="ml-1 text-[#4BEAFF]">{suffix}</span>
      </div>

      <h3 className="text-lg font-medium text-white">
        {label}
      </h3>
    </div>
  );
}

export function CounterSection() {
  const stats = [
    { end: 10, suffix: '+', label: 'Years of Experience' },
    { end: 1000, suffix: '+', label: 'Complete Project' },
    { end: 100, suffix: '+', label: 'Working Employees' },
    { end: 1200, suffix: '+', label: 'Happy Customers' },
  ];

  return (
    <section className="relative overflow-hidden py-24">

      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,29,70,0.82), rgba(11,29,70,0.82)), url('https://mezzex.com/assets/img/banner-bg.jpg')",
        }}
      />

      {/* Overlay Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#4BEAFF]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2f5a84]/30 blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8">

        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#4BEAFF] backdrop-blur">
            COMPANY ACHIEVEMENTS
          </span>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Trusted Digital Solutions Provider
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Empowering businesses with innovative web development,
            enterprise IT solutions, and scalable digital transformation.
          </p>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
            >
              <Counter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}