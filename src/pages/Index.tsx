
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import GallerySection from '../components/GallerySection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="section-snap">
      <Navigation />
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="about-me">
        <AboutMeSection />
      </div>
      
      <div id="gallery">
        <GallerySection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
