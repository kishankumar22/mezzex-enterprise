// app/services/digital-marketing/email-marketing/EmailMarketingContent.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Users,
  TrendingUp,
  Target,
  BarChart3,
  Sparkles,
  Award,
  Clock,
  Shield,
  Zap,
  Send
} from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";
import TypewriterHeading from "@/components/common/TypewriterHeading";

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

export default function EmailMarketingContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Email Marketing", active: true }
  ];

  const faqs = [
    {
      q: "What is Email Marketing?",
      a: "Email Marketing is a digital marketing strategy that involves sending emails to prospects and customers to promote products, services, or brand awareness. Contact us as we're a leading email marketing agency that delivers result-driven email marketing strategies."
    },
    {
      q: "Why is email marketing important?",
      a: "We help businesses engage with their audience, build relationships, boost sales, and retain customers through targeted and personalised marketing emails."
    },
    {
      q: "How does email marketing work?",
      a: "Businesses collect email addresses (via sign-ups, purchases, or lead magnets) and send tailored emails such as promotions, newsletters, and automated sequences to nurture and convert leads."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const emailServices = [
    {
      title: "Email Strategy & Planning",
      icon: <Target className="w-5 h-5 text-[#2E5B84]" />,
      description: "We design a result-oriented email marketing strategy tailored to your business needs."
    },
    {
      title: "Compelling Copy & Design",
      icon: <Sparkles className="w-5 h-5 text-[#2E5B84]" />,
      description: "We focus on creating eye-catching designs with persuasive copy to create emails that your audience will read."
    },
    {
      title: "Automated Campaigns",
      icon: <Clock className="w-5 h-5 text-[#2E5B84]" />,
      description: "Save your precious time with automated welcome emails, cart reminders, and follow-ups."
    },
    {
      title: "Analytics & Optimization",
      icon: <BarChart3 className="w-5 h-5 text-[#2E5B84]" />,
      description: "We track open rates, clicks, and conversions - then tweak for maximum results."
    },
    {
      title: "Segmentation & Customisation",
      icon: <Users className="w-5 h-5 text-[#2E5B84]" />,
      description: "We deliver the right message to the right people at the right time."
    }
  ];

  const emailTypes = [
    {
      title: "Promotional Emails",
      icon: <Send className="w-5 h-5 text-[#2E5B84]" />,
      description: "We deliver compelling offers and design persuasive copywriting in emails with attention-grabbing visuals and clear CTAs to boost conversion and ROI."
    },
    {
      title: "Welcome Series",
      icon: <Mail className="w-5 h-5 text-[#2E5B84]" />,
      description: "These are designed to inform and process new customers, showcasing your brand's value and developing trust. We personalise these series based on signup sources and user behaviour."
    },
    {
      title: "Cart Abandonment Emails",
      icon: <ShoppingCart className="w-5 h-5 text-[#2E5B84]" />,
      description: "These emails are more than just reminders; they are personalized messages that address important potential concerns and offer incentives to complete the purchase."
    },
    {
      title: "Newsletters & Updates",
      icon: <Mail className="w-5 h-5 text-[#2E5B84]" />,
      description: "We, being the most profound email marketing agency in the UK, keep your target audience informed and engaged through impactful newsletter campaigns. Our email designs are visually appealing and mobile-friendly."
    },
    {
      title: "Personalised Emails",
      icon: <Users className="w-5 h-5 text-[#2E5B84]" />,
      description: "We aim to turn strangers into valuable customers with bespoke email sequences that resolve their unique pain points directly."
    }
  ];

  const approachPoints = [
    "Data-Driven Strategy",
    "Personalised Campaigns",
    "Optimized Performance",
    "Clear Communication",
    "Adhering to Suggested Compliance & Ethics",
    "Integrated Marketing",
    "Focus on ROI"
  ];

  const leadNurturingPoints = [
    "Focus on trust and credibility through helpful content.",
    "Focus on providing value",
    "Focus on personalization"
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Email Marketing" />

<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="flex justify-center items-center px-4 py-6 md:py-8"
>
  <h1 className="text-center font-extrabold text-[#2f5a84] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight whitespace-nowrap">
    Increase Your ROI with Tailored Email Campaigns
  </h1>
</motion.div>
      {/* Email Marketing Section */}
      <section className="py-6 md:py-8 bg-[#f8fbff]">
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
                    <Mail className="w-6 h-6 text-[#2E5B84]" />
                    Email Marketing
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Utilise undiscovered revenue paths by developing engaging email campaigns. Mezzex is a leading email marketing agency that aims to deliver measurable results by creating customised campaigns for diverse audiences.
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-[#2E5B84]">Why Email Marketing is Essential?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {[
                        "Direct & Professional Communication",
                        "Increased ROI",
                        "Automated & Scalable",
                        "Builds Reliability"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="/images/DigitalMarketing/EmailMarketingOverview.webp"
                    alt="Email Marketing Overview"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Target className="w-6 h-6 text-[#2E5B84]" />
                    Our Email Marketing Agency Services
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We design and execute email marketing strategies tailored to your business goals.
                  </p>
                  <div className="space-y-2">
                    {emailServices.map((service, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-[#2E5B84]">{service.title}:</strong> {service.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917716/Our_Email_Marketing_Agency_Services_qg8z5f.webp"
                    alt="Email Marketing Services"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Types of Emails */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917716/Types_of_Emails_We_Create_c51sk4.webp"
                    alt="Types of Emails"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-4 order-1 md:order-2">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Send className="w-6 h-6 text-[#2E5B84]" />
                    Types of Emails We Create
                  </h2>
                  <div className="space-y-2">
                    {emailTypes.map((type, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-[#2E5B84]">{type.title}:</strong> {type.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Approach */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[#2E5B84]" />
                    Our Approach
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We craft email marketing strategies with a focus on delivering results.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {approachPoints.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917716/We_drive_results_from_data_strategy_to_ROI_execution_hc2asl.webp"
                    alt="Email Marketing Approach"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Customise & Build Relationships */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-[#2E5B84]" />
                    Customise Every Touchpoint from Inbox to Checkout
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    Transform every turned email into a valuable customer experience with dynamic content blockers. Build reliable relationships with email marketing strategies tailored to your customers' needs.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#2E5B84]" />
                    Build Strong Relationships with Intelligent Automation
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    Streamline workflow throughout the customer journey while keeping your focus on creativity. Deliver real-time messages triggered by user behaviour, engagement levels, and key events via email and SMS automation. Easily set up pre-built programs, abandoned cart emails, or back-in-stock alerts in just a few clicks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Results & Lead Nurturing */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-[#2E5B84]" />
                    Visible Email Marketing Results
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    We believe in delivering measurable results through data-driven email marketing strategies. Our targeted emails and lead-nurturing emails help businesses scale by boosting engagement, conversions, and customer retention.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#2E5B84]" />
                    Effective Lead Nurturing Strategies
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    We, being one of the profound email marketing company, build relationships with potential customers (leads) at every stage of the sales funnel. We provide them with valuable and relevant information via email to guide them towards a purchase.
                  </p>
                  <div className="space-y-2 mt-3">
                    <p className="font-semibold text-[#2E5B84]">Our Key Aspects of Lead Nurturing:</p>
                    {leadNurturingPoints.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{point}</span>
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
              <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-[#2E5B84]" />
                Have Email Marketing Questions? Let us help you
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
                Email us now to drive sales with our proven email strategies <ArrowRight className="w-5 h-5" />
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

// ShoppingCart Icon Component
function ShoppingCart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.4 8M17 13l2.4 8M9 21a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}