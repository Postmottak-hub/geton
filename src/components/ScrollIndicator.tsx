import React from 'react';

interface ScrollIndicatorProps {
  onClick?: () => void;
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-3 select-none text-left cursor-pointer focus:outline-none ${className}`}
      title="Scroll to explore"
    >
      {/* Mouse Icon with animated inner glowing wheel */}
      <div className="w-[18px] h-8 rounded-full border-[1.5px] border-white/70 flex justify-center pt-1.5 group-hover:border-cyan-300 transition-colors">
        <span className="w-[3px] h-2 rounded-full bg-cyan-400 animate-bounce shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
      </div>

      {/* Label */}
      <span className="text-[13px] text-slate-300 group-hover:text-white transition-colors tracking-wide font-medium">
        Scroll to explore
      </span>
    </button>
  );
};
