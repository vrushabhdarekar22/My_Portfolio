import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Award, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { personalData } from '../data/personalData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>01. Engineering Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Editorial Narrative */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-sky-400" />
                <span>Product-Oriented Software Engineer</span>
              </h3>

              <p className="mb-4">
                I am an Information Technology engineering student at <strong className="text-white">Pune Institute of Computer Technology (PICT), Pune</strong> (CGPA: 9.45 / 10.00), passionate about constructing high-throughput web applications and solving complex algorithmic challenges.
              </p>

              <p className="mb-4">
                My approach to software engineering centers on <strong className="text-sky-300">clean architecture</strong>, <strong className="text-sky-300">production security</strong>, and <strong className="text-sky-300">system reliability</strong>. During my internship at Karmacts Systems, I built role-based access control engines, AWS S3 presigned URL pipelines, and automated SLA escalation dispatchers.
              </p>

              <p>
                Whether optimizing algorithmic execution (700+ DSA problems, LeetCode Knight) or engineering offline-first real-time applications like Sahyatri, I thrive at the intersection of technical depth and product impact.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-sky-400 font-mono text-xs mb-1 font-semibold uppercase">Pillar I</div>
                <div className="text-base font-bold text-white mb-1">Full-Stack Architecture</div>
                <div className="text-xs text-slate-400">React, Node.js, Express, MongoDB, SQLite, and State Management.</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-indigo-400 font-mono text-xs mb-1 font-semibold uppercase">Pillar II</div>
                <div className="text-base font-bold text-white mb-1">Algorithmic Rigor</div>
                <div className="text-xs text-slate-400">700+ problems, LeetCode 1857 Knight, CodeChef 1601 3★.</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-purple-400 font-mono text-xs mb-1 font-semibold uppercase">Pillar III</div>
                <div className="text-base font-bold text-white mb-1">Production Security</div>
                <div className="text-xs text-slate-400">8-Role RBAC, JWT stateless tokens, AWS S3 presigned URL authorization.</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-emerald-400 font-mono text-xs mb-1 font-semibold uppercase">Pillar IV</div>
                <div className="text-base font-bold text-white mb-1">Real-Time Systems</div>
                <div className="text-xs text-slate-400">Socket.IO web sockets, offline fallback queues, WhatsApp Twilio dispatch.</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Academic & Education History */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Academic Timeline</span>
            </div>

            {personalData.education.map((edu, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-bgCard border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 relative group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-950/60 border border-sky-800/50 text-sky-300">
                    {edu.period}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded">
                    {edu.score}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  {edu.institution}
                </h4>
                
                <div className="text-xs text-slate-300 font-medium mb-2">
                  {edu.degree}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-2.5 mt-2">
                  {edu.highlight}
                </p>
              </div>
            ))}

            {/* Quick Summary Pill */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/40 to-indigo-950/40 border border-sky-500/20 text-xs text-slate-300 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
              <span>
                Scored <strong className="text-white">99.04 Percentile</strong> in MHT-CET and maintained <strong className="text-white">9.45 CGPA</strong> in IT Engineering.
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
