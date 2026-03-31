'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = '385957773505';
const DEFAULT_MESSAGE = 'Pozdrav! Zanima me ponuda za PVC/ALU stolariju. Možete li mi poslati više informacija?';
const COOKIE_KEY = 'orlovic-cookie-consent';

export default function WhatsAppButton({ message }: { message?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show only after cookie consent is resolved (accepted or declined)
    // Add a longer delay so it doesn't pop up immediately and annoy the user
    const checkAndShow = () => {
      const consent = localStorage.getItem(COOKIE_KEY);
      if (consent) {
        // Cookie already decided in a previous session — show after 3 second delay
        const t = setTimeout(() => {
          setIsVisible(true);
          // Show tooltip 5s after button appears
          setTimeout(() => setShowTooltip(true), 5000);
        }, 3000);
        return () => clearTimeout(t);
      } else {
        // Cookie not yet decided — wait for storage event (user clicks accept/decline)
        const onStorage = (e: StorageEvent) => {
          if (e.key === COOKIE_KEY && e.newValue) {
            setTimeout(() => {
              setIsVisible(true);
              setTimeout(() => setShowTooltip(true), 5000);
            }, 1000);
          }
        };
        window.addEventListener('storage', onStorage);

        // Also poll every 500ms as fallback (storage events sometimes behave inconsistently in the same tab)
        const poll = setInterval(() => {
          if (localStorage.getItem(COOKIE_KEY)) {
            clearInterval(poll);
            setTimeout(() => {
              setIsVisible(true);
              setTimeout(() => setShowTooltip(true), 5000);
            }, 1000);
          }
        }, 500);

        return () => {
          window.removeEventListener('storage', onStorage);
          clearInterval(poll);
        };
      }
    };

    const cleanup = checkAndShow();
    return cleanup;
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9990] flex items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-3 sm:p-4 max-w-[200px] mb-1 sm:mb-2"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDismissed(true);
              }}
              className="absolute -top-2 -right-2 w-7 h-7 sm:w-6 sm:h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Zatvori"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
              {message || (
                <>👋 Trebate ponudu? Pišite nam na <span className="text-[#25D366] font-bold">WhatsApp</span>!</>
              )}
            </p>
            {/* Arrow pointing to the button */}
            <div className="absolute -right-2 bottom-4 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp FAB Container */}
      <div className="relative">
        {/* Enlarge dismiss X button so it's easier to tap */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="absolute -top-3 -left-3 w-8 h-8 bg-white text-gray-800 border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 z-50 shadow-md"
          aria-label="Ukloni WhatsApp gumb"
        >
          <X className="w-4 h-4" />
        </button>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kontaktirajte nas na WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/30 flex items-center justify-center transition-colors"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

          {/* WhatsApp icon */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
