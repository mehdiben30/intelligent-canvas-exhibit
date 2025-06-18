import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const GallerySection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Understanding Transformers through Implementation",
      description: "A visual exploration of transformer attention patterns, revealing the hidden pathways of machine understanding. This piece transforms mathematical abstractions into intuitive visual narratives.",
      image: "/lovable-uploads/5d12bbc2-d716-4ce7-8948-032105f57a31.png",
      tags: ["research oriented project"]
    },
    {
      id: 2,
      title: "IceBreaker",
      description: "A social party game that creates a personalized, one-of-a-kind experience every time it's launched — using the power of large language models to generate infinite game variations and dynamic NPC personalities.",
      image: "/lovable-uploads/c84c09a9-5d91-432f-8d78-e622f1430696.png",
      tags: ["entrepreneurship"]
    },
    {
      id: 3,
      title: "LLM for fewshot",
      description: "Documentation of unexpected intelligence arising from simple rules. This ongoing series examines the moments when systems transcend their original programming.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      tags: ["research oriented project"]
    }
  ];

  const handleExploreClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal mb-6">
            Gallery of Works
          </h2>
          <p className="curator-note text-lg max-w-2xl mx-auto">
            Each piece represents a dialogue between human curiosity and machine intelligence, 
            curated to reveal the beauty within complexity.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''} group`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 hover:shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''} space-y-6`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-sm bg-dusty/20 text-charcoal rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="gallery-piece-title">
                  {project.title}
                </h3>
                
                <div className="w-16 h-px bg-dusty mb-6"></div>
                
                <p className="curator-note text-lg leading-relaxed">
                  {project.description}
                </p>

                <button 
                  onClick={() => handleExploreClick(project)}
                  className="group relative inline-flex items-center px-6 py-3 bg-dusty/20 hover:bg-dusty/40 text-charcoal font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 border border-dusty/30 hover:border-dusty/60"
                >
                  <span className="mr-3">Explore piece</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-px bg-current transition-all duration-300 group-hover:w-8"></div>
                    <div className="w-0 h-0 border-l-4 border-l-current border-y-2 border-y-transparent"></div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default GallerySection;
