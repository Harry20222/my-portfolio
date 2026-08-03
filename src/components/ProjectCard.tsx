'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FileText, Activity, Video, Database, Code2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';

export default function ProjectCard({ project }: { project: Project }) {
  const targetUrl = project.githubUrl || project.devpostUrl || project.demoUrl || '#';

  const renderIcon = () => {
    switch (project.iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-white group-hover:text-neutral-900 transition-colors mb-3" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-white group-hover:text-neutral-900 transition-colors mb-3" />;
      case 'Video':
        return <Video className="w-6 h-6 text-white group-hover:text-neutral-900 transition-colors mb-3" />;
      case 'Database':
        return <Database className="w-6 h-6 text-white group-hover:text-neutral-900 transition-colors mb-3" />;
      default:
        return <Code2 className="w-6 h-6 text-white group-hover:text-neutral-900 transition-colors mb-3" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white border border-neutral-200 rounded-lg p-6 shadow-sm transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          {renderIcon()}
          <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
            {project.timeframe}
          </span>
        </div>

        <h3 className="font-mono text-xl font-bold text-neutral-900 mb-1">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="font-serif text-xs text-neutral-600 italic mb-3">
            {project.subtitle}
          </p>
        )}

        <p className="font-serif text-xs text-neutral-700 leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="space-y-1 mb-6 font-serif text-xs text-neutral-700">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span className="font-mono text-neutral-400">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase border border-neutral-300 text-neutral-900 px-2.5 py-0.5 rounded-full transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-mono text-[11px] text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          <span>Learn more</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
