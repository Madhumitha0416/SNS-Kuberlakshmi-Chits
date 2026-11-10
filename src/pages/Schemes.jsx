import React, { useState } from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/ph.png';
import { Calculator, CheckCircle2 } from 'lucide-react';

const Schemes = () => {
  const schemes = [
    { name: "Scheme 1", value: "1,00,000", duration: 20, monthly: "5,000", members: 20 },
    { name: "Scheme 2", value: "2,00,000", duration: 20, monthly: "10,000", members: 20 },
    { name: "Scheme 3", value: "5,00,000", duration: 20, monthly: "25,000", members: 20 },
    { name: "Scheme 4", value: "10,00,000", duration: 20, monthly: "50,000", members: 20 },
    { name: "Scheme 5", value: "15,00,000", duration: 30, monthly: "50,000", members: 30 },
    { name: "Scheme 6", value: "20,00,000", duration: 20, monthly: "1,00,000", members: 20 },
    { name: "Scheme 7", value: "30,00,000", duration: 30, monthly: "1,00,000", members: 30 },
  ];

  const [calcAmount, setCalcAmount] = useState('100000');
  
  const selectedScheme = schemes.find(s => s.value.replace(/,/g, '') === calcAmount) || schemes[0];

  return (
    <AnimatedPage>
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-brand-maroon -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10"></div>
          <img src={heroBg} alt="Gold Abstract" className="w-full h-full object-cover" />
        </div>
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-offwhite via-transparent to-transparent"></div> */}
        <div className="container mx-auto px-6 relative z-20 pt-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair"
          >
            Our <span className="text-gold-500">Schemes</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gold-500 mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-20 bg-neutral-offwhite">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-24 -mt-32 relative z-30">
            <div className="bg-brand-maroon text-white p-8 md:p-12 text-center border-b-4 border-gold-500">
              <h2 className="text-3xl font-playfair font-bold mb-4">7 Premium Chit Plans</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We currently offer 7 chit fund schemes to suit different savings goals and budgets. Choose the one that best fits your financial capacity.
              </p>
            </div>
            
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50 text-gray-900 border-b border-gray-200">
                    <th className="p-6 font-bold uppercase tracking-wider text-sm">Scheme</th>
                    <th className="p-6 font-bold uppercase tracking-wider text-sm">Chit Value</th>
                    <th className="p-6 font-bold uppercase tracking-wider text-sm">Duration</th>
                    <th className="p-6 font-bold uppercase tracking-wider text-sm">Base Monthly Installment</th>
                    <th className="p-6 font-bold uppercase tracking-wider text-sm">No. of Members</th>
                  </tr>
                </thead>
                <tbody>
                  {schemes.map((scheme, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-neutral-50 transition-colors">
                      <td className="p-6 font-medium text-brand-maroon">{scheme.name}</td>
                      <td className="p-6 font-bold text-xl text-gold-600">₹{scheme.value}</td>
                      <td className="p-6 text-gray-600">{scheme.duration} Months</td>
                      <td className="p-6 text-gray-600 font-medium">₹{scheme.monthly}</td>
                      <td className="p-6 text-gray-600">{scheme.members} Members</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-neutral-50 p-6 text-sm text-gray-500 italic text-center border-t border-gray-100">
              Note: The monthly installment figures are base amounts before kazar (dividend) deduction. Actual monthly payment will be lower based on the auction bid that month. Please contact us for current figures.
            </div>
          </div>

          {/* Calculator Section */}
          <div className="max-w-5xl mx-auto bg-brand-maroon rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-16 relative z-10 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center text-brand-maroon">
                    <Calculator size={24} />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold">Chit Calculator</h3>
                </div>
                <p className="text-gray-300 mb-10">
                  Select your desired chit value to see the scheme details and base monthly installment.
                </p>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gold-400 uppercase tracking-wider">Select Chit Value</label>
                  <select 
                    className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-4 focus:outline-none focus:border-gold-500 transition-colors"
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(e.target.value)}
                  >
                    {schemes.map((s, i) => (
                      <option key={i} value={s.value.replace(/,/g, '')} className="text-gray-900">
                        ₹ {s.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-white p-10 md:p-16 relative z-10 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-brand-maroon mb-8">{selectedScheme.name} Details</h4>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-gray-500">Chit Value</span>
                    <span className="text-2xl font-bold text-gold-600">₹{selectedScheme.value}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-gray-500">Duration</span>
                    <span className="text-xl font-bold text-gray-900">{selectedScheme.duration} Months</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-gray-500">No. of Members</span>
                    <span className="text-xl font-bold text-gray-900">{selectedScheme.members} Members</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-gray-500">Base Monthly</span>
                    <span className="text-3xl font-bold text-brand-maroon">₹{selectedScheme.monthly}</span>
                  </div>
                </div>

                <div className="mt-10 flex items-center space-x-2 text-sm text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle2 size={20} className="shrink-0" />
                  <span>Actual monthly payment will be lower due to dividends.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
};

export default Schemes;
