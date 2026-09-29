import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  interactive = false,
  onClick,
  active = false,
  className = ''
}) {
  const base = "inline-flex items-center font-mono font-medium rounded-md transition-all duration-200";

  const variants = {
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-500",
    cyan: "bg-sky-950/60 text-sky-300 border border-sky-800/50 shadow-sm",
    blue: "bg-indigo-950/60 text-indigo-300 border border-indigo-800/50",
    emerald: "bg-emerald-950/60 text-emerald-300 border border-emerald-800/50",
    purple: "bg-purple-950/60 text-purple-300 border border-purple-800/50",
    outline: "bg-transparent text-slate-400 border border-slate-700/80",
    active: "bg-sky-500/20 text-sky-200 border border-sky-400/60 shadow-glow-cyan",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm",
  };

  const interactiveStyles = interactive
    ? "cursor-pointer hover:scale-105 active:scale-95"
    : "";

  const selectedVariant = active ? 'active' : variant;

  return (
    <span
      onClick={onClick}
      className={`${base} ${variants[selectedVariant]} ${sizes[size]} ${interactiveStyles} ${className}`}
    >
      {children}
    </span>
  );
}
