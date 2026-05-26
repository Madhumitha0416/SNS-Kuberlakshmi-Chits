import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ScrollToTopButton from '../components/common/ScrollToTopButton';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-offwhite font-poppins selection:bg-brand-maroon selection:text-white">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default RootLayout;
