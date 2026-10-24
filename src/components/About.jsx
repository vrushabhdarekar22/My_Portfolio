import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Terminal, 
  Award,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/personalData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>01. Engineering Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Balanced Two-Column Grid: Same Height / Length */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Engineering Narrative */}
          <motion.div 
            className="lg:col-span-7 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Engineering Background</span>
            </div>

            <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-bgCard border border-slate-800/80 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <span className="text-sky-400 font-mono text-lg font-black">&gt;_</span>
                  <span>Product-Oriented Software Engineer</span>
                </h3>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I am an Information Technology engineering student at <strong className="text-white font-semibold">Pune Institute of Computer Technology (PICT), Pune</strong> (CGPA: 9.45 / 10.00), passionate about constructing high-throughput web applications and solving complex algorithmic challenges.
                  </p>

                  <p>
                    My approach to software engineering centers on <strong className="text-sky-300 font-medium">clean architecture</strong>, <strong className="text-sky-300 font-medium">production security</strong>, and <strong className="text-sky-300 font-medium">system reliability</strong>. During my internship at Karmacts Systems, I built role-based access control engines, AWS S3 presigned URL pipelines, and automated SLA escalation dispatchers.
                  </p>

                  <p>
                    Whether optimizing algorithmic execution (700+ DSA problems, LeetCode Knight) or engineering offline-first real-time applications like Sahyatri, I thrive at the intersection of technical depth and product impact.
                  </p>
                </div>
              </div>

              {/* Engineering Impact Metrics: Balanced Footer */}
              <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-800/80 text-center">
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                  <div className="text-base sm:text-lg font-bold font-mono text-sky-400">9.45</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">IT CGPA (PICT)</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                  <div className="text-base sm:text-lg font-bold font-mono text-emerald-400">99.04%</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">MHT-CET Rank</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                  <div className="text-base sm:text-lg font-bold font-mono text-indigo-400">700+</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">DSA Problems</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Academic & Education History */}
          <motion.div 
            className="lg:col-span-5 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Academic Timeline</span>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-3.5">
              {personalData.education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="flex-1 p-4 sm:p-5 rounded-2xl bg-bgCard border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 relative group flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-950/60 border border-sky-800/50 text-sky-300 font-medium">
                        {edu.period}
                      </span>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      {edu.institution}
                    </h4>
                    
                    <div className="text-xs text-slate-300 font-medium mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-2.5 mt-2.5">
                    {edu.highlight}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
