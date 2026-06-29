// app/services/digital-marketing/pay-per-click/PayPerClickContent.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Sparkles,
  Search,
  DollarSign,
  Globe,
  Zap,
  Award,
  ChevronRight
} from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
} as const;

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

export default function PayPerClickContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Pay-Per-Click (PPC)", active: true }
  ];

  const faqs = [
    {
      q: "Why is PPC Important?",
      a: "Pay-per-click ads help you to get visible in front of ideal customers with greater control over other marketing channels."
    },
    {
      q: "What are the different types of PPC?",
      a: "There are three categories of PPC: Search Advertising, Display Advertising, and Shopping Ads. Search ads enable you to position your online ads in search engine results. Display ads promote products or services using visuals like images and videos with text. Shopping ads are direct promotion of a product showing its elements like image, product name, and price."
    },
    {
      q: "Between PPC and SEO, which one should I choose?",
      a: "Investing in SEO and getting a positive ROI takes time and is dependent on many factors, like current domain authority and niche ranking difficulty. While in PPC, Google Ads search and shopping ads are best for generating extra revenue quickly. Partner with Mezzex, as it is the most impact-driven performance marketing agency that takes care of both SEO and PPC and tailors the approaches accordingly."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Pay-Per-Click (PPC)" />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #2E5B84 50%, #4a7da3 100%)' }}>
        <div className="absolute inset-0 bg-[#1a3a5c]/70"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="flex-1 text-center lg:text-left text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Pay-Per-Click (PPC)
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl lg:max-w-full">
                Mezzex is one of the best performance marketing agencies in the UK that offers comprehensive PPC services to address your complex challenges and drive targeted traffic.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">Success Oriented</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">Accelerating Growth</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">Clear Results</span>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <Link
                  href="#ppc-services"
                  className="bg-white text-[#2E5B84] hover:bg-[#f0f4f8] px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2E5B84] px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 max-w-md"
            >
              <img
                src="/images/DigitalMarketing/PPCMarketing.webp"
                alt="PPC Marketing"
                className="w-full h-auto rounded-xl shadow-2xl floating"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PPC Services Section */}
      <section id="ppc-services" className="py-16 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">PPC That Converts, Transforming Clicks Into Customers</h2>
            <p className="text-slate-600 mt-3">Data-driven PPC strategies that deliver measurable results</p>
            <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Overview */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Target className="w-6 h-6 text-[#2E5B84]" />
                    Pay-Per-Click (PPC)
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We, being the most profound performance marketing agency in the UK, deliver comprehensive PPC services to address and tackle your diverse challenges to increase organic traffic.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="bg-[#e7f3ff] px-4 py-2 rounded-full text-sm font-semibold text-[#2E5B84]">Success Oriented</span>
                    <span className="bg-[#e7f3ff] px-4 py-2 rounded-full text-sm font-semibold text-[#2E5B84]">Accelerating Growth</span>
                    <span className="bg-[#e7f3ff] px-4 py-2 rounded-full text-sm font-semibold text-[#2E5B84]">Clear Results</span>
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="/images/DigitalMarketing/PPCMarketing.webp"
                    alt="PPC Overview"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Goals */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <h3 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#2E5B84]" />
                Our Performance Marketing Agency Goals
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Mezzex, we understand that every business has unique goals and challenges. For that reason, we take a data-driven approach to PPC, beginning with a thorough analysis of your business objectives, target audience, and competitive landscape.
              </p>
            </motion.div>

            {/* Google Ads */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <GoogleIcon className="w-6 h-6" />
                    Mezzex as a Trusted Google Ad Agency
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Easily achieve and secure Return on Investment (ROI) while increasing your internal competencies with expert advice personalised as per your requirements.
                  </p>
                  <div className="space-y-2 pt-2">
                    <h4 className="font-bold text-[#2E5B84]">Our Google Ads Process</h4>
                    {[
                      "Google Search Ads: Easily boost traffic and revenue to your website with Google Search campaigns. We easily capture and convert the highest intent-driven traffic.",
                      "Google Shopping Ads: As one of the best PPC agency, we utilise Google Shopping Ads to guide you throughout, leading to a boost in your sales.",
                      "Google Display Ads: Transcend the performance of your Google Ads campaigns with our result-oriented and data-driven approach.",
                      "Video Ads: We create visually appealing and engaging videos on the latest topics to engage your target audience."
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917716/Mezzex_as_a_Trusted_Google_Ad_Agency_xxiwd5.webp"
                    alt="Google Ads Agency"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Microsoft Ads */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917715/Mezzex_as_a_Microsoft_Ad_Agency_uqqgs8.webp"
                    alt="Microsoft Ads Agency"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-4 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Globe className="w-6 h-6 text-[#2E5B84]" />
                    Mezzex as a Microsoft Ad Agency
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Achieve Increased ROI with Microsoft Ads. Our personalised strategies and expert guidance empower your team for long-term success.
                  </p>
                  <div className="space-y-2 pt-2">
                    <h4 className="font-bold text-[#2E5B84]">Our Microsoft Ads Process</h4>
                    {[
                      "Microsoft Search Ads: We easily capture valuable traffic on Bing and partner with other networks.",
                      "Microsoft Audience Ads: We effectively employ promotional strategies on Bing to attract buyers to Bing Shopping. We target specific demographics and display ads.",
                      "Microsoft Multimedia Ads: We effectively combine visuals with text for an impactful and engaging ad experience."
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PPC Approach */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[#2E5B84]" />
                    Our PPC Approach
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Get an overall look at our PPC approach. We, being the best performance marketing agency, begin our PPC approach by:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Gaining Audience Insight",
                      "Personalised Campaign Optimization",
                      "Implementing Strategic Keyword Research",
                      "Creative Process Development",
                      "Continuous Performance Analysis & Tracking"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917716/Our_PPC_Approach_thgfn1.webp"
                    alt="PPC Approach"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Insights */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917716/Accurate_Insights_Easy_Decisions_jghrwy.webp"
                    alt="PPC Insights"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-4 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-[#2E5B84]" />
                    Accurate Insights, Easy Decisions
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We know the importance of guidance in adopting technology. Our expert PPC team is committed to guiding you in your transition to sophisticated technological processes.
                  </p>
                  <div className="space-y-2 pt-2">
                    <p className="font-semibold text-[#2E5B84]">With Mezzex, you can expect:</p>
                    {[
                      "Increased brand visibility: Reach a wider audience and build brand awareness through targeted PPC advertising.",
                      "Improved website traffic: Drive organic traffic to your website and generate more leads.",
                      "Higher ROI: Achieve a significant return on your advertising investment with our data-driven approach.",
                      "Throughout Expert Guidance: Get the benefits from our highly-experienced PPC Experts who stay up-to-date on the latest industry trends."
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <h3 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-[#2E5B84]" />
                Have PPC Questions? Let us help you
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#f8fbff] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-[#e7f3ff] transition-colors duration-200"
                    >
                      <span className="font-semibold text-[#2E5B84] text-sm md:text-base">
                        {faq.q}
                      </span>
                      <span className={`text-[#2E5B84] transition-transform duration-300 ${activeFaq === index ? 'rotate-45' : ''}`}>
                        <span className="text-2xl font-light">+</span>
                      </span>
                    </button>
                    <div
                      className={`px-5 overflow-hidden transition-all duration-300 ${
                        activeFaq === index ? 'max-h-96 pb-5' : 'max-h-0'
                      }`}
                    >
                      <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="text-center pt-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2E5B84] hover:bg-[#1a3855] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 text-sm md:text-base"
              >
                Partner with us to fuel up your business with effective PPC strategies <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <div className="py-12 bg-white">
        <PartnerSection />
      </div>

      {/* Floating Animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        .floating-img {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Google Icon Component
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}