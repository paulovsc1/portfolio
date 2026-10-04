'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';

export const Header: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.projects, href: '#projetos' },
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experiencia' },
    { label: t.nav.contact, href: '#contato' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto border border-[var(--border-subtle)] shadow-2xl backdrop-blur-xl ${
          scrolled
            ? 'py-2.5 px-5 sm:px-7 bg-[var(--bg-card)]/90 border-[var(--border-hover)]'
            : 'py-3.5 px-6 sm:px-8 bg-[var(--bg-card)]/75'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo with logo-p-v-transparente.svg */}
          <a
            href="#home"
            className="group flex items-center gap-3 font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--text-main)] hover:opacity-90 transition-opacity"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
             <LogoMark className="w-full h-full" />
            </div>
            <span className="hidden sm:inline font-bold">Paulo Victor</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-3 py-1 bg-[var(--bg-main)]/50 border border-[var(--border-subtle)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] rounded-full transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls (Theme & Lang & Mobile Toggle) */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-[var(--border-subtle)] bg-[var(--bg-main)] text-[var(--text-main)] hover:border-[var(--accent)] transition-colors"
              aria-label="Trocar idioma"
              title="Trocar idioma"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-main)] text-[var(--text-main)] hover:border-[var(--accent)] transition-colors"
              aria-label="Alternar tema"
              title="Alternar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-main)] text-[var(--text-main)]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-subtle)] pt-3 pb-2 mt-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-xl text-sm font-medium text-[var(--text-main)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
