import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-brand-maroon relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/40 rounded-full mix-blend-screen filter blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-black/20 backdrop-blur-sm border border-white/10 p-12 md:p-16 rounded-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Ready to Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Financial Future?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Join thousands of satisfied members who trust SNS Kuberalakshmi Chits to grow their wealth safely and transparently.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-gold-500 to-yellow-500 text-brand-maroon font-bold text-lg rounded-sm overflow-hidden w-full sm:w-auto shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] transition-all"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center justify-center">
                Start Saving Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href="tel:+917373708033"
              className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-sm border-2 border-white/30 hover:border-white hover:bg-white/5 transition-all w-full sm:w-auto text-center"
            >
              Call: +91 73737 08033
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
