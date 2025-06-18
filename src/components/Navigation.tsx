
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Introduction' },
    { id: 'gallery', label: 'Works' },
    { id: 'about-me', label: 'About Me' },
    { id: 'about', label: 'Research' },
    { id: 'contact', label: 'Connect' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed z-50 select-none transition-all duration-300 ${
        activeSection === 'hero' 
          ? 'left-1/2 transform -translate-x-1/2 top-[calc(50vh+200px)]' // Entre la photo et le texte
          : 'left-8 top-8' // Top-left sur les autres sections
      }`}
    >
      <div className="bg-porcelain/90 backdrop-blur-sm border border-charcoal/10 rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-dusty font-medium'
                    : 'text-charcoal/60 hover:text-charcoal'
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
