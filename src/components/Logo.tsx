import React from 'react';

export const GetonLogo: React.FC<{ className?: string; size?: 'default' | 'large' }> = ({
  className = '',
  size = 'large',
}) => {
  const iconSize = size === 'large' ? 'w-11 h-11' : 'w-9 h-9';
  const textSize = size === 'large' ? 'text-[28px] sm:text-3xl' : 'text-2xl';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* 3 stacked curved organic neon pill bars */}
      <svg
        className={`${iconSize} shrink-0 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)] transition-all`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="geton-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="geton-indigo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="geton-purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e879f9" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Top cyan curved pill */}
        <path
          d="M8 9C8 5.68629 10.6863 3 14 3H26C29.3137 3 32 5.68629 32 9C32 12.3137 29.3137 15 26 15H14C10.6863 15 8 12.3137 8 9Z"
          fill="url(#geton-cyan)"
          className="transition-all"
        />
        {/* Middle indigo pill with slight offset */}
        <path
          d="M6 20C6 16.6863 8.68629 14 12 14H24C27.3137 14 30 16.6863 30 20C30 23.3137 27.3137 26 24 26H12C8.68629 26 6 23.3137 6 20Z"
          fill="url(#geton-indigo)"
        />
        {/* Bottom fuchsia / magenta pill */}
        <path
          d="M6 31C6 27.6863 8.68629 25 12 25H21C24.3137 25 27 27.6863 27 31C27 34.3137 24.3137 37 21 37H12C8.68629 37 6 34.3137 6 31Z"
          fill="url(#geton-purple)"
        />
      </svg>
      <span className={`font-display ${textSize} font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]`}>
        Geton
      </span>
    </div>
  );
};
