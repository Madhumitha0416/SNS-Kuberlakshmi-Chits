import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Schemes', path: '/schemes' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="hidden lg:flex bg-brand-maroon text-white text-sm py-2 px-8 justify-between items-center fixed top-0 w-full z-50">
        <div className="flex space-x-6">
          <span className="flex items-center space-x-2">
            <Phone size={16} className="text-gold-500" />
            <span>+91 73737 08033</span>
          </span>
          <span className="flex items-center space-x-2">
            <MapPin size={16} className="text-gold-500" />
            <span>Mayiladuthurai - 609 001</span>
          </span>
        </div>
        <div className="text-gold-400 font-medium">
         Registered Under Companies Act & Chit Funds Act
        </div>
      </div>

      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-md py-4 lg:top-8' : 'bg-transparent py-6 lg:top-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative shrink-0 flex items-center justify-center">
              {/* Luxury ambient gold aura ring */}
              <div className="absolute inset-0 rounded-full bg-gold-500/25 blur-md group-hover:blur-lg transition-all duration-300 opacity-80"></div>
              {/* Premium padded outer gold medallion container */}
              <div className="relative z-10 w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#3d0208] border-2 border-gold-500/50 p-[3px] flex items-center justify-center shadow-lg group-hover:border-gold-400 group-hover:scale-105 transition-all duration-300 shrink-0">
                <img src={logoImg} alt="SNS Kuberalakshmi" className="w-full h-full object-contain rounded-full" />
              </div>
            </div>
            <div className={`text-sm sm:text-2xl md:text-3xl font-playfair font-bold tracking-wide transition-colors leading-none whitespace-nowrap ${
              isScrolled || location.pathname !== '/' ? 'text-brand-maroon' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
            }`}>
              SNS Kuberalakshmi <span className="text-gold-500">Chits</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-[15px] uppercase tracking-wider transition-colors hover:text-gold-500 ${
                  location.pathname === link.path
                    ? 'text-gold-500'
                    : isScrolled || location.pathname !== '/'
                    ? 'text-neutral-800'
                    : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-gold-500 to-yellow-500 text-white px-8 py-3 rounded-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Join Now
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 rounded-md ${isScrolled || location.pathname !== '/' ? 'text-brand-maroon' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-maroon text-white flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center space-x-3">
                <div className="relative shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gold-500/35 blur-md opacity-80"></div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#3d0208] border-2 border-gold-500/50 p-[3px] flex items-center justify-center shadow-lg shrink-0">
                    <img src={logoImg} alt="SNS Kuberalakshmi" className="w-full h-full object-contain rounded-full" />
                  </div>
                </div>
                <div className="text-xl font-playfair font-bold text-gold-500 whitespace-nowrap">
                  SNS Kuberalakshmi
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium ${location.pathname === link.path ? 'text-gold-500' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 mt-8 border-t border-white/20">
                <div className="flex items-center space-x-3 text-gold-400 mb-4">
                  <Phone size={20} />
                  <span>+91 73737 08033</span>
                </div>
                <div className="flex items-center space-x-3 text-gold-400 mb-8">
                  <MapPin size={20} />
                  <span className="text-sm">12C/8, Sri Saratha Mahal, No.2 Road, Koranad, Mayiladuthurai</span>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gold-500 text-white text-center py-4 rounded-sm font-medium block"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
