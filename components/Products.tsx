'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ProductsProps {
  dict: any;
}

export default function Products({ dict }: ProductsProps) {
  const params = useParams();
  const locale = params.locale || 'hr';

  return (
    <section id="products" className="py-20 sm:py-28 bg-surface/30 relative">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.items.map((product: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link 
                href={`/${locale}/proizvodi/${product.slug}`}
                className="group relative block h-[420px] rounded-3xl overflow-hidden shadow-xl border border-border/50 hover:border-cta/40 hover:shadow-2xl hover:shadow-cta/10 transition-all duration-500"
              >
                {/* Background Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold font-[family-name:var(--font-poppins)] mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {product.title}
                  </h3>
                  
                  <div className="overflow-hidden">
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-3 mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-cta font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    <span>{product.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
