'use client';

import { motion } from 'framer-motion';
import { Palette, Share2, PenTool, ShoppingBag, Target, ShoppingCart, Tag, Box } from 'lucide-react';

const otherServices = [
  { icon: Palette, title: 'Logo Design' },
  { icon: Share2, title: 'Online Marketing' },
  { icon: PenTool, title: 'Graphic Design' },
  { icon: ShoppingBag, title: 'Ecommerce Business' },
  { icon: Target, title: 'Lead Generation' },
  { icon: ShoppingCart, title: 'Amazon Seller Account' },
  { icon: Tag, title: 'Ebay Seller Account' },
  { icon: Box, title: 'Other Seller Account' },
];

export function OtherServices() {
  return (
    <section className="py-12 md:py-16 bg-[#0a1128] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4BEAFF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2f5a84]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Other Services</h2>
          <p className="text-gray-400">
            Mezzex believes in creating long-term relationships with clients and capable partners. Based on quality, consistency and reliability, client satisfaction is our driving force.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {otherServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#4BEAFF]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#4BEAFF]" />
                </div>
                <h3 className="text-white font-semibold">{service.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
