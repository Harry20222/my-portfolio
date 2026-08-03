'use client';

import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Calendar } from 'lucide-react';
import { Project } from '@/data/portfolioData';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-cyan-5000/10 text-cyan-400 border border-cyan-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="flex items-center gap-1 text-xs text-slate-500 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            {project.timeframe}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs text-slate-400 italic mb-3">{project.subtitle}</p>
        )}

        <ul className="space-y-2 mb-6 text-sm text-slate-300">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold text-xs mt-1">•</span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs bg-slate-800/80 text-slate-400 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="View Source Code"
            >
              <GitBranch className="w-4 h-4" />
            </a>
          )}
          {project.devpostUrl && (
            <a
              href={project.devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded text-xs font-semibold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
            >
              Devpost
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="View Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
