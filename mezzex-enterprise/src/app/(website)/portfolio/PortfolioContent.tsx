// src/app/(website)/portfolio/page.tsx
'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TypewriterHeading from '@/components/common/TypewriterHeading';
import { PartnerSection } from '@/components/home/PartnerSection';
import LightboxModal, { LightboxMedia } from '../gallery/LightboxModal';

// ========== MASTER DATA ARRAY - Sab data yahan store hai ==========
const MASTER_PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Direct Care',
    category: 'dev',
    subcategory: null,
    image: 'https://mezzex.com/images/Direct%20Care.jpg',
    link: 'https://direct-care.co.uk/',
    isExternal: true,  // External link hai
  },
  {
    id: 2,
    title: 'Spacebox Storage',
    category: 'web',
    subcategory: null,
    image: 'https://mezzex.com/images/spaceboxstorage.jpg',
    link: 'https://www.spaceboxstorage.co.uk/',
    isExternal: true,
  },
  {
    id: 3,
    title: 'Flax Linen',
    category: 'web',
    subcategory: 'wp',
    image: 'https://mezzex.com/images/flax-linen.jpg',
    link: 'https://flaxlinenofficial.com/',
    isExternal: true,
  },
  {
    id: 4,
    title: 'Ultior Performance',
    category: 'dev',
    subcategory: null,
    image: 'https://mezzex.com/images/ultior.jpg',
    link: 'https://ultior.co.uk/',
    isExternal: true,
  },
  {
    id: 5,
    title: 'H & B Shack',
    category: 'web',
    subcategory: 'wp',
    image: 'https://mezzex.com/images/h-and-b-shack.jpg',
    link: 'https://mezzex.com/images/h-and-b-shack.jpg',
    isExternal: false,  // Local image - modal mein khulegi
  },
  {
    id: 6,
    title: 'Houszy',
    category: 'web',
    subcategory: 'wp',
    image: 'https://mezzex.com/images/Houszy.jpg',
    link: 'https://houszy.co.uk/',
    isExternal: true,
  },
  {
    id: 7,
    title: 'Incoshop',
    category: 'web',
    subcategory: 'wp',
    image: 'https://mezzex.com/images/incoshop-project.jpg',
    link: 'https://mezzex.com/images/incoshop-project.jpg',
    isExternal: false,  // Local image - modal mein khulegi
  },
  {
    id: 8,
    title: 'Pro Mortgages',
    category: 'web',
    subcategory: null,
    image: 'https://mezzex.com/images/pro-mortgagess.jpg',
    link: 'https://promortgages.co.uk/',
    isExternal: true,
  },
];

