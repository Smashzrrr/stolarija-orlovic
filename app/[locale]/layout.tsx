import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import { getDictionary, type Locale, locales } from "@/lib/i18n";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.meta.title,
      template: "%s | Stolarija Orlović",
    },
    description: dict.meta.description,
    keywords: [
      "PVC stolarija",
      "ALU stolarija",
      "prozori Dalmacija",
      "PVC prozori Zadar",
      "ALU vrata",
      "klizne stijene",
      "rolete",
      "komarnici",
      "stolarija Zadar",
      "zamjena prozora",
      "energetska obnova",
      "Rehau profili",
      "Stolarija Orlović",
      "stolarija Šibenik",
      "stolarija Split",
    ],
    authors: [{ name: "Stolarija Orlović" }],
    alternates: {
      canonical: `https://stolarija-orlovic.hr/${locale}`,
      languages: {
        hr: "https://stolarija-orlovic.hr/hr",
        en: "https://stolarija-orlovic.hr/en",
      },
    },
    openGraph: {
      title: dict.meta.og_title,
      description: dict.meta.og_description,
      url: `https://stolarija-orlovic.hr/${locale}`,
      siteName: "Stolarija Orlović",
      locale: locale === "hr" ? "hr_HR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.og_title,
      description: dict.meta.og_description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

import TopBar from "@/components/TopBar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Navbar dict={dict.nav} productItems={dict.products.items} locale={locale} />
        {children}
        <WhatsAppButton message={dict.footer.whatsapp_btn} />
        <CookieConsent />
      </body>
    </html>
  );
}
