'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/data/portfolioData';

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
        <h3 className="font-mono text-xl font-bold text-neutral-900">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
          {project.timeframe}
        </span>
      </div>

      {project.subtitle && (
        <p className="font-serif text-sm font-semibold text-neutral-700 mb-3">
          {project.subtitle}
        </p>
      )}

      <p className="font-serif text-sm text-neutral-600 leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="space-y-2 text-sm font-serif text-neutral-700 leading-relaxed mb-4">
        {project.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="font-mono text-neutral-400 mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-neutral-100 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-mono text-xs uppercase text-neutral-500">
          <span className="font-semibold">Tech stack: </span>
          {project.techStack.join(' · ')}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <span>View repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.devpostUrl && (
            <a
              href={project.devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <span>View Devpost</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <span>View demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
