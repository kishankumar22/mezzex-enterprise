"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";

interface FaqItem {
  q: string;
  a: string;
}

const iosFaqs: FaqItem[] = [
  {
    q: "What is iOS App Development?",
    a: "iOS App Development is the process of creating software applications for Apple’s mobile operating system, iOS, which powers iPhones, iPads, and iPod touch. It involves using programming languages like Swift or Objective-C and Apple’s development tools to build and release apps on the App Store.",
  },
  {
    q: "What are the benefits of developing an iOS app?",
    a: "Developing an iOS app provides access to a large and engaged user base known for higher spending power, offering strong monetization choices and a platform with a reputation for quality and security. It also allows businesses to build brand loyalty and offer a premium user experience.",
  },
  {
    q: "What devices can an iOS app run on?",
    a: "iOS apps are specifically designed to run on Apple’s ecosystem of devices, including iPhones, iPads, and iPod touch devices. They are optimized for the device’s specific hardware and operating system, ensuring a consistent and high-quality user experience.",
  },
];

const androidFaqs: FaqItem[] = [
  {
    q: "What is Android App Development?",
    a: "Android App development is the process of developing software applications specifically for devices running the Android operating system.",
  },
  {
    q: "What are the benefits of developing an Android app?",
    a: "Developing an Android app offers access to a massive global market with a diverse user base, providing extensive reach and strong potential for monetization. Its open-source nature and flexible development environment also allow for greater customization and integration across various devices.",
  },
  {
    q: "What devices can an Android app run on?",
    a: "Android apps are designed to run on a wide variety of devices that utilize the Android operating system, including smartphones, tablets, smartwatches, and even some smart TVs and other connected gadgets. This broad compatibility is a key feature of the Android ecosystem.",
  },
];

const webFaqs: FaqItem[] = [
  {
    q: "What are the types of web applications you build?",
    a: "We build custom web portals, customer-facing applications, and e-commerce web apps customized to meet your business needs.",
  },
  {
    q: "How much time does it take to develop a web application?",
    a: "The development process takes time and depends on the complexity of the project. We provide a clear timeframe after discussing your specific requirements.",
  },
  {
    q: "Do you offer consistent support even after the app is built?",
    a: "Yes, we offer consistent support and maintenance to ensure your web application is up-to-date, secure, and performs well.",
  },
];

