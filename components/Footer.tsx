import Link from 'next/link';

const footerLinks = [
  { label: 'O meni', href: '#about' },
  { label: 'Usluge', href: '#services' },
  { label: 'Rezultati', href: '#results' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-black tracking-tight font-[family-name:var(--font-poppins)] text-cta">
              FRAVIZ
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ivan-bobanovi%C4%87/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-dark">
            &copy; 2026 Fraviz. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
