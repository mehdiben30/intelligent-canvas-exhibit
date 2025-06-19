
import React from 'react';
import HeroNavigation from './HeroNavigation';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-porcelain via-porcelain to-dusty/5">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-dusty to-soft rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-soft to-dusty rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-dusty/60 to-soft/60 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-tl from-soft/40 to-dusty/40 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(28,28,28,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title with stable animation */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-charcoal leading-tight mb-12 relative">
              Mehdi Ben Barka
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-dusty to-soft rounded-full opacity-60"></div>
            </h1>
          </div>
          
          {/* Profile Image with stable hover effects */}
          <div className="mb-12 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-dusty to-soft rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img 
                src="/lovable-uploads/ebc861f3-16bc-4f14-ba00-57394ebf5d39.png" 
                alt="Mehdi Ben Barka"
                className="relative w-64 h-80 object-cover rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-charcoal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Hero Navigation */}
          <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <HeroNavigation />
          </div>
          
          {/* Description */}
          <div className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
            <p className="curator-note text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Master student @ ML for DataScience, U-Paris Citée
            </p>
            <p className="curator-note text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              AI research Intern @ Emobot
            </p>
          </div>

          {/* Call to action - centered */}
          <div className="mt-16 animate-fade-in opacity-0 flex justify-center" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center space-x-3 text-dusty/70 hover:text-dusty transition-colors duration-300 cursor-pointer group">
              <span className="text-sm font-medium tracking-wide">Explore My Journey</span>
              <div className="w-8 h-px bg-current transform group-hover:w-12 transition-all duration-300"></div>
              <div className="w-0 h-0 border-l-2 border-l-current border-y-1 border-y-transparent transform group-hover:translate-x-1 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
