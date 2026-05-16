import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "I first joined a chit for my son's education. After he completed it, I joined again for his marriage. Now I am saving for my grandson. SNS Kuberalakshmi Chits has been part of every milestone in my family.",
      name: "Mrs. Rajeswari V",
      role: "Homemaker",
      location: "Mayiladuthurai"
    },
    {
      text: "I have been a customer for 25 years. I started with a ₹50,000 chit and grew along with SNS — today I am continuing with a ₹10 Lakh chit. This is a company that grows with you.",
      name: "Mr. Murugan G",
      role: "Teacher",
      location: "Mayiladuthurai"
    },
    {
      text: "I have been with SNS for 25 years. Every chit I have taken has been for investment. SNS Kuberalakshmi Chits has always brought me good fortune — I keep coming back.",
      name: "Mr. Ravi N",
      role: "Trader",
      location: "Mayiladuthurai"
    },
    {
      text: "I worked part-time with SNS during my studies. After completing my education and getting a job in Chennai, I started a chit — and with that I built my house, got married, and now I have joined a new chit for my son's education. SNS has been with me at every step of life.",
      name: "Mr. Sridar K",
      role: "Salaried Professional",
      location: "Chennai"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-neutral-offwhite relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-maroon mb-6">
            What Our <span className="text-gold-500">Members Say</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button 
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-maroon hover:bg-gold-500 hover:text-white transition-colors"
            >
              <ChevronLeft />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button 
              onClick={next}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-maroon hover:bg-gold-500 hover:text-white transition-colors"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 relative"
              >
                <Quote className="absolute top-8 left-8 w-16 h-16 text-gold-500/20 rotate-180" />
                
                <p className="text-xl md:text-3xl text-gray-700 leading-relaxed font-playfair italic relative z-10 mb-10 text-center">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex flex-col items-center justify-center border-t border-gray-100 pt-8">
                  <h4 className="text-xl font-bold text-brand-maroon">{testimonials[currentIndex].name}</h4>
                  <p className="text-gold-500 font-medium">{testimonials[currentIndex].role}</p>
                  <p className="text-gray-500 text-sm mt-1">{testimonials[currentIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-gold-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
