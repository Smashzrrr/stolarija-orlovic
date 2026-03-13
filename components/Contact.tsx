'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[300px] rounded-full opacity-5 blur-[120px]"
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
            Imate problem? Riješimo ga.
          </h2>
          <p className="text-muted text-lg max-w-xl">
            Besplatan poziv od 30 minuta. Bez obveze. Konkretna procjena unutar 24 sata.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cta to-accent rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="toast"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl bg-surface/40 border border-cta/30"
                >
                  <div className="w-16 h-16 rounded-full bg-cta/10 text-cta flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-2">
                    Hvala!
                  </h3>
                  <p className="text-muted mb-6">
                    Odgovorit ću vam unutar 24 sata.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-cta hover:text-cta-dark transition-colors font-medium"
                  >
                    Pošalji novi upit
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                      Ime
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta transition-all duration-200 outline-none"
                      placeholder="Vaše ime"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta transition-all duration-200 outline-none"
                      placeholder="vas@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                      Poruka
                    </label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta transition-all duration-200 outline-none resize-none"
                      placeholder="Opišite što vam treba..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl text-base font-semibold bg-cta text-background hover:bg-cta-dark transition-all duration-300 shadow-lg shadow-cta-glow hover:shadow-cta/40 flex items-center justify-center gap-2"
                  >
                    Pošaljite upit
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-6">
                Ili me kontaktirajte direktno
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:placeholder@fraviz.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-cta/10 text-cta flex items-center justify-center group-hover:bg-cta/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted">Email</div>
                    <div className="text-foreground font-medium group-hover:text-cta transition-colors">
                      placeholder@fraviz.com
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ivan-bobanovi%C4%87/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted">LinkedIn</div>
                    <div className="text-foreground font-medium group-hover:text-[#0A66C2] transition-colors">
                      Povežimo se
                    </div>
                  </div>
                </a>

                {/* Calendly */}
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted">Zakažite poziv</div>
                    <div className="text-foreground font-medium group-hover:text-accent transition-colors">
                      Besplatnih 30 minuta
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response notice */}
            <div className="p-6 rounded-xl bg-surface/30 border border-border">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Brz odgovor zajamčen</div>
                  <div className="text-sm text-muted mt-1">
                    Na svaki upit odgovaram unutar 24 sata. Za hitne projekte — obično i brže.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
