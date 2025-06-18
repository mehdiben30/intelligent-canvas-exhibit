
import React, { useEffect, useState } from 'react';

const HeroNavigation = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Introduction' },
    { id: 'gallery', label: 'Works' },
    { id: 'about-me', label: 'About Me' },
    { id: 'about', label: 'Research' },
    { id: 'contact', label: 'Connect' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sequential button preview animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreview(true);
      
      const previewSequence = () => {
        let index = 0;
        const interval = setInterval(() => {
          setPreviewIndex(index);
          index++;
          if (index >= navItems.length) {
            clearInterval(interval);
            // Restart the subtle invite animation
            setTimeout(() => {
              setShowPreview(false);
              setTimeout(() => setShowPreview(true), 100);
            }, 2000);
          }
        }, 600);
      };
      
      previewSequence();
    }, 2000); // Start preview after main animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="select-none mb-8">
      <div className="relative">
        {/* Main navigation container with entrance animation */}
        <div 
          className="bg-porcelain/90 backdrop-blur-sm border border-charcoal/10 rounded-full px-6 py-3 shadow-lg inline-block relative animate-nav-entrance"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          {/* Animated glow effect */}
          <div 
            className="absolute inset-0 rounded-full animate-nav-glow opacity-0"
            style={{ 
              animationDelay: '2.2s',
              animationFillMode: 'forwards'
            }}
          />
          
          {/* Navigation items */}
          <ul className="flex space-x-6 relative z-10">
            {navItems.map((item, index) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-all duration-300 text-charcoal/60 hover:text-charcoal relative px-3 py-1 rounded-full ${
                    showPreview && previewIndex === index 
                      ? 'animate-button-preview' 
                      : ''
                  }`}
                >
                  {item.label}
                  
                  {/* Hover indicator */}
                  <div className="absolute inset-0 rounded-full bg-dusty/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              </li>
            ))}
          </ul>
          
          {/* Subtle invitation animation */}
          <div 
            className="absolute -top-1 -right-1 w-3 h-3 bg-dusty/60 rounded-full animate-nav-invite opacity-0"
            style={{ 
              animationDelay: '3s',
              animationFillMode: 'forwards'
            }}
          />
        </div>

        {/* Interactive hint text that appears after animation */}
        <div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-charcoal/40 opacity-0 animate-fade-in pointer-events-none"
          style={{ 
            animationDelay: '3.5s',
            animationFillMode: 'forwards'
          }}
        >
          Click to explore sections
        </div>
      </div>
    </nav>
  );
};

export default HeroNavigation;
