import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, Cpu, Database, ShieldCheck, ArrowRight, Activity, Terminal } from 'lucide-react';
import Badge from './ui/Badge';
import Button from './ui/Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-xl">
        
        {/* Backdrop click */}
        <motion.div
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          className="relative w-full max-w-4xl bg-bgCard border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400">
              <Terminal className="w-4 h-4" />
              <span>System Architecture & Engineering Overview</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close architecture modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
            
            {/* Title & Tagline */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950/80 text-sky-300 border border-sky-800/60 font-semibold">
                  Featured Case Study
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {project.subtitle}
                </span>
              </div>
              
              <h3 className="text-3xl font-extrabold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Flow Visualization */}
            {project.architecture && (
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="text-xs font-mono uppercase text-sky-400 tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Data Flow & Component Pipeline</span>
                </div>

                <div className="space-y-2">
                  {project.architecture.flowDiagram.map((step, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 font-mono text-xs text-slate-200"
                    >
                      <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                {/* Subsystem breakdown grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded bg-slate-900/40 border border-slate-800/60">
                    <span className="text-sky-400 font-mono font-semibold block mb-1">Frontend Layer:</span>
                    <span className="text-slate-300">{project.architecture.client}</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/40 border border-slate-800/60">
                    <span className="text-indigo-400 font-mono font-semibold block mb-1">Backend Server:</span>
                    <span className="text-slate-300">{project.architecture.server}</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/40 border border-slate-800/60">
                    <span className="text-emerald-400 font-mono font-semibold block mb-1">Data Store:</span>
                    <span className="text-slate-300">{project.architecture.database}</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/40 border border-slate-800/60">
                    <span className="text-purple-400 font-mono font-semibold block mb-1">Security / Gateway:</span>
                    <span className="text-slate-300">{project.architecture.security || project.architecture.services}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Key Production Capabilities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Technologies Employed:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="cyan" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/80">
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                icon={Github}
                href={project.github}
                target="_blank"
              >
                View Code on GitHub
              </Button>

              <Button
                variant="outline"
                size="sm"
                icon={ExternalLink}
                href={project.demo}
                target="_blank"
              >
                Live Repository / Demo
              </Button>
            </div>

            <Button variant="ghost" size="sm" onClick={onClose}>
              Close Preview
            </Button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
