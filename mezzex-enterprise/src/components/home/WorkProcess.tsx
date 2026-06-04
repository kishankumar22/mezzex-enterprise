'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const tabs = [
  {
    id: 'research',
    title: '1. Research',
    heading: 'Research And Strategy',
    desc: 'Besides building websites and applications, Mezzex designs digitally anchored solutions from extensive data-driven research and strategic planning. The foundation of any successful project lies in a deep understanding of your particular needs, your target audience, and the competitive environment.',
    points: ['Understanding Your Goals', 'Understand Your Audience', 'Study the Competition', 'Insights into Market Trends', 'Building a Winning Strategy'],
    image: 'https://mezzex.com/assets/img/process/tab-process-1.jpg',
  },
  {
    id: 'design',
    title: '2. Designing',
    heading: 'Our Design Team',
    desc: 'Our design team translates strategic insights into effective, friendly designs visually. From the outset, we strive to build intuitive interfaces that can enhance user experience and interaction.',
    points: ['Conceptual Design', 'User Experience (UX) Design', 'Visual Design', 'Feedback and Iteration'],
    image: 'https://mezzex.com/assets/img/process/tab-process-2.jpg',
  },
  {
    id: 'build',
    title: '3. Building',
    heading: 'Development & Testing',
    desc: 'Our development team brings designs to life through clean, efficient code and rigorous testing of functionality and performance.',
    points: ['Front End Development', 'Back-End Development', 'Quality Assurance', 'Performance Optimisation'],
    image: 'https://mezzex.com/assets/img/process/tab-process-3.jpg',
  },
  {
    id: 'delivery',
    title: '4. Delivery',
    heading: 'Finally, We Deliver Website',
    desc: 'Finally, hand over a fully functional, high-quality digital solution that fulfils the needs of your business and meets all expectations.',
    points: ['Launch Preparation', 'Training and Support', 'Post-Launch Analysis', 'Continuous Improvement'],
    image: 'https://mezzex.com/assets/img/process/tab-process-4.jpg',
  },
];

export function WorkProcess() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-8">
          <h6 className="text-[#2f5a84] font-semibold tracking-wider uppercase mb-2">How We Work</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Work Process</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-sm border',
                activeTab === tab.id
                  ? 'bg-[#2f5a84] text-white border-[#2f5a84] shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-200'
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2f5a84] mb-4">{activeContent.heading}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{activeContent.desc}</p>
                <ul className="space-y-4">
                  {activeContent.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#2f5a84] mr-3 shrink-0" />
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={activeContent.image}
                  alt={activeContent.heading}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
