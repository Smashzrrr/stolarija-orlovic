import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Contact from '@/components/Contact';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const navDict = dict.nav;

  return (
    <main className="min-h-screen font-[family-name:var(--font-inter)] bg-background text-foreground">
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-surface/20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href={`/${locale}`} className="inline-flex items-center text-sm font-semibold text-cta mb-8 hover:text-cta-dark transition-colors bg-surface backdrop-blur-md px-4 py-2 rounded-full border border-cta/20 shadow-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {locale === 'hr' ? 'Povratak na naslovnicu' : 'Back to Home'}
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-[family-name:var(--font-poppins)] mb-6 uppercase">
            O nama
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Stolarija Orlović — tradicija i vrhunska kvaliteta (Placeholder)
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted leading-relaxed">
            <p className="mb-6">
              <em>Napomena: Ovdje će biti unesen detaljan tekst o Stolariji Orlović nakon što nam klijent dostavi specifične informacije i povijest tvrtke.</em>
            </p>
            <p className="mb-6">
              Stolarija Orlović se ponosi dugogodišnjim iskustvom i vrhunskom izradom aluminijske i PVC stolarije. Kroz godine smo se pozicionirali kao pouzdan partner na mnogobrojnim projektima, od obiteljskih kuća do složenih poslovnih objekata. Naša opredijeljenost kvaliteti vidljiva je u svakom ugrađenom prozoru i vratima.
            </p>
            <p>
              Koristimo isključivo certificirane profile vodećih svjetskih proizvođača poput REHAU, SCHÜCO i FEAL kako bi naši klijenti dobili maksimalnu energetsku učinkovitost i dugotrajnost.
            </p>
          </div>
        </div>
      </section>

      <Contact dict={dict.contact} locale={locale} />
      <Footer dict={dict.footer} navDict={navDict} locale={locale} />
    </main>
  );
}
