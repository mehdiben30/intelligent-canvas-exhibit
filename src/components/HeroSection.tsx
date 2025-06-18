
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dusty rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-soft rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-dusty rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="exhibition-title mb-8">
            I turn complexity<br />
            into clarity
          </h1>
          <p className="curator-note text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            My work explores the interface between reasoning systems 
            and human understanding, creating bridges where intelligence 
            meets intuition.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-charcoal/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
