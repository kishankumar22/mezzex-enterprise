// app/services/digital-marketing/search-engine-optimisation/SearchEngineOptimisationContent.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  FileCode, 
  Link as LinkIcon, 
  MapPin, 
  Settings,
  TrendingUp,
  Users,
  Search,
  Trophy,
  Target,
  Clock,
  Award,
  BarChart3,
  Globe,
  Zap
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

export default function SearchEngineOptimisationContent() {
  const [activeTab, setActiveTab] = useState("onpage");
  const [counts, setCounts] = useState({ ranking: 0, clients: 0, keywords: 0, success: 0 });
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Search Engine Optimisation", active: true }
  ];

  const tabs = [
    { id: "onpage", label: "On-page SEO", icon: <FileCode className="w-5 h-5" /> },
    { id: "offpage", label: "Off-page SEO", icon: <LinkIcon className="w-5 h-5" /> },
    { id: "local", label: "Local SEO", icon: <MapPin className="w-5 h-5" /> },
    { id: "technical", label: "Technical SEO", icon: <Settings className="w-5 h-5" /> }
  ];

  const tabContent = {
    onpage: {
      title: "On-page SEO",
      description: "Increase the visibility of your web pages in search engines with our on-page SEO services. As one of the best SEO marketing companies, we optimise content, making use of meta data optimisation to craft engaging titles and descriptions that drive traffic.",
      features: ["Meta Data Optimisation", "Heading Structure (H1, H2, H3)", "Keyword Integration", "Internal Linking", "Content Optimisation"],
      image: "/images/DigitalMarketing/OnPageSeo.webp"
    },
    offpage: {
      title: "Off-page SEO",
      description: "Our Off-page SEO strategies can enhance your website's authority and relevance in search engines. We focus on increasing visibility and brand awareness through active social media management.",
      features: ["Social Media Management", "Backlinking Strategies", "Online Reputation Management", "Content Marketing", "Brand Credibility"],
      image: "/images/DigitalMarketing/OffPageSeo.webp"
    },
    local: {
      title: "Local SEO",
      description: "We aim to optimize your Google My Business Profile, making sure it is complete and updated. We review and implement local citation strategies to improve your online visibility in local searches.",
      features: ["Google My Business Optimisation", "Local Citations", "Local Keyword Targeting", "Review Management", "Local Link Building"],
      image: "https://res.cloudinary.com/ddsenadu2/image/upload/v1745917715/Local_SEO_q9rper.webp"
    },
    technical: {
      title: "Technical SEO",
      description: "Ensure your website is optimised for search results with our best technical SEO services. As one of the best SEO marketing companies, we aim to improve your site's performance through site speed optimization.",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "HTTP Implementation", "Crawl Error Fixing", "XML Sitemap Submission", "Robots.txt Optimisation"],
      image: "/images/DigitalMarketing/TechnicalSeo.webp"
    }
  };

  const approachSteps = [
    { number: 1, title: "Define Goals", desc: "We define clear SEO aims (traffic, leads, sales)" },
    { number: 2, title: "Keyword Research", desc: "We research target audience keywords" },
    { number: 3, title: "Competitor Analysis", desc: "We analyse competitor SEO strategies" },
    { number: 4, title: "Technical Audit", desc: "We fix website technical issues" },
    { number: 5, title: "On-Page Optimisation", desc: "We optimize titles and content" },
    { number: 6, title: "Content Creation", desc: "We create SEO-optimized content" },
    { number: 7, title: "Local SEO (if needed)", desc: "We optimize Google My Business" },
    { number: 8, title: "Analytics & Tracking", desc: "We track results and performance" },
    { number: 9, title: "Strategy Refinement", desc: "We adjust the strategy as needed" }
  ];

  const stats = [
    { icon: <TrendingUp className="w-8 h-8 text-[#2E5B84]" />, value: 89, label: "Average Ranking Improvement", suffix: "%" },
    { icon: <Users className="w-8 h-8 text-[#2E5B84]" />, value: 175, label: "Satisfied Clients", suffix: "" },
    { icon: <Search className="w-8 h-8 text-[#2E5B84]" />, value: 3500, label: "Keywords Ranked", suffix: "+" },
    { icon: <Trophy className="w-8 h-8 text-[#2E5B84]" />, value: 95, label: "Success Rate", suffix: "%" }
  ];

  const faqs = [
    {
      q: "What is SEO, and why is it significant?",
      a: "SEO stands for Search Engine Optimisation. SEO is the process of optimising a website to improve its visibility in search engine result pages (SERPs) and drive organic traffic. Mezzex is the best SEO marketing agency that delivers the best technical SEO services."
    },
    {
      q: "Why is Keyword Research significant in SEO?",
      a: "Keyword research is an important SEO strategy that involves identifying popular words and phrases people search for in search engines. It identifies what your audience searches, allowing you to create relevant content that ranks and attract targeted traffic."
    },
    {
      q: "How long does it take to identify SEO results?",
      a: "SEO is a long-term strategy, and it typically takes 3–6 months to become noticeable, as search engines need time to crawl, index, and rank changes. Significant improvements can take longer, especially for competitive keywords."
    },
    {
      q: "What makes Mezzex different from other SEO agencies?",
      a: "Mezzex stands out through our comprehensive approach, transparent reporting, and proven results. Our skilled SEO team is motivated towards making your website rank higher in search engines. We care for the people we work with beyond just delivering work."
    }
  ];

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const startTime = Date.now();
    const targets = stats.map(s => s.value);

    const updateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCounts({
        ranking: Math.round(targets[0] * eased),
        clients: Math.round(targets[1] * eased),
        keywords: Math.round(targets[2] * eased),
        success: Math.round(targets[3] * eased)
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    updateCounters();
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Search Engine Optimisation" />

{/* Hero Section - Updated background color */}
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
          SEO (Search Engine Optimisation)
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl lg:max-w-full">
          Mezzex is one of the best SEO marketing companies in the UK that offers comprehensive SEO services to address your complex challenges and increase organic traffic.
        </p>
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">Success Oriented</span>
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">Accelerating Growth</span>
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">Clear Results</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
          <Link
            href="#seo-services"
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
          src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745989666/seo-concept-illustration_1_smlbh8.png"
          alt="SEO Hero"
          className="w-full h-auto floating"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Services Tabs Section */}
      <section id="seo-services" className="py-16 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Our Comprehensive SEO Services</h2>
            <p className="text-slate-600 mt-3">We deliver results-driven strategies tailored to your business needs</p>
            <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#2E5B84] text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-[#e7f3ff] hover:shadow-md"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#e7f3ff] p-3 rounded-xl">
                    {tabs.find(t => t.id === activeTab)?.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2E5B84]">
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {tabContent[activeTab as keyof typeof tabContent].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 max-w-sm floating-img">
                <img
                  src={tabContent[activeTab as keyof typeof tabContent].image}
                  alt={tabContent[activeTab as keyof typeof tabContent].title}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Our Proven SEO Approach</h2>
            <p className="text-slate-600 mt-3">A strategic methodology that delivers consistent results</p>
            <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
          </motion.div>

          <div className="relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {approachSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-[#f8fbff] rounded-xl p-6 border-l-4 border-[#2E5B84] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-[#2E5B84] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </span>
                    <h4 className="font-bold text-[#2E5B84]">{step.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm ml-11">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={counterRef} className="py-16 md:py-20 bg-gradient-to-r from-[#2E5B84] to-[#0B5ED7]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Real Results for Our Clients</h2>
            <p className="text-white/80 mt-3">See the difference our SEO services can make</p>
            <div className="w-20 h-1 bg-white mx-auto mt-4 rounded"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {index === 0 && counts.ranking}{index === 1 && counts.clients}{index === 2 && counts.keywords}{index === 3 && counts.success}{stat.suffix}
                </div>
                <p className="text-white/80 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-3">Have any SEO questions? We have the answers</p>
            <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#f8fbff] transition-colors duration-200"
                >
                  <span className="font-semibold text-[#2E5B84] text-sm md:text-base flex items-center gap-3">
                    <span className="bg-[#e7f3ff] p-1.5 rounded-full">
                      <Award className="w-4 h-4 text-[#2E5B84]" />
                    </span>
                    {faq.q}
                  </span>
                  <span className={`text-[#2E5B84] transition-transform duration-300 ${activeFaq === index ? 'rotate-45' : ''}`}>
                    <span className="text-2xl font-light">+</span>
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #2E5B84 0%, #9F9F9F 50%, #0B5ED7 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Ready to Boost Your Search Rankings?</h2>
            <p className="text-white/90 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Let's work together to increase your online visibility and drive more organic traffic to your website.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="bg-white text-[#2E5B84] hover:bg-[#f0f4f8] px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105"
              >
                Get Free SEO Quote
              </Link>
              <Link
                href="tel:+441216616357"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2E5B84] px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </Link>
            </div>
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