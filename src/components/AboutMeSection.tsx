
import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-porcelain to-porcelain/80">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              About Me
            </h2>
            <div className="w-20 h-px bg-dusty mx-auto mb-8"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="curator-note text-lg leading-relaxed text-left">
              I'm currently a research intern at Emobot, a startup specializing in emotion AI. We focus on analyzing and understanding human emotions through various outputs. In my role, I implement research papers and train/fine-tune advanced neural networks to enhance Emobot's technology in emotion recognition and sentiment analysis.
            </p>

            <p className="curator-note text-lg leading-relaxed text-left">
              When I'm not working, I dedicate much of my time to diving deeper into advanced neural networks, particularly transformer architectures. It's something that excites me greatly, as I aspire to create innovative technologies—projects that haven't been done before and that can make a meaningful difference. And AI, in my view, is the way forward!
            </p>

              <p className="curator-note text-lg leading-relaxed text-left">
                The first of these projects is IceBreaker, a personal initiative to which I dedicate a significant portion of my free time. It focuses on exploring innovative ways to implement large language models (LLMs) for specific objectives in party games. I'm working on making NPC personalities more engaging, personalizing experiences, and gathering interaction data to improve LLM context, ultimately enriching the entire user experience. My goal with IceBreaker is simple: to create a fun, interactive gameplay experience that brings people together.
              </p>
        </div>
            {/* Quick Facts */}
            <div className="border-t border-charcoal/10 pt-8 mt-12">
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
