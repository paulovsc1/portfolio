'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t, language } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden flex flex-col justify-between hover:border-[var(--border-hover)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
    >
      <div>
        {/* Project Thumbnail Header */}
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-900">
          <Image
            src={project.image}
            alt={`Capa do projeto ${project.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80" />

          {project.featured && (
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider accent-bg shadow-md">
              Destaque
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <h3 className="font-display text-2xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
            {project.description[language]}
          </p>

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
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[var(--border-subtle)]/50 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
          aria-label={`${t.projects.viewGithub} ${project.title}`}
        >
          <GithubIcon className="w-4 h-4" />
          <span>{t.projects.viewGithub}</span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            <span>{t.projects.viewLive}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
};
