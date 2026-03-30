'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Provjeri je li korisnik već pristao/odbio
    const consent = localStorage.getItem('orlovic-cookie-consent');
    if (!consent) {
      // Optimizacija prikaza: pričekaj malo da se stranica učita
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('orlovic-cookie-consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('orlovic-cookie-consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 md:p-8 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto pointer-events-auto">
            <div className="bg-surface/95 backdrop-blur-xl border border-border rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-lg font-bold font-[family-name:var(--font-poppins)] text-foreground mb-2">
                  Kolačići i privatnost
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Kako bi stranica radila savršeno i kako bismo analizirali promet
                  i poboljšali vaše iskustvo, koristimo kolačiće (cookies).
                  Slažete li se s njihovim korištenjem? Samo nužni kolačići su 
                  uvijek aktivni.
                </p>
              </div>
              <div className="flex flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl text-sm font-medium border border-border text-foreground hover:bg-surface-light transition-colors"
                >
                  Odbij
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl text-sm font-bold bg-cta text-background hover:bg-cta-dark shadow-lg shadow-cta-glow transition-all"
                >
                  Prihvati
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
