'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { aboutData } from '@/data/about';
import { motion } from 'framer-motion';
import { Code, Cpu, Sparkles, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const data = aboutData;

  return (
    <section id="sobre" className="py-20 relative overflow-hidden bg-[var(--bg-card)]/30 border-y border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl relative"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)] mb-2 block">
            {t.about.sectionTag}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight mb-6">
            {t.about.sectionTitle}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            {data.paragraphs[language].map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Objective Pill Badges */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)]">
              <Code className="w-4 h-4 text-[var(--accent)]" />
              <span>React, Next.js & TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)]">
              <Cpu className="w-4 h-4 text-[var(--accent)]" />
              <span>Micro Frontends</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)]">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span>Design System</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)]">
              <Terminal className="w-4 h-4 text-[var(--accent)]" />
              <span>Jest & CI/CD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
