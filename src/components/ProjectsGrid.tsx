// ProjectsGrid.tsx

import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/portfolioData';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 bg-[#f0f6ff] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
            Projects
          </h2>
          <p className="font-serif text-sm text-neutral-500 italic">
            Click on any project to learn more
          </p>
          <div className="w-16 h-0.5 bg-neutral-800 mt-3 mx-auto sm:mx-0" />
        </div>

        {/* Replaced CSS Grid with a explicit flex/wrap gap layout */}
        <div className="flex flex-wrap -mx-4">
          {projectsData.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4">
              <ProjectCard project={project} />
            </div>
          ))}
          <div className="flex flex-col gap-y-8"></div>
        </div>
      </div>
    </section>
  );
}