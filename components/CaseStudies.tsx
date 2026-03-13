'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    tag: 'Data Extraction',
    title: 'Data Extraction za B2B Outreach',
    problem: 'Klijentu trebalo 1.000+ kontakata za outreach kampanju',
    solution: 'Antigravity + Apify API integracija — automatizirani scraping',
    result: '1.000 kontakata (email + kontakt forme) u 1 sat',
    comparison: 'Ručno bi trajalo 2+ tjedna',
    stat: '1.000',
    statLabel: 'kontakata u 1h',
    accentColor: 'from-primary to-blue-400',
    featured: true,
  },
  {
    tag: 'Automatizacija',
    title: 'Automatizacija poslovnih procesa',
    problem: 'Klijent trošio 20+ sati tjedno na repetitivne admin taskove',
    solution: 'n8n workflow automatizacija — email processing, data entry, reporting',
    result: '1.000+ sati uštede godišnje',
    comparison: '10.000€+ ušteda u operativnim troškovima',
    stat: '10.000€+',
    statLabel: 'ušteda godišnje',
    accentColor: 'from-cta to-amber-400',
    featured: false,
  },
  {
    tag: 'Web Development',
    title: 'Web prisutnost iz nule',
    problem: 'Klijent bez web stranice, ograničen budžet, hitno treba online prisutnost',
    solution: 'No-code build — funkcionalna stranica u 3 dana',
    result: '3 stranice isporučene, sve live i responsive',
    comparison: 'Bez klasičnog dev troška',
    stat: '3 dana',
    statLabel: 'od ideje do launcha',
    accentColor: 'from-accent to-purple-400',
    featured: false,
  },
];

export default function CaseStudies() {
  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);

  return (
    <section id="results" className="py-24 sm:py-32 relative">
      {/* Distinct background — gradient shift + pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,158,11,0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute top-0 left-1/3 w-[700px] h-[400px] rounded-full opacity-8 blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)' }}
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
            Brojke, ne priče.
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Svaki projekt donosi mjerljive rezultate. Evo konkretnih primjera.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cta to-accent rounded-full mt-6" />
        </motion.div>

        {/* Featured case study — full width, large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="group relative overflow-hidden rounded-2xl bg-surface/50 border border-border hover:border-cta/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:shadow-cta/10">
            <div className="flex flex-col md:flex-row gap-0">
              {/* Content */}
              <div className="flex-1 p-8 sm:p-10 space-y-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cta/10 text-cta border border-cta/20">
                  {featured.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] text-foreground">
                  {featured.title}
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-dark uppercase tracking-wider">Problem</span>
                      <p className="text-muted mt-0.5">{featured.problem}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-dark uppercase tracking-wider">Rješenje</span>
                      <p className="text-muted mt-0.5">{featured.solution}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-dark uppercase tracking-wider">Rezultat</span>
                      <p className="text-foreground font-medium mt-0.5">{featured.result}</p>
                      <p className="text-sm text-muted">{featured.comparison}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big stat — right panel */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 border-l border-border p-8 md:p-10 min-w-[280px]">
                <div className="text-center w-full">
                  <div className={`text-6xl sm:text-7xl lg:text-8xl font-black font-[family-name:var(--font-poppins)] bg-gradient-to-r ${featured.accentColor} bg-clip-text text-transparent leading-tight break-words mx-auto`}>
                    {featured.stat}
                  </div>
                  <div className="text-sm font-medium text-muted mt-3">{featured.statLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining case studies — 2-column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-surface/40 border border-border hover:border-cta/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta/5"
            >
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cta/10 text-cta border border-cta/20 mb-3">
                      {cs.tag}
                    </span>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] text-foreground">
                      {cs.title}
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`text-3xl sm:text-4xl font-black font-[family-name:var(--font-poppins)] bg-gradient-to-r ${cs.accentColor} bg-clip-text text-transparent`}>
                      {cs.stat}
                    </div>
                    <div className="text-xs text-muted mt-0.5">{cs.statLabel}</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-red-400 flex-shrink-0">✕</span>
                    <span className="text-muted">{cs.problem}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary flex-shrink-0">⚡</span>
                    <span className="text-muted">{cs.solution}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span className="text-foreground font-medium">{cs.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
