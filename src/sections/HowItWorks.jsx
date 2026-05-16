import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Join a Scheme",
      desc: "Choose a chit value that suits your budget from ₹1 Lakh to ₹30 Lakhs and register with us."
    },
    {
      num: "02",
      title: "Pay Monthly",
      desc: "Contribute your monthly installment. The higher the auction bid, the more dividend you earn, lowering your payment."
    },
    {
      num: "03",
      title: "Monthly Auction",
      desc: "Members who need funds urgently can bid for that month's payout. Highest bidder receives the chit amount."
    },
    {
      num: "04",
      title: "Receive Your Payout",
      desc: "Win the auction when you need money, or wait patiently to receive your payment at the end of the tenure."
    },
    {
      num: "05",
      title: "Complete the Tenure",
      desc: "Every member receives their payout exactly once over the duration of the 20 or 30 month scheme."
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-brand-maroon text-white relative overflow-hidden" ref={containerRef}>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-gold-500">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" stroke="none" />
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-gold-500">Works</span>
          </h2>
          <p className="text-lg text-gray-300">
            A simple, powerful way to save money and access a lump sum exactly when you need it — without complicated bank paperwork.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -ml-0.5 rounded-full">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gold-500 rounded-full"
            />
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className={`relative flex items-center justify-between md:justify-normal mb-16 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Center Dot */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-brand-maroon border-4 border-gold-500 -ml-3 z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`w-full pl-20 md:pl-0 md:w-5/12 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-5xl font-playfair font-bold text-gold-500/30 mb-4">{step.num}</div>
                  <h3 className="text-2xl font-bold text-gold-400 mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
