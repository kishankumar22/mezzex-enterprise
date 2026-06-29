"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";
import TypewriterHeading from "@/components/common/TypewriterHeading";

interface FaqItem {
  q: string;
  a: string | React.ReactNode;
}

const ecommerceFaqs: FaqItem[] = [
  {
    q: "What does an ecommerce consultant do?",
    a: "An ecommerce consultant helps businesses improve how they sell products online. Their role is to analyze an online store's performance, identify problems and opportunities, and recommend strategies to increase sales, efficiency, and growth.",
  },
  {
    q: "What are ecommerce fulfillment services?",
    a: (
      <div className="space-y-3">
        <p>
          Ecommerce fulfillment services are third-party services that store inventory, process orders, pack products, and ship them to customers on behalf of an online business. Instead of handling logistics yourself, a fulfillment provider manages the operational side after a customer places an order.
        </p>
        <p className="font-bold text-slate-800">The typical fulfillment process includes:</p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
          <li><strong>Inventory storage</strong> – your products are stored in a warehouse.</li>
          <li><strong>Order processing</strong> – orders from your online store are received automatically.</li>
          <li><strong>Picking & packing</strong> – items are selected and packaged.</li>
          <li><strong>Shipping</strong> – orders are shipped to customers.</li>
          <li><strong>Returns handling</strong> – some providers also manage returns and exchanges.</li>
        </ol>
      </div>
    ),
  },
  {
    q: "How do ecommerce shipping solutions improve delivery?",
    a: "Ecommerce shipping solutions improve delivery by making the process of getting orders from a seller to a customer faster, more accurate, and more cost-efficient. These solutions typically combine shipping software, carrier integrations, automation, and tracking tools to streamline fulfillment.",
  },
  {
    q: "What is included in full service ecommerce management?",
    a: (
      <div className="space-y-3">
        <p>
          Full-service ecommerce management is an end-to-end service where a team manages most or all aspects of running and growing an online store on behalf of a business.
        </p>
        <p className="font-bold text-slate-800">What's typically included:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li><strong>Store setup and maintenance</strong> – building, configuring, updating, and managing the ecommerce website.</li>
          <li><strong>Product catalog management</strong> – adding products, organizing categories, writing descriptions, pricing, and updating inventory.</li>
          <li><strong>Website design and UX</strong> – improving navigation, mobile experience, and checkout flow.</li>
          <li><strong>Order and fulfillment coordination</strong> – managing order processing, shipping workflows, and customer delivery operations.</li>
          <li><strong>Digital marketing</strong> – handling SEO, paid advertising, email campaigns, social media, and customer acquisition.</li>
          <li><strong>Conversion rate optimization (CRO)</strong> – testing and improving pages to increase purchases.</li>
          <li><strong>Customer support management</strong> – responding to inquiries, returns, and service requests.</li>
          <li><strong>Analytics and reporting</strong> – tracking sales, traffic, customer behavior, and business performance.</li>
          <li><strong>Platform and technical management</strong> – managing integrations, updates, performance, and security.</li>
          <li><strong>Retention and growth strategy</strong> – improving repeat purchases, customer lifetime value, and scaling plans.</li>
        </ul>
      </div>
    ),
  },
  {
    q: "How much do ecommerce services cost in the UK?",
    a: (
      <div className="space-y-4">
        <p>
          The cost of ecommerce services in the UK varies based on what you're outsourcing—store setup, marketing, management, fulfillment, or consulting.
        </p>
        <p className="font-bold text-slate-800">Typical UK price ranges:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left border-collapse border border-slate-100 rounded-lg">
            <thead>
              <tr className="bg-[#2f5a84] text-white">
                <th className="p-3 border border-slate-100">Service</th>
                <th className="p-3 border border-slate-100">Typical Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-100 font-bold">Ecommerce consultant</td>
                <td className="p-3 border border-slate-100">£500–£2,000+ per day or project-based.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-100 font-bold">Ecommerce website setup</td>
                <td className="p-3 border border-slate-100">£2,000–£20,000+ one-time depending on complexity.</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-100 font-bold">Ecommerce agency (ongoing)</td>
                <td className="p-3 border border-slate-100">£2,000–£8,000/month for specialist services.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-100 font-bold">Ecommerce fulfillment (3PL)</td>
                <td className="p-3 border border-slate-100">Often includes storage, pick/pack, shipping, and account fees.</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-100 font-bold">Paid marketing management</td>
                <td className="p-3 border border-slate-100">From around £950+/month, excluding ad spend.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-100 font-bold">Ecommerce operations software</td>
                <td className="p-3 border border-slate-100">Around £159–£629+/month depending on order volume.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
];

interface ProcessBox {
  title: string;
  desc: string;
}

const processes: ProcessBox[] = [
  {
    title: "Product Listing",
    desc: "Mezzex offers product listing services that feature detailed descriptions and high-quality pictures that reflect the core of your brand to help you showcase your products in the best possible light.",
  },
  {
    title: "Product Costing",
    desc: "We are experienced in offering effective solutions to help you determine the optimal pricing strategy for your products, and our product costing process takes into account factors such as demand, competition, and profit margins.",
  },
  {
    title: "New Product Research",
    desc: "We help you stay updated with the product curve and take advantage of the new opportunities. Our new product research services can help your business keep up with the latest trends and market insights.",
  },
  {
    title: "Inventory Management",
    desc: "For effective inventory management services that help you track the inventory levels and optimise the supply chain, Mezzex is your go-to platform, offering solutions to make your business minimise waste and maximise efficiency.",
  },
  {
    title: "Order Management",
    desc: "Mezzex provides order management services, handling all aspects of the order fulfilment process including payment processing to shipping and delivery.",
  },
  {
    title: "Customer Service",
    desc: "Mezzex is equipped and experienced to offer prompt and professional customer services, work with us to ensure that your customers keep on coming back for more and are having a positive experience.",
  },
  {
    title: "Multiple Support",
    desc: "We provide multiple support channels for online stores to help them access all the assistance they require whenever they require it. From email and phone, to live chat, Mezzex offers all types of multiple channels for support.",
  },
  {
    title: "Multiple Suppliers",
    desc: "At Mezzex, we are in partnership with some of the best and most reputable suppliers around the UK and abroad, allowing online stores to access different types of high-quality products and services to improve your e-commerce offering.",
  },
];

interface TechItem {
  name: string;
  role: string;
  img: string;
}

const techs: TechItem[] = [
  { name: "Canva", role: "Design", img: "/images/canva.png" },
  { name: "Photoshop", role: "Design", img: "/images/ps.png" },
  { name: "Google Docs", role: "Project Management", img: "/images/g-doc.png" },
  { name: "Clickup", role: "Project Management", img: "/images/click-up.png" },
  { name: "Mixpanel", role: "Analytics", img: "/images/mixepanal.png" },
  { name: "Excel", role: "Edit", img: "/images/excel.png" },
  { name: "Google Analytics", role: "Analytics", img: "/images/googleanalytics.png" },
  { name: "Illustrator", role: "Design", img: "/images/illustrater.png" },
];

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
                  <div className="p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/50 bg-white">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function EcommerceServicesContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "E-commerce Services", active: true }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="E-commerce Services" />

      {/* Structured Sections Container */}
      <section className="py-12 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-16">

          {/* Block 1: Introduction Row (Col 8 / Col 4) */}
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
              <div className="md:col-span-8 space-y-6">
                
                <div className="flex flex-col items-start">
                  <TypewriterHeading 
                    words={["E-commerce Services", "With Mezzex"]}
                    className="text-[#2f5a84] !text-3xl md:!text-4xl lg:!text-5xl font-extrabold tracking-tight leading-tight min-h-[56px] md:min-h-[64px]"
                  />
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Mezzex understands that handling an online store on e-commerce giants such as Amazon and eBay can be challenging, especially without the right expertise and approach. As the leading e-commerce service provider in the UK, Mezzex is here to position your online store to the top of e-commerce giants. We specialise in offering complete e-commerce services to cater for your business needs. From product management service and Amazon seller account creation & management to stock management, and order management service, our team of professionals is equipped and experienced to assist small startups and large corporations.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Whether you are looking for product listing services or inventory management, our range of e-commerce services has it all.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <img 
                  src="/images/ecommerce-service.jpg" 
                  alt="E-Commerce Services Overview" 
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Block 2: Our Process Title & Process Cards Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Our Process</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Manage your online business without any hassle with our streamlined process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processes.map((proc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="relative bg-white rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg border border-slate-100/80 overflow-hidden text-left space-y-3"
                >
                  {/* Top gradient border */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
                  
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{proc.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{proc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Block 3: This Is Why We Are The Best (Col 4 Image / Col 8 text) */}
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
              <div className="md:col-span-4 flex justify-center order-last md:order-first">
                <img 
                  src="/images/simply-make.jpg" 
                  alt="Simply Make Best" 
                  className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="md:col-span-8 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">This Is Why We Are The Best</h2>
                
                <div className="space-y-4">
                  <div className="hover:translate-x-1 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">B2B E-commerce Platforms</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      We have user-friendly B2B e-commerce platforms that facilitate business-to-business (B2B) transactions on digital marketplaces.
                    </p>
                  </div>
                  <div className="hover:translate-x-1 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">B2C E-commerce Platforms</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Sell your products or services directly to individual consumers with our business-to-customer platforms that offer convenience.
                    </p>
                  </div>
                  <div className="hover:translate-x-1 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">C2C E-commerce Stores</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Buy and sell products and services to each other with our consumer-to-consumer e-commerce (C2C) stores on online marketplaces.
                    </p>
                  </div>
                  <div className="hover:translate-x-1 transition-transform duration-200">
                    <h3 className="text-base font-extrabold text-slate-800">C2B E-commerce Stores</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Our C2B (Consumer-to-Business) e-commerce stores make it easy for businesses to buy goods or services directly from consumers.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Block 4: Technology we Use Grid & CTA Paragraph */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Technology we Use</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
              {techs.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center space-y-3"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-3.5 shadow-sm hover:shadow-md transition-shadow">
                    <img src={tech.img} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">{tech.name}</h4>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">{tech.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Helping text Box */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm max-w-4xl mx-auto text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Helping our clients succeed in their field of e-commerce industry is our passion at Mezzex, launch a new product, expand your customer base, or simply streamline your operations with our e-commerce services. Talk to our team today at <strong className="text-[#2e5b84]">+44 121-6616357</strong> or email us at <strong className="text-[#2e5b84]">info@mezzex.com</strong> to learn more about how we can help you grow your online store business.
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

          {/* Block 5: FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100/80 overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF9C0A] to-[#2f5a84]"></div>
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Everything you need to know about our ecommerce services.
                </p>
              </div>
              <FaqAccordion items={ecommerceFaqs} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Trust Signals - Partners (Our Clients Slider) */}
      <div className="py-12 bg-white">
        <PartnerSection />
      </div>
    </div>
  );
}
