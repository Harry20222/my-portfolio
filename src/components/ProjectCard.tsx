'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FileText, Activity, Video, Database, Code2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';

export default function ProjectCard({ project }: { project: Project }) {
  const targetUrl = project.demoUrl || project.devpostUrl || project.githubUrl || '#';
  const linkLabel = project.demoUrl
    ? 'View demo'
    : project.devpostUrl
      ? 'View Devpost'
      : project.githubUrl
        ? 'View repository'
        : 'Learn more';

  const renderIcon = () => {
    switch (project.iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-neutral-900 mb-3" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-neutral-900 mb-3" />;
      case 'Video':
        return <Video className="w-6 h-6 text-neutral-900 mb-3" />;
      case 'Database':
        return <Database className="w-6 h-6 text-neutral-900 mb-3" />;
      default:
        return <Code2 className="w-6 h-6 text-neutral-900 mb-3" />;
    }
  };

  return (
    <motion.a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group block bg-white/90 border border-slate-200 rounded-[2rem] p-6 shadow-[0_12px_35px_-18px_rgba(15,23,42,0.35)] transition-all duration-300 flex flex-col justify-between h-full hover:border-blue-200 hover:shadow-[0_18px_45px_-20px_rgba(29,78,216,0.38)]"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="rounded-xl bg-blue-50 p-2.5">{renderIcon()}</div>
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
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-slate-600">
          {project.techStack.map((tech, idx) => (
            <span key={tech} className="inline-flex items-center gap-1.5">
              {idx > 0 && <span className="text-slate-400">-</span>}
              <span>{tech}</span>
            </span>
          ))}
        </div>

        <span className="flex items-center gap-1 font-mono text-[11px] text-neutral-900 group-hover:text-neutral-600 transition-colors">
          <span>{linkLabel}</span>
          <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </motion.a>
  );
}
