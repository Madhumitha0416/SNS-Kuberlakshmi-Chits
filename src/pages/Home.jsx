import React from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import Hero from '../sections/Hero';
import TrustBadges from '../sections/TrustBadges';
import WhyChooseUs from '../sections/WhyChooseUs';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';

const Home = () => {
  return (
    <AnimatedPage>
      <Hero />
      <TrustBadges />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </AnimatedPage>
  );
};

export default Home;
