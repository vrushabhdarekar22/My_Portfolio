import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowUpRight, Sparkles, Shield, Cpu, Radio, Network } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Badge from './ui/Badge';
import Button from './ui/Button';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>03. Systems & Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Production-oriented full-stack software systems engineered with security, scalability, and real-time responsiveness.
          </p>
        </div>

        {/* Large Interactive Showcase Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-3xl bg-bgCard border border-slate-800 p-6 sm:p-10 hover:border-sky-500/50 hover:shadow-glow-cyan transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Animated Background Glow on Card Hover */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-300">
                      0{index + 1} / Full-Stack System
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Pill Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2">
                    {project.keyMetrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] font-mono text-slate-300 text-center font-medium"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Technology Stack:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="cyan" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <Button
                      variant="primary"
                      size="md"
                      icon={Layers}
                      onClick={() => setActiveModalProject(project)}
                    >
                      View System Architecture
                    </Button>

                    <Button
                      variant="outline"
                      size="md"
                      icon={Github}
                      href={project.github}
                      target="_blank"
                    >
                      GitHub Repo
                    </Button>

                    <Button
                      variant="ghost"
                      size="md"
                      icon={ExternalLink}
                      href={project.demo}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  </div>

                </div>

                {/* Right Interactive Architecture Visual Card Preview */}
                <div className="lg:col-span-5">
                  <div 
                    onClick={() => setActiveModalProject(project)}
                    className="cursor-pointer group/preview relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-400/60 transition-all duration-300 overflow-hidden shadow-2xl"
                  >
                    {/* Simulated Architecture Flow Box */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3 mb-4">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <Network className="w-4 h-4" /> System Topology
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        Interactive Modal →
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      {project.architecture.flowDiagram.map((step, idx) => (
                        <div 
                          key={idx}
                          className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 group-hover/preview:border-sky-500/30 transition-all text-slate-300 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                          <span className="truncate">{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-sky-400">
                      <span>Click to open deep dive</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/preview:translate-x-1 group-hover/preview:-translate-y-1 transition-transform" />
                    </div>

                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Deep Architecture Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
