import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ShieldCheck, Database, Bell, BarChart2, CheckCircle2, Cloud, Key, Cpu } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import Badge from './ui/Badge';

export default function Experience() {
  const [selectedTech, setSelectedTech] = useState(null);

  const exp = experienceData[0]; // Karmacts Systems

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>02. Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Internship</span>
          </h2>
        </div>

        {/* Visual Timeline Card */}
        <div className="relative border-l-2 border-slate-800 ml-4 lg:ml-8 pl-6 lg:pl-10 space-y-12">
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[31px] lg:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-bgDark border-2 border-sky-400 flex items-center justify-center shadow-glow-cyan">
              <div className="w-2 h-2 rounded-full bg-sky-400"></div>
            </div>

            {/* Main Internship Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-bgCard border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-xl">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Engineering Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                
                {/* Highlight 1 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-900 transition-colors">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm mb-2">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>8-Role RBAC & JWT Security</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Built a role-based issue-tracking platform managing the full issue lifecycle across 8 user roles with JWT authentication and strict RBAC policy enforcement.
                  </p>
                </div>

                {/* Highlight 2 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-900 transition-colors">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-2">
                    <Cloud className="w-4 h-4 shrink-0" />
                    <span>AWS S3 Presigned URL Uploads</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Implemented image upload functionality using AWS S3 and generated presigned URLs for secure, temporary, authorized access to private issue media.
                  </p>
                </div>

                {/* Highlight 3 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-900 transition-colors">
                  <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-2">
                    <Bell className="w-4 h-4 shrink-0" />
                    <span>3-Tier SLA Escalation System</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Designed a 3-tier SLA escalation system with automated status transitions and a dual in-app + email notification dispatch pipeline.
                  </p>
                </div>

                {/* Highlight 4 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:bg-slate-900 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                    <BarChart2 className="w-4 h-4 shrink-0" />
                    <span>Redux Toolkit & Analytics Dashboard</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Managed frontend application state with Redux Toolkit and built a role-specific analytics dashboard visualizing real-time issue trends and escalation metrics.
                  </p>
                </div>

              </div>

              {/* Interactive Technologies Badges */}
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center justify-between">
                  <span>Interactive Tech Stack Badges (Click to highlight):</span>
                  {selectedTech && (
                    <button 
                      onClick={() => setSelectedTech(null)} 
                      className="text-[11px] text-sky-400 hover:underline"
                    >
                      Reset filter
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      interactive
                      active={selectedTech === tech}
                      onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                      variant="cyan"
                      size="md"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
