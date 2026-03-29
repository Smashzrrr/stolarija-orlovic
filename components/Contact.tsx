'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ContactProps {
  dict: any;
  locale: Locale;
}

export default function Contact({ dict, locale }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '689f922a-f771-4fd6-84c3-de24cd29ef85');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const mailtoHref = `mailto:${dict.direct_email}?subject=${encodeURIComponent(dict.schedule_subject)}`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)]">
            {dict.title}
          </h2>
          <p className="text-muted mt-3">{dict.subtitle}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-cta to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-center"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground">{dict.success}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      {dict.name_label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={dict.name_placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-surface/40 border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      {dict.phone_label}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={dict.phone_placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-surface/40 border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      {dict.email_label}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={dict.email_placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-surface/40 border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1.5">
                      {dict.location_label}
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder={dict.location_placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-surface/40 border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="project_type" className="block text-sm font-medium text-foreground mb-1.5">
                    {dict.type_label}
                  </label>
                  <input
                    type="text"
                    id="project_type"
                    name="project_type"
                    placeholder={dict.type_placeholder}
                    className="w-full px-4 py-3 rounded-lg bg-surface/40 border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    {dict.message_label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={dict.message_placeholder}
                    className="w-full px-4 py-3 rounded-lg bg-surface/40 border border-border text-foreground placeholder:text-muted-dark focus:border-cta focus:ring-1 focus:ring-cta/30 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Hidden fields for Web3Forms */}
                <input type="hidden" name="from_name" value="Stolarija Orlović Website" />
                <input type="hidden" name="subject" value={`${locale === 'hr' ? 'Novi upit' : 'New inquiry'} — Stolarija Orlović`} />

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle className="w-4 h-4" />
                    {dict.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center px-8 py-3.5 rounded-lg text-base font-semibold bg-cta text-background hover:bg-cta-dark transition-all duration-300 shadow-lg shadow-cta-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {dict.sending}
                    </>
                  ) : (
                    <>
                      {dict.submit}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right — direct contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-4"
          >
            <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-2">
              {dict.direct_title}
            </h3>

            <a
              href={mailtoHref}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface/20 hover:border-cta/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-cta" />
              </div>
              <div>
                <div className="text-xs text-muted">Email</div>
                <div className="text-sm font-medium text-foreground">{dict.direct_email}</div>
              </div>
            </a>

            <a
              href={`tel:${dict.direct_phone?.replace(/\s/g, '')}`}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface/20 hover:border-cta/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-cta" />
              </div>
              <div>
                <div className="text-xs text-muted">{locale === 'hr' ? 'Telefon' : 'Phone'}</div>
                <div className="text-sm font-medium text-foreground">{dict.direct_phone}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface/20">
              <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cta" />
              </div>
              <div>
                <div className="text-xs text-muted">{locale === 'hr' ? 'Lokacija' : 'Location'}</div>
                <div className="text-sm font-medium text-foreground">Budak 1a, Stankovci</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface/20">
              <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-cta" />
              </div>
              <div>
                <div className="text-xs text-muted">{locale === 'hr' ? 'Radno vrijeme' : 'Working hours'}</div>
                <div className="text-sm font-medium text-foreground">{locale === 'hr' ? 'Pon - Pet: 08:00 - 16:00' : 'Mon - Fri: 08:00 - 16:00'}</div>
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed mt-2">
              {dict.response_note}
            </p>

            {/* Google Maps Embed */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5!2d15.8247!3d43.8633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13353a9e7f0a5a5d%3A0x1!2sBudak%2C%20Stankovci%2C%20Croatia!5e0!3m2!1shr!2shr!4v1711000000000!5m2!1shr!2shr"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Stolarija Orlović — Budak 1a, Stankovci"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
