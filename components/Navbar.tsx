'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'O meni', href: '#about' },
  { label: 'Usluge', href: '#services' },
  { label: 'Rezultati', href: '#results' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  const isHashLink = (href: string) => href.startsWith('#');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-black tracking-tight font-[family-name:var(--font-poppins)] text-cta">
              FRAVIZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isHashLink(link.href) ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-cta text-background hover:bg-cta-dark transition-all duration-200 shadow-lg shadow-cta-glow hover:shadow-cta/40 cursor-pointer"
            >
              Zakažite poziv
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
                isHashLink(link.href) ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block text-lg font-medium text-muted hover:text-foreground transition-colors py-2 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-medium text-muted hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold bg-cta text-background hover:bg-cta-dark transition-all duration-200 mt-4 cursor-pointer"
              >
                Zakažite poziv
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
