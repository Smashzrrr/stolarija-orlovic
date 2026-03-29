'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, MapPin, Clock, Phone, Mail, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeonButton } from '@/components/ui/neon-button';
import type { Locale } from '@/lib/i18n';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface NavbarProps {
  dict: any;
  locale: Locale;
}

const HrFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className="w-5 h-5 rounded-[4px] object-cover flex-shrink-0">
    <path fill="#f00010" d="M0 0h1200v200H0z"/><path fill="#fff" d="M0 200h1200v200H0z"/><path fill="#02418a" d="M0 400h1200v200H0z"/>
    <g transform="translate(600,240) scale(4.5)">
      <path fill="#02418a" d="M-15-18c-3-6-4-10-10-11 5-7 12-7 19-3l1 3h3l3-2 2-1c7-5 14-5 19 3-6 1-7 5-10 11 0 0 16 0 20-3h1c-2 25-10 39-29 49-21-9-27-24-29-49h1c3 3 20 3 20 3z"/>
      <path fill="#fff" d="M-22-19c2 0 11 1 14 7h1c-3-6 7-6 10-2v-4h-5v5h-5v-5h-5v5h-5v-5h-5zm39-1l-5 5v-5h-5v5h-5v-5h-5v4c3-4 13-4 10 2h1c4-6 13-7 14-7zm4 4h-5v5h5zm-7 0h-5v5h5zm-7 0h-5v5h5zm-7 0h-5v5h5zm-7 0h-5v5h5zm0 7v5h-5v-5zm7 0v5h-5v-5zm7 0v5h-5v-5zm7 0v5h-5v-5zm-28 7h5v5h-5zm7 0h5v5h-5zm7 0h5v5h-5zm7 0h5v5h-5zm7 0h5v5h-5z"/>
      <path fill="#f00010" d="M-28-19v5h5v-5zm7 0v5h5v-5zm7 0v5h5v-5zm7 0v5h5v-5zm7 0v5h5v-5zm7 0v5h5v-5zm0 7h-5v5h5zm-7 0h-5v5h5zm-7 0h-5v5h5zm-7 0h-5v5h5zm-7 0h-5v5h5zm-7 0h-5v5h5zm0 7v5h5v-5zm7 0v5h5v-5zm7 0v5h5v-5zm7 0v5h5v-5zm7 0v5h5v-5z"/>
      <path fill="#03A9F4" d="M-11-20c2-3 5-4 11-4v1l-2 1-2 2c-3-5-6-4-7 0zM0-21c6 0 9 1 11 4c-1-4-4-5-7 0l-2-2-2-1v-1z"/>
      <path fill="#ff0" d="M-6-19c2-3 8-1 5 3 0-2-3-2-5-3zm6-1c-2 1-5 1-5 3-3-4 3-6 5-3zM2-17v1h-3c5 2 6 5 2 7 0-4-3-6-5-5-2-1-5 1-5 5-4-2-3-5 2-7h-3v-1h9zM2-10h-2c-4 1-5-1-4-2l2 2 1-2c1 1 0 3-4 2-3 1-5 0-4-2l2 2 1-2c1 1 0 3-4 2v1l1-1c2 1 4 0 5-1l1 1c2 1 4 0 5-1l1 1v-1z"/>
      <path fill="#000" d="M0-19v1c-1-1-2-1-2 0h-2c0-1-1-1-2 0v-1c1-1 2-1 2 0h2c0-1 1-1 2 0zm-4 4c2-2 5 2 4 4 2-3 2-6 0-6 2 2-1 4-4 2z"/>
    </g>
  </svg>
);

const EnFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5 rounded-[4px] object-cover flex-shrink-0">
    <path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/><path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L22 480H0v-25l240-154zM640 0v3L391 191l-2-21L620 0h20zM0 0l239 176h-60L0 42V0z"/><path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/><path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
  </svg>
);

