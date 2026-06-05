'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Simple Counter Component - Sirf Number Accept Karega
interface CounterProps {
  value: number;        // Sirf number (e.g., 500, 1000, 24)
  suffix?: string;      // Optional: '+', '%', 'h', etc.
  label: string;        // Label text
  icon?: React.ElementType;  // Optional icon
}

function SimpleCounter({ value, suffix, label, icon: Icon }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && value) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#4BEAFF]/50"
    >
      {/* Icon (Optional) */}
      {Icon && (
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-[#4BEAFF]/20 p-3">
            <Icon className="h-8 w-8 text-[#4BEAFF]" />
          </div>
        </div>
      )}

      {/* Counter Number */}
      <div className="mb-2 flex items-center justify-center text-4xl font-bold text-white md:text-5xl">
        <span>{count}</span>
        {suffix && <span className="ml-1 text-[#4BEAFF]">{suffix}</span>}
      </div>

      {/* Label */}
      <h3 className="text-lg font-medium text-white/90">{label}</h3>
    </div>
  );
}

// Main Counter Section Component
interface CounterSectionProps {
  stats: Array<{
    value: number;      // Sirf number accept karega
    suffix?: string;    // Optional: '+', '%', 'h', 'ms', etc.
    label: string;      // Label
    icon?: React.ElementType;  // Optional icon
  }>;
  title?: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
}

export function CounterSection({
  stats,
  title = "Trusted Digital Solutions Provider",
  subtitle = "Empowering businesses with innovative web development, enterprise IT solutions, and scalable digital transformation.",
  badge = "COMPANY ACHIEVEMENTS",
  backgroundImage = "https://mezzex.com/assets/img/banner-bg.jpg",
}: CounterSectionProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(11,29,70,0.82), rgba(11,29,70,0.82)), url('${backgroundImage}')`,
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
            {badge}
          </span>

          <h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">{subtitle}</p>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <SimpleCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== PRE-DEFINED STATS (Sirf number format) ==========

// Company Stats
export const COMPANY_STATS = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Complete Project' },
  { value: 100, suffix: '+', label: 'Working Employees' },
  { value: 1200, suffix: '+', label: 'Happy Customers' },
];

// SEO Stats (with icons)
import { FaGlobe, FaClock, FaCheckCircle, FaChartLine } from 'react-icons/fa';

export const SEO_STATS_WITH_ICONS = [
  { value: 500, suffix: '+', label: 'Websites Audited', icon: FaGlobe },
  { value: 24, suffix: 'h', label: 'Average Turnaround', icon: FaClock },
  { value: 100, suffix: '%', label: 'Free — No Hidden Cost', icon: FaCheckCircle },
  { value: 14, suffix: '+', label: 'SEO Factors Covered', icon: FaChartLine },
];

// Simple Stats (no icons, no suffix)
export const SIMPLE_STATS = [
  { value: 500, label: 'Websites Audited' },
  { value: 24, label: 'Hour Turnaround' },
  { value: 100, label: 'Client Satisfaction' },
  { value: 14, label: 'SEO Factors' },
];