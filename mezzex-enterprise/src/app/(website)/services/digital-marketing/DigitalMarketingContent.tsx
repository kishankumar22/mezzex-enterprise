"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";
import TypewriterHeading from "@/components/common/TypewriterHeading";

interface DigiServiceItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
}

const digiServices: DigiServiceItem[] = [
  {
    id: 1,
    title: "Google Analytics",
    desc: "For proper website marketing, our digital marketers offer Google Analytics services to clients to help them have valuable insight into website traffic, user behaviour and conversion rates. Let us offer you effective solutions to track the effectiveness of your digital marketing efforts and provide data-driven decisions to optimise your marketing strategies.",
    img: "/images/googleanalytics-page.png",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    desc: "Create and place advertisements on one of the social media platform giants, Facebook, with Facebook Ads services, we help you promote your products or services cost-effectively. Our Facebook Ads enable you to focus on your targeted audiences based on demographic, geographic, and behavioural data.",
    img: "/images/facebook-ads.jpg",
    link: "/services/social-media-marketing",
  },
  {
    id: 3,
    title: "Content Writing Services",
    desc: "Mezzex offers content marketing services that can help businesses create and distribute high-quality content that engages a targeted audience and drives traffic to websites. We offer everything including blog posts, infographics, and videos. Work with us to create content that resonates with your target audience.",
    img: "/images/content-marketing-service.jpg",
    link: "/services/digital-marketing/content-writing",
  },
  {
    id: 4,
    title: "E-commerce Marketing",
    desc: "Our E-commerce marketing services enable you to easily promote and sell products or services through top e-commerce platforms. We are experienced in creating effective campaigns that drive targeted traffic and increase conversions, with our team of experts combining technical skills, creativity, and marketing knowledge.",
    img: "/images/socialmedia-marketing.jpg",
    link: "/services/digital-marketing/e-commerce-marketing",
  },
  {
    id: 5,
    title: "Email Marketing",
    desc: "Maintain a positive online image and address any negative feedback or reviews with Mezzex’s reputation management services. We have experts that can help you monitor your online presence and proactively manage your brand reputation.",
    img: "/images/reputation-management.jpg",
    link: "/services/digital-marketing/email-marketing",
  },
  {
    id: 6,
    title: "SEO Services",
    desc: "Our local SEO services can help local businesses rank higher in local search results, making it easy to attract more customers in their industries. Let us optimise your website and business listings for local search terms and directories.",
    img: "/images/local-seo.jpg",
    link: "/services/digital-marketing/search-engine-optimisation",
  },
  {
    id: 7,
    title: "Pay-Per-Click (PPC)",
    desc: "Increase the quality and number of inbound links to your website - that will result in improving your ranking on the search engine and drive more traffic, Mezzex is here to help with our effective link-building strategies.",
    img: "/images/linke-building.jpg",
    link: "/services/digital-marketing/pay-per-click",
  },
  {
    id: 8,
    title: "App Store Optimisation",
    desc: "Our app store optimisation services can help you increase your mobile app's visibility and downloads on the app stores. We have experts who can optimise your app's title, description, keywords, and visuals to promote maximum impact.",
    img: "/images/aap-store-managment.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
} as const;

export default function DigitalMarketingContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Digital Marketing", active: true }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Top Digital Marketing Agency in The UK" />

      {/* 1. Centered Header & Intro Section with Typewriter Effect */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col items-center justify-center">
              <TypewriterHeading 
                words={["Mezzex", "A Digital Marketing Agency You Can Trust"]}
                className="text-[#2f5a84] !text-3xl md:!text-4xl lg:!text-5xl font-extrabold tracking-tight leading-tight min-h-[56px] md:min-h-[64px] lg:min-h-[72px]"
              />
            </div>

            <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto text-center">
              <p>
                As a top digital marketing company, we help businesses grow their online presence and boost their revenue through our effective campaigns of digital marketing services. We offer a combination of compelling content, targeted messaging and engaging campaigns to help you achieve your business goals, whether it is to increase website traffic, improve search engine rankings, or enhance brand reputation. Let one of the best SEO companies handle all your digital marketing aspects, we have the expertise and resources to offer practical solutions to help you achieve your goals.
              </p>
              <p>
                We have a team of professionals that only uses highly effective techniques and marketing mediums to implement tailor-made strategies to improve visibility and make sure the targeted audience is finding your business. Have full peace of mind, hassle-free marketing support, and the flexibility to progress with your business by depending on Mezzex for sensible, dedicated performance marketing services.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Transition Section "Our Services" */}
      <section className="py-12 bg-[#eff2f5]/20 border-b border-slate-100 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900">Our Services</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            As a reputable performance marketing agency, we have all the tools and expertise to help your brand grow in the increasingly competitive global and local markets.
          </p>
        </div>
      </section>

      {/* 3. Alternating Sections with distinct backgrounds and generous margins */}
      
      {/* Section 3.1: Search Engine Optimisation (SEO) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100/60 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-7/12 space-y-5 text-left"
            >
              <p className="text-[#FF9C0A] font-bold text-lg tracking-wide italic border-l-4 border-[#FF9C0A] pl-3">
                “Are you ready to sell?”
              </p>
              <Link href="/services/digital-marketing/search-engine-optimisation">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 hover:text-[#2f5a84] transition-colors leading-tight">
                  Search Engine Optimisation (SEO)
                </h2>
              </Link>
              <p className="font-semibold text-slate-700 text-base">
                Rank higher, improve your traffic and make the website easy to find
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our experienced SEO technicians use tried and tested strategies and techniques to help your online platform rank higher in search engine results pages (SERPs). We offer SEO services that result in more clicks, more visibility and more customers for businesses.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/digital-marketing/search-engine-optimisation"
                  className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
                >
                  More About SEO Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-5/12 flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative max-w-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50"
              >
                <img src="/images/SEO-IMG.webp" alt="SEO Service" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3.2: Pay-Per-Click (PPC) */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100/60 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-7/12 space-y-5 text-left"
            >
              <p className="text-[#FF9C0A] font-bold text-lg tracking-wide italic border-l-4 border-[#FF9C0A] pl-3">
                “It works when it is done right!”
              </p>
              <Link href="/services/digital-marketing/pay-per-click">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 hover:text-[#2f5a84] transition-colors leading-tight">
                  Pay-Per-Click (PPC)
                </h2>
              </Link>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Mezzex we have PPC specialists experienced to create and manage effective paid advertising campaigns on all major platforms including Google Ads and Facebook Ads. We are also an Amazon PPC agency and our Pay-Per-Click (PPC) management services are offered in a data-driven approach to effectively optimise your ads for maximum clicks and conversions.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/digital-marketing/pay-per-click"
                  className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
                >
                  More About PPC <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-5/12 flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative max-w-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50"
              >
                <img src="/images/pay-per-click.webp" alt="PPC Service" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3.3: Social Media Marketing */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100/60 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-7/12 space-y-5 text-left"
            >
              <p className="text-[#FF9C0A] font-bold text-lg tracking-wide italic border-l-4 border-[#FF9C0A] pl-3">
                “Enough of those likes. It is time people start loving you!”
              </p>
              <Link href="/services/social-media-marketing">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 hover:text-[#2f5a84] transition-colors leading-tight">
                  Social Media Marketing
                </h2>
              </Link>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We have social media marketing experts who can professionally help you execute and develop and execute a targeted social media strategy that is effective enough to connect with your audience, resulting in increased engagement. Even if you are looking for engaging content creation to run effective ad campaigns, our experts can help you boost all your social media channels.
              </p>
              <p className="font-semibold text-slate-700 text-base">
                We have the best social media marketing strategies
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Even if you are looking for engaging content creation to run effective ad campaigns, our experts can help you boost all your social media channels as they are knowledgeable in this field.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/social-media-marketing"
                  className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
                >
                  More About Social Media Marketing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-5/12 flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative max-w-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50"
              >
                <img src="/images/social-media-marketing.webp" alt="Social Media" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3.4: Influencer Marketing */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100/60 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-7/12 space-y-5 text-left"
            >
              <p className="text-[#FF9C0A] font-bold text-lg tracking-wide italic border-l-4 border-[#FF9C0A] pl-3">
                “Influencer Marketing Is An Effective tool To Promote Your Brand and Increase Popularity”
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Influencer Marketing
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We offer influencer marketing services to help you promote your brand's products or services. Our team help you partner with social media influencers that have a large following on social media platforms such as Instagram, Facebook, YouTube, or TikTok to promote your products or services.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-5/12 flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative max-w-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50"
              >
                <img src="/images/influcient-rght.webp" alt="Influencer Marketing" className="w-full h-auto object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Digital Marketing Services Grid */}
      <section className="py-20 md:py-28 bg-[#eff2f5]/30 border-t border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              OUR DIGITAL MARKETING SERVICES
            </h2>
            <p className="text-lg text-slate-600">
              At Mezzex, we aim to help our clients grow their brands. This is why we offer a range of top-quality digital marketing services.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {digiServices.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 border border-slate-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Image container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {item.link ? (
                    <Link href={item.link}>
                      <h3 className="text-lg font-bold text-slate-900 hover:text-[#2f5a84] transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Inline CTA Callout text at the bottom */}
          <div className="col-lg-10 mx-auto text-center max-w-3xl pt-20 pb-4 space-y-4">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold">
              Partner with Mezzex to improve your digital marketing. Get in touch today at{" "}
              <strong className="font-extrabold text-[#253053]">+44 121-6616357</strong> and learn more about our services.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md"
              >
                Contact Us Today <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Trust Signals - Partners (Our Clients Slider) */}
      <div className="py-12 bg-white">
        <PartnerSection />
      </div>
    </div>
  );
}
