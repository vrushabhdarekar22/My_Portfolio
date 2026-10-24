import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, ExternalLink, Flame, Trophy, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';
import Counter from './ui/Counter';
import Button from './ui/Button';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>05. Algorithmic Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Problem Solving <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">& Ratings</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Consistent competitive programming track record across major algorithmic platforms.
          </p>
        </div>

        {/* Top Hero Stat Card: 700+ DSA Problems Solved */}
        <motion.div 
          className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 border border-sky-500/30 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6 text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-400 flex items-center justify-center shrink-0 shadow-glow-cyan">
                <Code2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
                  Verified Metric
                </div>
                <div className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                  <Counter end={achievementsData.totalSolved} suffix={achievementsData.solvedSuffix} />
                </div>
                <div className="text-sm sm:text-base text-slate-300 font-medium">
                  {achievementsData.solvedLabel}
                </div>
              </div>
            </div>

            <div className="max-w-md text-slate-300 text-xs sm:text-sm leading-relaxed border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
              <p className="mb-2">
                Demonstrated algorithmic problem solving proficiency across Trees, Graphs, Dynamic Programming, Heap, Greedy Strategy, and Advanced Data Structures.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-sky-300">
                <span className="px-2 py-0.5 rounded bg-sky-900/40 border border-sky-800">C++ STL</span>
                <span className="px-2 py-0.5 rounded bg-sky-900/40 border border-sky-800">Time Complexity Optimization</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Competitive Programming Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.platforms.map((platform, idx) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 rounded-2xl bg-bgCard border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {platform.name}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-950/60 border border-amber-800/50 text-amber-300 font-bold">
                    {platform.title}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-extrabold text-white mb-1">
                    <Counter end={platform.rating} />
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Highest Contest Rating
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {platform.description}
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                icon={ExternalLink}
                href={platform.link}
                target="_blank"
                className="w-full"
              >
                Verify Profile on {platform.name}
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
