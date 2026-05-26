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
      <section className="py-24 bg-neutral-offwhite relative z-30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto bg-white p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-gold-500/10 -mt-32 relative z-30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: The Narrative Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-semibold tracking-wider uppercase mb-2">
                  Our Journey
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-maroon font-playfair leading-tight">
                  A Legacy of Trust <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-amber-600">Since 1993</span>
                </h2>
                <div className="w-16 h-1 bg-gold-500 rounded-full mb-6"></div>

                <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-light">
                  <p className="first-line:font-semibold first-letter:text-5xl first-letter:font-bold first-letter:text-brand-maroon first-letter:mr-3 first-letter:float-left">
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

              {/* Right Column: Premium Trust Credentials & Founder Quote */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                
                {/* Legacy Trust Box */}
                <div className="bg-gradient-to-br from-[#2a0309] to-brand-maroon text-white p-8 rounded-3xl relative overflow-hidden shadow-xl border border-gold-500/20">
                  {/* Decorative ambient gold glow inside */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <h3 className="text-xl font-bold font-playfair text-gold-400 mb-6 border-b border-white/10 pb-4">
                    Why SNS is Different
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 shrink-0 text-lg font-bold">
                        33
                      </div>
                      <div>
                        <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Years of Pure Service</h4>
                        <p className="text-xs text-gray-300 mt-1">Operating with a clean, flawless legacy in Tamil Nadu since 1993.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 shrink-0 text-lg font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider">100% Legal & Regulated</h4>
                        <p className="text-xs text-gray-300 mt-1">Fully registered and compliant with the Government Chit Funds Act, 1982.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-500 shrink-0 text-lg font-bold">
                        ★
                      </div>
                      <div>
                        <h4 className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Flawless Pay History</h4>
                        <p className="text-xs text-gray-300 mt-1">Prompt and transparent auction payouts to help you capture timely opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Founder Quote bubble */}
                <div className="bg-neutral-beige/20 border border-gold-500/10 p-6 rounded-3xl italic text-gray-700 text-sm relative">
                  <span className="text-3xl text-gold-500 font-playfair absolute top-2 left-4 opacity-20">“</span>
                  <p className="relative z-10 px-4 leading-relaxed font-light">
                    "Our savings schemes aren't just contracts — they are a mutual bond of family trust built across generations. We grow when you grow."
                  </p>
                  <p className="text-right text-brand-maroon font-semibold text-xs tracking-wider uppercase mt-3 mr-4">
                    — Mr. V. Prabakar, Founder
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-28 bg-gradient-to-br from-[#2a0309] via-brand-maroon to-black text-white relative overflow-hidden">
        {/* Dynamic Background Glows */}
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-black/50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Vision & Mission (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              
              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-[2.5rem] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.15)] group relative overflow-hidden flex-1 flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center justify-center text-gold-500 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-playfair tracking-wide">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic font-light relative pl-4 border-l-2 border-gold-500/40">
                  "To be the most trusted and people-first chit fund company in Tamil Nadu — empowering every individual, family, and business to achieve financial freedom through transparent, reliable, and inclusive savings."
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-[2.5rem] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.15)] group relative overflow-hidden flex-1 flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center justify-center text-gold-500 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Flag size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-playfair tracking-wide">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic font-light relative pl-4 border-l-2 border-gold-500/40">
                  "To provide flexible, affordable, and fully transparent chit fund schemes that serve people from all walks of life — while delivering on-time payouts, honest dealings, and a personal relationship with every member we serve."
                </p>
              </motion.div>
            </div>

            {/* Right Column: Core Values (lg:col-span-6) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center space-x-4 mb-10 border-b border-white/10 pb-6">
                <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center justify-center text-gold-500 shadow-inner">
                  <Heart size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-playfair tracking-wide">Core Values</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Trust", desc: "33 years of keeping our word. Your money is always safe with us." },
                  { title: "Punctuality", desc: "On-time payouts, always. No delays, no excuses." },
                  { title: "Personal Service", desc: "We know your name, not just your account number." },
                  { title: "Transparency", desc: "Every transaction is clear, documented, and fully explained." },
                  { title: "Inclusivity", desc: "Schemes for everyone — homemakers, farmers, traders, and salaried employees." },
                  { title: "Compliance", desc: "Fully registered and operating under the Chit Funds Act, 1982." }
                ].map((val, idx) => (
                  <div key={idx} className="group relative space-y-1.5 p-4 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                      <h4 className="text-gold-400 font-semibold text-base sm:text-lg group-hover:text-gold-300 transition-colors">{val.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed font-light pl-4">{val.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

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
