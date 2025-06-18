
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
          details: 'The goal of this project was to gain a deep, hands-on understanding of Transformer architectures and the underlying code that powers them. To do so, I implemented and extended the model presented in Andrej Karpathy\'s video "Let\'s Build GPT: From Scratch, in Code, Spelled Out." I then improved the implementation using several state-of-the-art techniques in large language model training. The result achieved comparable performance while reducing training time by 68%, all on a significantly smaller GPU (T4 vs. A100). You can find the complete code in the GitHub repository as well as a concise report outlining the methodology, improvements, and results of the project.',
          technologies: ["Python", "PyTorch", "Transformers"],
          link: "https://github.com/example/attention-viz"
        };
      case 2:
        return {
          details: `Driven by the belief that large language models can meaningfully enhance everyday experiences, I initiated this project to explore how AI could enrich social interactions — encouraging people to express themselves more openly, forge authentic connections, and share memorable, engaging moments.

The project is being developed in collaboration with a multidisciplinary team of four, including an engineer from CentraleSupélec, an AI scientist from ETH Zurich, and a designer.

We aim to launch by the end of 2025. The demo below showcases an early version of our MVP — significantly evolved since, but offering a preview of the direction we're pursuing.`,
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
