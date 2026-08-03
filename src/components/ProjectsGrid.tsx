'use client';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
