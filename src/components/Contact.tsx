'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { contactData } from '@/data/contact';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { LogoMark } from '@/components/LogoMark';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const data = contactData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contato" className="pt-20 pb-12 border-t border-[var(--border-subtle)] bg-[var(--bg-main)] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[180px] pointer-events-none opacity-15"
        style={{ backgroundColor: 'var(--accent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content Grid (Arthur Morais Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--border-subtle)]">
          {/* Brand Logo & Tagline (Left Column - 5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-2 flex items-center justify-center shadow-lg">
                 <LogoMark className="w-full h-full" />
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
                    Paulo Victor
                  </h2>
                  <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent)] mt-0.5">
                    Desenvolvedor Front-End
                  </p>
                </div>
              </div>

              <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-sm mb-6">
                {data.subtitle[language]}
              </p>

              {/* Status Badge with Pulsing Green Dot */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {language === 'pt' ? 'Disponível para novos projetos' : 'Available for new projects'}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links Column (3 cols) */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-5">
              {language === 'pt' ? 'Navegação' : 'Navigation'}
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#experiencia" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.nav.experience}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Column (2 cols) */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-5">
              {language === 'pt' ? 'Redes' : 'Social'}
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-5">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </h3>
            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${data.email}`}
                className="font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors block break-all"
              >
                {data.email}
              </a>

              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span>
                  {language === 'pt'
                    ? 'Brasil • Remoto/Híbrido/Presencial'
                    : 'Brazil • Remote/Hybrid/On-site'}
                </span>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[var(--accent)] transition-all mt-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">{t.contact.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--accent)]" />
                    <span>{t.contact.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            <span>{data.copyright}</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <span>Projetado com Propósito</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs font-bold text-[var(--text-main)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-md hover:scale-105"
            >
              <span>{language === 'pt' ? 'Voltar ao topo' : 'Back to top'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