// Filter categories
const FILTER_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Design' },
  { id: 'dev', label: 'Development' },
  { id: 'wp', label: 'WordPress' },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function PortfolioPage() {
  // State
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ========== FILTER LOGIC - Master array se filter ==========
  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      return MASTER_PORTFOLIO_ITEMS;
    }
    
    return MASTER_PORTFOLIO_ITEMS.filter((item) => {
      // Check main category
      if (item.category === activeFilter) return true;
      // Check subcategory
      if (item.subcategory === activeFilter) return true;
      return false;
    });
  }, [activeFilter]);

  // ========== LIGHTBOX MEDIA - Sirf local images jo modal mein khulengi ==========
  const lightboxMediaItems = useMemo<LightboxMedia[]>(() => {
    return MASTER_PORTFOLIO_ITEMS
      .filter((item) => item.isExternal === false)
      .map((item) => ({
        type: 'image' as const,
        src: item.link,
        alt: item.title,
      }));
  }, []);

  // ========== HANDLE ITEM CLICK ==========
  const handleItemClick = useCallback((item: typeof MASTER_PORTFOLIO_ITEMS[0]) => {
    if (!item.isExternal) {
      // Local image - Modal mein open karo
      const imageIndex = lightboxMediaItems.findIndex((m) => m.src === item.link);
      if (imageIndex !== -1) {
        setCurrentImageIndex(imageIndex);
      }
    } else {
      // External link - New tab mein open karo
      if (item.link) {
        window.open(item.link, '_blank', 'noopener,noreferrer');
      }
    }
  }, [lightboxMediaItems]);

  // Handle image error
  const handleImageError = useCallback((id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  }, []);

  // Reset filter function
  const resetFilter = useCallback(() => {
    setActiveFilter('all');
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div className="portfolio-page-wrapper">
      {/* E-Commerce Service Section */}
      <section className="py-4 md:py-6 bg-white">
        <div className="portfolio-container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TypewriterHeading
                words={['Portfolio Websites', 'With Mezzex', 'Grow Your Business']}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3855] mb-6"
              />
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Mezzex is the leading IT company offering elegant digital marketing solutions for brands and businesses across the globe. 
                We have experienced developers and creative designers, dedicated to offering the best and most affordable solutions in 
                web development, mobile app development, e-commerce services and logo designing for various businesses and organisations.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                We also provide on-demand warehouse management services such as inventory management, we do a transparent business 
                when working with you to help you grow your brand. Mezzex has collected numerous valuable testimonials, many projects 
                completed and satisfied clients giving us positive feedback. Let our rich portfolio do the talking.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl floating-animation">
                <Image
                  src="https://mezzex.com/images/1st.jpg"
                  alt="Mezzex Portfolio Hero"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Main Gallery */}
      <section className="py-8 md:py-20 bg-black" id="portfolio">
        <div className="portfolio-container mx-auto px-4 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f5a84] mb-4">Portfolio</h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              We design and build extraordinary experiences that captivate audiences and promote ongoing interaction.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {FILTER_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-[#2f5a84] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Show current filter info */}
          <div className="text-center mb-4 text-sm text-gray-500">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} for <span className="font-semibold text-gray-700">{activeFilter === 'all' ? 'All Categories' : activeFilter === 'web' ? 'Web Design' : activeFilter === 'dev' ? 'Development' : 'WordPress'}</span>
          </div>

          {/* Portfolio Grid */}
          {filteredItems.length > 0 ? (
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${activeFilter}-${index}`}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleItemClick(item)}
                  className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                    {!imageErrors[item.id] ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400 text-sm">Image not found</span>
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Title on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/80 mt-1">
                        {item.category === 'web' ? 'Web Design' : 
                         item.category === 'dev' ? 'Development' : 
                         item.category === 'wp' ? 'WordPress' : 'Portfolio'}
                      </p>
                    </div>

                    {/* ========== VIEW ICON - Top Right corner for ALL images ========== */}
                    <div className="absolute top-3 right-3 bg-black/60 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {item.isExternal ? (
                        // External link icon
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      ) : (
                        // View/Image icon for modal
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // No items found message
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No portfolio items found in this category.</p>
              <button
                onClick={resetFilter}
                className="mt-4 px-6 py-2 bg-[#2f5a84] text-white rounded-lg hover:bg-[#1a3855] transition-colors"
              >
                View All Items
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#1a3855] to-[#2f5a84] text-white">
        <div className="portfolio-container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let Mezzex rich portfolio do the talking
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10">
              Our previous projects can show how much we are dedicated to help you engage with your targeted audience
            </p>
            <div className="relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://mezzex.com/images/4%20website%20Banner.png"
                alt="Mezzex Website Design Portfolio"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Portfolio Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="portfolio-container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Upgrade your Home with hassle-free and seamless online shopping
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Our client is the United Kingdom&apos;s leading platform offering kitchen utensils at affordable prices
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://mezzex.com/images/houszy-banner-port%20A.png"
                alt="Houszy Real Estate Portfolio Project"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <div className='my-2'>

      <PartnerSection />
      </div>

      {/* Styles */}
      <style jsx>{`
        .portfolio-page-wrapper {
          width: 100%;
          overflow-x: hidden;
        }
        
        .portfolio-container {
          width: 100%;
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .portfolio-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      {/* Lightbox Modal */}
      {currentImageIndex !== null && lightboxMediaItems.length > 0 && (
        <LightboxModal
          mediaItems={lightboxMediaItems}
          currentIndex={currentImageIndex}
          onClose={() => setCurrentImageIndex(null)}
          onPrev={() =>
            setCurrentImageIndex((prev) =>
              prev === 0 ? lightboxMediaItems.length - 1 : (prev ?? 0) - 1
            )
          }
          onNext={() =>
            setCurrentImageIndex((prev) =>
              prev === lightboxMediaItems.length - 1 ? 0 : (prev ?? 0) + 1
            )
          }
        />
      )}
    </div>
  );
}