// Reusable FAQ Accordion Component
function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="border border-slate-100 rounded-2xl overflow-hidden bg-[#eff2f5]/30 hover:bg-[#eff2f5]/50 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 text-sm sm:text-base"
            >
              <span>{item.q}</span>
              {isOpen ? <ChevronUp className="w-5 h-5 text-[#2f5a84]" /> : <ChevronDown className="w-5 h-5 text-[#2f5a84]" />}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/50 bg-white">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function AppDevelopmentContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "App Development", active: true }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="App Development" />

      {/* Cards Block Section */}
      <section className="py-10 md:py-16 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">

          {/* Centered Section Title matching cshtml / live screenshot */}
          <div className="text-center pb-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#2e5b84] tracking-wider uppercase leading-tight">
              Transform Your Ideas into Powerful Applications
            </h2>
          </div>

          {/* Section 2.1: App Development Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>

            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Your Trusted App Development Service Provider</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Get scalable, robust solutions designed to grow your business. We build mobile apps that customers love and drive the business forward.
                </p>
                <div className="space-y-4 pt-2">
                  <p className="font-bold text-slate-800 text-sm">We deliver:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-700 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">Custom-made Scalable Solutions</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">Various Devices Accessibility</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">Innovation at the Forefront</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <img 
                  src="/images/app-development-about.png" 
                  alt="App Development Overview" 
                  className="w-full max-w-[340px] h-auto object-contain animate-float"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 2.2: Our Mobile App Development Services Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Our Mobile App Development Services</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are one of the leading mobile app development companies, offering comprehensive services to create robust, scalable, and feature-integrated solutions.
              </p>
            </div>
          </motion.div>

          {/* Section 2.3: iOS Development Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f5a84] leading-tight">iOS Development</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We, at Mezzex, offer a wide and conclusive range of iOS development services that address the various demands of the Apple ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Section 2.4: iOS Development Services Detail */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">iOS Development Services</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong>Wide-Ranging iOS Development for All Platforms:</strong> We provide a detailed guide from initial conceptualization to outcomes across multiple iPhone devices like iPhones, iPads, Apple Watches, and Apple TVs.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm font-semibold pt-2">
                  <li className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>iPhone App Development</span>
                  </li>
                  <li className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>iPad App Development</span>
                  </li>
                  <li className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Apple Watch App Development</span>
                  </li>
                  <li className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Apple TV App Development</span>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <img 
                  src="/images/app-development-ios-services.png" 
                  alt="iOS Services Detail" 
                  className="w-full max-w-[340px] h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 2.5: iOS Achievements & Industries */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Proven Track Record in iOS App Development</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong>Proven Track Record:</strong> We partnered with low-scale businesses to emerging enterprises to provide extensive iOS app development services to solve complex challenges and enhance user experience with upgraded features.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <h2 className="text-lg font-bold text-slate-900">Tailored iOS Solutions Across Multiple Industries:</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-700 text-sm font-semibold">
                  {[
                    "Retail & e-commerce", "Education & e-learning", "Healthcare & Fitness",
                    "Logistics & Distribution", "Social Networking", "Real Estate",
                    "Travel & Hospitality", "Food & Restaurant", "On-demand solution", "Gaming"
                  ].map((ind, i) => (
                    <li key={i} className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 2.6: iOS Process */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Our iOS App Development Process</h2>
                
                <div className="space-y-5">
                  <div className="hover:translate-x-1.5 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">Project Examination</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Examine your specific needs, integrate a specialized team, finalize technical specifications, and develop initial design mock-ups.
                    </p>
                  </div>
                  <div className="hover:translate-x-1.5 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">Development Process</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Implement the selected development method, ensure quality code through reviews and audits, conduct comprehensive User Acceptance Testing, and finalize and live the application.
                    </p>
                  </div>
                  <div className="hover:translate-x-1.5 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">Throughout Support</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Throughout server monitoring, special team for bug fixing, and 24/7 customer support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <img 
                  src="/images/app-development-ios-process.png" 
                  alt="iOS Process" 
                  className="w-full max-w-[340px] h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 2.7: iOS FAQ */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 flex justify-center order-last md:order-first">
                <img 
                  src="/images/app-development-ios-faq.png" 
                  alt="iOS FAQ Illustration" 
                  className="w-full max-w-[340px] h-auto object-contain"
                />
              </div>
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Have iOS Development Questions in mind?</h2>
                <FaqAccordion items={iosFaqs} />
              </div>
            </div>
          </motion.div>

          {/* Section 2.8: Android Development Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f5a84] leading-tight">Android Development</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We, at Mezzex, offer a wide and comprehensive range of Android App development services. We aim to create strong, user-friendly apps designed specifically for your needs.
              </p>
            </div>
          </motion.div>

          {/* Section 2.9: Android Development Services Detail */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 flex justify-center">
                <img 
                  src="/images/app-development-android-services.png" 
                  alt="Android Services Illustration" 
                  className="w-full max-w-[340px] h-auto object-contain"
                />
              </div>
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Android Development Services</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong>Comprehensive Android App Development for All Platforms:</strong> From initial steps to outcomes, our Android app development services ensure your app stands out in a highly competitive market.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm font-semibold pt-2">
                  <li className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Android Mobile App Development</span>
                  </li>
                  <li className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Android TV App Development</span>
                  </li>
                  <li className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Android Tablet App Development</span>
                  </li>
                  <li className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>Android Wear App Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 2.10: Android Achievements & Industries */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Proven Track Record in Android App Development</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong>Proven Track Record:</strong> Mezzex, being a leading Android app development company, provides impactful Android applications that significantly impact business success rates. We collaborate with a broad range of clients, including industry leaders, global brands, small and medium-sized businesses, and startups.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <h2 className="text-lg font-bold text-slate-900">Tailored Android App Development Solutions Across Multiple Industries:</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-700 text-sm font-semibold">
                  {[
                    "Retail & e-commerce", "Education & e-learning", "Healthcare & Fitness",
                    "Logistics & Distribution", "Social Networking", "Real Estate",
                    "Travel & Hospitality", "Food & Restaurant", "On-demand solution", "Gaming"
                  ].map((ind, i) => (
                    <li key={i} className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 2.11: Android Process */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Android App Development Process</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2 bg-[#eff2f5]/20 p-5 rounded-2xl border border-slate-100 hover:translate-x-1 transition-transform duration-200">
                  <h3 className="text-base font-extrabold text-slate-800">Initial Stage</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Evaluate current project requirements, assign a specialized team of experts, draft technical specifications, and develop an initial blueprint for quick insights.
                  </p>
                </div>
                <div className="space-y-2 bg-[#eff2f5]/20 p-5 rounded-2xl border border-slate-100 hover:translate-x-1 transition-transform duration-200">
                  <h3 className="text-base font-extrabold text-slate-800">Building Stage</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Implement the most suitable development process, consistently demonstrate high-quality code, ensure that the app meets user requirements, conduct User Acceptance Testing (UAT), and release the application to production environments.
                  </p>
                </div>
                <div className="space-y-2 bg-[#eff2f5]/20 p-5 rounded-2xl border border-slate-100 hover:translate-x-1 transition-transform duration-200">
                  <h3 className="text-base font-extrabold text-slate-800">Maintenance Stage</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Provides continuous app monitoring and success, assign specialized developers for bug fixing, and offer 24/7 assistance to ensure smooth operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2.12: Android FAQ */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Have Android App Development Queries? We can help</h2>
              <FaqAccordion items={androidFaqs} />
            </div>
          </motion.div>

          {/* Section 2.13: Web Application Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f5a84] leading-tight">Web Application</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our Progressive Web Apps are fast, reliable, and engaging, blending the benefits of web and mobile apps. We aim to make responsive and scalable web pages that provide a consistent user experience across browsers and devices.
              </p>
            </div>
          </motion.div>

          {/* Section 2.14: Web Application Services Detail */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Web Application Development Services</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong>Comprehensive Web Application Development Services:</strong> We build tailored solutions to meet your business needs.
                </p>
                <ul className="space-y-3.5 pt-2 text-slate-700 text-sm font-semibold">
                  <li className="flex items-start gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Enterprise Web Apps</strong> that simplify processes and drive business growth.</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Custom Web Portals</strong> for seamless communication and access to critical information.</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Customer-facing Apps</strong> for engaging user experiences.</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span><strong>E-commerce Web Apps</strong> with secure shopping, payment gateways, and inventory management.</span>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <img 
                  src="/images/app-development-web-services.png" 
                  alt="Web Application Services Illustration" 
                  className="w-full max-w-[340px] h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 2.15: Web Application Achievements & Industries */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Proven Track Award</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong>Proven Track Award:</strong> We have a proven track record of more than 10+ years in delivering scalable, secure, and user-friendly web apps that drive business success.
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <h2 className="text-lg font-bold text-slate-900">Multiple Industries:</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-700 text-sm font-semibold">
                  {[
                    "Retail & e-commerce", "Education & e-learning", "Healthcare & Fitness",
                    "Logistics & Distribution", "Social Networking", "Real Estate",
                    "Travel & Hospitality", "Food & Restaurant", "On-demand solution", "Gaming"
                  ].map((ind, i) => (
                    <li key={i} className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-2 transition-all duration-200 cursor-pointer">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 2.16: Web App Development Approach */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Our Web App Development Approach</h2>
                
                <div className="space-y-5">
                  <div className="hover:translate-x-1.5 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">Planning & Analysis Stage</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Understand the client’s vision, goals, and target audience, evaluate current project requirements, assign a dedicated team of experts, create detailed technical documentation, and develop a basic prototype.
                    </p>
                  </div>
                  <div className="hover:translate-x-1.5 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">Development Phase</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Implement the most suitable development process, write high-quality code, ensure the app meets requirements, and release the web application.
                    </p>
                  </div>
                  <div className="hover:translate-x-1.5 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">Maintenance & Support Stage</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Provides continuous support, a specialized team for bug fixing, and offers 24/7 customer assistance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <img 
                  src="/images/app-development-web-process.png" 
                  alt="Web App Process" 
                  className="w-full max-w-[340px] h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 2.17: Web Application FAQ */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Have Web Application Questions in mind? Let us help you</h2>
              <FaqAccordion items={webFaqs} />
            </div>
          </motion.div>

          {/* Inline CTA Callout text at the bottom */}
          <div className="text-center pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-10 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Let’s Talk <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Trust Signals - Partners (Our Clients Slider) */}
      <div className="py-12 bg-white">
        <PartnerSection />
      </div>
    </div>
  );
}
