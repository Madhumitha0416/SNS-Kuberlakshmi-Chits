import React from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/savings_illustration_1778846637604.png';
import { PiggyBank, HandCoins, FileCheck, Search, SlidersHorizontal, ShieldAlert, TrendingUp, Landmark, ShieldCheck } from 'lucide-react';

// Import generated local images for the services page
import familySavingsImg from '../assets/images/family_savings.png';
import businessCapitalImg from '../assets/images/business_capital.png';
import wealthGrowthImg from '../assets/images/wealth_growth.png';
import ruralProsperityImg from '../assets/images/rural_prosperity.png';
import paperworkImg from '../assets/images/paperwork.png';
import securePayoutsImg from '../assets/images/secure_payouts.png';

const Features = () => {
  // 6 Core Benefits with premium local images & descriptions
  const benefits = [
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: "Disciplined Savings",
      desc: "Save monthly without the urge to spend prematurely, building a stable backup asset.",
      img: familySavingsImg
    },
    {
      icon: <HandCoins className="w-6 h-6" />,
      title: "Access Funds Quickly",
      desc: "Bid in monthly auctions and access large lump sums exactly when you need them.",
      img: businessCapitalImg
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Simple Paperwork",
      desc: "Hassle-free, rapid registration with zero complex bank processes or collateral requirements.",
      img: paperworkImg
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Fully Transparent",
      desc: "All monthly auctions and payout dividends are clearly documented and shared with members.",
      img: wealthGrowthImg
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6" />,
      title: "Flexible Options",
      desc: "Multiple subscription scales ranging from ₹1 Lakh to ₹30 Lakhs tailored to your capacity.",
      img: ruralProsperityImg
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "100% Secure Payouts",
      desc: "Governed under the Chit Funds Act, 1982, ensuring fully backed legal protection for your funds.",
      img: securePayoutsImg
    }
  ];

  // Image-Based Services by Segment
  const segmentServices = [
    {
      title: "For Homemakers & Families",
      subtitle: "Secure Family Gold & Education",
      desc: "Build a reliable reserve fund for weddings, jewelry, and children's higher studies with zero-stress monthly plans.",
      img: familySavingsImg,
      tag: "Family Trust"
    },
    {
      title: "For Traders & Retailers",
      subtitle: "No-Collateral Working Capital",
      desc: "Access immediate bidding lump sums to stock inventory, expand shop floors, or capture seasonal trade deals.",
      img: businessCapitalImg,
      tag: "Business Capital"
    },
    {
      title: "For Salaried Professionals",
      subtitle: "Disciplined Long-term Wealth",
      desc: "Automate your savings to systematically create property assets or build robust contingency funds for the future.",
      img: wealthGrowthImg,
      tag: "Wealth Growth"
    },
    {
      title: "For Farmers & Agriculturists",
      subtitle: "Harvest-Cycle Friendly Plans",
      desc: "Tailored chit services that match harvest cycles, helping buy modern equipment or fertile agricultural land.",
      img: ruralProsperityImg,
      tag: "Rural Prosperity"
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

      {/* Core Content Section */}
      <section className="py-24 bg-neutral-offwhite relative z-20">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Part 1: Improvised 'Why Join a Chit Fund?' UI */}
          <div className="max-w-5xl mx-auto -mt-32 mb-24 relative z-30">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-gold-500/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-semibold tracking-wider uppercase">
                  Smart Savings
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-maroon font-playfair">
                  Why Join a Chit Fund?
                </h2>
                <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                  A chit fund is a trusted group savings scheme. It is a simple, powerful way to save money and access a lump sum exactly when you need it — without complicated bank paperwork or long waiting periods. It acts as both a saving instrument and a borrowing facility.
                </p>
              </div>

              {/* Highlights Grid inside Why Join */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-gray-100">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-beige/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-maroon text-sm uppercase tracking-wide">High Returns</h4>
                    <p className="text-xs text-gray-500 mt-1">Earn appealing dividends from monthly auctions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-beige/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-maroon text-sm uppercase tracking-wide">No Collateral</h4>
                    <p className="text-xs text-gray-500 mt-1">Access immediate funds without heavy property assets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-beige/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-maroon text-sm uppercase tracking-wide">100% Regulated</h4>
                    <p className="text-xs text-gray-500 mt-1">Governed securely under the Chit Funds Act, 1982.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Part 2: Image-Based Services UI Design */}
          <div className="space-y-16 mb-24">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-semibold tracking-wider uppercase">
                Tailored Solutions
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-maroon font-playfair">
                Financial Services for Everyone
              </h3>
              <p className="text-gray-600 font-light">
                Explore customized savings solutions constructed to power dreams across every walk of life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {segmentServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative h-[380px] sm:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl border border-gold-500/10 cursor-pointer"
                >
                  {/* Background Image with Hover Scale */}
                  <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 z-10"></div>
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20 p-8 sm:p-10 flex flex-col justify-end items-start text-left space-y-3">
                    <span className="px-3 py-1 rounded-full bg-gold-500 text-brand-maroon text-[10px] font-bold uppercase tracking-wider">
                      {service.tag}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white font-playfair group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h4>
                    <h5 className="text-sm font-semibold text-gold-500 uppercase tracking-widest">
                      {service.subtitle}
                    </h5>
                    <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-md opacity-90 group-hover:opacity-100 transition-opacity">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Part 3: Responsive Image-Based Benefits Grid (The SNS Advantage) */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-maroon font-playfair">
                The SNS Advantage
              </h3>
              <p className="text-gray-600 font-light">
                Every feature is built around saving safety, flexible budgets, and transparency.
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
                  className="group relative h-[320px] rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white/10 cursor-pointer"
                >
                  {/* Background Image with Hover Zoom */}
                  <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 z-10"></div>
                    <img 
                      src={benefit.img} 
                      alt={benefit.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Contents overlay */}
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between items-start text-left">
                    {/* Top Icon Badge container */}
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-gold-500 shadow-lg group-hover:bg-gold-500 group-hover:text-brand-maroon transition-all duration-300">
                      {benefit.icon}
                    </div>

                    {/* Bottom Content text panel */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white font-playfair group-hover:text-gold-400 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-light opacity-90 group-hover:opacity-100 transition-opacity">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
};

export default Features;
