'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, LayoutGrid, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ProjectsGrid: React.FC = () => {
  const { t, language } = useLanguage();
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-[var(--accent)] mb-2 block">
              {t.projects.sectionTag}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight mb-4">
              {t.projects.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)]">
              {t.projects.sectionSubtitle}
            </p>
          </motion.div>

          {/* View Mode Switcher Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] w-fit"
          >
            <button
              onClick={() => setViewMode('carousel')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'carousel'
                  ? 'accent-bg shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Animação 3D</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'accent-bg shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Grid Completo</span>
            </button>
          </motion.div>
        </div>

        {/* Carousel View Mode (3D Coverflow from carousel-001.jsx) */}
        {viewMode === 'carousel' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative py-6"
          >
            <style>{`
              .projects-swiper {
                padding-bottom: 60px !important;
                padding-top: 20px !important;
              }
              .projects-swiper .swiper-pagination-bullet {
                background: var(--text-secondary);
                opacity: 0.5;
              }
              .projects-swiper .swiper-pagination-bullet-active {
                background: var(--accent) !important;
                width: 24px;
                border-radius: 6px;
                opacity: 1;
              }
            `}</style>

            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1.15}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2.2 },
              }}
              coverflowEffect={{
                rotate: 0,
                slideShadows: false,
                stretch: 0,
                depth: 120,
                modifier: 2,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              className="projects-swiper"
            >
              {projectsData.map((project) => (
                <SwiperSlide key={project.id} className="h-auto">
                  <div className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden flex flex-col justify-between hover:border-[var(--border-hover)] hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-zinc-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-90" />

                      {project.featured && (
                        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider accent-bg shadow-lg">
                          Destaque
                        </span>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-2xl font-extrabold text-[var(--text-main)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                          {project.description[language]}
                        </p>
                      </div>

                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-lg text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-main)] text-[var(--text-secondary)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>Ver no GitHub</span>
                          </a>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
                            >
                              <span>Ver Projeto</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <button
                className="swiper-button-prev-custom p-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-md cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="swiper-button-next-custom p-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-md cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* Grid View Mode */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
