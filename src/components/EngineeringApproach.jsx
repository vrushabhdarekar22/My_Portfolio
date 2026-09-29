import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Cpu, Terminal, CheckCircle2, Workflow } from 'lucide-react';

const approaches = [
  {
    step: "01",
    title: "System Architecture & Schema Design",
    desc: "Structuring clean relational & NoSQL schemas, defining strict RESTful API contracts, and planning stateless JWT/RBAC security boundaries prior to writing backend logic.",
    icon: Layers,
    accent: "text-sky-400"
  },
  {
    step: "02",
    title: "Clean Engineering & Modular Code",
    desc: "Writing maintainable, self-documenting code with clear separation of concerns, reusable React UI components, and centralized Redux Toolkit state slices.",
    icon: Terminal,
    accent: "text-indigo-400"
  },
  {
    step: "03",
    title: "Algorithmic Efficiency & DSA Rigor",
    desc: "Evaluating asymptotic time and space complexities (Big-O analysis) to eliminate performance bottlenecks and ensure optimal data structure selections.",
    icon: Cpu,
    accent: "text-purple-400"
  },
  {
    step: "04",
    title: "Production Security & Resilience",
    desc: "Implementing time-bound AWS S3 presigned URLs, offline fallback queues for socket dropouts, and automated SLA escalation pipelines.",
    icon: ShieldCheck,
    accent: "text-emerald-400"
  }
];

export default function EngineeringApproach() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>07. Software Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Approach & Process</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            How I approach building scalable, reliable, and production-grade software applications.
          </p>
        </div>

        {/* Process Flow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 sm:p-8 rounded-2xl bg-bgCard border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${item.accent}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-mono font-black text-slate-700 group-hover:text-sky-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
