import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Introduction' },
    { id: 'gallery', label: 'Works' },
    { id: 'about-me', label: 'About Me' },
    { id: 'about', label: 'Experience' },
    { id: 'contact', label: 'Connect' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Adjusted offset for better detection

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Only show navigation when NOT on hero section
  if (activeSection === 'hero') {
    return null;
  }

  return (
    <nav className="fixed z-50 select-none left-8 top-8">
      <div className="bg-porcelain/95 backdrop-blur-md border border-charcoal/20 rounded-full px-6 py-3 shadow-xl">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-dusty'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
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

export default Navigation;
