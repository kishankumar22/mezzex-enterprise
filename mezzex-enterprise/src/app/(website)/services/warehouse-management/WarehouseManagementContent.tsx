"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PartnerSection } from "@/components/home/PartnerSection";
import BreadcrumbSetter from "@/components/common/BreadcrumbSetter";
import TypewriterHeading from "@/components/common/TypewriterHeading";

interface ServiceItem {
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  {
    title: "Order Fulfilment & Shipping Solutions",
    desc: "With Mezzex, you can simplify the fulfilment process for orders, thus delivering products to your customers with ease and promptness. All through the entire fulfilment process, monitoring inventory to shipping and packing services guarantees a stress-free process. Our team uses advanced technology to manage our stock, which minimises your risks of having stockouts and backorders while offering optimal product availability for your customers.",
  },
  {
    title: "Efficient E-commerce Warehouse Fulfilment",
    desc: "We understand that e-commerce warehouse fulfilment poses unique challenges, especially when businesses are growing and speeding ahead in the digital marketplace. We effectively manage massive and ever-changing inventory demands for large-scale e-commerce warehouses, fulfilling their peak season needs without compromising on quality or speed. The optimised fulfilment services help maintain a smooth workflow so that each order is processed correctly, packed, and shipped to customers for higher satisfaction.",
  },
  {
    title: "Inventory Management",
    desc: "We take pride in the effective management of inventory in your warehouse at the core of our service. Our team applies real-time tracking solutions for you to keep you up-to-date about your stock levels across top platforms such as Amazon and eBay. Our inventory planning and replenishment services have been developed with great attention to detail to keep your warehouse operations agile during the scaling-up or adjustment periods to seasonal demands.",
  },
  {
    title: "Full-Service 3PL Warehouse Services",
    desc: "With 3PL warehousing services, businesses have flexibility and efficiencies in outsourced warehousing and logistics to a trusted partner. From controlling inventory to end-to-end fulfilment, we professionally make sure that all your warehousing needs are managed so that you can focus on core business goals. With access to real-time data and support for just-in-time (JIT) inventory strategies, we help you become an agile supply chain.",
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

export default function WarehouseManagementContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Warehouse Management", active: true }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Warehouse Management" />

      {/* 1. Intro Section: Tight Padding and Floating Graphic */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 space-y-5 text-left"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2f5a84]/10 text-[#2f5a84]">
                Logistics & Storage
              </span>
              
              <div className="flex flex-col items-start">
                <TypewriterHeading 
                  words={["Warehouse Management", "With Mezzex"]}
                  className="text-[#2f5a84] !text-3xl md:!text-4xl lg:!text-5xl font-extrabold tracking-tight leading-tight min-h-[56px] md:min-h-[64px]"
                />
              </div>

              <p className="text-slate-850 font-bold text-sm sm:text-base leading-relaxed">
                Improve Your Business with Our Comprehensive Warehouse Management Services
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Warehouse management solutions from Mezzex can enhance logistics to provide efficient order fulfilment and easy warehouse inventory management for e-commerce and retail businesses. Our services include stock management across multiple platforms and reliable 3PL warehousing services.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
                >
                  Discuss Your Logistics <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-4 flex justify-center"
            >
              <div className="relative max-w-[280px] w-full aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-xl flex items-center justify-center p-6">
                <img 
                  src="/images/wharehouse-managment.png" 
                  alt="Warehouse Management Graphic" 
                  className="w-full h-auto object-contain animate-float"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Unified Services Section (Optimized Spacing, Solid Brand-Blue Top Borders) */}
      <section className="py-12 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
          
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Our Services</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Outsource your warehouse and fulfillment operations to Mezzex for streamlined supply chain management.
            </p>
          </div>

          {/* 2x2 Services Grid with solid blue top borders */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative bg-white border border-slate-100/80 shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl p-8 pt-10 space-y-4 overflow-hidden text-left"
              >
                {/* Solid brand blue top border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2f5a84]"></div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Helping Text Box with solid blue top border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-slate-100/80 rounded-3xl p-8 md:p-10 shadow-md max-w-4xl mx-auto text-center space-y-6 overflow-hidden"
          >
            {/* Solid brand blue top border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2f5a84]"></div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With Mezzex as your partner, you will certainly find someone dedicated to making your business more efficient at reducing costs and to the need to make your customers more valuable. Reach out to us today to discover how Mezzex's warehouse management solutions can transform your operations to help drive growth in a competitive marketplace.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md"
              >
                Connect With Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Trust Signals - Partners (Our Clients Slider) */}
      <div className="py-12 bg-white">
        <PartnerSection />
      </div>
    </div>
  );
}
