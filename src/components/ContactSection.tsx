
import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="space-y-12">
          {/* Main Statement */}
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal leading-tight">
              Let's build something<br />
              that thinks beautifully
            </h2>
            
            <div className="w-24 h-px bg-dusty mx-auto"></div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <p className="curator-note text-lg">
              I'm always interested in collaborations that push the boundaries 
              of what's possible when human creativity meets artificial intelligence.
            </p>
            
            <div className="inline-block">
              <a 
                href="mailto:benbaraka.me@gmail.com" 
                className="font-mono text-lg text-charcoal hover:text-dusty transition-colors duration-300 border-b border-charcoal/20 hover:border-dusty pb-1"
              >
                benbarka.me@gmail.com
              </a>
            </div>
          </div>

          {/* Floating elements for visual interest */}
          <div className="relative">
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-dusty rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-1/3 w-3 h-3 bg-soft rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-charcoal/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
