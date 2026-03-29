import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/* eslint-disable @typescript-eslint/no-explicit-any */

// SEO-optimized product data with galleries
const productPageData: Record<string, {
  heroImage: string;
  galleryImages: string[];
  sections: { heading: string; text: string }[];
  features: string[];
  metaTitle: string;
  metaDescription: string;
}> = {
  'pvc-stolarija': {
    heroImage: '/images/products/pvc/pvc-1.jpg',
    galleryImages: [
      '/images/products/pvc/pvc-1.jpg',
      '/images/products/pvc/pvc-2.jpg',
      '/images/products/pvc/pvc-3.jpg',
      '/images/products/pvc/pvc-4.jpg',
      '/images/products/pvc/pvc-5.jpg',
    ],
    sections: [
      {
        heading: 'Zašto odabrati PVC stolariju?',
        text: 'PVC stolarija je najpopularniji izbor za obiteljske kuće i stanove zahvaljujući izvrsnom omjeru cijene i kvalitete. Naši PVC prozori izrađeni su od Rehau profila koji pružaju vrhunsku toplinsku i zvučnu izolaciju, smanjujući troškove grijanja do 30%. Svaki proizvod dolazi s 10 godina garancije.'
      },
      {
        heading: 'Što sve nudimo u PVC programu?',
        text: 'Naša PVC ponuda uključuje: jednokrilne i dvokrilne prozore, balkonska vrata, masivna ulazna vrata, podizno-klizne stijene (PSK), klizne sisteme s 2-4 staze i harmonika vrata. Sve je dostupno u bijeloj boji, antracitu ili drvo-dekorima po vašem izboru.'
      },
      {
        heading: 'Energetska učinkovitost i trostruko staklo',
        text: 'Standardno ugrađujemo trostruko staklo (Ug=0.5 W/m²K) s Low-E premazom, idealno za dalmatinsku klimu. Naši prozori zadovoljavaju najstrože europske norme energetske učinkovitosti, što znači uštedu na energentima i ugodnu temperaturu u domu cijele godine.'
      }
    ],
    features: [
      'Rehau profili — europska kvaliteta',
      'Trostruko Low-E staklo kao standard',
      'Izbor boja: bijela, antracit, drvo-dekori',
      'Toplinska izolacija do Uf=1.0 W/m²K',
      'Zvučna izolacija do 45 dB',
      '10 godina garancije na profile'
    ],
    metaTitle: 'PVC Stolarija — Prozori, Vrata i Klizne Stijene | Stolarija Orlović',
    metaDescription: 'PVC prozori i vrata od Rehau profila s trostrukim staklom. Energetski učinkovita PVC stolarija po mjeri za vaš dom u Dalmaciji. Besplatna izmjera.'
  },
  'alu-stolarija': {
    heroImage: '/images/products/alu/alu-1.jpg',
    galleryImages: [
      '/images/products/alu/alu-1.jpg',
      '/images/products/alu/alu-2.jpg',
      '/images/products/alu/alu-7.jpeg',
      '/images/products/alu/alu-8.jpeg',
      '/images/products/alu/alu-5.jpeg',
    ],
    sections: [
      {
        heading: 'Zašto odabrati ALU stolariju?',
        text: 'Aluminijska stolarija idealna je za moderne objekte koji zahtijevaju velike staklene površine, minimalne profile i maksimalnu izdržljivost. Koristimo profile vodećih europskih proizvođača — Feal, Schüco i Eux — koji jamče izuzetnu čvrstoću i dugotrajnost bez potrebe za održavanjem.'
      },
      {
        heading: 'Naša ALU ponuda',
        text: 'U ALU programu nudimo: ulazna vrata sa skrivenim krilom, klizne stijene (podizno-klizne i harmo sisteme), aluminijske prozore, ALU i harmo grilje, staklene fasade i nadstrešnice. Svaki proizvod izrađujemo po mjeri i u RAL boji prema vašem izboru.'
      },
      {
        heading: 'Trajnost i moderan dizajn',
        text: 'Aluminij je otporan na koroziju, UV zračenje i sve vremenske uvjete — savršen za mediteransku klimu. Slim profili omogućuju maksimalan prodor svjetla, a moderni dizajni s ravnim linijama daju vašem objektu premium izgled koji traje desetljećima.'
      }
    ],
    features: [
      'Feal, Schüco i Eux profili',
      'Otpornost na koroziju i UV zračenje',
      'Mogućnost velikih staklenih površina',
      'Slim profili za maksimalno svjetlo',
      'Sve RAL boje dostupne',
      'Idealno za poslovne i stambene objekte'
    ],
    metaTitle: 'ALU Stolarija — Vrata, Klizne Stijene i Fasade | Stolarija Orlović',
    metaDescription: 'Aluminijska stolarija od Feal, Schüco i Eux profila. Ulazna vrata, klizne stijene, grilje i staklene fasade. Trajnost i moderan dizajn za vaš objekt.'
  },
  'komarnici': {
    heroImage: '/images/products/komarnici/komarnici-1.jpg',
    galleryImages: [
      '/images/products/komarnici/komarnici-1.jpg',
      '/images/products/komarnici/komarnici-2.jpg',
      '/images/products/komarnici/komarnici-7.jpeg',
      '/images/products/komarnici/komarnici-8.jpeg',
      '/images/products/komarnici/komarnici-5.jpg',
    ],
    sections: [
      {
        heading: 'Zaštita od insekata bez kompromisa',
        text: 'Naši IDECO komarnici pružaju dugotrajnu zaštitu od komaraca, muha i ostalih insekata, bez narušavanja ventilacije ili estetike vašeg prostora. Svaki komarnik izrađujemo po mjeri vaših prozora i vrata, s preciznom ugradnjom koja jamči savršen rad.'
      },
      {
        heading: 'Tipovi komarnika',
        text: 'Nudimo tri osnovne vrste komarnika: plise klizne (idealne za velika vrata i terase), rolo potezne (tihi i praktični za prozore) i klasične američke komarnike na otvaranje. Svi modeli dostupni su u bijeloj i antracit boji.'
      },
      {
        heading: 'IDECO kvaliteta',
        text: 'Koristimo isključivo IDECO sustave — vodećeg europskog proizvođača komarnika. IDECO mreže otporne su na UV zračenje, ne propuštaju ni najsitnije insekte, a zahvaljujući premium mehanizmima, jednostavne su za korištenje i dugotrajne.'
      }
    ],
    features: [
      'IDECO sustav — europski standard',
      'Plise, rolo i američki komarnici',
      'Izrada po mjeri vaših otvora',
      'UV otporna mreža visoke gustoće',
      'Bijela i antracit boja',
      'Tihi mehanizmi bez zaglavljivanja'
    ],
    metaTitle: 'Komarnici — IDECO Plise, Rolo i Američki Komarnici | Stolarija Orlović',
    metaDescription: 'IDECO komarnici po mjeri — plise klizni, rolo potezni i američki komarnici za prozore i vrata. Zaštita od insekata s garancijom kvalitete.'
  },
  'alu-ograde': {
    heroImage: '/images/products/ograde/ograde-1.jpg',
    galleryImages: [
      '/images/products/ograde/ograde-1.jpg',
      '/images/products/ograde/ograde-2.jpeg',
      '/images/products/ograde/ograde-3.jpeg',
      '/images/products/ograde/ograde-4.jpeg',
      '/images/products/ograde/ograde-5.jpeg',
    ],
    sections: [
      {
        heading: 'Sigurnost i estetika u jednom',
        text: 'Naše aluminijske ograde savršena su kombinacija sigurnosti, trajnosti i modernog dizajna. Izrađujemo ih od visokokvalitetnog aluminija koji ne hrđa, ne zahtijeva farbanje i odolijevat će svim vremenskim uvjetima — od morske soli do jakog sunca.'
      },
      {
        heading: 'Gdje se koriste ALU ograde?',
        text: 'Aluminijske ograde idealne su za balkone, terase, stubišta, dvorišta i bazene. Nudimo ih s horizontalnim ili vertikalnim letvicama, staklenim ispunama ili kombinacijom materijala — sve prema vašim željama i arhitektonskim zahtjevima.'
      },
      {
        heading: 'Izrada po mjeri i montaža',
        text: 'Svaka ograda izrađuje se po preciznim mjerama vašeg objekta. Dolazimo na lokaciju, mjerimo, savjetujemo vas oko dizajna i boje (sve RAL boje dostupne), te izvršavamo stručnu montažu u dogovorenom roku.'
      }
    ],
    features: [
      'Premium aluminij — bez hrđe i održavanja',
      'Horizontalne, vertikalne i staklene ispune',
      'Sve RAL boje po izboru',
      'Otpornost na morsku sol i UV',
      'Izrada i montaža po mjeri',
      'Za balkone, terase, stubišta i dvorišta'
    ],
    metaTitle: 'ALU Ograde — Balkoni, Terase i Stubišta | Stolarija Orlović',
    metaDescription: 'Aluminijske ograde po mjeri za balkone, terase i stubišta. Moderne ALU ograde otporne na koroziju u svim RAL bojama. Besplatna izmjera.'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const pageData = productPageData[slug];
  if (pageData) {
    return {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
    };
  }
  return { title: 'Proizvod | Stolarija Orlović' };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const navDict = dict.nav;
  
  const productInfo = dict.products.items.find((p: any) => p.slug === slug);
  const pageData = productPageData[slug];

  if (!productInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-3xl font-bold">Proizvod nije pronađen (404)</h1>
        <Link href={`/${locale}`} className="text-cta hover:underline">
          <ArrowLeft className="inline w-4 h-4 mr-2" /> Povratak na naslovnicu
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen font-[family-name:var(--font-inter)] bg-background text-foreground">
      
      {/* Product Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pageData?.heroImage || productInfo.image}
            alt={productInfo.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href={`/${locale}#products`} className="inline-flex items-center text-sm font-semibold text-[#84CC16] mb-8 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {locale === 'hr' ? 'Svi proizvodi' : 'All Products'}
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-[family-name:var(--font-poppins)] mb-6 text-white drop-shadow-lg uppercase">
            {productInfo.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {productInfo.description}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      {pageData?.sections.map((section, i) => (
        <section key={i} className={`py-16 sm:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-poppins)] mb-6 text-gray-900">
                  {section.heading}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {section.text}
                </p>
                {i === 0 && (
                  <a href="#contact" className="inline-flex items-center gap-2 mt-8 bg-[#84CC16] hover:bg-[#65a30d] text-white font-semibold py-3 px-6 rounded-full transition-colors group">
                    Zatraži ponudu
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
              <div className={`relative h-[350px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                {pageData.galleryImages[i] && (
                  <Image
                    src={pageData.galleryImages[i]}
                    alt={`${productInfo.title} — ${section.heading}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Features List */}
      {pageData?.features && (
        <section className="py-16 sm:py-20 bg-[#0B254E] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-10 text-center">
              Prednosti {productInfo.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageData.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#84CC16] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      {pageData?.galleryImages && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-10 text-center text-gray-900">
              Naši radovi — {productInfo.title}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {pageData.galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={img}
                    alt={`${productInfo.title} primjer ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form CTA */}
      <Contact dict={dict.contact} locale={locale} />
      
      <Footer dict={dict.footer} navDict={navDict} locale={locale} />
    </main>
  );
}
