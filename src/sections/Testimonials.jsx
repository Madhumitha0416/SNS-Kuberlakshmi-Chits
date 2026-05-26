import React, { useState, useEffect } from 'react';
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
    },
    {
      text: "As a business owner, liquid cash flow is crucial. SNS Kuberlakshmi Chits helped me secure timely funds to expand my textile business without any hassle or high-interest loans.",
      name: "Mrs. Meenakshi S",
      role: "Business Owner",
      location: "Madurai"
    },
    {
      text: "I have trusted SNS for my farming equipment purchases. The monthly auctions are highly transparent, and their service is prompt and highly professional.",
      name: "Mr. Ramesh Kumar R",
      role: "Agriculturist",
      location: "Kumbakonam"
    },
    {
      text: "For doctors looking for disciplined savings, SNS Kuberlakshmi Chits is the best choice. Their 30-year legacy of trust and prompt payouts make them a reliable partner.",
      name: "Dr. Anandakrishnan M",
      role: "Medical Practitioner",
      location: "Trichy"
    },
    {
      text: "Starting my financial planning early was important. SNS offered customized schemes that aligned with my savings goals. Excellent digital convenience and supportive customer care.",
      name: "Mrs. Shalini Priya K",
      role: "Software Engineer",
      location: "Coimbatore"
    },
    {
      text: "Being a banker, I evaluate financial institutions carefully. SNS operates strictly within the Chit Funds Act, ensuring unmatched security and clean transparency for senior citizens.",
      name: "Mr. Venkatesh Prasanna",
      role: "Retired Bank Manager",
      location: "Thanjavur"
    },
    {
      text: "We regularly require short-term investments. The high-value schemes at SNS Kuberlakshmi Chits have consistently supported our capital requirements during festive seasons.",
      name: "Mr. Karthikeyan B",
      role: "Jewelry Merchant",
      location: "Coimbatore"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      next();
    }, 5000); // Automatically transition every 5 seconds
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  return (
    <section className="py-24 bg-neutral-offwhite relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-maroon mb-6">
            What Our <span className="text-gold-500">Members Say</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div 
          className="max-w-5xl mx-auto relative px-4 md:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card */}
          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.08)] relative z-10 mx-auto max-w-4xl border border-gold-500/10"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-500/20 to-transparent rounded-bl-[4rem] rounded-tr-[2.5rem] -z-10"></div>
                
                <Quote className="text-gold-500/20 w-16 h-16 md:w-24 md:h-24 absolute top-6 left-6 md:top-10 md:left-10 rotate-180" />
                
                <div className="relative z-20 flex flex-col items-center">
                  <p className="text-xl md:text-3xl text-gray-700 leading-relaxed font-playfair italic mb-12 text-center px-2 md:px-16 mt-4 md:mt-8">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-maroon to-red-900 text-gold-500 flex items-center justify-center text-2xl font-bold font-playfair mb-5 shadow-lg border-2 border-gold-500/30">
                      {testimonials[currentIndex].name.replace('Mrs. ', '').replace('Mr. ', '').replace('Dr. ', '').charAt(0)}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-brand-maroon">{testimonials[currentIndex].name}</h4>
                    <p className="text-gold-500 font-medium tracking-wider text-xs md:text-sm uppercase mt-2">{testimonials[currentIndex].role}</p>
                    <p className="text-gray-500 text-sm mt-1">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-row items-center justify-center mt-6 gap-6 md:gap-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-gold-500 hover:border-brand-maroon transition-all duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-3 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all duration-500 focus:outline-none ${
                    idx === currentIndex ? 'bg-gold-500 w-10 h-2.5' : 'bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-gold-500 hover:border-brand-maroon transition-all duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
