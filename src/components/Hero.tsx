'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FileText, FolderGit2, Link2, Mail } from 'lucide-react';
import { personalBio, contactInfo } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.24em] text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.75 rounded-full">
            Open to co-op {personalBio.coopAvailability}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono text-4xl sm:text-6xl font-bold text-neutral-900 tracking-tight mb-3"
        >
          Hello, I am {personalBio.name.split(' ')[0]}!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-lg sm:text-2xl text-slate-600 mb-3 max-w-3xl mx-auto"
        >
          {personalBio.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-6 py-3 bg-neutral-900 text-white hover:bg-blue-700 transition-colors rounded-full shadow-[0_10px_30px_-15px_rgba(15,23,42,0.45)]"
          >
            <span>Discover more</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Main Bio & Quick Info Card Section */}
      <div id="about" className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Quick Info Box (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/85 border border-slate-200 rounded-[2rem] p-6 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.25)]"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4 pb-2 border-b border-neutral-200">
              Quick Info
            </h3>
            <dl className="font-serif text-sm space-y-3">
              <div>
                <dt className="font-mono text-xs text-neutral-500 uppercase">Name:</dt>
                <dd className="font-semibold text-neutral-900">{personalBio.name}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-neutral-500 uppercase">Pronouns:</dt>
                <dd className="text-neutral-800">{personalBio.pronouns}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-neutral-500 uppercase">School:</dt>
                <dd className="text-neutral-800">{personalBio.university}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-neutral-500 uppercase">Class / Year:</dt>
                <dd className="text-neutral-800">{personalBio.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-neutral-500 uppercase">Major:</dt>
                <dd className="text-neutral-800">{personalBio.major}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-neutral-500 uppercase">Hometown:</dt>
                <dd className="text-neutral-800">{personalBio.hometown}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-neutral-500 uppercase">GPA:</dt>
                <dd className="text-neutral-800 font-mono text-xs font-bold">{personalBio.gpa.toFixed(2)} / 4.00</dd>
              </div>
            </dl>
          </motion.div>

          {/* Main Intro Paragraphs & Resume Button (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-5 bg-white/80 border border-slate-200 rounded-[2rem] p-6 sm:p-8 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.25)]"
          >
            <h2 className="font-mono text-2xl font-bold text-neutral-900 tracking-tight mb-2">
              About Me
            </h2>
            <p className="font-serif text-base sm:text-lg text-neutral-700 leading-relaxed">
              I build AI-powered, backend-facing tools that turn messy real-world data into concrete user value, from medical-bill understanding to ECG classification and hackathon-grade product pipelines.
            </p>
            <p className="font-serif text-base sm:text-lg text-neutral-700 leading-relaxed">
              {personalBio.bioParagraph1}
            </p>
            <p className="font-serif text-base sm:text-lg text-neutral-700 leading-relaxed">
              {personalBio.bioParagraph2}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={personalBio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors rounded-sm font-semibold shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <div className="flex items-center gap-2 ml-2">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-800 transition-colors rounded-sm"
                >
                  <FolderGit2 className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-800 transition-colors rounded-sm"
                >
                  <Link2 className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  aria-label="Email Me"
                  className="p-2.5 border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-800 transition-colors rounded-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
