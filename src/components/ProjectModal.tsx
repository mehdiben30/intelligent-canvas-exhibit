
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details?: string;
  technologies?: string[];
  link?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const getProjectDetails = (projectId: number) => {
    switch (projectId) {
      case 1:
        return {
          details: "This implementation explores the revolutionary 'Attention is All You Need' paper, visualizing how transformer models process and understand language. The project includes interactive demonstrations of self-attention mechanisms, multi-head attention patterns, and positional encoding visualizations. Through careful analysis of attention weights, we reveal the hidden relationships that models discover in text, making the abstract mathematical concepts tangible and intuitive.",
          technologies: ["Python", "PyTorch", "Transformers", "D3.js", "React"],
          link: "https://github.com/example/attention-viz"
        };
      case 2:
        return {
          details: `Convinced that large language models can enhance the everyday experiences we live through, I had the idea of using them to improve social interaction — helping people open up, connect more easily, and most importantly, create fun and meaningful moments.

I'm developing this project with a team of four, including an engineer from CentraleSupélec, an AI scientist from ETH Zurich, and a designer.

We plan to launch by the end of 2025. Below is a demo of the first version of our MVP — already far from where we are today, but it offers a glimpse into what we're building.`,
          technologies: ["React", "Node.js", "OpenAI API", "Socket.io", "MongoDB"],
          link: "https://icebreaker-game.com"
        };
      case 3:
        return {
          details: "This research project investigates how large language models can be effectively used for few-shot learning tasks. By analyzing emergent behaviors in various prompting strategies, we document unexpected intelligence patterns that arise from minimal training examples. The work examines the boundary between programmed responses and genuine understanding, revealing how simple rules can lead to complex, seemingly intelligent behavior.",
          technologies: ["Python", "Hugging Face", "Jupyter", "Pandas", "Matplotlib"],
          link: "https://arxiv.org/abs/example"
        };
      default:
        return {
          details: project.description,
          technologies: [],
          link: ""
        };
    }
  };

  const projectDetails = getProjectDetails(project.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-charcoal">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-sm bg-dusty/20 text-charcoal rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <DialogDescription className="text-lg leading-relaxed text-charcoal/80 whitespace-pre-line">
            {projectDetails.details}
          </DialogDescription>

          {/* Technologies */}
          {projectDetails.technologies && projectDetails.technologies.length > 0 && (
            <div>
              <h4 className="font-medium text-charcoal mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {projectDetails.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs bg-charcoal/10 text-charcoal rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Link */}
          {projectDetails.link && (
            <div className="pt-4 border-t border-charcoal/10">
              <a 
                href={projectDetails.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-dusty hover:text-charcoal transition-colors duration-300"
              >
                <span className="font-medium">View Project</span>
                <div className="w-4 h-px bg-current"></div>
                <div className="w-0 h-0 border-l-2 border-l-current border-y-1 border-y-transparent"></div>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
