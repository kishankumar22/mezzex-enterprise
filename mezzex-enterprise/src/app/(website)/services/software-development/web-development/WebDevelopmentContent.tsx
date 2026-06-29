// app/services/software-development/web-development/WebDevelopmentContent.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Layout,
  Server,
  Shield,
  Zap,
  Target,
  Users,
  Award,
  Clock,
  Sparkles,
  Smartphone,
  Globe,
  Database,
  Cloud,
  MessageSquare,
  TrendingUp
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

export default function WebDevelopmentContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Software Development", href: "/services/software-development" },
    { label: "Web Development", active: true }
  ];

  const faqs = [
    {
      q: "What is Web Application Development?",
      a: "Web application development is the process of designing, building, testing, and deploying web-based software that users can access through a browser. Unlike traditional desktop applications, web applications run on remote servers and are accessed via the internet."
    },
    {
      q: "Why is Web Application Development important?",
      a: "It is a crucial business tool in the current digital landscape that enables companies to reach and interact with wider audiences, provide services, and carry out business operations online. With this service, businesses can simplify their processes, enhance productivity, and offer improved customer service."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const frontendTech = [
    "JavaScript", "jQuery", "TypeScript", "React JS",
    "Vue.js", "Tailwind", "Bootstrap", "HTML5",
    "CSS 3", "Sass", "Less", "Next.js"
  ];

  const backendTech = [
    "PHP", "Laravel", "Node.js",
    "CodeIgniter", "Express.js", "EJS"
  ];

  const whyChooseUs = [
    "Agile Development Methodology",
    "Experienced Team",
    "Transparent Communication",
    "Focus on Quality & Security",
    "Client-Centric Approach",
    "Post-Launch Support"
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Web Development" />

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
                Web Development
              </h1>
              <div className="mt-4">
                <TypewriterHeading
                  words={["With Mezzex", "Web Development Services"]}
                  className="text-white/90 !text-2xl md:!text-3xl lg:!text-4xl font-semibold tracking-tight leading-tight min-h-[48px] md:min-h-[56px] lg:min-h-[64px]"
                />
              </div>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl lg:max-w-full">
                Boost your business growth with our custom web app development services for marketing sites and software solutions. Tailored to your specific needs, we ensure a seamless device experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <Link
                  href="#web-development"
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
                src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917715/Web_Development_xy44nm.webp"
                alt="Web Development"
                className="w-full h-auto floating"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="py-16 md:py-20 bg-[#f8fbff]">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5B84]">Boost Your Business Growth with Custom Web Development</h2>
              <div className="w-20 h-1 bg-[#2E5B84] mx-auto mt-4 rounded"></div>
            </motion.div>

            {/* Overview */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Code className="w-6 h-6 text-[#2E5B84]" />
                    Web Development
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Boost your business growth with our custom web app development services for marketing sites and software solutions. Tailored to your specific needs, we ensure a seamless device experience. We develop unique features and functionalities, focusing on scalability and performance.
                  </p>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917715/Web_Development_xy44nm.webp"
                    alt="Web Development Overview"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Solving Challenges */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917717/Get_Full_Cycle_Web_Development_Services_For_Your_Business_nirvfb.webp"
                    alt="Solving Challenges"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-4 order-1 md:order-2">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Target className="w-6 h-6 text-[#2E5B84]" />
                    Solving the Challenges of Web Development
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    The current digital landscape is constantly evolving. It is crucial to deliver information and services at the right time to the users for businesses to thrive. To address these current challenges, our experienced team specializes in creating flexible, cost-effective web applications that offer superior performance to customers. We put the needs and requirements of our customers as a priority, ensuring their web application remains relevant and engaging in the current competitive market.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Rely On Our Experience */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#2E5B84]" />
                Rely On Our Experience
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                We bring expertise and reliability to every project.
              </p>
              <div className="space-y-2">
                {[
                  { title: "Meticulous Implementation", desc: "Bringing your unique visions to life with accurate execution to meet your specific needs." },
                  { title: "Reliability", desc: "Transparent results and budget-friendly performance, providing efficient project delivery." },
                  { title: "Cost-Effective", desc: "Competitive and flexible pricing structure to address your specific business needs." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-[#2E5B84]">{item.title}:</strong> {item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stand-Out Approach */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-[#2E5B84]" />
                    Stand-Out Approach for Web Application Development
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Our unique approach is based on a forum for delivering cutting-edge technology and a dedication to security and adherence. We make use of state-of-the-art tools, engage in a unique discovery phase to customise web applications that not only address your specific business needs but also focus on delivering quality and seamless user experience.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#2E5B84]">Extensive Analysis and Cooperation</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">We collaborate closely to understand your business, audience, and application needs. We combine your unique ideas with our expertise and deliver innovative, tailored web applications that maximize your potential.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E5B84]">Modern Technologies and Development Process</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">We utilize modern technologies in our development process, both Frontend and Backend development, such as UI, UX, Next.js, Python, PHP, MySQL, and more. This diverse tech stack helps us deliver robust, secure, and cutting-edge web applications to meet your business needs.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E5B84]">Security and Conformity</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">Security is most important in the current digital landscape. Our experienced team is committed to delivering strict security protocols adhered to web applications. We upgrade our security systems according to current market trends, such as end-to-end encryption, authentication, and authorisation, to ensure the protection of sensitive data and maintain the integrity and privacy of the users.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E5B84]">Recurring Design and Development</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">To bridge the gap between vision and reality, we employ iterative prototyping. This allows you and the stakeholders to actively test and refine the application's design and functionality, ensuring it aligns clearly with your business needs. We maintain transparent communication throughout, working closely to work on every detail.</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <img
                    src="/images/WebDevelopment/StandOutApproach.webp"
                    alt="Stand-Out Approach"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Decreasing Risk */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917717/Decreasing_Risk_with_Focus_on_Quality_n6foty.webp"
                    alt="Decreasing Risk"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-6 order-1 md:order-2">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[#2E5B84]" />
                    Decreasing Risk with Focus on Quality
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We focus on risk reduction with no compromise on quality in our web development process. We offer multiple engagement models tailored to your specific business needs, conducting rigorous QA and testing. And providing ongoing support and maintenance, we deliver a seamless experience. We not only ensure reliable web application development but also make sure that they are adaptable enough to grow your business.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#2E5B84]">Various Engagement Models</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">We offer various engagement models, including project-based, team extension, and development team models to help you with the most suitable solution for your business. We ensure that our services are tailored to your business needs to reduce the risk associated with new technologies and processes.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E5B84]">In-Depth QA and Testing</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">Our QA and testing experts work closely to detect and fix potential issues in your web application before they impact your business. With a strong focus on test automation and mobile testing, we ensure a bug-free, high-performing application that's ready to impress. Our comprehensive testing covers usability, functionality, performance, and security, delivering a polished, reliable, and user-friendly experience.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E5B84]">Consistent Support and Maintenance</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">We offer consistent support and maintenance services to ensure that your web application performs optimally and remains updated with the latest technologies and best practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3 mb-6">
                <Server className="w-6 h-6 text-[#2E5B84]" />
                Technologies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-[#2E5B84] mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5" /> Frontend Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendTech.map((tech, i) => (
                      <span key={i} className="bg-[#f8fbff] text-[#2E5B84] px-3 py-1.5 rounded-full text-sm font-medium border border-[#2E5B84]/20 hover:bg-[#2E5B84] hover:text-white transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2E5B84] mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5" /> Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {backendTech.map((tech, i) => (
                      <span key={i} className="bg-[#f8fbff] text-[#2E5B84] px-3 py-1.5 rounded-full text-sm font-medium border border-[#2E5B84]/20 hover:bg-[#2E5B84] hover:text-white transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-l-4 border-[#2E5B84]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="https://res.cloudinary.com/ddsenadu2/image/upload/v1745917716/From_Concept_to_Code_vsnujg.webp"
                    alt="Why Choose Us"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-4 order-1 md:order-2">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <Users className="w-6 h-6 text-[#2E5B84]" />
                    Why Choose Us
                  </h2>
                  <div className="space-y-2">
                    {whyChooseUs.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-sm hover:translate-x-1 transition-all duration-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
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
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <img
                    src="/images/WebDevelopment/FAQ.webp"
                    alt="FAQ"
                    className="w-full h-auto rounded-xl shadow-md floating-img"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  />
                </div>
                <div className="flex-1 space-y-4 order-1 md:order-2">
                  <h2 className="text-2xl font-bold text-[#2E5B84] flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-[#2E5B84]" />
                    Have Web Application Questions? We're Happy to Answer
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
                </div>
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