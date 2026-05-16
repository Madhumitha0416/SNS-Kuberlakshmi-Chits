import React from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/savings_illustration_1778846637604.png';
import { PiggyBank, HandCoins, FileCheck, Search, SlidersHorizontal, ShieldAlert } from 'lucide-react';

const Features = () => {
  const benefits = [
    {
      icon: <PiggyBank className="w-10 h-10" />,
      title: "Disciplined Savings",
      desc: "Contribute every month and build a lump sum steadily without the temptation to spend it prematurely."
    },
    {
      icon: <HandCoins className="w-10 h-10" />,
      title: "Access Funds Quickly",
      desc: "Bid in the monthly auction and receive your payout exactly when you need it, often faster than bank loans."
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Simple Paperwork",
      desc: "No complicated documentation or long waiting periods. Quick registration and hassle-free processing."
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Fully Transparent",
      desc: "Every auction and payout is documented and shared with all members. No hidden charges."
    },
    {
      icon: <SlidersHorizontal className="w-10 h-10" />,
      title: "Flexible Plans",
      desc: "Members have options to manage their participation based on their evolving financial needs."
    },
    {
      icon: <ShieldAlert className="w-10 h-10" />,
      title: "Safe Payouts",
      desc: "33 years of safe, on-time payouts. Registered under Chit Funds Act, your savings are in trusted hands."
    }
  ];

  return (
    <AnimatedPage>
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-brand-maroon -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img src={heroBg} alt="Savings Illustration" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-offwhite via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-20 pt-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair"
          >
            Services & <span className="text-gold-500">Benefits</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gold-500 mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      <section className="py-24 bg-neutral-offwhite relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 -mt-32 relative z-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-maroon mb-6 font-playfair">
              Why Join a Chit Fund?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A chit fund is a trusted group savings scheme. It is a simple, powerful way to save money and access a lump sum exactly when you need it — without complicated bank paperwork or long waiting periods. It acts as both a saving instrument and a borrowing facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="w-20 h-20 bg-brand-maroon rounded-2xl flex items-center justify-center text-gold-500 mb-6 relative z-10 shadow-lg">
                  {benefit.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair relative z-10">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
};

export default Features;
