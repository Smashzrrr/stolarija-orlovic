'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { NeonButton } from './ui/neon-button';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ReferencesProps {
  dict: any;
}

export default function References({ dict }: ReferencesProps) {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  const initialCount = isMobile ? 4 : 5;
  const visibleItems = showAll ? dict.items : dict.items.slice(0, initialCount);
  const hasMore = dict.items.length > initialCount;

  return (
    <section id="references" className="py-20 sm:py-28 bg-surface/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-cta/10 text-cta border border-cta/20 uppercase mb-4 shadow-sm">
            {dict.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-3">
            {dict.title}
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((ref: any, i: number) => (
              <motion.div
                key={ref.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i < initialCount ? i * 0.08 : (i - initialCount) * 0.06 }}
                layout
                onClick={() => setSelectedProject(ref)}
                className="group cursor-pointer rounded-3xl border border-border/60 bg-surface/50 overflow-hidden hover:border-cta/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cta/10 transition-all duration-500"
              >
                <div className="relative h-60 bg-surface overflow-hidden">
                  {ref.image ? (
                    <Image
                      src={ref.image}
                      alt={ref.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cta/5 to-surface flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-cta/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold text-foreground border border-white/20 shadow-sm backdrop-blur-md bg-white/70">
                      {ref.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 relative">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] text-foreground mb-2 group-hover:text-cta transition-colors duration-300">
                    {ref.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {ref.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* "Vidi još" / "Prikaži manje" button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold border-2 border-cta/30 text-cta hover:bg-cta hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cta/20 hover:-translate-y-0.5"
            >
              {showAll ? 'Prikaži manje' : 'Vidi još'}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-4xl bg-background rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close button — always visible, top-right of modal */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-border/40 flex items-center justify-center text-foreground hover:text-foreground transition-colors z-20 shadow-md"
                aria-label="Zatvori"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Side */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cta/10 to-surface flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-cta/40" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold text-foreground border border-white/20 shadow-sm backdrop-blur-md bg-white/70">
                    {selectedProject.tag}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="p-8 sm:p-12 w-full md:w-1/2 flex flex-col justify-center bg-surface/10 overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] text-foreground mb-4 pr-12">
                  {selectedProject.title}
                </h3>
                <p className="text-base text-muted leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-4">
                    Sviđa vam se ovaj projekt? Zatražite besplatnu izmjeru i ponudu.
                  </p>
                  <Link href="#contact" onClick={() => setSelectedProject(null)}>
                    <NeonButton variant="solid" className="w-full sm:w-auto shadow-lg shadow-cta/30 text-base py-3">
                      Zatraži ponudu
                    </NeonButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
