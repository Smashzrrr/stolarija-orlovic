'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface BrandsProps {
  dict: any;
}

const brandDomains: Record<string, string> = {
  'Rehau': '/images/brands/REHAU_Logo_sRGB_01.svg.png',
  'Feal': '/images/brands/Feal-logo.png',
  'Eux': '/images/brands/eux-sistemi-za-grilje-logo.svg',
  'Schüco': '/images/brands/Schuco-Logo.png',
  'Ideco': '/images/brands/ideco.png',
};

export default function Brands({ dict }: BrandsProps) {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-background border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] text-foreground">
            {dict.title}
          </h2>
          <p className="text-muted mt-3 text-sm sm:text-base max-w-lg mx-auto">{dict.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {dict.items.map((brand: string, i: number) => {
            const logoUrl = brandDomains[brand];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative flex items-center justify-center p-4"
              >
                {logoUrl ? (
                  <div className="relative w-32 h-16 transition-transform duration-500 hover:scale-110">
                    <Image
                      src={logoUrl}
                      alt={brand}
                      fill
                      unoptimized
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                ) : (
                  <div className="text-xl font-bold text-muted group-hover:text-foreground transition-colors">
                    {brand}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
