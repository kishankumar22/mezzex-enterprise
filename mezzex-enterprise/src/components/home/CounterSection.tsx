'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
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
    <div ref={ref} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
      <div className="flex items-center justify-center text-4xl md:text-5xl font-bold text-white mb-2">
        <span>{count}</span>
        <span className="text-[#4BEAFF] ml-1">{suffix}</span>
      </div>
      <h3 className="text-lg text-gray-200 font-medium">{label}</h3>
    </div>
  );
}

export function CounterSection() {
  const stats = [
    { end: 10, suffix: '+', label: 'Years of Experience' },
    { end: 1000, suffix: '+', label: 'Completed Projects' },
    { end: 100, suffix: '+', label: 'Working Employees' },
    { end: 1200, suffix: '+', label: 'Happy Customers' },
  ];

  return (
    <section className="py-20 relative bg-[#2f5a84] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4BEAFF] rounded-full mix-blend-overlay filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Counter end={stat.end} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
