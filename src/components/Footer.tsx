import { personalBio } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {personalBio.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-slate-300 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-slate-300 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-slate-300 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-slate-300 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
