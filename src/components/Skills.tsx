'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Languages, developer tools, and frameworks in my software toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      skill.highlight
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                        : 'bg-slate-800/80 text-slate-300 border border-slate-700/50'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
