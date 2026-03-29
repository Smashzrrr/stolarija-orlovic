'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getDictionary, type Locale } from '@/lib/i18n';
import Footer from '@/components/Footer';

const galleryImages = [
  { src: '/images/projects/projekt-1.jpeg', title: 'ALU harmo grilje — moderna vila' },
  { src: '/images/projects/projekt-2.jpeg', title: 'PVC klizne stijene — novogradnja' },
  { src: '/images/projects/projekt-3.jpeg', title: 'PVC prozori — potkrovlje' },
  { src: '/images/projects/projekt-4.jpeg', title: 'ALU ulazna vrata sa skrivenim krilom' },
  { src: '/images/projects/projekt-5.jpeg', title: 'PVC stolarija s ALU grijljama' },
  { src: '/images/projects/projekt-6.jpeg', title: 'Moderna vila — kompletna stolarija' },
  { src: '/images/projects/projekt-7.jpeg', title: 'ALU grilje na kamenoj fasadi' },
  { src: '/images/projects/projekt-8.jpeg', title: 'Komarnik na PVC prozoru' },
  { src: '/images/projects/projekt-9.jpeg', title: 'ALU ograda za balkon' },
  { src: '/images/projects/projekt-10.jpeg', title: 'Staklena ALU ograda' },
  { src: '/images/projects/projekt-11.jpeg', title: 'ALU klizna stijena' },
  { src: '/images/projects/projekt-12.jpeg', title: 'Staklena fasada' },
  { src: '/images/projects/projekt-13.jpeg', title: 'PVC Rehau — antracit profili' },
  { src: '/images/projects/projekt-14.jpeg', title: 'PVC prozori s roletama' },
  { src: '/images/projects/projekt-15.jpeg', title: 'IDECO plise komarnici' },
  { src: '/images/projects/projekt-16.jpeg', title: 'Vanjske rolete s elektro pogonom' },
];

export default function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const dict = use(getDictionary(locale as Locale));

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
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative break-inside-avoid rounded-2xl overflow-hidden border border-border group"
              >
                <div className="relative aspect-[4/5]">
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
    </main>
  );
}
