import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "What is a chit fund?",
      a: "Chit Fund is a unique and indigenous savings-cum-borrowing financial instrument that existed long before banking came to India. It continues to be the preferred mode of savings for millions of middle-class families across South India. Also known as Chit, Chitty, Kuri, or Fraternity Fund — and recognised worldwide as a Rotating Savings and Credit Association (ROSCA) — a chit fund is truly an all-in-one financial instrument combining the best features of banks, mutual funds, and cooperative institutions. Every month, members pool their savings and one needy member receives the full amount. The discount offered by that member is shared equally among all — after deducting the company's commission — as a dividend (kazar). Simple, fair, and transparent."
    },
    {
      q: "Is SNS Kuberalakshmi Chits registered?",
      a: "Yes. We are registered and operating under the Chit Funds Act, 1982, and are fully compliant with all Tamil Nadu state regulations."
    },
    {
      q: "What chit schemes do you offer?",
      a: "We offer 7 schemes ranging from ₹1 Lakh to ₹30 Lakhs, with durations of 20 or 30 months. Please see our Schemes page for full details or contact us for guidance on choosing the right plan."
    },
    {
      q: "When will I receive my payout?",
      a: "Payouts happen every month through the auction process. You can bid for the payout when you need the funds, or wait patiently and receive your payment amount at the end of the scheme tenure."
    },
    {
      q: "Is my money safe?",
      a: "Absolutely. We have been operating since 1993 with a perfect record. We are registered under the Chit Funds Act, 1982, and are also a proud member of the All India Association of Chit Funds and the Tamil Nadu Chit Fund Companies Association. Your savings are fully protected."
    },
    {
      q: "What documents do I need to join?",
      a: "A valid ID proof (Aadhaar & PAN card), address proof, and a passport-size photograph. Our team will guide you through the entire process."
    },
    {
      q: "Can I get my money if I need it urgently before my turn?",
      a: "Yes. One of the key advantages of a chit fund is that members can bid in the monthly auction to receive the payout when they need it most — without waiting for their turn."
    },
    {
      q: "How can I pay my monthly contributions?",
      a: "We offer multiple convenient payment options, including UPI, bank transfer, cheque, and in-person cash payments at our branch offices. You can choose the method that works best for you."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-maroon mb-6">
            Frequently Asked <span className="text-gold-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Clear answers to help you understand how our chit funds work and how they can benefit you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {faqs.slice(0, 4).map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold-500/50 transition-colors h-fit">
                <button
                  className="w-full flex justify-between items-center p-6 bg-white text-left focus:outline-none"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className="font-playfair font-bold text-lg text-brand-maroon pr-8">
                    {faq.q}
                  </span>
                  <span className="text-gold-500 shrink-0">
                    {activeIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-neutral-50"
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {faqs.slice(4, 8).map((faq, index) => {
              const globalIndex = index + 4;
              return (
                <div key={globalIndex} className="border border-gray-200 rounded-xl overflow-hidden hover:border-gold-500/50 transition-colors h-fit">
                  <button
                    className="w-full flex justify-between items-center p-6 bg-white text-left focus:outline-none"
                    onClick={() => setActiveIndex(activeIndex === globalIndex ? null : globalIndex)}
                  >
                    <span className="font-playfair font-bold text-lg text-brand-maroon pr-8">
                      {faq.q}
                    </span>
                    <span className="text-gold-500 shrink-0">
                      {activeIndex === globalIndex ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === globalIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-neutral-50"
                      >
                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
