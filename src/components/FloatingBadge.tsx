import React from 'react';
import { Zap } from 'lucide-react';

interface FloatingBadgeProps {
  onClick?: () => void;
  className?: string;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#090e21]/80 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer text-left select-none ${className}`}
      title="Click to view Geton Digital Solutions highlights"
    >
      {/* Subtle glowing ambient aura */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-sm -z-10 group-hover:opacity-100 opacity-60 transition-opacity" />

      {/* Lightning Icon in circle */}
      <div className="w-9 h-9 rounded-full bg-cyan-950/60 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.4)] group-hover:scale-105 group-hover:border-cyan-300 transition-transform">
        <Zap className="w-4 h-4 fill-cyan-400 text-cyan-400" />
      </div>

      {/* Text label */}
      <div className="flex flex-col">
        <span className="font-display text-sm font-bold text-white tracking-wide leading-tight group-hover:text-cyan-200 transition-colors">
          Geton
        </span>
        <span className="text-[12px] text-cyan-200/90 font-medium leading-tight mt-0.5">
          Digital Solutions
        </span>
      </div>
    </button>
  );
};
