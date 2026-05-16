import React from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/corporate_office_1778846615717.png';
import founderImg from '../assets/images/founder_placeholder_1778846652736.png';
import ceoImg from '../assets/images/ceo_placeholder_1778846667428.png';
import { Target, Flag, Heart } from 'lucide-react';

const About = () => {
  return (
    <AnimatedPage>
      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-maroon -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img src={heroBg} alt="Corporate Office" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-offwhite via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-20 pt-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair"
          >
            About <span className="text-gold-500">Us</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gold-500 mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-neutral-offwhite">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 -mt-32 relative z-30">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-maroon mb-8 font-playfair">
              A Legacy of Trust Since 1993
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 1993 in the heart of Mayiladuthurai, Tamil Nadu, <strong>SNS Kuberalakshmi Chits (P) Ltd.</strong> has grown from a small, trusted neighbourhood chit fund into one of the region's most respected financial service providers.
              </p>
              <p>
                For over three decades, we have stood by our members through every stage of life — helping families fund weddings, business owners expand their ventures, salaried employees manage their savings, and homemakers build financial independence. Our strength lies not just in our 33 years of experience, but in the deep trust and lasting relationships we have built with every member we serve.
              </p>
              <p>
                At SNS Kuberalakshmi Chits, we believe that financial growth should be accessible to everyone — from a daily wage worker to a large business owner. That is why we offer chit fund schemes ranging from ₹1 Lakh to ₹30 Lakhs, designed to suit all budgets and all walks of life.
              </p>
              <p>
                Registered and operating under the Chit Funds Act, 1982, we maintain the highest standards of transparency, accountability, and member security. Every rupee you invest is tracked, managed, and returned — on time, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-24 bg-brand-maroon text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center text-gold-500">
                    <Target size={24} />
                  </div>
                  <h2 className="text-3xl font-bold font-playfair">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed italic">
                  "To be the most trusted and people-first chit fund company in Tamil Nadu — empowering every individual, family, and business to achieve financial freedom through transparent, reliable, and inclusive savings."
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center text-gold-500">
                    <Flag size={24} />
                  </div>
                  <h2 className="text-3xl font-bold font-playfair">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed italic">
                  "To provide flexible, affordable, and fully transparent chit fund schemes that serve people from all walks of life — while delivering on-time payouts, honest dealings, and a personal relationship with every member we serve."
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center text-gold-500">
                  <Heart size={24} />
                </div>
                <h2 className="text-3xl font-bold font-playfair">Core Values</h2>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Trust", desc: "33 years of keeping our word. Your money is always safe with us." },
                  { title: "Punctuality", desc: "On-time payouts, always. No delays, no excuses." },
                  { title: "Personal Service", desc: "We know your name, not just your account number." },
                  { title: "Transparency", desc: "Every transaction is clear, documented, and explained to you." },
                  { title: "Inclusivity", desc: "Schemes for everyone — homemakers, farmers, traders, and salaried employees." },
                  { title: "Compliance", desc: "Fully registered and operating under the Chit Funds Act, 1982." }
                ].map((val, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="text-gold-500 font-bold text-lg">{val.title}</span>
                    <span className="text-gray-300">{val.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-neutral-offwhite">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-maroon mb-6 font-playfair">
              Our <span className="text-gold-500">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600">
              SNS Kuberalakshmi Chits (P) Ltd. is led by a team deeply committed to the chit fund industry and the community at large.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Founder */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <div className="h-96 overflow-hidden">
                <img 
                  src={founderImg} 
                  alt="Mr. V. Prabakar" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-maroon mb-2">Mr. V. Prabakar.</h3>
                <p className="text-sm font-bold text-gray-500 mb-2 border-b border-gray-100 pb-2">
                  M.Com., M.L., M.B.A., P.G.D.F.M.
                </p>
                <h4 className="text-gold-500 font-bold mb-6">Founder & Managing Director</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  With a strong academic foundation in Commerce, Law, Business Administration, and Financial Management, Mr. V. Prabakar founded SNS Kuberalakshmi Chits in 1993 and has led it with integrity and vision for over 33 years. He serves as the Legal Advisor of the Tamil Nadu Chit Fund Companies Association, bringing deep legal expertise and industry knowledge to every decision. He is also an active member of the Rotary Club Kings, Mayiladuthurai, reflecting the company's commitment to community service beyond business.
                </p>
              </div>
            </div>

            {/* CEO */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <div className="h-96 overflow-hidden">
                <img 
                  src={ceoImg} 
                  alt="Mr. P. Srinidhii Venoth" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-maroon mb-2">Mr. P. Srinidhii Venoth.</h3>
                <p className="text-sm font-bold text-gray-500 mb-2 border-b border-gray-100 pb-2">
                  M.E., M.B.A.
                </p>
                <h4 className="text-gold-500 font-bold mb-6">CEO & Director — Second Generation</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Carrying forward his father's legacy with fresh energy and professional expertise, Mr. P. Srinidhii Venoth is qualified in Engineering and Business Administration. He serves as the Joint Secretary of the Tamil Nadu Chit Fund Companies Association, actively shaping policies and best practices for the chit fund industry across Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
