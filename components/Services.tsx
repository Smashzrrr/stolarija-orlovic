'use client';

import { motion } from 'framer-motion';
import { Brain, Workflow, Database, Globe, Sparkles, Link as LinkIcon } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'AI Konzultacija & Optimizacija',
    description:
      'Analiza vašeg poslovanja i identifikacija gdje AI može uštedjeti vrijeme i novac. Konkretne preporuke, ne teorija.',
    featured: true,
  },
  {
    icon: <Workflow className="w-7 h-7" />,
    title: 'Automatizacija procesa (n8n)',
    description:
      'Automatizacija repetitivnih poslovnih procesa — od email obrade do reportinga. Sustavi koji rade 24/7 bez vaše intervencije.',
    featured: true,
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: 'Web Scraping & Data Extraction',
    description:
      'Trebate 1.000 mailova, OIB-ova ili kontakata? Mogu ih izvući u sat vremena. Legalno, čisto, strukturirano.',
    featured: true,
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Web Stranice (No-Code/Low-Code)',
    description:
      'Funkcionalne, brze web stranice — bez klasičnog developerskog procesa. Od ideje do live verzije u danima, ne tjednima.',
    featured: false,
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'AI Strategija & Prompt Engineering',
    description:
      'Kako koristiti ChatGPT, Claude i druge LLM-ove da stvarno rade za vas. Trening, strategija, implementacija.',
    featured: false,
  },
  {
    icon: <LinkIcon className="w-7 h-7" />,
    title: 'No-Code Automatizacija & Integracije',
    description:
      'Povezivanje vaših postojećih alata (Gmail, Sheets, CRM) u automatizirane workflowove. Bez programiranja, s mjerljivim rezultatima.',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Što mogu napraviti za vas?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cta to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Featured cards — larger */}
          {services.filter(s => s.featured).map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative rounded-2xl bg-surface/50 border border-border hover:border-cta/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cta/10 transition-all duration-400 sm:col-span-1 lg:col-span-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cta/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 sm:p-10">
                <div className="w-14 h-14 rounded-xl bg-cta/10 text-cta flex items-center justify-center mb-6 group-hover:bg-cta/20 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center text-sm font-medium text-cta hover:text-cta-dark transition-colors group/link"
                >
                  Dogovorite projekt
                  <svg
                    className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}

          {/* Smaller cards */}
          {services.filter(s => !s.featured).map((service, i) => (
            <motion.div
              key={i + 3}
              variants={cardVariants}
              className="group relative rounded-2xl bg-surface/30 border border-border hover:border-cta/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta/5 transition-all duration-400"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cta/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-8">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-cta/15 group-hover:text-cta transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-cta transition-colors group/link"
                >
                  Dogovorite projekt
                  <svg
                    className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
