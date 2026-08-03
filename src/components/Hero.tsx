'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FileText, FolderGit2, Link2, Mail, Sparkles } from 'lucide-react';
import { personalBio, contactInfo } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 bg-white border-b border-neutral-100">
      {/* Hero Greeting Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-4xl sm:text-6xl font-bold text-neutral-900 tracking-tight mb-3"
        >
          Hello, I am {personalBio.name.split(' ')[0]}!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-lg sm:text-2xl text-neutral-500 italic mb-8 max-w-2xl mx-auto"
        >
          {personalBio.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-6 py-3 border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-sm"
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
            className="bg-neutral-50/80 border border-neutral-200 rounded-lg p-6 shadow-sm"
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
            className="md:col-span-2 space-y-5"
          >
            <h2 className="font-mono text-2xl font-bold text-neutral-900 tracking-tight mb-2">
              About Me
            </h2>
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
                <span>Download Resume</span>
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
