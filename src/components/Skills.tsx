'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#f0f6ff] border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
            Technical Skills & Toolkit
          </h2>
          <div className="w-16 h-0.5 bg-neutral-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm"
            >
              <h3 className="font-mono text-lg font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-100">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      skill.highlight
                        ? 'border-neutral-800 bg-neutral-800 text-white font-semibold'
                        : 'border-neutral-300 bg-neutral-50 text-neutral-800'
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
