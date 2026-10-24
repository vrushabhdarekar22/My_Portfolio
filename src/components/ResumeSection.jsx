import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, X, CheckCircle2, Award, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import { personalData } from '../data/personalData';
import Button from './ui/Button';

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>06. Official Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Software Engineer <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Detailed technical document outlining academic records at PICT Pune, Karmacts Systems internship experience, project portfolio, and competitive programming achievements.
          </p>
        </div>

        {/* Main Resume Highlight Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-bgCard border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Resume Summary Info */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-300">
                  PDF Format • Production Resume
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Updated 2026
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Vrushabh Darekar – SDE Resume
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Bachelor of Engineering in IT at PICT Pune (9.45 CGPA, 99.04 MHT-CET Percentile). Experienced in Full-Stack Web Development, Node.js, React, AWS S3, RBAC Security, and Competitive Programming (700+ DSA, 1857 Knight).
                </p>
              </div>

              {/* Quick Resume Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>PICT Pune IT (9.45 / 10 CGPA)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                  <Briefcase className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>SDE Intern @ Karmacts Systems</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>LeetCode Knight (Rating 1857)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-Stack Projects (DevCollab, Sahyatri)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={Download}
                  href="/resume.pdf"
                  download="Vrushabh_Darekar_Resume.pdf"
                >
                  Download Resume (PDF)
                </Button>

                <Button
                  variant="glow"
                  size="lg"
                  icon={Eye}
                  onClick={() => setIsPreviewOpen(true)}
                >
                  Preview Resume Document
                </Button>
              </div>

            </div>

            {/* Right Graphic Preview Trigger Box */}
            <div className="lg:col-span-4">
              <div 
                onClick={() => setIsPreviewOpen(true)}
                className="cursor-pointer group relative p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-sky-400/60 transition-all duration-300 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[260px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8" />
                </div>

                <div>
                  <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    Click to Open Full Document
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    /resume.pdf
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 font-semibold bg-sky-950/60 px-3 py-1 rounded-full border border-sky-800/60">
                  <Eye className="w-3.5 h-3.5" /> Interactive Viewer
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* PDF Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl">
            <motion.div
              className="fixed inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
            />

            <motion.div
              className="relative w-full max-w-5xl h-[85vh] bg-bgCard border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Vrushabh Darekar – Resume Document</span>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={Download}
                    href="/resume.pdf"
                    download="Vrushabh_Darekar_Resume.pdf"
                  >
                    Download PDF
                  </Button>

                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Embedded Document Viewer / Fallback */}
              <div className="flex-1 bg-slate-950 p-2 sm:p-4 overflow-hidden relative">
                <iframe
                  src="/resume.pdf"
                  title="Vrushabh Darekar Resume PDF"
                  className="w-full h-full rounded-xl border border-slate-800"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
