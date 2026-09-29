import React from 'react';
import { Terminal, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalData } from '../data/personalData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2.5 font-mono text-left focus:outline-none group"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                Vrushabh Darekar
              </span>
              <span className="text-[11px] text-slate-400 block font-sans">
                Software Engineer • PICT Pune
              </span>
            </div>
          </button>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-sky-400 transition-colors">Achievements</a>
            <a href="#resume" className="hover:text-sky-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-slate-400">
            <a 
              href={personalData.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-sky-400 hover:border-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={personalData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-sky-400 hover:border-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${personalData.email}`} 
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-sky-400 hover:border-sky-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Vrushabh Darekar. Engineered for Performance & Scale.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
