'use client';

import { useState } from 'react';

export default function NetworkToggle() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Fixed Floating Pill — bottom-right */}
      <a
        href="http://localhost:3000"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#1b1b1b] rounded-full border border-outline-variant/30 shadow-lg hover:shadow-xl hover:border-indigo-accent/30 transition-all duration-300 group cursor-pointer"
      >
        {/* Live Pulse Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-accent" />
        </span>

        {/* Label (expands on hover) */}
        <span
          className={`overflow-hidden transition-all duration-300 font-label-mono text-label-mono text-on-primary whitespace-nowrap ${
            hovered ? 'max-w-[200px] opacity-100 mr-1' : 'max-w-0 opacity-0'
          }`}
        >
          Switch to Creative Portfolio
        </span>

        {/* Arrow */}
        <span className="material-symbols-outlined text-indigo-accent text-xl transition-transform duration-300 group-hover:translate-x-0.5">
          arrow_forward
        </span>
      </a>
    </>
  );
}
