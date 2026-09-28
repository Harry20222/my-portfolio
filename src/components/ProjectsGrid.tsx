// ProjectsGrid.tsx

import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/portfolioData';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-neutral-800" />
        </div>

        <div className="relative border-l-2 border-neutral-300 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
          {projectsData.map((project, index) => (
            <div key={project.title} className="relative">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-white shadow-sm" />
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
