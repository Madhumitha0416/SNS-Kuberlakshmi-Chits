import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Briefcase, Award } from 'lucide-react';
import heroBg from '../assets/images/growing_wealth_bg.png';
import aiacfLogo from '../assets/images/AIACF.png';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-maroon -mt-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src={heroBg} alt="Luxury Financial Background" className="w-full h-full object-cover" />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-maroon via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-32 sm:pt-28 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex flex-col items-center bg-white/10 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl border border-gold-500/30 mb-6 sm:mb-8"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full p-0.5 border border-gold-500/40 shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center shrink-0 overflow-hidden">
              <img src={aiacfLogo} alt="AIACF Logo" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-[1px] bg-gold-500/20 my-2"></div>
            <span className="text-gray-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Registered under Chitfund Act</span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            33 Years of Building <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-yellow-200">
              Wealth & Trust.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 font-light px-4 sm:px-0"
          >
            Your Partner in Every Financial Step...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-row items-center justify-center space-x-3 sm:space-x-4"
          >
            <Link
              to="/contact"
              className="group relative py-3 sm:py-3.5 bg-gradient-to-r from-gold-500 to-yellow-500 text-brand-maroon font-bold text-base sm:text-lg rounded-sm overflow-hidden w-[160px] sm:w-[180px] text-center"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center justify-center">
                Join Now <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="py-3 sm:py-3.5 bg-white/5 backdrop-blur-sm text-white font-bold text-base sm:text-lg rounded-sm border border-white/20 hover:bg-white/10 transition-colors w-[160px] sm:w-[180px] text-center flex items-center justify-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: <Award />, count: "33+", label: "Years Experience" },
            { icon: <Users />, count: "10k+", label: "Happy Families" },
            { icon: <Briefcase />, count: "7", label: "Chit Schemes" },
            { icon: <ShieldCheck />, count: "100%", label: "Trusted Service" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-dark rounded-xl p-4 sm:p-6 text-center border-t-2 border-t-gold-500/50 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-2 sm:mb-4 text-gold-500 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.count}</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
