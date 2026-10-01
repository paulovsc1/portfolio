'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { heroData } from '@/data/hero';
import { ArrowRight, Download, Sparkles, Code2, Layers, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const data = heroData;

  const highlights = data.highlights[language];

  const icons = [
    <Sparkles key="1" className="w-5 h-5 text-[var(--accent)]" />,
    <Code2 key="2" className="w-5 h-5 text-[var(--accent)]" />,
    <Layers key="3" className="w-5 h-5 text-[var(--accent)]" />,
    <CheckCircle2 key="4" className="w-5 h-5 text-[var(--accent)]" />,
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{ backgroundColor: 'var(--accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center mb-16">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 text-[var(--text-main)] mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full accent-bg animate-pulse" />
              <span>{data.tag[language]}</span>
            </motion.div>

            {/* Big Display Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.1] mb-6"
            >
              {data.title[language]}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl font-normal"
            >
              {data.subtitle[language]}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projetos"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-base accent-bg hover:opacity-90 transition-all shadow-lg hover:scale-105"
              >
                <span>{data.ctaProjects[language]}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={data.resumePath}
                download="Paulo_Victor_Curriculo.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-base border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-all hover:scale-105"
              >
                <Download className="w-5 h-5 text-[var(--accent)]" />
                <span>{data.ctaResume[language]}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl p-3.5 accent-bg shadow-2xl accent-glow group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-950 border border-black/30 shadow-inner">
                <Image
                  src="/avatar.png"
                  alt="Foto de Paulo Victor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  unoptimized
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                {/* Floating Profile Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-[var(--text-main)]">
                      Paulo Victor
                    </h3>
                    <p className="text-xs text-[var(--accent)] font-semibold">
                      Desenvolvedor Front-End
                    </p>
                  </div>
                  <div className="w-3 h-3 rounded-full accent-bg animate-ping" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights 4 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/70 backdrop-blur-sm hover:border-[var(--border-hover)] transition-all group"
            >
              <div className="p-2.5 w-fit rounded-xl bg-[var(--accent-muted)] mb-3 group-hover:scale-110 transition-transform">
                {icons[index % icons.length]}
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)] mb-1">
                {item.label}
              </div>
              <div className="text-sm font-semibold text-[var(--text-main)] leading-snug">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
