
import React from 'react';

const HeroNavigation = () => {
  const navItems = [
    { id: 'hero', label: 'Introduction' },
    { id: 'about-me', label: 'About Me' },
    { id: 'gallery', label: 'Works' },
    { id: 'about', label: 'Experience' },
    { id: 'contact', label: 'Connect' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="select-none mb-8">
      <div className="relative">
        {/* Main navigation container */}
        <div className="bg-porcelain/90 backdrop-blur-sm border border-charcoal/10 rounded-full px-6 py-3 shadow-lg inline-block relative">
          {/* Navigation items */}
          <ul className="flex space-x-6 relative z-10">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm transition-all duration-300 text-charcoal/60 hover:text-charcoal relative px-3 py-1 rounded-full"
                >
                  {item.label}
                  {/* Hover indicator */}
                  <div className="absolute inset-0 rounded-full bg-dusty/10 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeroNavigation;
