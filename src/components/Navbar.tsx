'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalBio } from '@/data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Extracurriculars', href: '#extracurriculars' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-base font-bold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          {personalBio.name}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalBio.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-sm"
          >
            Resume
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-200 px-4 py-4 shadow-lg"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-wider text-neutral-700 hover:text-neutral-900 py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={personalBio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-wider text-center py-2 border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-sm mt-2"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
