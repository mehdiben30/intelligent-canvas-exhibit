
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
          details: `The goal of this project was to gain a deep, hands-on understanding of Transformer architectures and the underlying code that powers them. To do so, I implemented the model presented in Andrej Karpathy's video "Let's Build GPT: From Scratch, in Code, Spelled Out." I then improved the implementation using several state-of-the-art techniques in large language model training.

The result achieved comparable performance while reducing the number of training steps by 68%, all on a significantly smaller GPU (T4 vs. A100).

You can find the complete code in the GitHub repository as well as a concise report outlining the methodology, improvements, and results of the project.`,
          technologies: ["Python", "PyTorch", "Transformers"],
          link: "https://github.com/mehdiben30/GPT-Implementation"
        };
      case 2:
        return {
          details: `Driven by the belief that large language models can meaningfully enhance everyday experiences, I initiated this project to explore how AI could enrich social interactions — encouraging people to express themselves more openly, forge authentic connections, and share memorable, engaging moments.

The project is being developed in collaboration with a multidisciplinary team of four, including an engineer from CentraleSupélec, an AI scientist from ETH Zurich, and a designer.

We aim to launch by the end of 2025. The demo below showcases an early version of our MVP — significantly evolved since, but offering a preview of the direction we're pursuing.`,
          technologies: ["React", "Node.js", "AI/ML"],
          link: ""
        };
      case 3:
        return {
          details: `
            <p>
              As part of my academic work at Paris Cité, I contributed to a group project based on the 2023 paper <i>'LLMs Enable Few-Shot Clustering'</i>, which explores how large language models (LLMs) can enable clustering with minimal labeled data. The paper proposes using LLMs to generate semantic representations of data points for clustering, thereby reducing the need for extensive labeled datasets.
            </p>
            <p>
              For this project, our team used a lighter model, GPT-4 nano, instead of the models used in the original paper, which employed GPT-3.5 Turbo. Due to Paris Cité's intellectual property policies, I am unable to publicly share the code or results, as they are considered proprietary to the institution. However, here's a link to the research paper: 
              <a href="https://arxiv.org/abs/2307.00524" target="_blank" rel="noopener noreferrer" class="text-dusty hover:text-charcoal transition-colors duration-300 underline">LLMs Enable Few-Shot Clustering</a>.
            </p>
          `,
          isHtml: true,
          technologies: ["Python", "GPT-4", "Machine Learning"],
          link: "https://arxiv.org/abs/2307.00524"
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
      <DialogContent className="max-w-2xl max-h-[70vh] overflow-y-auto bg-gradient-to-br from-porcelain to-dusty/10 border-dusty/20">
        <DialogHeader className="pb-4 border-b border-dusty/20">
          <DialogTitle className="text-xl font-playfair text-charcoal leading-tight">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs bg-dusty/30 text-charcoal rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          {projectDetails.isHtml ? (
            <div 
              className="text-sm leading-relaxed text-charcoal/90 space-y-3"
              dangerouslySetInnerHTML={{ __html: projectDetails.details }}
            />
          ) : (
            <DialogDescription className="text-sm leading-relaxed text-charcoal/90 whitespace-pre-line">
              {projectDetails.details}
            </DialogDescription>
          )}

          {/* Technologies */}
          {projectDetails.technologies && projectDetails.technologies.length > 0 && (
            <div className="pt-2">
              <h4 className="font-medium text-charcoal mb-2 text-sm">Technologies Used</h4>
              <div className="flex flex-wrap gap-1.5">
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
            <div className="pt-3 border-t border-dusty/20">
              <a 
                href={projectDetails.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-dusty hover:text-charcoal transition-colors duration-300 text-sm font-medium"
              >
                <span>View Project</span>
                <div className="w-3 h-px bg-current"></div>
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
