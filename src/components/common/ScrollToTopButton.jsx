import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-[6.5rem] right-8 z-50 flex items-center justify-center w-14 h-14 bg-brand-maroon/90 backdrop-blur-md border border-gold-500/30 text-gold-500 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-110 hover:bg-brand-maroon hover:text-white hover:border-gold-500 transition-all duration-300 group"
          aria-label="Scroll to Top"
        >
          <ChevronUp className="w-7 h-7 relative z-10" />
          <span className="absolute right-16 bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg whitespace-nowrap">
            Scroll to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
