'use client';

import { FolderGit2, Link2, Mail, Sparkles } from 'lucide-react';
import { personalBio, contactInfo } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#2f2f2f] text-white border-t border-neutral-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <p className="font-serif text-sm text-neutral-300">
          Copyright © {new Date().getFullYear()} {personalBio.name} | Design Inspired by Maya Nigrin (Tooplate)
        </p>

        {/* Circular White Social Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <Link2 className="w-5 h-5" />
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <FolderGit2 className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href={contactInfo.devpost}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Devpost"
            className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
