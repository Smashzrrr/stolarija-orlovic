import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return {
    title: locale === 'hr' ? 'O nama — Stolarija Orlović' : 'About Us — Stolarija Orlović',
    description:
      locale === 'hr'
        ? 'ALU i PVC Orlović — obiteljska tvrtka u poslovanju od 2000. godine s više od 1000 završenih projekata diljem Hrvatske.'
        : 'ALU and PVC Orlović — a family business operating since 2000 with over 1,000 completed projects across Croatia.',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen font-[family-name:var(--font-inter)] bg-background text-foreground">
      {/* Hero / header */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-20 bg-surface/20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center text-sm font-semibold text-cta mb-8 hover:text-cta-dark transition-colors bg-surface backdrop-blur-md px-4 py-2 rounded-full border border-cta/20 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {locale === 'hr' ? 'Povratak na naslovnicu' : 'Back to Home'}
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-[family-name:var(--font-poppins)] mb-6">
            {locale === 'hr' ? 'O nama' : 'About Us'}
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {locale === 'hr'
              ? 'Upoznajte ALU i PVC Orlović — tradicija, kvaliteta i strast prema stolariji od 2000. godine.'
              : 'Meet ALU and PVC Orlović — tradition, quality and passion for joinery since 2000.'}
          </p>
        </div>
      </section>

      {/* About Component with real content */}
      <About dict={dict.about} />

      {/* Contact section */}
      <Contact dict={dict.contact} locale={locale} />
      <Footer dict={dict.footer} navDict={dict.nav} locale={locale} />
    </main>
  );
}
