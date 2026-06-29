"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const totalScrollable = scrollHeight - clientHeight;

      // Show button only if the page has significant scrolling and the user has scrolled down a bit (more than 100px)
      if (totalScrollable > 700 && scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // If user has scrolled past 50% of total scrollable height, arrow points UP
      // Otherwise, arrow points DOWN (scroll to bottom)
      if (scrollY > totalScrollable / 2) {
        setIsScrollUp(true);
      } else {
        setIsScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (isScrollUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Top scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2f5a84] via-[#4BEAFF] to-[#FF9C0A] z-[9999] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: "#1a3855" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollClick}
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#2f5a84] text-white shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-[#4BEAFF] flex items-center justify-center cursor-pointer group"
            aria-label={isScrollUp ? "Scroll to top" : "Scroll to bottom"}
          >
            <motion.div
              animate={{ rotate: isScrollUp ? 0 : 180 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-[#4BEAFF] group-hover:text-white"
            >
              <ChevronUp className="w-5 h-5 text-white" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
