import React, { useId } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

interface GetonLogoProps {
  className?: string;
  size?: 'default' | 'large' | 'small';
  showText?: boolean;
  forceDarkSurface?: boolean;
}

export const GetonLogo: React.FC<GetonLogoProps> = ({
  className = '',
  size = 'large',
  showText = true,
  forceDarkSurface = false,
}) => {
  const uid = useId().replace(/:/g, '');
  const { theme } = useTheme();
  const isLight = forceDarkSurface ? false : theme === 'light';

  const iconDimensions =
    size === 'large'
      ? 'w-6 h-8 sm:w-8 sm:h-10'
      : size === 'small'
      ? 'w-5 h-6'
      : 'w-6 h-8 sm:w-7 sm:h-9';

  const textClasses =
    size === 'large'
      ? 'text-[21px] sm:text-[30px]'
      : size === 'small'
      ? 'text-[19px]'
      : 'text-2xl';

  const dividerHeight =
    size === 'large' ? 'h-4 sm:h-6' : size === 'small' ? 'h-3.5' : 'h-4 sm:h-5';

  const asClasses =
    size === 'large'
      ? 'text-[10px] sm:text-xs'
      : size === 'small'
      ? 'text-[9px]'
      : 'text-[10px]';

  const mainGradId = `gMain-${uid}`;
  const tailGradId = `gTail-${uid}`;
  const earGradId = `gEar-${uid}`;
  const shadowGradId = `gShadow-${uid}`;

  return (
    <div
      className={`relative inline-flex items-center gap-1 sm:gap-1.5 select-none group cursor-pointer ${className}`}
    >
      {/* Razor-sharp inline vector SVG 'g' mark (tight viewBox so it sits cleanly next to Geton) */}
      <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="34 38 150 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Geton AS"
          className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-105"
          shapeRendering="geometricPrecision"
        >
          <defs>
            <linearGradient id={mainGradId} x1="36" y1="52" x2="174" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="28%" stopColor="#0284FF" />
              <stop offset="68%" stopColor="#5B35F5" />
              <stop offset="100%" stopColor="#A826FF" />
            </linearGradient>
            <linearGradient id={tailGradId} x1="158" y1="128" x2="72" y2="218" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3728B8" />
              <stop offset="45%" stopColor="#5E29E8" />
              <stop offset="100%" stopColor="#A826FF" />
            </linearGradient>
            <linearGradient id={earGradId} x1="128" y1="48" x2="180" y2="86" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0EA5FF" />
              <stop offset="100%" stopColor="#1D5BFF" />
            </linearGradient>
            <linearGradient id={shadowGradId} x1="120" y1="146" x2="168" y2="178" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#080C24" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#080C24" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Descending stem & rounded hook */}
          <path
            d="M168 106 L168 164 C168 202 142 224 103 224 C74 224 53 211 47 195 C43 185 50 175 61 175 C69 175 75 180 82 184 C89 188 96 190 104 190 C123 190 135 178 135 158 L135 128 Z"
            fill={`url(#${tailGradId})`}
          />

          {/* Ribbon crease shadow where upper ring crosses stem */}
          <path
            d="M135 162 C152 156 164 143 168 124 L168 148 C162 162 150 172 135 177 Z"
            fill={`url(#${shadowGradId})`}
          />

          {/* Top-right leaf ear */}
          <path
            d="M126 50 C138 42 154 42 174 42 C178 42 180 44 180 48 L180 62 C180 79 169 89 154 88 C144 88 135 76 126 50 Z"
            fill={`url(#${earGradId})`}
          />

          {/* Circular upper bowl with crisp inner aperture */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M104 44 C140.45 44 170 73.55 170 110 C170 146.45 140.45 176 104 176 C67.55 176 38 146.45 38 110 C38 73.55 67.55 44 104 44 Z M104 77 C85.77 77 71 91.77 71 110 C71 128.23 85.77 143 104 143 C122.23 143 137 128.23 137 110 C137 91.77 122.23 77 104 77 Z"
            fill={`url(#${mainGradId})`}
          />
        </svg>
      </div>

      {/* Cohesive Creative Wordmark */}
      {showText && (
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <span
            className={`font-display ${textClasses} font-extrabold tracking-[-0.03em] flex items-baseline leading-none transition-colors ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}
          >
            <span>Get</span>
            <span className="relative inline-block">
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isLight
                    ? 'from-blue-700 via-sky-600 to-purple-700'
                    : 'from-[#7dd3fc] via-[#38bdf8] to-[#c4b5fd]'
                }`}
              >
                on
              </span>
              <span
                aria-hidden="true"
                className="block h-[2px] w-full mt-[1px] rounded-full bg-gradient-to-r from-[#22d3ee] via-[#38bdf8] to-[#a855f7]"
              />
            </span>
          </span>

          <span
            aria-hidden="true"
            className={`${dividerHeight} w-[1px] bg-gradient-to-b from-transparent ${
              isLight ? 'via-slate-400/70' : 'via-cyan-300/60'
            } to-transparent`}
          />

          <span
            className={`${asClasses} font-display font-bold tracking-[0.16em] sm:tracking-[0.24em] uppercase leading-none transition-colors ${
              isLight ? 'text-slate-700' : 'text-cyan-100/90'
            }`}
          >
            AS
          </span>
        </div>
      )}
    </div>
  );
};
