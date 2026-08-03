'use client';

import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/portfolioData';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software solutions across AI/ML applications, backend engineering, and mobile development.
          </p>
        </div>

        {/* Relaxed grid spacing to ensure hover transforms do not overlap adjacent cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}