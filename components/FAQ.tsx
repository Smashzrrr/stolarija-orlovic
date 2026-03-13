'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Moram li znati programirati da radim s tobom?',
    answer:
      'Ne. Sve što radim je dizajnirano da bude razumljivo i upotrebljivo bez tehničkog znanja.',
  },
  {
    question: 'Koliko traje tipični projekt?',
    answer:
      'Ovisno o složenosti — od par dana za web scraping ili jednostavnu automatizaciju, do 2-4 tjedna za kompleksnije sustave.',
  },
  {
    question: 'Koje alate koristiš?',
    answer:
      'n8n za automatizaciju, Claude/ChatGPT za AI, Antigravity i Apify za scraping, Next.js za web. Ali alat biram prema problemu — ne obrnuto.',
  },
  {
    question: 'Koliko to košta?',
    answer:
      'Svaki projekt je drugačiji. Javite se za besplatan poziv i dajem vam procjenu unutar 24 sata.',
  },
  {
    question: 'Radiš li samo s firmama iz Hrvatske?',
    answer:
      'Ne — radim remote s klijentima iz cijele regije. Komunikacija na hrvatskom, engleskom ili po dogovoru.',
  },
  {
    question: 'Što ako nisam siguran/na što mi treba?',
    answer:
      'Zato postoji besplatan poziv. U 30 minuta identificiramo vaš najveći bottleneck i predložim konkretno rješenje.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Česta pitanja
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === i
                  ? 'border-primary/30 bg-surface/60'
                  : 'border-border bg-surface/20 hover:border-border hover:bg-surface/40'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base sm:text-lg font-medium font-[family-name:var(--font-poppins)] text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
