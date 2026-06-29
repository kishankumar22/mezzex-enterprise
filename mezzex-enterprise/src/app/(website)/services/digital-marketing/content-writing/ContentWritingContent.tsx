// app/services/digital-marketing/content-writing/ContentWritingContent.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PenTool,
  FileText,
  Globe,
  Share2,
  Package,
  TrendingUp,
  Award,
  Sparkles,
  Users,
  BarChart3
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

export default function ContentWritingContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Content Writing", active: true }
  ];

  const faqs = [
    {
      q: "What is a content writing service?",
      a: "Content writing service delivers different types of content such as blogs, articles, social media content, product descriptions or more, by charging a fee. Content writing agencies have content writers or even individual content writers who specialize in different aspects of content and deliver the content according to the client's needs and requirements."
    },
    {
      q: "Do you specialize in creating SEO optimised content?",
      a: "Yes, at Mezzex, we deliver SEO content writing services. We know the significance of high-ranked keywords and how to optimise dead content to high-ranked content on search engines. We believe in delivering the best SEO content writing services. From SEO blog writing, to informative articles, detailed product descriptions and more. We deliver as per your needs."
    },
    {
      q: "Do you deliver product descriptions?",
      a: "Yes, we deliver detailed product descriptions while highlighting the qualities and benefits of the given product."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Content Writing" />

      {/* Hero Section - Matches breadcrumb style */}
      {/* <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #2E5B84 50%, #4a7da3 100%)' }}>
        <div className="absolute inset-0 bg-[#1a3a5c]/70"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Top Content Writing Agency in The UK
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              We craft content that captivates, converts and connects
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Content Writing Section */}
      <section className="py-16 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
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
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <PenTool className="w-6 h-6 text-[#2E5B84]" />
                    Content Writing
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We create content that speaks volumes and resonates with your target audience. Furthermore, we aim to provide customer-oriented and SEO-optimized content, keeping in mind your business goals.
                  </p>
                  <div className="space-y-2 pt-2">
                    <p className="font-semibold text-[#2E5B84]">We deliver:</p>
                    {[
                      "Thoroughly Researched content.",
                      "Fully SEO-optimized content.",
                      "Proven Result Oriented content."
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
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917715/Discover_High-Quality_Content_Tailored_to_Your_Audience_ivfxal.webp"
                    alt="Content Writing Overview"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Our Services Header */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E5B84]">Our Services</h2>
              <p className="text-slate-600 mt-2">We provide different content types according to different audiences.</p>
              <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
            </motion.div>

            {/* Blog & Article Writing */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#2E5B84]" />
                      Blog Writing
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                      <strong>Blog Writing:</strong> We aim to deliver interactive and SEO-optimized blogs to boost traffic and promote engagement. We provide SEO blog writing services with a particular focus on bringing valuable insights, fostering community engagement, and establishing your brand's voice. We know the impact of high-quality blogs in driving organic traffic and improving search engine rankings.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#2E5B84]" />
                      Article Writing
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                      <strong>Article Writing:</strong> We deliver an extensively researched article writing service that's specifically focused on delivering information and authoritative articles that resonate with your audience. Our long-form articles carry deep subject knowledge to provide valuable insights and establish your authority. We begin our process through research, brainstorming our ideas and then placing strategic keyword integration through engaging storytelling to engage the audience.
                    </p>
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917715/Blog_Writing_hipb2w.webp"
                    alt="Blog Writing"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Website Content, Social Media, Product Descriptions */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#2E5B84]" />
                    Website Content
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    <strong>Website Content:</strong> For web writing, our focus is on crafting clear, concise SEO-optimized web copies that speak your brand's message and drive quality traffic. As we also know, an effective SEO website is the key to unlocking organic traffic and engaging your target audience. That's why we keep in mind that every word reflects your brand's identity and goals. We optimise web copies for search engines, ensuring that you rank higher and attract more quality leads.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-[#2E5B84]" />
                    Social Media Content
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    <strong>Social Media Content:</strong> We provide attention-grabbing social media content that drives engagement across multiple platforms. We specialize in crafting content for LinkedIn, Instagram, YouTube, TikTok and more with an aim to revive conversations, promote shares and build a loyal community for your brand. We understand that different social media platforms require different content; that's why we tailor the content accordingly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E5B84] flex items-center gap-2">
                    <Package className="w-5 h-5 text-[#2E5B84]" />
                    Product Descriptions
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    <strong>Product Descriptions:</strong> We focus on the features and qualities of the given product and then create product descriptions accordingly. We know that a compelling product description is essential for driving traffic and boosting sales. We highlight the significant benefits to promote multiple clicks and encourage targeted customers to make a purchase.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Boost Your ROI */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#2E5B84]" />
                Boost Your ROI
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With our detail-oriented content writing services, we craft content that is loved and appreciated by the readers. We deliver 100% unique and plagiarism-free content. Whether you're in the lookout for SEO blog writing, articles, social media content or product descriptions, we have got you covered. We track content performance and update it accordingly to boost engagement.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#2E5B84]" />
                Why Choose Us?
              </h2>
              <div className="space-y-2">
                {[
                  "High-Quality Content",
                  "Extensively Researched and Tailored Content",
                  "100% Authentic and Unique content."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                Write to us, and our skilled Content and SEO team will bring life to your dead content.
              </p>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-[#2E5B84]" />
                Have Questions in mind, we're here to answer
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
                className="inline-flex items-center gap-2 bg-[#2E5B84] hover:bg-[#1a3855] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 text-sm md:text-base"
              >
                Partner with Mezzex to improve your digital marketing. Get in touch today at <strong className="text-white">+44 121-6616357</strong> and learn more about our services. <ArrowRight className="w-5 h-5" />
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