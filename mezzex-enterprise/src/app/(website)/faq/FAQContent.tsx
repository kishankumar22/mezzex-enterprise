'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterHeading from '@/components/common/TypewriterHeading';
import { PartnerSection } from '@/components/home/PartnerSection';

// FAQ items
const faqItems = [
  {
    question: "Is there any difference between SEO and SEM?",
    answer: `Search Engine Marketing(SEM) is the umbrella term for marketing on search engines such as Google and Bing, and holds within both SEO and PPC advertising. On the other hand, Search Engine Optimisation (SEO) is generally the process of marketing for organic (free) search results.`,
  },
  {
    question: "What is the meaning of digital marketing?",
    answer: `Digital marketing is any marketing solution that uses internet‑connected technologies and online platforms to target a specific audience. Digital marketing plays an important role in the marketing mix for any industry, especially in the UK, where there are over 44 million daily internet users.`,
  },
  {
    question: "When is my site/app done?",
    answer: `Your site/app is officially "done" when we launch. In reality, your site is never fully complete, as it is really a process and should always be treated as such. We accept feedback for 1 week after launch and will fix what is in the project scope, and will provide estimates for updates that are not in scope.`,
  },
  {
    question: "What are your hosting suppliers for the websites?",
    answer: `Basically, Mezzex uses three different hosting suppliers and our professionals will advise the best one accordingly based on the website's size, the required functionality and the traffic expected.`,
  },
  {
    question: "Is it possible to edit the content of my website?",
    answer: `The answer is Yes, and most of it can be edited. Every website created by Mezzex features a CMS (content management system), meaning the text on the pages can be edited as often as you like and things such as special offers, pictures, prices, and text can be changed. Our professionals are able to offer full training on the use of the CMS and the offer included in the website package.`,
  },
  {
    question: "How long will it take to create my website/app?",
    answer: `The timeline varies depending on the project and scope. The best way to find this out is simply to talk to us!`,
  },
  {
    question: "What is the meaning of social media marketing?",
    answer: `Social Media Marketing (SMM) refers to the promotion of businesses on any of the different types of online channels where users create and share content and participate in conversations, whether in public or private communities. Some of the common social media online channels include Facebook, Twitter, LinkedIn, Instagram, YouTube and Pinterest.`,
  },
  {
    question: "As a social media marketing agency, what do you do?",
    answer: `As a leading social media marketing agency in the UK, Mezzex devises a cohesive social media strategy and effectively manages and coordinates clients' social media channels by promoting their brand and building their social media channels to drive an engaged and influential community on their behalf.`,
  },
  {
    question: "Does marketing strategy have elements?",
    answer: `Yes - marketing strategy features a range of important, these include your business's target audience, goals and objectives, and the tactics you will use to achieve your goals and actively market to your target audience. For an effective marketing strategy, these three elements are very important.`,
  },
  {
    question: "How is a marketing strategy important to my business?",
    answer: `Marketing strategy is very important for your business because it provides you with a defined plan to stick to and something to measure against your targeted results. This will help you analyse your plan in place to meet a certain objective and make sure it fits that objective.`,
  },
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="flex justify-center mt-2">
        <TypewriterHeading
          words={["FAQ – Mezzex"]}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a3855]"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto py-2 px-4 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <section className="text-center mb-2 pt-2">
        
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Answering Our Most Frequently Asked Questions About IT And Digital Marketing Solutions
          </p>
        </section>

        {/* Accordion */}
        <div className="max-w-7xl mx-auto space-y-3">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800 pr-4">{item.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-[#2f5a84] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 py-4 text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Partner Section */}
      <div className="my-2">
        <PartnerSection />
      </div>
    </section>
  );
}