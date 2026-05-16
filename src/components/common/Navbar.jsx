import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
          Registered under Chit Funds Act, 1982
        </div>
      </div>

      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-md py-4 lg:top-8' : 'bg-transparent py-6 lg:top-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`text-2xl md:text-3xl font-playfair font-bold transition-colors ${isScrolled || location.pathname !== '/' ? 'text-brand-maroon' : 'text-white'}`}>
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
              <div className="text-2xl font-playfair font-bold text-gold-500">
                SNS Kuberalakshmi
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
