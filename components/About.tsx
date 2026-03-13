'use client';

import { motion } from 'framer-motion';
import { Zap, Database, Globe, Banknote } from 'lucide-react';

const highlights = [
  {
    icon: <Zap className="w-6 h-6" />,
    stat: '10+',
    label: 'automatiziranih procesa',
  },
  {
    icon: <Database className="w-6 h-6" />,
    stat: '1.000+',
    label: 'kontakata scrapanih u 1h',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    stat: '3',
    label: 'web stranice bez koda',
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    stat: '10.000€+',
    label: 'ušteda za klijente',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Što Fraviz donosi vašem biznisu?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cta to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          {/* Text Content — Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold font-[family-name:var(--font-poppins)] text-foreground leading-snug">
              Automatizacija koja zarađuje dok vi planirate sljedeći korak.
            </h3>
            <p className="text-muted leading-relaxed text-lg">
              Spajam AI, automatizaciju i low-code alate u sustave koji rade umjesto vas — 24 sata dnevno, 7 dana u tjednu. Od email obrade do ekstrakcije podataka, od web razvoja do poslovne optimizacije.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              Svaki sustav koji isporučim dolazi s mjerljivim rezultatom. Ne naplaćujem savjete — naplaćujem uštede.
            </p>

            {/* Tools */}
            <div className="pt-4">
              <div className="flex items-center gap-3 text-sm text-muted-dark">
                <div className="w-8 h-px bg-border" />
                <span>Alati koje koristim</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {['n8n', 'Claude', 'Antigravity', 'Apify', 'Next.js', 'ChatGPT'].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-xs font-medium rounded-md bg-surface border border-border text-muted hover:border-cta/30 hover:text-foreground transition-all duration-200"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Stats Highlights — Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 rounded-xl bg-surface/50 border border-border hover:border-cta/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cta/5 transition-all duration-300 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-cta/10 text-cta flex items-center justify-center mb-4 group-hover:bg-cta/20 transition-colors">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-foreground mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-muted">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
