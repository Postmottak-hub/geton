import React from 'react';

interface GetonLogoProps {
  className?: string;
  size?: 'default' | 'large' | 'small';
  showText?: boolean;
}

export const GetonLogo: React.FC<GetonLogoProps> = ({
  className = '',
  size = 'large',
  showText = true,
}) => {
  const iconDimensions =
    size === 'large'
      ? 'w-10 h-10 sm:w-12 sm:h-12'
      : size === 'small'
      ? 'w-7 h-7'
      : 'w-9 h-9';
  const textClasses =
    size === 'large'
      ? 'text-2xl sm:text-[28px]'
      : size === 'small'
      ? 'text-lg'
      : 'text-xl sm:text-2xl';

  return (
    <div className={`flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* 
        CREATIVE SLICED 'G' ICON MARK:
        - Inspired by dynamic aerodynamic slashed toroid geometry
        - Bold circular silhouette cut by a supersonic upward laser slice
        - Extended forward needle-point blade creating acceleration & velocity
        - Rich volumetric gradients (Electric Cyan + Deep Titanium Obsidian + Emerald Spark)
      */}
      <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center`}>
        {/* Soft background ambient halo on hover */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-md group-hover:bg-cyan-400/40 group-hover:scale-125 transition-all duration-300 pointer-events-none" />

        <svg
          className="w-full h-full relative z-10 drop-shadow-[0_2px_14px_rgba(6,182,212,0.6)] group-hover:scale-105 transition-transform duration-300"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Upper Crescent Titanium & Cyan Gradient */}
            <linearGradient id="geton-sliced-top" x1="15" y1="12" x2="88" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="35%" stopColor="#06b6d4" />
              <stop offset="70%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0c1938" />
            </linearGradient>

            {/* Lower Blade & Wedge Gradient */}
            <linearGradient id="geton-sliced-bottom" x1="6" y1="66" x2="88" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="22%" stopColor="#38bdf8" />
              <stop offset="55%" stopColor="#0284c7" />
              <stop offset="85%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0a122e" />
            </linearGradient>

            {/* Supersonic Razor Line Highlight */}
            <linearGradient id="geton-blade-laser" x1="6" y1="66" x2="88" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#34d399" />
              <stop offset="65%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>

            {/* Subtle Drop Shadow for 3D Layering */}
            <filter id="geton-slice-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* 1. Upper Crescent Piece (Hollow Circular Rim Top) */}
          <path
            d="M 87 35.5 A 38 38 0 0 0 13 52 L 31 48 A 20 20 0 0 1 69 39.5 Z"
            fill="url(#geton-sliced-top)"
            filter="url(#geton-slice-shadow)"
            className="transition-colors"
          />

          {/* 2. Lower Piece: Needle Blade Crossbar + Bottom Rim with genuine transparent cutout */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="
              M 6 66
              L 88 44
              A 38 38 0 0 1 20 76.5
              C 14 74 9 70 6 66
              Z
              M 31 62
              L 69 51
              A 20 20 0 0 1 31 62
              Z
            "
            fill="url(#geton-sliced-bottom)"
            filter="url(#geton-slice-shadow)"
          />

          {/* 3. Glowing Razor Hairline along the blade cut */}
          <line
            x1="6"
            y1="66"
            x2="88"
            y2="44"
            stroke="url(#geton-blade-laser)"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="drop-shadow-[0_0_4px_#38bdf8]"
          />

          {/* 4. Needle-point ignition spark node */}
          <circle
            cx="6"
            cy="66"
            r="2.5"
            fill="#ffffff"
            className="drop-shadow-[0_0_8px_#34d399]"
          />

          {/* 5. Subtle accent optical glint at upper right */}
          <circle
            cx="87"
            cy="35.5"
            r="1.8"
            fill="#38bdf8"
            className="drop-shadow-[0_0_6px_#38bdf8]"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display ${textClasses} font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] flex items-baseline`}
          >
            <span>Get</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              on
            </span>
          </span>

          <span className="text-[10px] font-bold tracking-widest text-cyan-400/90 uppercase px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-400/30">
            AS
          </span>
        </div>
      )}
    </div>
  );
};
