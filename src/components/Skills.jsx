import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
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
  MapPin,
  Activity,
  Zap,
  Rotate3d,
  Lock,
  Compass,
  ArrowRight
} from 'lucide-react';
import { skillsCategories } from '../data/skillsData';

const iconMap = {
  Code2, FileCode, Terminal, Database, Layout, Cpu, Globe,
  Server, Workflow, Radio, FolderGit2, Table, HardDrive,
  Binary, Box, Layers, TerminalSquare, Share2, KeyRound,
  Cloud, GitBranch, Send, UploadCloud
};

// Proficiency metadata
const levelConfig = {
  Expert: {
    percentage: 96,
    badgeColor: 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300',
    barColor: 'from-emerald-500 to-teal-400',
    dotColor: 'bg-emerald-400',
    glowColor: 'rgba(16, 185, 129, 0.4)',
  },
  Advanced: {
    percentage: 88,
    badgeColor: 'bg-sky-950/80 border-sky-500/50 text-sky-300',
    barColor: 'from-sky-500 to-blue-500',
    dotColor: 'bg-sky-400',
    glowColor: 'rgba(56, 189, 248, 0.4)',
  },
  Proficient: {
    percentage: 80,
    badgeColor: 'bg-indigo-950/80 border-indigo-500/50 text-indigo-300',
    barColor: 'from-indigo-500 to-purple-500',
    dotColor: 'bg-indigo-400',
    glowColor: 'rgba(99, 102, 241, 0.4)',
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Flatten skills with category info
  const allSkills = useMemo(() => {
    return skillsCategories.flatMap((category) =>
      category.skills.map((skill) => ({
        ...skill,
        categoryId: category.id,
        categoryTitle: category.title,
      }))
    );
  }, []);

  // Currently inspected skill (defaults to React.js so side box is never empty)
  const [selectedSkill, setSelectedSkill] = useState(() => {
    return allSkills.find((s) => s.name === 'React.js') || allSkills[0];
  });
  const [isLocked, setIsLocked] = useState(false);

  // 3D Sphere state
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0.2, y: 0.3 });
  const isDraggingRef = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0.003, y: 0.002 });
  const isHoveringSphere = useRef(false);
  const animFrameRef = useRef(null);

  // Generate uniform 3D spherical positions using Fibonacci sphere algorithm
  const sphereNodes = useMemo(() => {
    const total = allSkills.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle (~2.3999 rad)

    return allSkills.map((skill, i) => {
      // y goes from 1 to -1
      const y = 1 - (i / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...skill,
        baseX: x,
        baseY: y,
        baseZ: z,
      };
    });
  }, [allSkills]);

  // Animation Loop for auto-rotation and momentum
  useEffect(() => {
    const animate = () => {
      if (!isDraggingRef.current) {
        if (!isHoveringSphere.current) {
          // Normal auto-rotation drift
          setRotation((prev) => ({
            x: prev.x + velocityRef.current.x * 0.4,
            y: prev.y + velocityRef.current.y * 0.5,
          }));
        } else {
          // Slow subtle rotation while hovering
          setRotation((prev) => ({
            x: prev.x + 0.0006,
            y: prev.y + 0.0012,
          }));
        }
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Drag handlers for 360-degree interactive rotation
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    const sensitivity = 0.006;
    velocityRef.current = { x: dy * sensitivity, y: dx * sensitivity };

    setRotation((prev) => ({
      x: prev.x + dy * sensitivity,
      y: prev.y + dx * sensitivity,
    }));
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Node selection handler
  const handleSkillHover = (skill) => {
    if (!isLocked) {
      setSelectedSkill(skill);
    }
  };

  const handleSkillClick = (skill) => {
    if (selectedSkill?.name === skill.name && isLocked) {
      setIsLocked(false);
    } else {
      setSelectedSkill(skill);
      setIsLocked(true);
    }
  };

  // 3D Projection math
  const sphereRadius = 185; // Sphere size in pixels
  const cameraDistance = 380; // Perspective depth

  const projectedNodes = useMemo(() => {
    const { x: rotX, y: rotY } = rotation;

    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);

    return sphereNodes.map((node) => {
      // 1. Scale to physical sphere radius
      const x0 = node.baseX * sphereRadius;
      const y0 = node.baseY * sphereRadius;
      const z0 = node.baseZ * sphereRadius;

      // 2. Rotate around Y-axis
      const x1 = x0 * cosY + z0 * sinY;
      const z1 = -x0 * sinY + z0 * cosY;
      const y1 = y0;

      // 3. Rotate around X-axis
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;
      const x2 = x1;

      // 4. Perspective projection
      const scale = cameraDistance / (cameraDistance - z2);
      const screenX = x2 * scale;
      const screenY = y2 * scale;

      // 5. Normalized depth: 0 (furthest back) to 1 (closest front)
      const depth = (z2 + sphereRadius) / (2 * sphereRadius);
      const opacity = Math.min(Math.max(0.35 + depth * 0.65, 0.25), 1.0);
      const zIndex = Math.round(depth * 100);

      // Category matching
      const isCategoryMatch = activeCategory === 'all' || node.categoryId === activeCategory;
      const isSelected = selectedSkill?.name === node.name;

      return {
        ...node,
        screenX,
        screenY,
        scale,
        opacity: isCategoryMatch ? opacity : opacity * 0.2,
        zIndex: isSelected ? 999 : zIndex,
        isSelected,
        isCategoryMatch,
        inFront: z2 > 0,
      };
    });
  }, [sphereNodes, rotation, activeCategory, selectedSkill]);

  const levelInfo = selectedSkill ? levelConfig[selectedSkill.level] || levelConfig.Proficient : levelConfig.Proficient;
  const SelectedIcon = selectedSkill ? iconMap[selectedSkill.icon] || Code2 : Code2;

  return (
    <section id="skills" className="py-20 lg:py-28 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-sky-400 tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>04. Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">3D Skills Galaxy</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Drag to rotate the 3D orbital sphere in 360°. Hover or tap any skill node to reveal architectural provenance, production usage, and proficiency metrics in the side box.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800/80 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
              activeCategory === 'all'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 shadow-glow-cyan font-bold'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <span>All Domains</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeCategory === 'all' ? 'bg-sky-400/20 text-sky-200' : 'bg-slate-800 text-slate-400'
            }`}>
              {allSkills.length}
            </span>
          </button>

          {skillsCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/50 shadow-glow-cyan font-bold'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{cat.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-sky-400/20 text-sky-200' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main 3D Orbit + Side Inspection Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 3D Sphere Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Interactive 3D Stage */}
            <div 
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onMouseEnter={() => { isHoveringSphere.current = true; }}
              onMouseLeave={() => { isHoveringSphere.current = false; }}
              className="relative w-full max-w-[540px] h-[480px] sm:h-[520px] rounded-3xl bg-slate-950/40 border border-slate-800/80 shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden touch-none"
            >
              {/* Futuristic Cybernetic Background Mesh for 3D Sphere */}
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-sky-500/10 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-indigo-500/10 dashed pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
              </div>

              {/* Central Glowing Core Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center opacity-60">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-glow-cyan animate-pulse">
                  <Cpu className="w-8 h-8" />
                </div>
              </div>

              {/* 3D Projected Skill Nodes */}
              <div className="relative w-0 h-0 flex items-center justify-center">
                {projectedNodes.map((node) => {
                  const IconComp = iconMap[node.icon] || Code2;
                  const isFront = node.inFront;

                  return (
                    <div
                      key={node.name}
                      onMouseEnter={() => handleSkillHover(node)}
                      onClick={() => handleSkillClick(node)}
                      style={{
                        transform: `translate3d(${node.screenX}px, ${node.screenY}px, 0px) scale(${node.scale * (node.isSelected ? 1.15 : 1)})`,
                        opacity: node.opacity,
                        zIndex: node.zIndex,
                        transition: isDraggingRef.current ? 'none' : 'opacity 0.2s ease, transform 0.1s ease-out',
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-colors duration-200 group ${
                        node.isSelected
                          ? 'ring-2 ring-sky-400 shadow-glow-cyan z-[999]'
                          : ''
                      }`}
                    >
                      <div
                        className={`px-3 py-1.5 rounded-xl border backdrop-blur-md flex items-center gap-2 whitespace-nowrap transition-all duration-300 shadow-md ${
                          node.isSelected
                            ? 'bg-sky-500/30 border-sky-400 text-white font-bold scale-110 shadow-glow-cyan'
                            : isFront
                            ? 'bg-slate-900/90 border-slate-700/80 text-slate-200 hover:border-sky-400 hover:text-white hover:bg-slate-800'
                            : 'bg-slate-950/70 border-slate-800/60 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className={`p-1 rounded-md ${
                          node.isSelected ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-sky-400'
                        }`}>
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono font-medium">
                          {node.name}
                        </span>
                        {node.isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom 3D Helper Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 pointer-events-none">
                <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800/80 backdrop-blur-sm">
                  <Rotate3d className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
                  <span>Drag to rotate sphere</span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800/80 backdrop-blur-sm">
                  <Compass className="w-3.5 h-3.5 text-indigo-400" />
                  <span>360° Orbital View</span>
                </div>
              </div>

            </div>

            {/* Mobile/Quick Tag Navigator Bar */}
            <div className="w-full max-w-[540px] mt-4 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none lg:hidden">
              <span className="text-[10px] font-mono uppercase text-slate-400 shrink-0 mr-1">Quick Select:</span>
              {allSkills.slice(0, 10).map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => handleSkillClick(skill)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap border shrink-0 transition-all ${
                    selectedSkill?.name === skill.name
                      ? 'bg-sky-500/20 text-sky-300 border-sky-400/50 font-bold'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800'
                  }`}
                >
                  {skill.name}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: "Where I Used It" Side Box (Sticky at Same Level) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-bgCard border border-slate-800 p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[480px]">
              
              {/* Ambient Corner Glow */}
              <div 
                className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl pointer-events-none transition-all duration-500"
                style={{ backgroundColor: levelInfo.glowColor }}
              />

              <div>
                {/* Header: Skill Provenance Badge + Lock Indicator */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>Skill Provenance & Usage Inspector</span>
                  </div>

                  <button
                    onClick={() => setIsLocked(!isLocked)}
                    title={isLocked ? "Pinned - click to unlock auto-hover" : "Click to pin this skill"}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                      isLocked
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Lock className="w-3 h-3" />
                    <span>{isLocked ? 'Pinned' : 'Auto'}</span>
                  </button>
                </div>

                {/* Animated Skill Details */}
                <AnimatePresence mode="wait">
                  {selectedSkill && (
                    <motion.div
                      key={selectedSkill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      {/* Skill Title & Level */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-sky-400 shadow-glow-cyan">
                            <SelectedIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black text-white tracking-tight">
                              {selectedSkill.name}
                            </h3>
                            <span className="text-xs font-mono text-slate-400">
                              Domain: {selectedSkill.categoryTitle}
                            </span>
                          </div>
                        </div>

                        {/* Level Badge */}
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${levelInfo.badgeColor} flex items-center gap-1.5`}>
                          <span className={`w-2 h-2 rounded-full ${levelInfo.dotColor}`}></span>
                          {selectedSkill.level}
                        </span>
                      </div>

                      {/* Proficiency Meter */}
                      {/* <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80">
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-sky-400" />
                            <span>Proficiency & Engineering Depth</span>
                          </span>
                          <span className="text-white font-bold">{levelInfo.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${levelInfo.percentage}%` }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className={`h-full rounded-full bg-gradient-to-r ${levelInfo.barColor}`}
                          />
                        </div>
                      </div> */}

                      {/* Technical Description */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-sky-400" />
                          <span>Architectural Role:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                          {selectedSkill.description}
                        </p>
                      </div>

                      {/* "Where I Used It" Section - CLEAR, PROMINENT & DIRECT */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Where I Used It:</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">
                            {selectedSkill.usedIn.length} application{selectedSkill.usedIn.length !== 1 ? 's' : ''}
                          </span>
                        </div>

                        <div className="space-y-2">
                          {selectedSkill.usedIn.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: idx * 0.05 }}
                              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-colors flex items-center justify-between group"
                            >
                              <div className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-white transition-colors">
                                  {item}
                                </span>
                              </div>
                              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Side Box Bottom Status Footer */}
              {/* <div className="pt-4 mt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Active Skill Context</span>
                </span>
                <span className="text-sky-400">Production Verified</span>
              </div> */}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
