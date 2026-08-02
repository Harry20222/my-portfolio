'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { personalBio, contactInfo, educationInfo } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE FOR CO-OP: {personalBio.coopAvailability}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            {personalBio.university} • CS
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">{personalBio.name}</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-6"
        >
          {personalBio.bioSummary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-8 max-w-xl text-sm text-slate-400 flex flex-col sm:flex-row justify-between gap-3 text-left"
        >
          <div>
            <p className="font-semibold text-slate-200">{educationInfo.degree}</p>
            <p className="text-xs text-slate-400">{educationInfo.institution} | Graduation: {educationInfo.graduationDate}</p>
          </div>
          <div className="sm:text-right">
            <span className="inline-block px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
              GPA: {educationInfo.gpa.toFixed(2)}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 justify-center sm:justify-start"
        >
          <a
            href="https://drive.google.com/open?id=1yCHs_BdM7G5E-bM6fg5TT90wzfrPN569"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            Contact Me
          </a>

          <div className="flex items-center gap-3 ml-0 sm:ml-2 pt-2 sm:pt-0">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.devpost}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devpost Profile"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors text-xs font-bold"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
