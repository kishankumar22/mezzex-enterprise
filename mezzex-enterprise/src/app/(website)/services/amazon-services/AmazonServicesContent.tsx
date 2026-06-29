"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Package, DollarSign, Headset, Shield, FileText, CheckCircle2 } from "lucide-react";
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

export default function AmazonServicesContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Amazon Services", active: true }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans overflow-x-hidden">
      <BreadcrumbSetter items={breadcrumbs} title="Amazon Services" />

      {/* Main Content Section - Expanded to max-w-6xl for full-width layout */}
      <section className="py-12 md:py-20 bg-[#f8fbff]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
          
          {/* Centered Heading & Subtitle */}
          <div className="text-center pb-4 max-w-3xl mx-auto space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#2e5b84] tracking-wider uppercase leading-tight">
              Amazon Services Integration
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Connect your Amazon seller account with Mezzex for seamless order and shipping management. Secure, compliant, and built for sellers.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            {/* Card 1: App Description (Col 12) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg overflow-hidden text-left space-y-5 md:col-span-12 border-l-4 md:border-l-[5px] border-[#2f5a84]"
            >
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-[#2f5a84]" />
                <h3 className="text-lg md:text-xl font-bold text-[#2e5b84]">App Description</h3>
              </div>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our Amazon Services integration tool is designed to connect Amazon seller accounts seamlessly for <strong>order and shipping management</strong>. This powerful tool helps sellers streamline their operations by:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm font-semibold pt-2">
                {[
                  "Automatically syncing orders from Amazon",
                  "Managing multi-channel inventory rules",
                  "Real-time shipment tracking outputs",
                  "Comprehensive analytics and reports",
                  "Reducing manual data entry and human errors",
                  "Centralizing order fulfillment operations"
                ].map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 hover:text-[#2f5a84] hover:translate-x-1.5 transition-all duration-200 cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: Pricing Information (Col 6) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg overflow-hidden text-left space-y-5 md:col-span-6 flex flex-col justify-between border-l-4 md:border-l-[5px] border-[#2f5a84]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-[#2f5a84]" />
                  <h3 className="text-lg md:text-xl font-bold text-[#2e5b84]">Pricing Information</h3>
                </div>

                <div className="text-center py-2">
                  <span className="inline-block bg-green-600 text-white font-extrabold px-6 py-2.5 rounded-xl text-base sm:text-lg shadow-sm">
                    FREE for All Sellers
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-center">
                  <span className="bg-yellow-100 text-yellow-850 font-bold px-2 py-0.5 rounded text-xs mr-1">
                    No account connection fees.
                  </span>
                  Our service is completely free for all Amazon sellers. There are no hidden fees, no subscription costs, and no transaction charges.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Support & Contact (Col 6) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg overflow-hidden text-left space-y-5 md:col-span-6 flex flex-col justify-between border-l-4 md:border-l-[5px] border-[#2f5a84]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Headset className="w-6 h-6 text-[#2f5a84]" />
                  <h3 className="text-lg md:text-xl font-bold text-[#2e5b84]">Support & Contact</h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our dedicated support team is here to help you with account setup, troubleshooting, or general inquiries. We're just an email away.
                </p>

                <div className="text-xs sm:text-sm text-slate-700 space-y-1 pt-1">
                  <p><strong>Email:</strong> <a href="mailto:support@mezzex.com" className="text-[#2f5a84] font-bold hover:underline">support@mezzex.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+441216616357" className="text-[#2f5a84] font-bold hover:underline">+44 121-6616357</a></p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Security Summary (Col 12) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg overflow-hidden text-left space-y-5 md:col-span-12 border-l-4 md:border-l-[5px] border-[#2f5a84]"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#2f5a84]" />
                <h3 className="text-lg md:text-xl font-bold text-[#2e5b84]">Security Summary</h3>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Your data security is our top priority. We implement industry-standard security measures to protect your Amazon seller account data and ensure complete confidentiality.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {[
                    "AES-256 Encryption", "Secure Data Storage", "Limited Access Control",
                    "Regular Backups", "SSL/TLS Protection"
                  ].map((badge, idx) => (
                    <span key={idx} className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1 shadow-sm">
                      <Shield className="w-3.5 h-3.5" /> {badge}
                    </span>
                  ))}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-xs sm:text-sm pt-2">
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Encryption:</strong> All data in transit is encrypted using AES-256</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Access Control:</strong> Authorized multi-factor personnel access only</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data Storage:</strong> Secure cloud infra with redundant backups</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Compliance:</strong> Fully compliant with Amazon seller guidelines</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 5: Privacy & Terms Reference (Col 12) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg overflow-hidden text-left space-y-6 md:col-span-12 border-l-4 md:border-l-[5px] border-[#2f5a84]"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#2f5a84]" />
                <h3 className="text-lg md:text-xl font-bold text-[#2e5b84]">Privacy & Terms</h3>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
                Please review our complete policies to understand how we handle your data and the terms of service for using our Amazon integration tool.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/privacy"
                  className="bg-[#2E5B84] hover:bg-[#0B5ED7] text-white px-8 py-3 rounded-full font-bold transition-all shadow-sm text-center"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="bg-[#2E5B84] hover:bg-[#0B5ED7] text-white px-8 py-3 rounded-full font-bold transition-all shadow-sm text-center"
                >
                  Terms of Service
                </Link>
              </div>

              <div className="bg-[#e7f3ff] p-5 rounded-2xl border border-[#b8dcff] text-slate-800">
                <p className="text-xs sm:text-sm leading-relaxed text-center font-medium">
                  <strong>Important:</strong> By connecting your Amazon seller account, you authorize Mezzex to access your account data for order and shipping management purposes. You can revoke this access at any time through your Amazon Seller Central account settings.
                </p>
              </div>
            </motion.div>

            {/* Card 6: Contact Box (Col 12, styled as centered box without left-border matching CSHTML) */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-slate-50 border border-slate-100/85 rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden text-center space-y-6 md:col-span-12"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#2e5b84]">Ready to Get Started?</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Connect your Amazon seller account today and experience seamless order and shipping management. Our team is here to support you every step of the way.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2f5a84] hover:bg-[#1a3855] text-white px-10 py-4 rounded-full font-bold transition-all shadow-md hover:scale-105"
                >
                  Contact Us <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              </div>

              <div className="text-slate-500 text-xs sm:text-sm font-semibold space-y-1">
                <p>Email: <a href="mailto:support@mezzex.com" className="text-[#2f5a84] hover:underline">support@mezzex.com</a></p>
                <p>Phone: <a href="tel:+441216616357" className="text-[#2f5a84] hover:underline">+44 121-6616357</a></p>
              </div>
            </motion.div>

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
