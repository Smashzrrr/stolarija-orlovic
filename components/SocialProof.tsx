'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Automatizirao nam je proces koji nas je koštao 15 sati tjedno. ROI u prvom mjesecu.',
    author: 'Direktor',
    role: 'SMB kompanija',
  },
  {
    quote: 'Isporučio je u 3 dana ono za što smo dobili ponude od 3 tjedna i 5x veće cijene.',
    author: 'Vlasnik',
    role: 'Startup',
  },
  {
    quote: 'Konačno netko tko razumije i biznis i tehnologiju.',
    author: 'COO',
    role: 'Uslužna firma',
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Što drugi kažu
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cta to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-surface/40 border border-border hover:border-cta/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta/5 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl font-serif text-cta/10 leading-none select-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cta to-accent flex items-center justify-center text-background font-bold text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.author}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn link — simple single line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <a
            href="https://www.linkedin.com/in/ivan-bobanovi%C4%87/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-medium text-muted hover:text-[#0A66C2] transition-colors group"
          >
            <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Pratite me na LinkedInu
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
