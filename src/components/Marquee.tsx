'use client';

import React from 'react';
import { marqueeTechnologies } from '@/data/marquee';
import { Code2 } from 'lucide-react';

export const Marquee: React.FC = () => {
  // Duplicate array for seamless infinite looping
  const techList = [...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <div className="w-full py-8 border-y border-[var(--border-subtle)] bg-[var(--bg-card)]/40 overflow-hidden relative">
      {/* Gradient Fades on Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6 sm:gap-10">
        {techList.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm sm:text-base font-semibold text-[var(--text-main)] whitespace-nowrap hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm cursor-default"
          >
            <Code2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
