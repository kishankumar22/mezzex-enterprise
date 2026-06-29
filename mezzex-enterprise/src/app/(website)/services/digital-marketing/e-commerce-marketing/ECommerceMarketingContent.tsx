// app/services/digital-marketing/e-commerce-marketing/ECommerceMarketingContent.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Globe,
  Sparkles,
  Award,
  Package,
  DollarSign
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

export default function ECommerceMarketingContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "E-commerce Marketing", active: true }
  ];

  const faqs = [
    {
      q: "What is an e-commerce service?",
      a: "An e-commerce service provides the technology and platform for businesses to sell their products online, taking care of everything from showing products to taking payments."
    },
    {
      q: "Why do I need an e-commerce service agency?",
      a: "An e-commerce marketing agency can help you develop a personalised marketing plan according to your needs and budget, which will allow you to achieve success and growth in the long run for your online marketplace."
    },
    {
      q: "How to choose the best ecommerce marketing agency?",
      a: "Research the background of the agency about their industry experience, a wide range of services, results and overall approach to ecommerce strategy."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const ecommerceServices = [
    {
      title: "E-commerce Marketing Strategy",
      icon: <Target className="w-5 h-5 text-[#2E5B84]" />,
      description: "We deliver the best e-commerce service. Our skilled e-commerce team creates marketing strategies tailored to your target audience, competition, and market trends."
    },
    {
      title: "Ecommerce SEO",
      icon: <TrendingUp className="w-5 h-5 text-[#2E5B84]" />,
      description: "We aim to promote sales through E-commerce SEO services. We create E-commerce campaigns to help our clients direct to their desired audience to increase traffic and raise more revenue."
    }
  ];

  const ppcServices = [
    {
      title: "Ecommerce PPC",
      icon: <DollarSign className="w-5 h-5 text-[#2E5B84]" />,
      description: "We aim to produce more traffic and more leads through Ecommerce PPC services. Our skilled Ecommerce team will guide you in building your brand awareness and growing sales while ensuring that your ads are running, resulting in maximum return on investment."
    },
    {
      title: "Performance Tracking",
      icon: <BarChart3 className="w-5 h-5 text-[#2E5B84]" />,
      description: "Our skilled E-commerce team analyse the performance of currently running campaigns to track their effectiveness. We create a detailed report based on KPIs that includes website traffic and customer demographics to help you make a data-driven decision."
    }
  ];

  const platformServices = [
    {
      title: "Amazon",
      icon: <Package className="w-5 h-5 text-[#2E5B84]" />,
      description: "Success on Amazon depends on visibility and conversion. Our tailored product management services are designed to maximize both. For Amazon seller accounts, we focus on creating perfect product listings and keyword-integrated titles, bullet points and descriptions, promoting sales rank and product visibility. Our stock management systems maintain optimal inventory levels, preventing out-of-stock or stock overloading."
    },
    {
      title: "eBay",
      icon: <ShoppingCart className="w-5 h-5 text-[#2E5B84]" />,
      description: "Success on eBay demands attracting bargain hunters and building reliability. We focus on competitive keyword research to identify relevant search terms being used by buyers on eBay. We take proper care of the listing structure by optimising titles, descriptions and product specifications to improve search results and attract potential buyers."
    }
  ];

  const socialServices = [
    {
      title: "TikTok",
      icon: <Globe className="w-5 h-5 text-[#2E5B84]" />,
      description: "Success on TikTok demands engaging video content and making use of relevant and trending hashtags. We optimise product SEO with creative video content. We aim to deliver short and interactive videos that focus on the product and its important features. By including relevant hashtags, we increase visibility and reach a broader audience."
    },
    {
      title: "OnBuy",
      icon: <ShoppingCart className="w-5 h-5 text-[#2E5B84]" />,
      description: "Success on OnBuy requires comprehensive product data and detailed descriptions. We create perfect product listings with complete and clear product descriptions and specifications. We optimize the whole listing to increase search visibility and attract potential customers."
    }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="E-commerce Marketing" />



      {/* E-commerce Marketing Section */}
      <section className="py-16 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Increase your E-commerce Growth, Click by Click</h2>
              <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                Increase your sales and maximize ROI using our expertise in creating personalised E-commerce services.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-4">
                <span className="bg-[#e7f3ff] px-4 py-2 rounded-full text-sm font-semibold text-[#2E5B84]">Reduced Cost</span>
                <span className="bg-[#e7f3ff] px-4 py-2 rounded-full text-sm font-semibold text-[#2E5B84]">Extensive Reach</span>
                <span className="bg-[#e7f3ff] px-4 py-2 rounded-full text-sm font-semibold text-[#2E5B84]">Smooth Customer Experience</span>
              </div>
              <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-6 rounded"></div>
            </motion.div>

            {/* Strategy & SEO */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  {ecommerceServices.map((service, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                        {service.icon}
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                        <strong>{service.title}:</strong> {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="/images/DigitalMarketing/EcommerceStrategy.webp"
                    alt="E-commerce Strategy & SEO"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* PPC & Performance Tracking */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="/images/DigitalMarketing/EcommercePPC.webp"
                    alt="Ecommerce PPC & Tracking"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-6 order-1 md:order-2">
                  {ppcServices.map((service, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                        {service.icon}
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                        <strong>{service.title}:</strong> {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Amazon & eBay */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  {platformServices.map((service, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                        {service.icon}
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                        <strong>{service.title}:</strong> {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="/images/DigitalMarketing/AmazonEcommerce.webp"
                    alt="Amazon & eBay"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* TikTok & OnBuy */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="/images/DigitalMarketing/TiktokEcommerce.webp"
                    alt="TikTok & OnBuy"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-6 order-1 md:order-2">
                  {socialServices.map((service, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                        {service.icon}
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                        <strong>{service.title}:</strong> {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* With us, you can expect */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Award className="w-6 h-6 text-[#2E5B84]" />
                    With us, you can expect:
                  </h2>
                  <div className="space-y-2">
                    {[
                      "Detailed Knowledge & Expertise in Diverse E-commerce Platforms.",
                      "Tailored Solutions to cater to different audiences.",
                      "Data-Driven Strategies & Measurable Results"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                    Partner with us to launch your product in the vast E-commerce marketplace with detail-oriented strategies in the UK.
                  </p>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="/images/DigitalMarketing/ExpectEcommerce.webp"
                    alt="Expect Illustration"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-[#2E5B84]" />
                Let us answer all your queries
              </h2>
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
                Let's Talk <ArrowRight className="w-5 h-5" />
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
        .floating-img {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}