const LanguageDropdown = ({ locale, mobileAlign = false }: { locale: Locale; mobileAlign?: boolean }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideLang = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    if (isLangOpen) document.addEventListener('mousedown', handleClickOutsideLang);
    return () => document.removeEventListener('mousedown', handleClickOutsideLang);
  }, [isLangOpen]);

  return (
    <div className="relative" ref={langRef}>
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center gap-2 text-xs font-bold tracking-wider text-muted hover:text-foreground transition-colors px-2.5 py-1.5 rounded-lg border border-border hover:border-cta/30 bg-surface/40 hover:bg-surface/60"
      >
        {locale === 'hr' ? <HrFlag /> : <EnFlag />}
        {locale.toUpperCase()}
        <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isLangOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full mt-2 w-36 bg-surface border border-border rounded-xl shadow-lg overflow-hidden py-1 z-50 ${mobileAlign ? 'right-0' : 'left-0 text-left'}`}
          >
            <Link
              href="/hr"
              onClick={() => setIsLangOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium hover:bg-surface transition-colors ${locale === 'hr' ? 'text-cta bg-cta/5' : 'text-muted hover:text-foreground'}`}
            >
              <HrFlag /> Hrvatski
            </Link>
            <Link
              href="/en"
              onClick={() => setIsLangOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium hover:bg-surface transition-colors ${locale === 'en' ? 'text-cta bg-cta/5' : 'text-muted hover:text-foreground'}`}
            >
              <EnFlag /> English
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Navbar({ dict, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { label: dict.about, href: `/${locale}/o-nama` },
    { label: dict.products, href: '#products' },
    { label: dict.references, href: '#references' },
    { label: locale === 'hr' ? 'Galerija' : 'Gallery', href: `/${locale}/galerija` },
    { label: dict.contact, href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        router.push(`/${locale}${href}`);
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999]">
        {/* TopBar Integrated */}
        <div className="hidden lg:flex w-full bg-[#84CC16] text-white text-[11px] xl:text-[13px] font-medium py-1.5 px-4 sm:px-6 lg:px-10 justify-between items-center relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin fill="white" className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Budak 1a, Stankovci, Croatia</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Pon-Pet: 08:00-16:00</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+385957773505" className="flex items-center gap-2 hover:text-black transition-colors">
              <Phone fill="white" className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>095 777 3505</span>
            </a>
            <a href="mailto:orlovic13@gmail.com" className="flex items-center gap-2 hover:text-black transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>orlovic13@gmail.com</span>
            </a>
            <a href="https://web.facebook.com/p/ALU-i-PVC-stolarija-Orlovi%C4%87-100063548771189/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navbar Body */}
        <div 
          className={`
            transition-all duration-300 w-full
            ${scrolled
              ? 'bg-surface/95 backdrop-blur-xl border-b border-border shadow-md'
              : 'bg-background/80 backdrop-blur-lg border-b border-border/20'
            }
          `}
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-16 sm:h-20">

              {/* Logo */}
              <Link 
                href={`/${locale}`}
                className="flex-shrink-0 cursor-pointer flex items-center gap-2"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Image 
                  src="/images/logo-nobg.png" 
                  alt="Stolarija Orlović" 
                  width={180} 
                  height={45} 
                  className="object-contain"
                  priority
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => {
                  if (link.label === dict.products) {
                    return (
                      <div key={link.label} className="relative group">
                        <button className="flex items-center gap-1 text-sm font-semibold capitalize text-foreground hover:text-cta transition-colors py-4">
                          {link.label}
                          <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                          <div className="h-2 w-full"></div>
                          <div className="bg-surface border border-border rounded-xl shadow-xl overflow-hidden py-2 flex flex-col">
                            {[
                              { name: 'PVC stolarija', slug: 'pvc-stolarija' },
                              { name: 'ALU stolarija', slug: 'alu-stolarija' },
                              { name: 'Komarnici', slug: 'komarnici' },
                              { name: 'ALU ograde', slug: 'alu-ograde' }
                            ].map(prod => (
                              <Link 
                                key={prod.slug} 
                                href={`/${locale}/proizvodi/${prod.slug}`}
                                className="px-4 py-2.5 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-light transition-colors"
                              >
                                {prod.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const isExternal = !link.href.startsWith('#');

                  return isExternal ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm font-semibold tracking-wide capitalize text-foreground hover:text-cta transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-sm font-semibold tracking-wide capitalize text-foreground hover:text-cta transition-colors"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              {/* Desktop Right */}
              <div className="hidden md:flex items-center gap-4">
                <LanguageDropdown locale={locale} />
                <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                  <NeonButton size="sm" variant="solid" className="shadow-[0_0_15px_rgba(132,204,22,0.3)]">{dict.cta}</NeonButton>
                </Link>
              </div>

              {/* Mobile hamburger */}
              <div className="flex md:hidden items-center gap-3">
                <LanguageDropdown locale={locale} mobileAlign={true} />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground p-1"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={menuRef}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-border bg-surface/95 backdrop-blur-xl"
              >
                <nav className="px-4 py-6 space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.label === dict.products ? (
                        <div className="py-2">
                          <div className="block py-2 text-base font-bold text-foreground">{link.label}</div>
                          <div className="pl-4 flex flex-col space-y-2 border-l-2 border-border mt-2">
                             {[
                              { name: 'PVC stolarija', slug: 'pvc-stolarija' },
                              { name: 'ALU stolarija', slug: 'alu-stolarija' },
                              { name: 'Komarnici', slug: 'komarnici' },
                              { name: 'ALU ograde', slug: 'alu-ograde' }
                            ].map(prod => (
                              <Link 
                                key={prod.slug} 
                                href={`/${locale}/proizvodi/${prod.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-muted hover:text-foreground"
                              >
                                {prod.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            if (link.href.startsWith('#')) scrollToSection(e as any, link.href);
                            else setIsOpen(false);
                          }}
                          className="block py-3 text-base font-semibold capitalize text-foreground hover:text-cta"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Unified Spacer */}
      <div className="h-[98px] lg:h-[120px]" />
    </>
  );
}
