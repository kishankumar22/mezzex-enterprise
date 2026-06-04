'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff]">

      {/* Background Wave */}
      <div className="absolute inset-0 hidden pointer-events-none opacity-[0.05] md:block">
        <svg
          className="absolute top-[-10%] right-[-10%] h-[1000px] w-[1000px]"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          {[...Array(14)].map((_, i) => (
            <path
              key={i}
              d={`M ${120 + i * 22} 0 Q 700 500 ${120 + i * 22} 1000`}
              stroke="#2f5a84"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute top-20 right-10 h-60 w-60 rounded-full bg-[#4BEAFF]/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5 lg:px-8">

        <div className="grid min-h-[82vh] items-center gap-10 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left max-w-[620px]"
          >

            {/* Top Tag */}
            <div className="mb-5 inline-flex rounded-full border border-[#2f5a84]/15 bg-white/80 px-5 py-2 shadow-sm backdrop-blur">
              <span className="text-sm font-semibold tracking-wide text-[#2f5a84] sm:text-base">
                IT Solutions & Technology Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-5 text-[30px] font-bold leading-[1.08] text-[#0f172a] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Web Design,
              <br />
              Develop,
              <br />
              Implement &{' '}
              <span className="text-[#2f5a84]">
                IT Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-[17px] leading-8 text-gray-600 sm:text-lg">
              Building Digital Foundations: Trusted code,
              intuitive experiences, and unwavering data
              security — partner with us to engineer your
              digital future.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/about"
                className="flex h-14 items-center justify-center rounded-full border-2 border-[#2f5a84] bg-white px-8 text-lg font-medium text-[#2f5a84] transition-all duration-300 hover:bg-[#2f5a84] hover:text-white"
              >
                Learn More
              </Link>

              <Link
                href="#services"
                className="flex h-14 items-center justify-center rounded-full bg-[#2f5a84] px-8 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#1d4266]"
              >
                Our Services
              </Link>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Floating Badge */}
            <div className="absolute left-0 top-8 hidden rounded-2xl bg-white px-5 py-3 shadow-xl lg:flex">
              <span className="text-sm font-medium text-gray-700">
                Trusted IT Partner
              </span>
            </div>

            {/* Floating Image */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative h-[280px] w-full max-w-[620px] sm:h-[380px] md:h-[460px] lg:h-[520px]"
            >
              <Image
                src="https://mezzex.com/assets/img/home-font.png"
                alt="IT Solutions"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Blur */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4BEAFF]/10 blur-3xl" />

          </motion.div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[60px] w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L0,320Z"
          />
        </svg>
      </div>

    </section>
  );
}