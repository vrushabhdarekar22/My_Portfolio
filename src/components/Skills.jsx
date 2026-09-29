import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  FileCode, 
  Terminal, 
  Database, 
  Layout, 
  Cpu, 
  Globe, 
  Server, 
  Workflow, 
  Radio, 
  FolderGit2, 
  Table, 
  HardDrive, 
  Binary, 
  Box, 
  Layers, 
  TerminalSquare, 
  Share2, 
  KeyRound, 
  Cloud, 
  GitBranch, 
  Send, 
  UploadCloud,
  CheckCircle2,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';
import { skillsCategories } from '../data/skillsData';
import Badge from './ui/Badge';

const iconMap = {
  Code2, FileCode, Terminal, Database, Layout, Cpu, Globe,
  Server, Workflow, Radio, FolderGit2, Table, HardDrive,
  Binary, Box, Layers, TerminalSquare, Share2, KeyRound,
  Cloud, GitBranch, Send, UploadCloud
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredCategories = activeCategory === 'all' 
    ? skillsCategories 
    : skillsCategories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>04. Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Skills Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Hover over any technical skill to reveal real-world project associations, architectural usage, and system context.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-800">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeCategory === 'all'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 shadow-glow-cyan font-bold'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            All Skill Domains
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 shadow-glow-cyan font-bold'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Skills Grid */}
          <div className="lg:col-span-8 space-y-8">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  {cat.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    const isHovered = hoveredSkill?.name === skill.name;

                    return (
                      <motion.div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                          isHovered 
                            ? 'bg-slate-900 border-sky-400/80 shadow-glow-cyan' 
                            : 'bg-bgCard/90 border-slate-800/90 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${isHovered ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-900 text-slate-400'}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">
                              {skill.name}
                            </div>
                            <div className="text-[10px] font-mono text-slate-400">
                              {skill.level}
                            </div>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-sky-400/80 bg-sky-950/40 px-2 py-0.5 rounded border border-sky-900/40">
                          Hover info
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contextual Inspection Panel */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 rounded-2xl bg-bgCard border border-slate-800 shadow-2xl relative overflow-hidden min-h-[360px] flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl"></div>

              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="text-xs font-mono uppercase text-sky-400 font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Skill Provenance Inspector</span>
                  </div>
                </div>

                {hoveredSkill ? (
                  <motion.div
                    key={hoveredSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="text-2xl font-extrabold text-white mb-1">
                        {hoveredSkill.name}
                      </div>
                      <span className="inline-block text-xs font-mono text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-800/60">
                        Level: {hoveredSkill.level}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase mb-1">Description:</div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {hoveredSkill.description}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                        <LinkIcon className="w-3.5 h-3.5 text-sky-400" />
                        <span>Used In / Associated With:</span>
                      </div>
                      <div className="space-y-1.5">
                        {hoveredSkill.usedIn.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-center text-slate-400 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                      <Code2 className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="text-xs font-mono text-slate-300 font-semibold">
                      Hover over any skill node
                    </div>
                    <p className="text-xs max-w-xs text-slate-400">
                      Hovering displays where Vrushabh applied the technology in real enterprise internships and production projects.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Quick Info */}
              <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Verified Capabilities</span>
                <span className="text-sky-400">Production Ready</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
