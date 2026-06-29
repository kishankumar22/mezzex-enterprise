// app/services/software-development/custom-software-development/CustomSoftwareDevelopmentContent.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Layout,
  RefreshCw,
  Users,
  Target,
  BarChart3,
  Award,
  Clock,
  Shield,
  Zap,
  Server,
  Database,
  Cloud,
  Smartphone,
  TrendingUp,
  Sparkles,
  MessageSquare,
  Star
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

export default function CustomSoftwareDevelopmentContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Software Development", href: "/services/software-development" },
    { label: "Custom Software Development", active: true }
  ];

  const faqs = [
    {
      q: "What is custom software development?",
      a: "Custom software development involves creating tailored software solutions designed to meet your specific business needs, enhancing efficiency and functionality."
    },
    {
      q: "How long does custom software development take?",
      a: "The timeline varies based on project complexity. We work with you to define milestones and ensure timely delivery through an agile development process."
    },
    {
      q: "Why should I choose Mezzex for custom software?",
      a: "We offer expert developers, tailored solutions, and a proven track record of delivering high-quality software that grows with your business needs."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      title: "Custom Application Development",
      icon: <Code className="w-6 h-6 text-[#2E5B84]" />,
      description: "Our customised software development solutions are designed to meet your unique business needs. Our team of expert developers uses the latest technologies to develop high-quality applications that are tailored to your requirements."
    },
    {
      title: "Platform-Based Product Customisation",
      icon: <Layout className="w-6 h-6 text-[#2E5B84]" />,
      description: "We specialise in offering platform-based product customisation services to meet your business needs. Get the most out of your software investment with our team that has experience working with a wide range of platforms."
    },
    {
      title: "Legacy Application Redesign",
      icon: <RefreshCw className="w-6 h-6 text-[#2E5B84]" />,
      description: "Mezzex can help you redesign your existing legacy software application. Our team of experienced developers is knowledgeable in handling a wide range of legacy systems, and they can assist in modernising your software and improving its performance."
    }
  ];

  const approachSteps = [
    {
      title: "Business Analysis",
      icon: <Target className="w-5 h-5 text-[#2E5B84]" />,
      description: "We perform business analysis to understand your business requirements and goals. Our team coordinates with clients to identify the key features and functionalities that their software needs to have."
    },
    {
      title: "Product Design",
      icon: <Layout className="w-5 h-5 text-[#2E5B84]" />,
      description: "Mezzex creates a product design that meets your requirements, and we also coordinate with clients to ensure that the design meets their expectations and is aligned with their business goals."
    },
    {
      title: "Prototyping",
      icon: <Sparkles className="w-5 h-5 text-[#2E5B84]" />,
      description: "Mezzex offers prototyping services of the software solution to offer a small-scale facsimile of the end product to clients. Our team is open to your unique requirements and can incorporate your feedback to ensure that the prototype meets your needs."
    },
    {
      title: "QA & Testing",
      icon: <Shield className="w-5 h-5 text-[#2E5B84]" />,
      description: "We perform rigorous quality assurance testing to promote the highest quality standards on software solutions. Our team develops software that is bug-free and performs as expected."
    },
    {
      title: "Deployment",
      icon: <Cloud className="w-5 h-5 text-[#2E5B84]" />,
      description: "Mezzex provides software deployment solutions to help your business launch its software on servers or cloud platforms, and our team makes sure that the deployment is seamless and hassle-free."
    },
    {
      title: "Support & Maintenance",
      icon: <Clock className="w-5 h-5 text-[#2E5B84]" />,
      description: "At Mezzex, we offer ongoing support and maintenance services to ensure that your software solution is performing at its best, and our developers are available 24/7 to help clients with any issue."
    }
  ];

  const industries = [
    "Retail & e-commerce",
    "Education & e-learning",
    "Healthcare & Fitness",
    "Logistics & Distribution",
    "Social Networking",
    "Real Estate",
    "Travel & Hospitality",
    "Food & Restaurant",
    "On-demand solution",
    "Gaming"
  ];

  const whyChooseUs = [
    {
      title: "Experienced Developers",
      icon: <Users className="w-5 h-5 text-[#2E5B84]" />,
      description: "Our experienced team of designers and developers holds years of relevant experience, ensuring that your software is crafted with precision and excellence."
    },
    {
      title: "Customised For You",
      icon: <Target className="w-5 h-5 text-[#2E5B84]" />,
      description: "We don't believe in one size fits all. Every project is tailored to your unique business goals, requirements, and technical needs."
    },
    {
      title: "Clear Responses",
      icon: <MessageSquare className="w-5 h-5 text-[#2E5B84]" />,
      description: "We believe in clear and open communication through the development phase to keep our clients informed and involved in every step."
    },
    {
      title: "End-to-end Services",
      icon: <Server className="w-5 h-5 text-[#2E5B84]" />,
      description: "From concept to development phase and then to beyond, we handle every aspect of software development, providing comprehensive and high-quality solutions."
    }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Custom Software Development" />

      {/* Hero Section with Typewriter */}
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
                Software Development
              </h1>
              <div className="mt-4">
                <TypewriterHeading
                  words={["With Mezzex", "Software Development Services"]}
                  className="text-white/90 !text-2xl md:!text-3xl lg:!text-4xl font-semibold tracking-tight leading-tight min-h-[48px] md:min-h-[56px] lg:min-h-[64px]"
                />
              </div>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl lg:max-w-full">
                We are your leading custom software development agency for all your software development needs! We offer top-quality custom software development services that are tailored to meet your business needs and requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <Link
                  href="#services"
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
                src="/images/software-develop.png"
                alt="Software Development"
                className="w-full h-auto floating"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Our Services</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              We provide a range of IT software development services that can be customised to suit a client's unique requirements.
            </p>
            <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#2E5B84] hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#e7f3ff] p-3 rounded-xl inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2E5B84] mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-[#2E5B84]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold">Ready to start your software development project?</h3>
              <p className="text-white/80 mt-1">Let's discuss your requirements</p>
            </div>
            <Link
              href="/contact"
              className="bg-white text-[#2E5B84] hover:bg-[#f0f4f8] px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105 flex items-center gap-2 whitespace-nowrap"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Creating Competitive Products */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <img
                src="/images/custom-software-development-image.jpg"
                alt="Software Development"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E5B84]">Creating competitive products</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Mezzex is a strategic IT software development agency offering competitive and top-quality software development solutions to a range of businesses. You can trust our skills as we have years' worth of knowledge to offer top-notch software development services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["Technology consulting", "SaaS product engineering", "MVP development", "Long-term support and maintenance"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#f8fbff] p-6 rounded-xl mt-4 border-l-4 border-[#2E5B84]">
                <h5 className="font-bold text-[#2E5B84]">Customer voice</h5>
                <p className="text-slate-600 text-sm italic mt-2">
                  "Their enthusiasm for the project and their ability to bring input to the table set them apart. I appreciated their understanding of the not-so-simple project and interesting suggestions and recommendations."
                </p>
                <p className="text-slate-700 font-semibold mt-2">CEO Founder</p>
                <p className="text-[#2E5B84] font-bold">Pro Mortgage</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Software Delivery Framework */}
      <section className="py-16 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Our Custom Software Delivery Framework</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Mezzex's team of developers follows a customised web software development delivery framework that helps them deliver high-quality solutions on time and within budget.
            </p>
            <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
          </motion.div>

          {/* Framework Image */}
          <div className="mb-10">
            <img
              src="/images/software-develop-support.jpg"
              alt="Software Development Framework"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#2E5B84] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#e7f3ff] p-2 rounded-lg">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-[#2E5B84]">{step.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 bg-[#e7f3ff] p-6 rounded-xl text-center max-w-3xl mx-auto">
            <p className="text-slate-700 text-sm sm:text-base">
              At Mezzex, we offer ongoing support and maintenance services to ensure that your software solution is performing at its best, and our developers are available 24/7 to help clients with any issue. We are dedicated to offering top-quality software development services tailored to meet our client's needs. Let us help you achieve your business software development goals.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Diverse Industry Experience</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              We develop and deliver custom software development services across multiple industries, providing a reliable and smooth customer experience.
            </p>
            <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((industry, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-[#f8fbff] text-[#2E5B84] px-5 py-2.5 rounded-full font-semibold text-sm border border-[#2E5B84]/20 hover:bg-[#2E5B84] hover:text-white transition-all duration-300"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Why Choose Us</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Partner with Mezzex for custom software development that drives business growth.
            </p>
            <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#2E5B84] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#e7f3ff] p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#2E5B84]">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed ml-12">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Have Custom Software Development Questions?</h2>
            <p className="text-slate-600 mt-3">Let us help you find the right solution</p>
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
                className="bg-[#f8fbff] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#e7f3ff] transition-colors duration-200"
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
      <section className="py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #2E5B84 50%, #4a7da3 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Let's make your software project a success together</h2>
            <p className="text-white/90 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Book your first consultation with Mezzex and let's discuss your requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="bg-white text-[#2E5B84] hover:bg-[#f0f4f8] px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105"
              >
                Contact Now <ArrowRight className="inline-block w-4 h-4 ml-2" />
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
      `}</style>
    </div>
  );
}