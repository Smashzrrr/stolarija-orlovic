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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5 rounded-[4px] object-cover flex-shrink-0">
    <path fill="#02418a" d="M0 320h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#f00010" d="M0 0h640v160H0z"/><g transform="scale(3.11666) translate(40.24)"><path fill="#03A9F4" d="M57.9 33.7c1.4.3 2 1.9 1 3h-2.3v30.4s-3.7 9.8-15.4 9.8c-11.7 0-15.4-9.8-15.4-9.8V36.7H23.5c-1-1.1-.4-2.7 1-3H58z"/><path fill="#fff" d="M30 45.4h4.4v4.4H30zm8.7 0h4.3v4.4h-4.3zm8.7 0h4.4v4.4h-4.4zm-17.4 8.6h4.4v4.3H30zm8.7 0h4.3v4.3h-4.3zm8.7 0h4.4v4.3h-4.4zm-13 8.6h4.3v4.4h-4.3zm8.7 0h4.3v4.4h-4.3z"/><path fill="#f00010" d="M34.4 36.7h4.3v4.4h-4.3zm8.7 0h4.3v4.4h-4.3zm-13 8.7h4.3v4.4h-4.3zm8.7 0h4.3v4.4h-4.3zm8.7 0h4.4v4.4h-4.4zm-21.7 8.6h4.4v4.3H26zm8.6 0h4.4v4.3h-4.4zm8.7 0h4.3v4.3h-4.3zm8.7 0h4.4v4.3h-4.4zm-21.7 8.6h4.4v4.4H26zm8.6 0h4.4v4.4h-4.4zm8.7 0h4.3v4.4h-4.3zm-4.4 8.7h4.3v4.3h-4.3zm-8.6 0h4.4v4.3h-4.4z"/><path fill="#02418a" d="M26 31.8h5.3v3c-1 3.5-3.6 4.7-6.5 4.8 2.2-3 2.9-6.3 1.2-7.8zM31.3 31.8h5.4v3c-1 3.5-3.7 4.7-6.6 4.8 2.3-3 3-6.3 1.2-7.8z"/><path fill="#03A9F4" d="M36.7 31.8h5.4v3c-1 3.5-3.7 4.7-6.6 4.8 2.3-3 3-6.3 1.2-7.8z"/><path fill="#02418a" d="M42 31.8h5.5v3c-1 3.5-3.7 4.7-6.6 4.8 2.3-3 3-6.3 1.1-7.8zM47.5 31.8H53v3c-1 3.5-3.8 4.7-6.6 4.8 2.3-3 3-6.3 1.1-7.8z"/><path fill="#f00010" d="M49 32.8s-.3.7-.8 1c.2-.5 0-1-.1-1.2.4 0 .9.2.9.2zM29 33.5s-.8-2-1.8.2L28 35l1-1.5zM33 34.6l-1 1-1-1v1l1-1z"/><path fill="#ff0" d="M34 32.8l2-1-1 3z"/><path fill="#000" d="M38.8 33c-.1.3-.4 1-.3 1v.7c-1 0-.9-.7-.9-.7zM43 33c.4 1 1.7 1.8 1.7 1.8V35c-.8 0-1.7-.8-1.7-.8z"/><path fill="#ff0" d="M44 33s.6.5 1 1v.5s-.3-.5-1-1zM48.2 32.8s0 1-1 1c0 0 .7.3 1 1v-2z"/></g>
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
            <a href="tel:+38523681232" className="flex items-center gap-2 hover:text-black transition-colors">
              <Phone fill="white" className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>023 681 232</span>
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
                        <button className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-cta transition-colors py-4">
                          {link.label}
                          <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                          <div className="h-2 w-full"></div>
                          <div className="bg-surface border border-border rounded-xl shadow-xl overflow-hidden py-2 flex flex-col">
                            {[
                              { name: 'PVC Stolarija', slug: 'pvc-stolarija' },
                              { name: 'ALU Stolarija', slug: 'alu-stolarija' },
                              { name: 'Komarnici', slug: 'komarnici' },
                              { name: 'ALU Ograde', slug: 'alu-ograde' }
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
                      className="text-sm font-semibold tracking-wide text-foreground hover:text-cta transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-sm font-semibold tracking-wide text-foreground hover:text-cta transition-colors"
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
                              { name: 'PVC Stolarija', slug: 'pvc-stolarija' },
                              { name: 'ALU Stolarija', slug: 'alu-stolarija' },
                              { name: 'Komarnici', slug: 'komarnici' },
                              { name: 'ALU Ograde', slug: 'alu-ograde' }
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
                          className="block py-3 text-base font-semibold text-foreground hover:text-cta"
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
