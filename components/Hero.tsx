'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';

interface HeroProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  dict: any;
  locale: Locale;
}

  // We'll use dict.hero.slides instead
  // const slides = [...]

export default function Hero({ dict, locale }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/images/projects/projekt-6.jpeg',
    '/images/projects/projekt-1.jpeg',
    '/images/projects/projekt-4.jpeg',
  ];

  const slugs = ['pvc-stolarija', 'alu-stolarija', 'alu-stolarija'];

  const slides = dict.slides || [
    { title: 'PVC Stolarija', subtitle: 'Vrhunska zvučna i toplinska izolacija za vaš dom.' },
    { title: 'ALU Klizne Stijene', subtitle: 'Moderan dizajn koji savršeno spaja vaš interijer i eksterijer.' },
    { title: 'Ulazna Vrata', subtitle: 'Sigurnost i estetika koja ostavlja nezaboravan prvi dojam.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  const loc = locale || 'hr';

  return (
    <section id="hero" className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={images[currentSlide]} 
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover absolute inset-0 z-0"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/65 z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-4xl"
          >
            <h1 className="font-[family-name:var(--font-poppins)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-xl uppercase">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-md font-medium">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href={`/${loc}/proizvodi/${slugs[currentSlide]}`}
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-lg text-lg font-bold bg-[#84CC16] text-white hover:bg-[#65A30D] transition-all duration-300 shadow-xl shadow-[#84CC16]/20 hover:-translate-y-0.5"
              >
                {locale === 'hr' ? 'Saznaj više' : 'Learn more'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-lg text-lg font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {dict.cta_primary}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <button 
        className="absolute z-20 top-1/2 left-4 md:left-8 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 hover:bg-black/50 hover:text-white transition-all group" 
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button 
        className="absolute z-20 top-1/2 right-4 md:right-8 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 hover:bg-black/50 hover:text-white transition-all group" 
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight className="w-8 h-8 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-12 z-20 flex gap-4 left-1/2 -translate-x-1/2">
        {slides.map((_: any, i: number) => (
          <button 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide 
                ? 'w-10 h-2 bg-[#84CC16]' 
                : 'w-2 h-2 bg-white/50 hover:bg-white/90'
            }`}
          />
        ))}
      </div>

      {/* Animated scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
