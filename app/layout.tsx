import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

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

export const metadata: Metadata = {
  title: {
    default: "FRAVIZ — AI Automatizacija & Konzalting",
    template: "%s | FRAVIZ",
  },
  description:
    "AI automatizacija koja se mjeri u eurima i satima. Automatizacija procesa, web scraping, no-code rješenja — bez klasičnog programiranja.",
  keywords: [
    "AI automatizacija",
    "n8n",
    "web scraping",
    "no-code",
    "konzalting",
    "automatizacija procesa",
    "Hrvatska",
  ],
  authors: [{ name: "Fraviz" }],
  openGraph: {
    title: "FRAVIZ — AI Automatizacija & Konzalting",
    description:
      "AI automatizacija koja se mjeri u eurima i satima — ne u obećanjima.",
    url: "https://fraviz.com",
    siteName: "FRAVIZ",
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRAVIZ — AI Automatizacija & Konzalting",
    description:
      "AI automatizacija koja se mjeri u eurima i satima — ne u obećanjima.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="dark">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
