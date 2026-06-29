// app/services/digital-marketing/social-media-marketing/SocialMediaMarketingContent.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Camera as Instagram,
  User as Linkedin,
  MessageSquare as Facebook,
  Send as Twitter,
  PinIcon as Pinterest,
  Users,
  TrendingUp,
  Target,
  Clock,
  BarChart3,
  Video,
  Megaphone,
  Sparkles
} from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

export default function SocialMediaMarketingContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Social Media Marketing", active: true }
  ];

  const platformIcons = {
    Instagram: <Instagram className="w-5 h-5 text-[#2E5B84]" />,
    LinkedIn: <Linkedin className="w-5 h-5 text-[#2E5B84]" />,
    TikTok: <Video className="w-5 h-5 text-[#2E5B84]" />,
    Facebook: <Facebook className="w-5 h-5 text-[#2E5B84]" />,
    Twitter: <Twitter className="w-5 h-5 text-[#2E5B84]" />,
    Pinterest: <Pinterest className="w-5 h-5 text-[#2E5B84]" />
  };

  const platformStrategies = [
    { name: "Instagram", desc: "Eye-popping visuals, trending reels, and influencer collaborations to ignite engagement and build a fanbase that sticks." },
    { name: "LinkedIn", desc: "Shape your brand into a thought leader with polished articles, engaging polls, and networking campaigns that unlock leads and partnerships." },
    { name: "TikTok", desc: "Snappy, trend-savvy videos paired with killer TikTok Ads to ride the algorithm's wave and grab attention." },
    { name: "Facebook", desc: "Laser-focused ad campaigns, compelling posts, and community nurturing to supercharge your presence." },
    { name: "Twitter", desc: "Jump into real-time chatter with witty, trending tweets that spark conversations and drive traffic." },
    { name: "Pinterest", desc: "Scroll-stopping pins optimized for discovery, primed to funnel clicks straight to your site." }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Social Media Marketing" />

      {/* Hero Section with Background Image */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        //   style={{
        //     backgroundImage: `url('https://res.cloudinary.com/ddsenadu2/image/upload/v1741238354/Purple_Yellow_Illustrated_Marketing_Agency_Twitter_Header_s4raj8.webp')`,
        //   }}
        >
          <div className="absolute inset-0 "></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-black/70"
          >

            <p className="mt-4 text-base md:text-lg lg:text-xl text-black max-w-2xl mx-auto">
              Elevate your brand with expert social media strategies that drive engagement, leads, and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {/* Section 1: Overview */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg overflow-hidden border-l-4 md:border-l-[5px] border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Sparkles className="w-7 h-7 text-[#2E5B84]" />
                    Social Media Mastery
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Social Media Marketing goes beyond likes, shares, and follows—it's about forging connections,
                    amplifying your brand's story, and driving revenue through strategic online presence. At Mezzex,
                    we craft bold, results-focused campaigns that cut through the noise and elevate your brand's visibility.
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-[#2E5B84]">What We Bring to the Table:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {[
                        "Comprehensive Social Media Marketing Solutions",
                        "Amplified Brand Recognition",
                        "Custom Strategies Tailored to Your Audience",
                        "Smart, Data-Backed Tactics for Real Engagement"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <motion.div
                  variants={fadeInRight}
                  className="flex-1 max-w-sm md:max-w-md"
                >
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1741237947/SocialMediaMarketing_fpjjle.webp"
                    alt="Social Media Marketing Illustration"
                    className="w-full h-auto rounded-xl shadow-md floating"
                    style={{ animation: "float 6s ease-in-out infinite" }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Section 2: Our Approach */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg overflow-hidden border-l-4 md:border-l-[5px] border-[#2E5B84]"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E5B84] flex items-center gap-3 mb-6">
                <Target className="w-7 h-7 text-[#2E5B84]" />
                How We Do It
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <TrendingUp className="w-5 h-5 text-[#2E5B84]" />, title: "Strategy Crafting", desc: "We design a bespoke social media blueprint that reflects your brand's essence—highlighting your products, values, and vision across digital channels." },
                  { icon: <Clock className="w-5 h-5 text-[#2E5B84]" />, title: "Content Timing", desc: "We dive deep into your industry's pulse, mapping out monthly content calendars to strike when the moment's ripe, boosting your campaign's impact." },
                  { icon: <Megaphone className="w-5 h-5 text-[#2E5B84]" />, title: "Creative Powerhouse", desc: "From viral videos to sharp copy, we produce content that hooks your audience, turning casual scrollers into loyal advocates." },
                  { icon: <BarChart3 className="w-5 h-5 text-[#2E5B84]" />, title: "Performance Insights", desc: "We track results monthly, quarterly, and annually—delivering clear, actionable data to refine strategies and seize new opportunities." }
                ].map((item, i) => (
                  <div key={i} className="bg-[#f8fbff] rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-2">
                      {item.icon}
                      <h3 className="font-bold text-[#2E5B84]">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 3: Platform-Specific Strategies */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg overflow-hidden border-l-4 md:border-l-[5px] border-[#2E5B84]"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E5B84] flex items-center gap-3 mb-6">
                <Users className="w-7 h-7 text-[#2E5B84]" />
                Platform-Specific Brilliance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platformStrategies.map((platform, i) => (
                  <div key={i} className="bg-[#f8fbff] rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-2">
                      {platformIcons[platform.name as keyof typeof platformIcons]}
                      <h3 className="font-bold text-[#2E5B84]">{platform.name}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{platform.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#e7f3ff] rounded-xl text-center">
                <p className="text-slate-700 text-sm md:text-base">
                  <strong className="text-[#2E5B84]">Partner with the UK's Go-To Social Media Experts</strong><br />
                  Ready to dominate the digital landscape? Connect with Mezzex today and watch your social media presence soar.
                </p>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg overflow-hidden border-l-4 md:border-l-[5px] border-[#2E5B84]"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E5B84] flex items-center gap-3 mb-6">
                <Sparkles className="w-7 h-7 text-[#2E5B84]" />
                FAQ: Your Questions, Answered
              </h2>
              <div className="space-y-4">
                {[
                  { q: "What's Social Media Marketing All About?", a: "It's your ticket to engaging your audience with standout content, growing a loyal community, and steering traffic to your doorstep." },
                  { q: "Do You Handle Content Creation Too?", a: "Absolutely—our expert writers and creators deliver scroll-stopping content designed to resonate with your audience." },
                  { q: "Which Platforms Should My Brand Be On?", a: "We'll guide you to the perfect mix based on your goals, industry, and who you're targeting—no guesswork needed." }
                ].map((faq, i) => (
                  <div key={i} className="bg-[#f8fbff] rounded-xl p-5 hover:shadow-sm transition-all duration-200">
                    <p className="font-bold text-[#2E5B84] text-sm md:text-base">{faq.q}</p>
                    <p className="text-slate-600 text-sm mt-1">{faq.a}</p>
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
                className="inline-flex items-center gap-2 bg-[#2E5B84] hover:bg-[#1a3855] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105"
              >
                Let's Make It Happen <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals - Partners */}
      <div className="py-12 bg-white">
        <PartnerSection />
      </div>

      {/* Floating Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}