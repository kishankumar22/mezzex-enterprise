"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";
import TypewriterHeading from "@/components/common/TypewriterHeading";

interface ServiceCard {
  title: string;
  desc: string;
}

const customAppServices: ServiceCard[] = [
  {
    title: "Custom Application Development",
    desc: "Our customised software development solutions are designed to meet your unique business needs. Our team of expert developers uses the latest technologies to develop high-quality applications that are tailored to your requirements.",
  },
  {
    title: "Platform-Based Product Customisation",
    desc: "We specialise in offering platform-based product customisation services to meet your business needs. Get the most out of your software investment with our team that has experience working with a wide range of platforms.",
  },
  {
    title: "Legacy Application Redesign",
    desc: "Mezzex can help you redesign your existing legacy software application. Our team of experienced developers is knowledgeable in handling a wide range of legacy systems, and they can assist in modernising your software and improving its performance.",
  },
];

const deliverySteps: ServiceCard[] = [
  {
    title: "Business Analysis",
    desc: "We perform business analysis to understand your business requirements and goals. Our team coordinates with clients to identify the key features and functionalities that their software needs to have.",
  },
  {
    title: "Product Design",
    desc: "Mezzex creates a product design that meets your requirements, and we also coordinate with clients to ensure that the design meets their expectations and is aligned with their business goals.",
  },
  {
    title: "Prototyping",
    desc: "Mezzex offers prototyping services of the software solution to offer a small-scale facsimile of the end product to clients. Our team is open to your unique requirements and can incorporate your feedback to ensure that the prototype meets your needs.",
  },
  {
    title: "QA & Testing",
    desc: "We perform rigorous quality assurance testing to promote the highest quality standards on software solutions. Our team develops software that is bug-free and performs as expected, and our effective QA and testing process helps us achieve this goal.",
  },
  {
    title: "Deployment",
    desc: "Mezzex provides software deployment solutions to help your business launch its software on servers or cloud platforms, and our team makes sure that the deployment is seamless and hassle-free.",
  },
  {
    title: "Support & Maintenance",
    desc: "At Mezzex, we offer ongoing support and maintenance services to ensure that your software solution is performing at its best, and our developers are available 24/7 to help clients with any issue.",
  },
];

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

export default function SoftwareDevelopmentContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Software Development", active: true }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Software Development" />

      {/* 1. Intro Section: Typewriter & Graphic Row */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 space-y-6 text-left"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2f5a84]/10 text-[#2f5a84]">
                Enterprise Software
              </span>
              
              <div className="flex flex-col items-start">
                <TypewriterHeading 
                  words={["With Mezzex", "Software Development Services"]}
                  className="text-[#2f5a84] !text-3xl md:!text-4xl lg:!text-5xl font-extrabold tracking-tight leading-tight min-h-[56px] md:min-h-[64px] lg:min-h-[72px]"
                />
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We are your leading custom software development agency for all your software development needs! We offer top-quality custom software development services that are tailored to meet your business needs and requirements. Also, we have got you covered for all your new application development, customising an existing product, or redesigning your legacy software, our experienced developers can handle projects from all types of industries.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative max-w-[380px] w-full aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-xl flex items-center justify-center p-6">
                <img 
                  src="/images/software-develop.png" 
                  alt="Software Development Graphic" 
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Transition Section "Our Services" */}
      <section className="py-16 bg-[#eff2f5]/20 border-b border-slate-100 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Services</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We provide a range of IT software development services that can be customised to suit a client’s unique requirements.
          </p>
        </div>
      </section>

      {/* 3. 3-Card Core Services Block with top gradient borders */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {customAppServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative bg-white border border-slate-100/80 shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl p-8 pt-10 space-y-4 overflow-hidden"
              >
                {/* Thick top gradient border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Interactive Call to Action Banner */}
      <section className="bg-gradient-to-r from-[#2f5a84] to-[#1e3b57] py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold">Ready to start your software development project?</h3>
              <p className="text-cyan-300 font-medium">Let’s discuss your requirements</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#2f5a84] px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Us <ArrowRight className="w-5 h-5 text-[#2f5a84]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Creating Competitive Products & Testimonial Section */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left side Image block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-slate-100"
            >
              <img 
                src="/images/custom-software-development-image.jpg" 
                alt="Custom Software Development" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Right side copy and quote */}
            <div className="space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Creating competitive products
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Mezzex is a strategic IT software development agency offering competitive and top-quality software development solutions to a range of businesses. You can trust our skills as we have years' worth of knowledge to offer top-notch software development services.
                </p>
              </div>

              {/* Grid lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm font-semibold">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 flex-shrink-0" />
                    <span>Technology consulting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 flex-shrink-0" />
                    <span>SaaS product engineering</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 flex-shrink-0" />
                    <span>MVP development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 flex-shrink-0" />
                    <span>Long-term support & maintenance</span>
                  </div>
                </div>
              </div>

              {/* Customer Voice box */}
              <div className="bg-[#eff2f5]/30 border border-slate-100 rounded-3xl p-6 md:p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2f5a84] bg-[#2f5a84]/5 px-2.5 py-1 rounded-full">
                  Customer voice
                </span>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "Their enthusiasm for the project and their ability to bring input to the table set them apart. I appreciated their understanding of the not-so-simple project and interesting suggestions and recommendations. They’re very smart and do their best to make the project a success."
                </p>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-none">CEO Founder</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1">Pro Mortgage</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Custom Software Delivery Framework with top gradient borders */}
      <section className="py-20 md:py-28 bg-[#eff2f5]/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-16">
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Our Custom Software <br /> Delivery Framework
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Mezzex’s team of developers follows a customised web software development delivery framework that helps them deliver high-quality solutions on time and within budget. Below are the steps we follow:
            </p>
          </div>

          {/* Large image visual wrapper */}
          <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-md">
            <img 
              src="/images/software-develop-support.jpg" 
              alt="Software Delivery Framework" 
              className="w-full h-auto object-cover max-h-[480px]"
            />
          </div>

          {/* 6 Framework steps Grid (No step numbers, top gradient borders matching screenshot) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {deliverySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative bg-white border border-slate-100 rounded-3xl p-8 pt-10 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 overflow-hidden text-left"
              >
                {/* Thick top gradient border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Large Helping Text box */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm max-w-4xl mx-auto text-center space-y-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Mezzex, we offer ongoing support and maintenance services to ensure that your software solution is performing at its best, and our developers are available 24/7 to help clients with any issue.
            </p>
            <p className="text-slate-700 text-base sm:text-lg font-semibold leading-relaxed">
              We are dedicated to offering top-quality software development services tailored to meet our client's needs. Let us help you achieve your business software development goals.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md"
              >
                Get In Touch Today <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Trust Signals - Partners (Our Clients Slider) */}
      <div className="py-12 bg-white">
        <PartnerSection />
      </div>
    </div>
  );
}
