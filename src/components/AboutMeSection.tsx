
import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-porcelain to-porcelain/80">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-dusty/10 to-soft/10 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Mehdi Ben Barka"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-dusty/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-soft/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal mb-6">
                About Me
              </h2>
              <div className="w-20 h-px bg-dusty mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="curator-note text-lg leading-relaxed">
                I am a Master's student in Machine Learning for Data Science at Université Paris Cité, 
                where I explore the intersection of artificial intelligence and human understanding.
              </p>

              <p className="curator-note text-lg leading-relaxed">
                Currently working as an AI Research Intern at Emobot, I focus on making complex 
                neural systems interpretable and accessible. My passion lies in transforming 
                mathematical abstractions into intuitive visual narratives.
              </p>

              <p className="curator-note text-lg leading-relaxed">
                Each project represents a dialogue between curiosity and computation, 
                designed to reveal the poetry hidden within algorithms.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="border-t border-charcoal/10 pt-8">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="space-y-1">
                  <div className="font-medium text-charcoal">Current Role</div>
                  <div className="text-charcoal/70">AI Research Intern</div>
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-charcoal">Institution</div>
                  <div className="text-charcoal/70">Université Paris Cité</div>
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-charcoal">Focus Area</div>
                  <div className="text-charcoal/70">ML Interpretability</div>
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-charcoal">Research at</div>
                  <div className="text-charcoal/70">Emobot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
