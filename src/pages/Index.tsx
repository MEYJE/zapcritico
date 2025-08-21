
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import MethodologySection from '@/components/MethodologySection';
import FeatureList from '@/components/FeatureList';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add a CSS class to create a grid pattern background
    const style = document.createElement('style');
    style.innerHTML = `
      .bg-grid-pattern {
        background-size: 40px 40px;
        background-image: 
          linear-gradient(to right, rgba(54, 161, 71, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(54, 161, 71, 0.05) 1px, transparent 1px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <MethodologySection />
        <FeatureList />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
