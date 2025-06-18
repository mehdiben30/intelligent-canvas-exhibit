
import React from 'react';

const HeroNavigation = () => {
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

  return (
    <nav className="select-none mb-8">
      <div className="bg-porcelain/90 backdrop-blur-sm border border-charcoal/10 rounded-full px-6 py-3 shadow-lg inline-block">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-sm transition-all duration-300 text-charcoal/60 hover:text-charcoal"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeroNavigation;
