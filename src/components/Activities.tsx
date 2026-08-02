'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';
import { activitiesData, educationInfo } from '@/data/portfolioData';

export default function Activities() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Leadership & <span className="text-cyan-400">Activities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Extracurricular involvement, volunteering, and community teaching.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          {activitiesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[43px] sm:-left-[51px] top-1 p-2 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 shadow-md">
                <Briefcase className="w-4 h-4" />
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-4">{item.organization}</p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Honors & Scholarships</h4>
              <p className="text-xs text-slate-400">
                {educationInfo.honorsAndAwards.join(' • ')} • {educationInfo.scholarships.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
