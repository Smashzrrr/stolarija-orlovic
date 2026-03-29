'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import Footer from '@/components/Footer';

const galleryImages = [
  { src: '/images/projects/projekt-1.jpeg', title: 'ALU harmo grilje — moderna vila', titleEn: 'ALU folding shutters — modern villa' },
  { src: '/images/projects/projekt-2.jpeg', title: 'PVC klizne stijene — novogradnja', titleEn: 'PVC sliding walls — new build' },
  { src: '/images/projects/projekt-3.jpeg', title: 'PVC prozori — potkrovlje', titleEn: 'PVC windows — attic' },
  { src: '/images/projects/projekt-4.jpeg', title: 'ALU ulazna vrata sa skrivenim krilom', titleEn: 'ALU entrance door with hidden leaf' },
  { src: '/images/projects/projekt-5.jpeg', title: 'PVC stolarija s ALU grijljama', titleEn: 'PVC joinery with ALU shutters' },
  { src: '/images/projects/projekt-6.jpeg', title: 'Moderna vila — kompletna stolarija', titleEn: 'Modern villa — full joinery' },
  { src: '/images/projects/projekt-7.jpeg', title: 'ALU grilje na kamenoj fasadi', titleEn: 'ALU shutters on stone facade' },
  { src: '/images/projects/projekt-8.jpeg', title: 'Komarnik na PVC prozoru', titleEn: 'Mosquito net on PVC window' },
  { src: '/images/projects/projekt-9.jpeg', title: 'ALU ograda za balkon', titleEn: 'ALU balcony railing' },
  { src: '/images/projects/projekt-10.jpeg', title: 'Staklena ALU ograda', titleEn: 'Glass ALU railing' },
  { src: '/images/projects/projekt-11.jpeg', title: 'ALU klizna stijena', titleEn: 'ALU sliding wall' },
  { src: '/images/projects/projekt-12.jpeg', title: 'Staklena fasada', titleEn: 'Glass facade' },
  { src: '/images/projects/projekt-13.jpeg', title: 'PVC Rehau — antracit profili', titleEn: 'PVC Rehau — anthracite profiles' },
  { src: '/images/projects/projekt-14.jpeg', title: 'PVC prozori s roletama', titleEn: 'PVC windows with roller shutters' },
  { src: '/images/projects/projekt-15.jpeg', title: 'IDECO plise komarnici', titleEn: 'IDECO plisse mosquito nets' },
  { src: '/images/projects/projekt-16.jpeg', title: 'Vanjske rolete s elektro pogonom', titleEn: 'External roller shutters with electric drive' }
];

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GalleryClient({ locale, dict }: { locale: Locale, dict: any }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = galleryImages.map(img => ({
    src: img.src,
    title: locale === 'en' ? img.titleEn : img.title
  }));

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen bg-background pt-12 sm:pt-20">
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 bg-surface/30">
        <div className="max-w-7xl mx-auto text-center">
          <Link href={`/${locale}`} className="inline-flex items-center text-sm font-semibold text-cta mb-8 hover:text-cta-dark transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> {locale === 'hr' ? 'Povratak' : 'Back'}
          </Link>
          <h1 className="text-4xl sm:text-6xl font-black font-[family-name:var(--font-poppins)] mb-6 uppercase">
            {dict.gallery?.title || 'Galerija radova'}
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            {dict.gallery?.subtitle || 'Pogledajte naše najnovije projekte i ugradnje.'}
          </p>
        </div>
      </section>

      {/* Featured Highlight Block requested by user */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] border border-cta/10 overflow-hidden shadow-2xl shadow-cta/5"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src="/images/projects/projekt-6.jpeg"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#84CC16] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {dict.gallery?.featured?.badge || 'Istaknuto'}
                  </span>
                </div>
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold font-[family-name:var(--font-poppins)] mb-6 text-foreground">
                  {dict.gallery?.featured?.title || 'Na novom stambenom objektu'}
                </h2>
                <div className="space-y-4">
                  {(dict.gallery?.featured?.items || [
                    "PVC Rehau stolarija s ALU harmo grijljama",
                    "PVC unutarnje rolete s elektro pogonom",
                    "Antracit izvana, bijelo iznutra",
                    "Low-E trostruko staklo idealno za dalmatinsku klimu",
                    "Staklene ograde na balkonima"
                  ]).map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link 
                    href="#contact" 
                    className="inline-block bg-cta text-white font-bold py-4 px-8 rounded-xl hover:bg-cta-dark transition-all hover:scale-[1.02] shadow-xl shadow-cta/20"
                  >
                    {dict.nav.cta}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img: { src: string, title: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative break-inside-avoid rounded-2xl overflow-hidden border border-border group"
              >
                <div 
                  className="relative aspect-[4/5] cursor-pointer"
                  onClick={() => setSelectedIndex(i)}
                >
                  <Image 
                    src={img.src} 
                    alt={img.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg">{img.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} navDict={dict.nav} locale={locale as Locale} />

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-cta transition-colors p-2 bg-black/50 rounded-full z-50"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white hover:text-cta transition-colors p-3 bg-black/30 hover:bg-black/60 rounded-full z-50 group"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button 
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white hover:text-cta transition-colors p-3 bg-black/30 hover:bg-black/60 rounded-full z-50 group"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 group-hover:translate-x-1 transition-transform" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
                <Image 
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="text-white text-xl font-medium text-center">{images[selectedIndex].title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
