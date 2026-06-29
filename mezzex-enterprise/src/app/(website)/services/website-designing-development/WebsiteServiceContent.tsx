"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ShoppingCart, 
  Code, 
  Layers, 
  Building, 
  Users, 
  Smartphone,
  ArrowRight,
  Workflow
} from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";
import TypewriterHeading from "@/components/common/TypewriterHeading";

// Custom SVG WordPress Icon to display as a native vector icon
const WordPressIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 50 50" fill="currentColor" {...props}>
    <path d="M3.7,25.2c0,8.3,4.8,15.5,11.8,18.8l-10-27.4C4.4,19.2,3.7,22.1,3.7,25.2L3.7,25.2z M38.8,24.1
		c0-2.6-0.9-4.4-1.7-5.8C36,16.6,35,15.1,35,13.4c0-1.9,1.5-3.7,3.5-3.7c0.1,0,0.2,0,0.3,0c-3.7-3.4-8.7-5.5-14.1-5.5
		c-7.3,0-13.8,3.8-17.5,9.4c0.5,0,1,0,1.3,0c2.2,0,5.6-0.3,5.6-0.3c1.1-0.1,1.3,1.6,0.1,1.7c0,0-1.1,0.1-2.4,0.2L19.5,38L24,24.3
		l-3.3-8.9c-1.1-0.1-2.2-0.2-2.2-0.2c-1.1-0.1-1-1.8,0.1-1.7c0,0,3.5,0.3,5.5,0.3c2.2,0,5.6-0.3,5.6-0.3c1.1-0.1,1.3,1.6,0.1,1.7
		c0,0-1.1,0.1-2.4,0.2l7.6,22.5l2.1-7C38.1,28,38.8,25.9,38.8,24.1L38.8,24.1z M25,27l-6.3,18.3c1.9,0.6,3.9,0.9,5.9,0.9
		c2.4,0,4.8-0.4,7-1.2c-0.1-0.1-0.1-0.2-0.1-0.3L25,27L25,27z M43,15.1c0.1,0.7,0.1,1.4,0.1,2.2c0,2.1-0.4,4.5-1.6,7.5l-6.4,18.5
		c6.2-3.6,10.4-10.4,10.4-18.1C45.6,21.5,44.7,18.1,43,15.1L43,15.1z M24.7,0.8c-13.5,0-24.4,11-24.4,24.4c0,13.5,11,24.4,24.4,24.4
		c13.5,0,24.4-11,24.4-24.4C49.1,11.7,38.1,0.8,24.7,0.8L24.7,0.8z M24.7,48.5C11.8,48.5,1.4,38,1.4,25.2
		c0-12.8,10.5-23.3,23.3-23.3C37.5,1.9,48,12.3,48,25.2C48,38,37.5,48.5,24.7,48.5L24.7,48.5z" />
  </svg>
);

// Custom SVG .NET network/dotted icon as shown in the screenshot
const DotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="4" cy="12" r="1.5" />
    <circle cx="8" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="16" cy="12" r="1.5" />
    <circle cx="20" cy="12" r="1.5" />
  </svg>
);

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

