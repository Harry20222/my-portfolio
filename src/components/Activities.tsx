'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Users, Code, Compass, ExternalLink } from 'lucide-react';
import { educationList, experienceList, extracurricularsList } from '@/data/portfolioData';

export default function Activities() {
  return (
    <div>
      {/* SECTION 1: MY EDUCATION */}
      <section id="education" className="py-20 bg-[#f0f6ff] border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
              My Education
            </h2>
            <div className="w-16 h-0.5 bg-neutral-800" />
          </div>

          <div className="relative border-l-2 border-neutral-300 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
            {educationList.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline node circle */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-white shadow-sm" />

                <div className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-mono text-xl font-bold text-neutral-900">
                      {edu.institution}
                    </h3>
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                      {edu.period}
                    </span>
                  </div>

                  <p className="font-serif text-sm font-bold text-neutral-800 mb-2">
                    {edu.degree}
                  </p>

                  <div className="font-serif text-sm text-neutral-700 space-y-2 mb-4">
                    <p><span className="font-mono text-xs uppercase text-neutral-500 font-semibold">Major:</span> {edu.major}</p>
                    {edu.minorOrSpecialization && (
                      <p><span className="font-mono text-xs uppercase text-neutral-500 font-semibold">Specialization:</span> {edu.minorOrSpecialization}</p>
                    )}
                    {edu.gpa && (
                      <p><span className="font-mono text-xs uppercase text-neutral-500 font-semibold">GPA:</span> <span className="font-mono font-bold text-neutral-900">{edu.gpa.toFixed(2)} / 4.00</span></p>
                    )}
                  </div>

                  {edu.description && (
                    <p className="font-serif text-sm text-neutral-600 leading-relaxed mb-4">
                      {edu.description}
                    </p>
                  )}

                  {edu.coursework.length > 0 && (
                    <div className="mb-4">
                      <p className="font-mono text-xs uppercase text-neutral-500 font-bold mb-1">
                        Relevant Coursework:
                      </p>
                      <p className="font-serif text-sm text-neutral-700 leading-relaxed">
                        {edu.coursework.join(', ')}
                      </p>
                    </div>
                  )}

                  {edu.awardsAndScholarships.length > 0 && (
                    <div>
                      <p className="font-mono text-xs uppercase text-neutral-500 font-bold mb-1">
                        Honors & Awards:
                      </p>
                      <p className="font-serif text-sm text-neutral-700">
                        {edu.awardsAndScholarships.join(' • ')}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: MY EXPERIENCE */}
      <section id="experience" className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
              My Experience
            </h2>
            <div className="w-16 h-0.5 bg-neutral-800" />
          </div>

          <div className="relative border-l-2 border-neutral-300 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
            {experienceList.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline node circle */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-white shadow-sm" />

                <div className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="font-mono text-xl font-bold text-neutral-900">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-serif text-sm font-semibold text-neutral-700 mb-3">
                    {exp.title} {exp.location && `| ${exp.location}`}
                  </p>

                  <ul className="space-y-2 text-sm font-serif text-neutral-700 leading-relaxed mb-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="font-mono text-neutral-400 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.projectUrl && (
                    <div className="pt-2 border-t border-neutral-100">
                      <a
                        href={exp.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-neutral-900 hover:text-neutral-600 underline font-semibold transition-colors"
                      >
                        <span>View the open-source project my work was added to here.</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MY EXTRACURRICULARS */}
      <section id="extracurriculars" className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
              My Extracurriculars
            </h2>
            <div className="w-16 h-0.5 bg-neutral-800" />
          </div>

          <div className="space-y-16">
            {extracurricularsList.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  {/* Image Thumbnail Placeholder */}
                  <div className={`w-full ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-8 aspect-video flex flex-col items-center justify-center text-center shadow-inner">
                      {item.iconName === 'Users' && <Users className="w-10 h-10 text-neutral-400 mb-2" />}
                      {item.iconName === 'GraduationCap' && <GraduationCap className="w-10 h-10 text-neutral-400 mb-2" />}
                      {item.iconName === 'Code' && <Code className="w-10 h-10 text-neutral-400 mb-2" />}
                      {item.iconName === 'Compass' && <Compass className="w-10 h-10 text-neutral-400 mb-2" />}
                      <span className="font-mono text-xs uppercase text-neutral-500 font-bold tracking-wider">
                        {item.organization}
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className={`space-y-3 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-mono text-xl font-bold text-neutral-900">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-neutral-500">
                        {item.period}
                      </span>
                    </div>

                    <p className="font-serif text-sm font-semibold text-neutral-700">
                      {item.role} | {item.organization}
                    </p>

                    <p className="font-serif text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-1 font-serif text-xs text-neutral-600">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="font-mono text-neutral-400">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
