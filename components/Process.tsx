'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Ruler, FileText, Wrench, HardHat } from 'lucide-react';
import Image from 'next/image';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ProcessProps {
  dict: any;
}

const processIcons = [MessageSquare, Ruler, FileText, Wrench, HardHat];

export default function Process({ dict }: ProcessProps) {
  return (
    <section id="process" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Images & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50">
              <Image
                src="/images/process-montaza.jpg"
                alt="Naš proces ugradnje prozora"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Stronger overlay gradient for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
              
              <div className="absolute bottom-10 left-8 sm:left-10 right-8 sm:right-10 z-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#84CC16] text-white uppercase mb-4 shadow-[0_4px_14px_rgba(132,204,22,0.4)]">
                  {dict.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-poppins)] text-white mb-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  {dict.title}
                </h2>
                <p className="text-white/90 text-lg sm:text-xl font-medium max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {dict.subtitle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Vertical Timeline */}
          <div className="relative pl-4 sm:pl-8">
            <div className="absolute left-10 sm:left-14 top-8 bottom-8 w-[2px] bg-[#84CC16]/60" />
            
            <div className="space-y-12">
              {dict.items.map((step: any, i: number) => {
                const Icon = processIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative flex items-start group"
                  >
                    {/* Icon Container */}
                    <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-cta shadow-lg shadow-cta/20 group-hover:scale-110 group-hover:bg-cta transition-all duration-300">
                      <Icon className="w-5 h-5 text-cta group-hover:text-background transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="ml-6 sm:ml-8 pt-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-black text-cta/40 mr-3">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
