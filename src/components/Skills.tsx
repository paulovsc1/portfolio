'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { skillsDetailedData } from '@/data/skills';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();

  const categoryIcons = [
    <Layout key="1" className="w-5 h-5 text-[var(--accent)]" />,
    <Server key="2" className="w-5 h-5 text-[var(--accent)]" />,
    <Wrench key="3" className="w-5 h-5 text-[var(--accent)]" />,
  ];

  return (
    <section id="skills" className="py-24 relative">
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
            {t.skills.sectionTag}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight mb-4">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            {t.skills.sectionSubtitle}
          </p>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsDetailedData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="p-3 rounded-2xl bg-[var(--accent-muted)] group-hover:scale-110 transition-transform">
                    {categoryIcons[index % categoryIcons.length]}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--text-main)]">
                    {category.title[language]}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)] text-[var(--text-main)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all hover:-translate-y-1 cursor-default group/chip shadow-sm"
                    >
                      <div className="w-6 h-6 relative shrink-0 flex items-center justify-center group-hover/chip:scale-110 transition-transform">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="object-contain w-full h-full"
                          unoptimized
                        />
                      </div>
                      <span className="text-sm font-semibold truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
