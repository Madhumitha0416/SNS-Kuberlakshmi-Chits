import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#2a0309] via-brand-maroon to-[#1c0105] relative overflow-hidden">
      {/* Enhanced Decorative Elements with absolute overflow safety */}
      <div className="absolute top-0 right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold-500/20 rounded-full mix-blend-screen filter blur-[80px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-red-900/30 rounded-full mix-blend-screen filter blur-[60px] sm:blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center bg-black/40 backdrop-blur-md border border-gold-500/10 p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          {/* Trust Stamp */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6 text-gold-500 text-xs md:text-sm font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-gold-500" /> Government Registered & 100% Secured
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
            Ready to Secure Your <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500">Financial Future?</span>
          </h2>

          {/* Sub-text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of satisfied members who trust SNS Kuberalakshmi Chits to grow their wealth safely and transparently.
          </p>
          
          {/* Responsive Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto sm:max-w-none">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-500 text-brand-maroon font-bold text-lg rounded-2xl overflow-hidden w-full sm:w-auto shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Saving Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="tel:+917373708033"
              className="group px-8 py-4 bg-transparent text-white hover:text-gold-500 font-bold text-lg rounded-2xl border-2 border-white/20 hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-3"
            >
              <PhoneCall className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
              Call: +91 73737 08033
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/10 pt-10 mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold-500 font-playfair">30+ Years</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Unbroken Trust</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold-500 font-playfair">100% SECURE</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Chit Funds Act</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-2xl md:text-3xl font-bold text-gold-500 font-playfair">10,000+</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Happy Families</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
