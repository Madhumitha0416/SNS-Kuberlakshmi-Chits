import React, { useState } from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    scheme: 'Scheme 1 (₹1 Lakh)'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
    alert("Thank you for your interest. Our team will contact you shortly.");
    setFormData({ name: '', phone: '', city: '', scheme: 'Scheme 1 (₹1 Lakh)' });
  };

  return (
    <AnimatedPage>
      {/* Page Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-maroon -mt-20">
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-offwhite via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-20 pt-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair"
          >
            Contact <span className="text-gold-500">Us</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gold-500 mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-offwhite">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8 -mt-32 relative z-20">
              <div className="bg-brand-maroon text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-playfair font-bold mb-8 text-gold-500 border-b border-white/10 pb-4">Get In Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-gold-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Office Address</h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        12C/8, Sri Saratha Mahal,<br />
                        No.2 Road, Koranad,<br />
                        Mayiladuthurai – 609 001,<br />
                        Tamil Nadu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-gold-400">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-gray-300">+91 73737 08033</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center shrink-0 text-[#25D366]">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                      <p className="text-gray-300">+91 94880 04010</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-gold-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-gray-300">snskcpl@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 border-t border-white/10 pt-8">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-gold-400">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                      <p className="text-gray-300">Monday to Saturday</p>
                      <p className="text-gold-400 font-medium">9:30 AM – 7:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 relative z-20 lg:-mt-16">
              <h3 className="text-3xl font-playfair font-bold text-brand-maroon mb-2">Send an Enquiry</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-neutral-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-neutral-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">City / Location</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="Enter your city"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Scheme of Interest</label>
                  <select 
                    name="scheme"
                    value={formData.scheme}
                    onChange={handleChange}
                    className="w-full bg-neutral-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-gray-700"
                  >
                    <option value="Scheme 1 (₹1 Lakh)">Scheme 1 (₹1,00,000)</option>
                    <option value="Scheme 2 (₹2 Lakhs)">Scheme 2 (₹2,00,000)</option>
                    <option value="Scheme 3 (₹5 Lakhs)">Scheme 3 (₹5,00,000)</option>
                    <option value="Scheme 4 (₹10 Lakhs)">Scheme 4 (₹10,00,000)</option>
                    <option value="Scheme 5 (₹15 Lakhs)">Scheme 5 (₹15,00,000)</option>
                    <option value="Scheme 6 (₹20 Lakhs)">Scheme 6 (₹20,00,000)</option>
                    <option value="Scheme 7 (₹30 Lakhs)">Scheme 7 (₹30,00,000)</option>
                    <option value="Not Sure Yet">Not Sure Yet - Need Guidance</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-maroon to-red-900 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center group hover:shadow-lg transition-all duration-300"
                >
                  Submit Enquiry
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-20 max-w-6xl mx-auto bg-white p-4 rounded-3xl shadow-lg border border-gray-100">
            <div className="h-[400px] w-full rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3a552500122e2329%3A0x67db233e75e505cc!2sSNS%20Kuberalakshmi%20Chits%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
