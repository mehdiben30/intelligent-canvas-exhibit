
import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-porcelain to-porcelain/50">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-dusty/20 to-soft/20 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=500&fit=crop&crop=face"
                  alt="Portrait"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-dusty rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-soft rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal mb-6">
                About the Research
              </h2>
              <div className="w-20 h-px bg-dusty mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="curator-note text-lg leading-relaxed">
                I am fascinated by the moments when artificial systems surprise us—when they 
                demonstrate understanding that seems to transcend their training, or when they 
                fail in ways that illuminate the boundaries of machine intelligence.
              </p>

              <p className="curator-note text-lg leading-relaxed">
                My research focuses on making these complex systems interpretable, not just 
                to other researchers, but to anyone curious about how thinking might emerge 
                from computation.
              </p>

              <p className="curator-note text-lg leading-relaxed">
                Each project is an experiment in translation—converting the mathematical 
                poetry of neural networks into visual languages that speak to human intuition.
              </p>
            </div>

            {/* Artifacts */}
            <div className="border-t border-charcoal/10 pt-8">
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4">
                Current Artifacts
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="font-medium text-charcoal">Tools</div>
                  <div className="text-charcoal/70">PyTorch, JAX, D3.js</div>
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-charcoal">Focus</div>
                  <div className="text-charcoal/70">Interpretability, Emergence</div>
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-charcoal">Location</div>
                  <div className="text-charcoal/70">Research Lab</div>
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-charcoal">Status</div>
                  <div className="text-charcoal/70">PhD Candidate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
