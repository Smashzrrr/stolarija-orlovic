import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Process from '@/components/Process';
import References from '@/components/References';
import Brands from '@/components/Brands';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getDictionary, type Locale } from '@/lib/i18n';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <main>
        <Hero dict={dict.hero} locale={locale} />
        <Features dict={dict.features} />
        <Products dict={dict.products} />
        <Process dict={dict.process} />
        <References dict={dict.references} />
        <Brands dict={dict.brands} />
        <SocialProof dict={dict.testimonials} />
        <FAQ dict={dict.faq} />
        <Contact dict={dict.contact} locale={locale} />
      </main>
      <Footer dict={dict.footer} navDict={dict.nav} locale={locale} />
    </>
  );
}
