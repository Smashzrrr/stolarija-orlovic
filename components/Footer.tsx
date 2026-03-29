import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FooterProps {
  dict: any;
  navDict: any;
  locale: Locale;
}

export default function Footer({ dict, navDict, locale }: FooterProps) {
  const navLinks = [
    { label: navDict.about, href: `/${locale}/o-nama` },
    { label: navDict.products, href: '#products' },
    { label: navDict.references, href: '#references' },
    { label: navDict.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-surface/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image 
                src="/images/logo-nobg.png" 
                alt="Stolarija Orlović" 
                width={140} 
                height={35} 
                className="object-contain"
              />
            </Link>
            <p className="text-xs text-muted">{dict.copyright}</p>
            {dict.working_hours && (
              <p className="text-xs text-muted">{dict.working_hours}</p>
            )}
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact info */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${dict.email}`}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-cta hover:border-cta/30 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+38523681232"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-cta hover:border-cta/30 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://web.facebook.com/p/ALU-i-PVC-stolarija-Orlovi%C4%87-100063548771189/?locale=hr_HR&_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-cta hover:border-cta/30 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <div
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted"
              aria-label="Location"
            >
              <MapPin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