const serviceItems: ServiceItem[] = [
  {
    id: 1,
    title: "WordPress Development",
    desc: "If you are looking for an appealing and functional custom WordPress website, Mezzex is the answer. Our WordPress developers are experts in building custom themes and plugins to help you have a website that stands out from your competitors. The team of developers at Mezzex works hand in hand with expert WordPress website designers to help you achieve the best out of the avenues.",
    icon: WordPressIcon,
  },
  {
    id: 2,
    title: "E-commerce Development",
    desc: "Our experienced developers can help you build a custom e-commerce website that is easy to use and meets your specific needs. Sell products or services online with the help of our Shopify developers, who are experienced in all major platforms and can help you choose the right one for your business. Let us help you create the best and most functional e-commerce website that is easy to use.",
    icon: ShoppingCart,
  },
  {
    id: 3,
    title: ".NET Technology",
    desc: "We have a team of professional .NET developers who are experienced in creating scalable and reliable web applications. Handle the most complex business processes with the help of our .NET technology services. Our experienced developers use this consistent programming model for building applications that are robust, scalable, and high-performing.",
    icon: DotIcon,
  },
  {
    id: 4,
    title: "PHP Website Development",
    desc: "Our team of expert developers offer custom PHP development services to help you build dynamic and engaging websites that meet your business requirements and needs. Whether you are looking to develop dynamic web pages, e-commerce websites, content management systems, or web applications, our open-source PHP development services can be of help to your business goals.",
    icon: Code,
  },
  {
    id: 5,
    title: "CMS Website Development",
    desc: "Create a content-rich website that offers hassle-free managing and updating with our CMS development services. We have experienced developers handling all major platforms including WordPress, Joomla, and Shopify, among other CMS platforms. We use a user-friendly interface for our Content Management System website development services, making it easy to create, manage, and publish digital content.",
    icon: Layers,
  },
  {
    id: 6,
    title: "Joomla Website Development",
    desc: "We have experienced Joomla developers that can help you build a custom Joomla website that is user-friendly and engaging to your targeted audience. Our Joomla developers are experienced and able to create complex and feature-rich websites. Development, design, customisation, and maintenance of your websites using our Joomla Website Development services.",
    icon: Workflow,
  },
  {
    id: 7,
    title: "B2B Portal Development",
    desc: "We are experts in creating custom B2B portals that are effective in connecting businesses with their suppliers, partners, and customers. Our B2B portal development services are scalable, user-friendly, and secure. With Mezzex B2B portal development services, you can have a hassle-free process of buying products, accessing industry-specific information, and communicating with other businesses.",
    icon: Building,
  },
  {
    id: 8,
    title: "B2C Website Development",
    desc: "Create a website that is engaging and user-friendly to your customers and target audience with Mezzex B2C development services. Our expert web developers use innovative solutions to build websites that enable businesses to sell products or services directly to their customers. We combine technical skills, creativity, and marketing knowledge to come up with results that are both visually appealing and functional for our clients.",
    icon: Users,
  },
  {
    id: 9,
    title: "UI Design & Development",
    desc: "We offer User Interface design services to help you have digital interfaces that enable users to easily interact with software applications. Our web designers are experienced in creating an interface that is easy to use, visually appealing, and efficient. Have an interface that is intuitive, efficient, and enjoyable to use by letting our UI designers who work closely with UX designers ensure that the interface is well-designed and user-friendly.",
    icon: Smartphone,
  },
];

const technologies = {
  frontend: [
    { name: "Javascript", logo: "/images/js_tab_icon-technology.svg" },
    { name: "jQuery", logo: "/images/jQuery_tab_icon-technology.svg" },
    { name: "Type Script", logo: "/images/ts_tab_icon-technology.svg" },
    { name: "React JS", logo: "/images/react_tab_icon-technology.svg" },
    { name: "Vue JS", logo: "/images/Vue_JS_tab_icon-technology.svg" },
    { name: "Tailwind", logo: "/images/tailwind-css-2-technology.svg" },
    { name: "Bootstrap", logo: "/images/front-end-icon-5-technology.svg" },
    { name: "HTML5", logo: "/images/HTML5_tab_icon-technology.svg" },
    { name: "CSS 3", logo: "/images/css3_tab_icon-technology.svg" },
    { name: "Sass", logo: "/images/sass_tab_icon-technology.svg" },
    { name: "Less", logo: "/images/less_tab_icon-technology.svg" },
    { name: "Next Js", logo: "/images/next_js_tab_icon-technology.svg" }
  ],
  backend: [
    { name: "PHP", logo: "/images/php-technology.svg" },
    { name: "Laravel", logo: "/images/Laravel-technology.svg" },
    { name: "Node.Js", logo: "/images/Node_Js-technology.svg" },
    { name: "Codeignitor", logo: "/images/Codeignitor-technology.svg" },
    { name: "Express Js", logo: "/images/Express_Js-technology.svg" },
    { name: "Ejs", logo: "/images/Ejs-technology.svg" }
  ],
  database: [
    { name: "Firebase", logo: "/images/Firebase-technology.svg" },
    { name: "Redis", logo: "/images/Redis-technology.svg" },
    { name: "PostgreSQL", logo: "/images/PostreSQL-technology.svg" },
    { name: "MongoDB", logo: "/images/MongoDB-technology.svg" },
    { name: "MySQL", logo: "/images/MySQL-technology.svg" },
    { name: "Dynamo DB", logo: "/images/Dynamo_DB-technology.svg" },
    { name: "SQLite", logo: "/images/SQLite-technology.svg" },
    { name: "MySQLi", logo: "/images/MySQLi-technology.svg" }
  ],
  design: [
    { name: "Adobe XD", logo: "/images/Adobe_XD-technology.svg" },
    { name: "Photoshop", logo: "/images/Photoshop-technology.svg" },
    { name: "Illustrator", logo: "/images/Illustrator-technology.svg" },
    { name: "Sketch", logo: "/images/Sketch-technology.svg" },
    { name: "Figma", logo: "/images/Figma-technology.svg" },
    { name: "Invision", logo: "/images/Invision-technology.svg" },
    { name: "Zeplin", logo: "/images/Zeplin-technology.svg" }
  ]
};

