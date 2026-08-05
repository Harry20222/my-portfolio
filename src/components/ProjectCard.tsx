'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FileText, Activity, Video, Database, Code2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';

export default function ProjectCard({ project }: { project: Project }) {
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
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white/90 border border-slate-200 rounded-[2rem] p-6 shadow-[0_12px_35px_-18px_rgba(15,23,42,0.35)] transition-all duration-300 flex flex-col justify-between h-full hover:border-blue-200 hover:shadow-[0_18px_45px_-20px_rgba(29,78,216,0.38)]"
    >
      <div>
        <br />
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
      <div className="border-t flex justify-between gap-4 pt-4">
        <div className="flex font-mono text-[10px] uppercase">
          <span>{"\u00A0\u00A0\u00A0\u00A0"}</span>
          {project.techStack.map((tech, idx) => (
            <span key={tech} className="inline-flex items-center">
              {idx > 0 && <span className="text-slate-400">-</span>}
              <span>{tech}</span>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono">
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
        </div>
      </div>
    </motion.article>
  );
}
