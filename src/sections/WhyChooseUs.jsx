import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, MapPin, Clock, Wallet, ShieldCheck, HeartHandshake, FileText, BadgeCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "33+ Years Experience",
      desc: "Established in 1993 — a proven and unblemished track record across three decades."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Rooted in Mayiladuthurai",
      desc: "A local business that deeply understands the needs of our community."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Payouts",
      desc: "We have never missed or delayed a payout. Your money comes to you when promised."
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Schemes for Every Budget",
      desc: "From ₹1 Lakh to ₹30 Lakhs — a scheme that fits your savings capacity."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Government Registered",
      desc: "Registered under the Chit Funds Act, 1982. Safe, secure, and compliant."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Personal Relationship",
      desc: "No call centres. Real people, real care — every time you walk in."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Transparent Documentation",
      desc: "Passbooks, receipts, and complete records given to every member."
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Flexible Access",
      desc: "Members have flexibility to access their chit value when they need it most."
    }
  ];

  // Mobile infinite auto-slider interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000); // Auto advances every 4 seconds
    return () => clearInterval(timer);
  }, [features.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-neutral-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-maroon mb-6">
            Why Choose <span className="text-gold-500">SNS Kuberalakshmi?</span>
          </h2>
          <p className="text-lg text-gray-600">
            For over three decades, we have stood by our members through every stage of life. Our strength lies in the deep trust and lasting relationships we have built.
          </p>
        </div>

        {/* Desktop/Tablet Grid Layout (Completely Unchanged) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(139,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-neutral-50 flex items-center justify-center text-brand-maroon mb-6 group-hover:bg-brand-maroon group-hover:text-gold-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Infinite Auto-Slider Layout (Only visible on mobile screens) */}
        <div className="block md:hidden relative px-2 pb-14">
          <div className="relative h-[290px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full bg-white p-8 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-gray-100 min-h-[250px] flex flex-col justify-center"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-maroon text-gold-400 flex items-center justify-center mb-6">
                  {features[activeIndex].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">{features[activeIndex].title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {features[activeIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Pagination Indicators */}
          <div className="flex justify-center space-x-2 absolute bottom-0 left-0 right-0">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-gold-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
