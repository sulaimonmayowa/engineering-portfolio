'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/#about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <nav
      className={`fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-20px)] md:w-[calc(100%-40px)] max-w-[1280px] h-[60px] md:h-[68px] rounded-full z-50 flex justify-between items-center px-4 md:px-8 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-md border border-outline-variant/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Link
        href="/"
        className="font-h3 text-h3 font-bold text-primary md:text-h3"
      >
        sm.
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop Right Group */}
      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <a
          href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-mono text-label-mono hover:bg-indigo-accent transition-all active:scale-95"
        >
          Book a call
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2.5 z-50 cursor-pointer relative touch-manipulation"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[2px] bg-on-surface rounded transition-all duration-300 ${
            mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-on-surface rounded transition-all duration-300 ${
            mobileOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-on-surface rounded transition-all duration-300 ${
            mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
          }`}
        />
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] max-w-[85vw] bg-white dark:bg-[#121212] border-l border-outline-variant/20 transition-transform duration-400 ease-out z-50 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-outline-variant/10">
              <span className="font-label-mono text-label-mono text-secondary">// navigation</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-2xl text-on-surface">close</span>
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3.5 px-4 -mx-4 rounded-xl font-h3 text-h3 text-on-surface hover:bg-surface-container hover:text-primary transition-all active:scale-[0.98]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="px-6 py-6 border-t border-outline-variant/10 space-y-4">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <span className="font-label-mono text-label-mono text-secondary">Toggle theme</span>
              </div>
              <a
                href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary px-6 py-4 rounded-full font-label-mono text-label-mono hover:bg-indigo-accent transition-all active:scale-[0.98] touch-manipulation"
              >
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
