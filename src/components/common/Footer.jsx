import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 border-t-4 border-gold-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-maroon rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gold-500/10 blur-lg group-hover:bg-gold-500/25 transition-all duration-300 opacity-60"></div>
                <img src={logoImg} alt="SNS Kuberalakshmi" className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gold-500/30 object-cover shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-all duration-300 shrink-0 cursor-pointer" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-bold text-gold-500 leading-tight whitespace-nowrap">
                SNS Kuberalakshmi <br />
                <span className="text-white text-base sm:text-lg font-normal">Chits (P) Ltd.</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              One of Mayiladuthurai's most trusted chit fund companies, proudly serving the community since 1993. Building wealth and trust for over 33 years.
            </p>
            <div className="inline-block bg-white/10 px-4 py-2 rounded text-xs text-gold-400 border border-gold-500/30">
              Registered under Chit Funds Act, 1982
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Schemes', path: '/schemes' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-gold-500 transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-gold-500 shrink-0 mt-1" />
                <span className="text-sm">12C/8, Sri Saratha Mahal,<br />No.2 Road, Koranad,<br />Mayiladuthurai – 609 001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-gold-500 shrink-0" />
                <span className="text-sm">+91 73737 08033</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-gold-500 shrink-0" />
                <span className="text-sm">snskcpl@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Locate Us</h4>
            <div className="h-40 rounded-lg overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 pointer-events-none z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4685.027121152444!2d79.64082789999999!3d11.095866599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5526b7ded2f54b%3A0x823bd26ffd69169!2sSNS%20Kuberlakshmi%20Chits%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1779098511114!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="filter grayscale-[50%] contrast-125"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>&copy; {currentYear} SNS Kuberalakshmi Chits (P) Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="https://mdsdigitalhub.com/" className="hover:text-gold-500 transition-colors">Developed and Designed by  <span className='font-bold'> MDS Digital Hub </span> </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
