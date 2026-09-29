import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  href,
  target,
  download,
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg outline-none cursor-pointer focus:ring-2 focus:ring-brandCyan/50 focus:ring-offset-2 focus:ring-offset-bgDark disabled:opacity-50 disabled:cursor-not-allowed select-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] border border-sky-400/30',
    secondary: 'bg-bgCard text-slate-200 border border-slate-700/60 hover:bg-bgCardHover hover:border-brandCyan/40 hover:text-white shadow-sm hover:scale-[1.02] active:scale-[0.98]',
    outline: 'bg-transparent text-slate-300 border border-slate-700 hover:border-brandCyan/60 hover:text-brandCyan hover:bg-brandCyan/5',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
    glow: 'bg-bgCard text-brandCyan border border-brandCyan/40 shadow-glow-cyan hover:shadow-sky-500/50 hover:bg-brandCyan/10 hover:border-brandCyan',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5 font-semibold',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        download={download}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
