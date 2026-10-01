'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData } from '@/data/experience';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experiencia" className="py-24 relative bg-[var(--bg-card)]/30 border-y border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)] mb-2 block">
            {t.experience.sectionTag}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight mb-4">
            {t.experience.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            {t.experience.sectionSubtitle}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[var(--border-subtle)] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Dot Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full accent-bg border-4 border-[var(--bg-main)] flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[var(--text-main)] flex items-center gap-2.5">
                      <Briefcase className="w-5 h-5 text-[var(--accent)]" />
                      <span>{item.company}</span>
                    </h3>
                    <p className="text-base font-semibold text-[var(--accent)] mt-1">
                      {item.role[language]}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-main)] border border-[var(--border-subtle)] font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                      {item.period[language]}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-main)] border border-[var(--border-subtle)] font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-6">
                  {item.description[language].map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