export default function WebsiteServiceContent() {
  const [activeTab, setActiveTab] = useState<keyof typeof technologies>("frontend");

  const tabLabels: Record<keyof typeof technologies, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Data Base",
    design: "Design Tools",
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Website Designing & Development", active: true }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Website Designing & Development" />

      {/* 1. Centered Header & Intro Section matching screenshot style exactly */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Dynamic Typewriter Heading Component */}
            <div className="flex flex-col items-center justify-center">
              <TypewriterHeading 
                words={["Experienced", "Web Development Company In The UK"]}
                className="text-[#2f5a84] !text-3xl md:!text-4xl lg:!text-5xl font-extrabold tracking-tight leading-tight min-h-[56px] md:min-h-[64px] lg:min-h-[72px]"
              />
            </div>

            {/* Paragraph block directly under heading without card container */}
            <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto text-center">
              <p>
                Partner with a reliable web development company to meet the needs of your business with our high-quality web designing and development services. We have a team of experienced designers and developers that can handle any designing and developing of websites for businesses of all sizes and industries, from building a new website from scratch to improving an existing one.
              </p>
              <p>
                Our team of developers and designers have years of experience in website development and design catering to startups and enterprises by creating top-quality websites that score highly on aesthetics and functionality. The team is also knowledgeable about UI/UX to coordinate perfectly, making us the best web design company in Birmingham and the surrounding areas. We set the best quality standards and coding guidelines to help us create compatible, SEO-Friendly and highly secure customised websites.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Our Top Services Grid */}
      <section className="py-20 md:py-28 bg-[#eff2f5]/30">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Top Website Development Services In the United Kingdom
            </h2>
            <p className="text-lg text-slate-600">
              Mezzex is the leading website development company, providing a wide range of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {serviceItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="relative bg-white rounded-3xl p-8 pt-12 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 min-h-[350px] flex flex-col justify-between overflow-hidden group"
                >
                  {/* Clipped circular top-right corner badge */}
                  <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#2f5a84] text-white flex items-center justify-center shadow-md">
                    <div className="-translate-x-2 translate-y-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 pr-12 leading-snug">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Inline Contact Section matching .cshtml file exactly */}
          <div className="col-lg-8 mx-auto text-center max-w-3xl pt-24 pb-8 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900">Contact Us Today</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Are you ready to take your online presence to greater heights? Talk to our specialist today to learn more about our web development services and available options to help you get started on your project.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Talk to our Specialist <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Technologies Section */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technologies We Work With
            </h2>
            <p className="text-lg text-slate-600">
              As the best web development company, we use the latest technologies when it comes to frontend, backend, database and design tools. Feel free to learn more about our services.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.keys(technologies) as Array<keyof typeof technologies>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#2f5a84] text-white shadow-lg shadow-[#2f5a84]/20 scale-105 border border-[#2f5a84]"
                    : "bg-white border border-[#2f5a84] text-[#2f5a84] hover:bg-[#2f5a84]/5"
                }`}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="max-w-6xl mx-auto min-h-[250px] pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-16 justify-items-center"
              >
                {technologies[activeTab].map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="relative w-full max-w-[155px] h-[140px] flex flex-col items-center justify-end pb-5 rounded-2xl border border-blue-200/50 bg-[#eff2f5]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Floating white icon box */}
                    <div className="absolute -top-8 w-16 h-16 bg-white border border-slate-100 flex items-center justify-center rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300">
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-10 h-10 object-contain" 
                      />
                    </div>

                    <span className="text-slate-800 text-sm font-semibold text-center px-2">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. Trust Signals - Partners (Our Clients Slider) */}
      <div className="py-12 bg-white border-t border-slate-100">
        <PartnerSection />
      </div>
    </div>
  );
}
