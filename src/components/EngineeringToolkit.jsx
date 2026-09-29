import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Database, ShieldCheck, Cloud, Wrench, CheckCircle2 } from 'lucide-react';
import Badge from './ui/Badge';

const toolkitCategories = [
  {
    category: "Frontend Architecture",
    icon: Layout,
    color: "from-sky-500 to-blue-600",
    accent: "#38BDF8",
    items: [
      { name: "React.js", desc: "Virtual DOM, Hooks, Component Trees" },
      { name: "Redux Toolkit", desc: "Client State Slices, RTK Query" },
      { name: "Axios", desc: "Async HTTP REST Interceptors" }
    ]
  },
  {
    category: "Backend & Systems",
    icon: Server,
    color: "from-indigo-500 to-purple-600",
    accent: "#6366F1",
    items: [
      { name: "Node.js", desc: "Non-blocking Event Loop Execution" },
      { name: "Express.js", desc: "Custom REST Middleware Chains" }
    ]
  },
  {
    category: "Database Systems",
    icon: Database,
    color: "from-emerald-500 to-teal-600",
    accent: "#10B981",
    items: [
      { name: "MongoDB", desc: "NoSQL Document Schema Indexing" },
      { name: "MySQL", desc: "Relational Tables & Normalization" }
    ]
  },
  {
    category: "Security & Authorization",
    icon: ShieldCheck,
    color: "from-amber-500 to-orange-600",
    accent: "#F59E0B",
    items: [
      { name: "JWT", desc: "Stateless HMAC Token Authentication" },
      { name: "RBAC", desc: "8-Role Access Policy Enforcement" },
      { name: "Presigned URLs", desc: "Time-bound Private S3 Access" }
    ]
  },
  {
    category: "Cloud & Deployment",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
    accent: "#06B6D4",
    items: [
      { name: "AWS S3", desc: "Cloud Storage Bucket & Media Security" },
      { name: "Vercel", desc: "Serverless Frontend CD Deployments" },
      { name: "Render", desc: "Cloud Application & Container Hosting" }
    ]
  },
  {
    category: "Developer Tools",
    icon: Wrench,
    color: "from-pink-500 to-rose-600",
    accent: "#EC4899",
    items: [
      { name: "Git & GitHub", desc: "Branching, Pull Requests & CI" },
      { name: "Postman", desc: "REST Endpoint Validation & Test Suites" },
      { name: "VS Code", desc: "Custom Extensions & Debug Tooling" }
    ]
  }
];

export default function EngineeringToolkit() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>05. Production Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Organized visual matrix of software development technologies used to architect production-ready applications.
          </p>
        </div>

        {/* Organized Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolkitCategories.map((group, idx) => {
            const IconComponent = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-bgCard border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${group.color} text-white shadow-md`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div 
                      key={item.name}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:bg-slate-900 transition-colors"
                    >
                      <div className="text-xs font-bold text-slate-200 mb-0.5 flex items-center justify-between">
                        <span>{item.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
