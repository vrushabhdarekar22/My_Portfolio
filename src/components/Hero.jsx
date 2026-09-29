import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Code2, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  TerminalSquare
} from 'lucide-react';
import { personalData } from '../data/personalData';
import Button from './ui/Button';
import Badge from './ui/Badge';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Pipeline */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300 font-sans">{personalData.status}</span>
              <span className="text-slate-600">|</span>
              <span className="text-sky-400 flex items-center gap-1 font-sans font-medium">
                <MapPin className="w-3.5 h-3.5 inline" /> {personalData.location}
              </span>
            </div>

            {/* Main Name Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Vrushabh <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Darekar</span>
            </h1>

            {/* Subhead / Role */}
            <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl font-semibold text-slate-200 mb-6">
              <span className="font-mono text-sky-400">&gt;_</span>
              <span>Software Engineer / Full-Stack Developer</span>
              <span className="hidden sm:inline text-xs px-2.5 py-1 rounded bg-sky-950/60 border border-sky-800/60 text-sky-300 font-mono">
                PICT Pune '27
              </span>
            </div>

            {/* Supporting Tagline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              "{personalData.heroTagline}"
            </p>

            {/* Dynamic Career Flow Visual Pipeline */}
            <div className="w-full mb-8 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2">
                <TerminalSquare className="w-4 h-4 text-sky-400" />
                <span>Engineering Competency Flow</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {personalData.careerPipeline.map((item, idx) => (
                  <div 
                    key={item.step} 
                    className="relative group p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-sky-400 mb-1">
                      <span>{item.step}</span>
                      {idx < personalData.careerPipeline.length - 1 && (
                        <span className="hidden sm:inline text-slate-600">→</span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-200 group-hover:text-sky-300 transition-colors">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>

              <Button
                variant="glow"
                size="lg"
                icon={FileText}
                onClick={() => scrollToSection('resume')}
              >
                View Resume
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span className="font-mono text-xs text-slate-400">Connect:</span>
              <a 
                href={personalData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalData.email}`} 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all shadow-sm"
                aria-label="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-xs text-slate-300">vrushabhdarekar45@gmail.com</span>
            </div>

          </motion.div>

          {/* Right Column: Modern Profile Photo Frame & Micro UI Floating Badges */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Subtle Glowing Ring behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 opacity-20 blur-2xl animate-pulse-slow"></div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-tr from-sky-500/40 via-indigo-500/40 to-purple-500/40 shadow-2xl border border-sky-400/30 backdrop-blur-md">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-900 bg-slate-950 relative group">
                  <img
                    src="/profile.jpg"
                    alt="Vrushabh Darekar"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image path is altered
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgDark/60 via-transparent to-transparent opacity-40"></div>
                </div>
              </div>

              {/* Floating UI Pill 1: Education (Top Right) */}
              <motion.div 
                className="absolute -top-3 -right-3 sm:top-2 sm:-right-6 bg-bgCard/95 border border-sky-500/30 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs font-mono">
                  9.45
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">PICT Pune IT</div>
                  <div className="text-xs font-semibold text-slate-200">CGPA 9.45 / 10</div>
                </div>
              </motion.div>

              {/* Floating UI Pill 2: LeetCode Knight (Bottom Left) */}
              <motion.div 
                className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 bg-bgCard/95 border border-amber-500/30 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                  🏆
                </div>
                <div>
                  <div className="text-[11px] font-mono text-amber-400 font-semibold">LeetCode Knight</div>
                  <div className="text-xs font-semibold text-slate-200">Rating 1857 (700+ Solved)</div>
                </div>
              </motion.div>

              {/* Floating UI Pill 3: Internship (Bottom Right) */}
              <motion.div 
                className="absolute -bottom-6 right-2 sm:-bottom-4 sm:right-6 bg-bgCard/95 border border-emerald-500/30 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">SDE Intern</div>
                  <div className="text-xs font-semibold text-emerald-400">Karmacts Systems</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
