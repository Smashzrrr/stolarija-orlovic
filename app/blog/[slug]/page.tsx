import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
};

const posts: Record<string, BlogPost> = {
  'zasto-ai-automatizacija-nije-samo-za-velike-firme': {
    slug: 'zasto-ai-automatizacija-nije-samo-za-velike-firme',
    title: 'Zašto AI automatizacija nije samo za velike firme',
    date: '2026-03-10',
    readTime: '5 min',
    tag: 'AI Strategija',
    content: `Kad čujete "AI automatizacija", vjerojatno pomislite na velike korporacije s odjelima od 50+ developera i budžetima u milijunima. Ali realnost u 2026. je potpuno drugačija.

Danas, zahvaljujući no-code i low-code alatima poput n8n, Make, i Zapier, te AI modelima poput Claude i ChatGPT, čak i najmanji biznisi mogu automatizirati ključne procese — za djelić troška tradicionalnog developmenta.

## Primjer iz prakse

Jedan od mojih klijenata, mala consulting firma od 5 ljudi, trošila je 15+ sati tjedno na ručno sortiranje emailova, unos podataka u spreadsheetove i slanje follow-up poruka. S jednim n8n workflowom, cijeli taj proces je automatiziran.

Rezultat? 15 sati tjedno oslobođeno za rad koji stvarno donosi prihod.

## Što trebate za početak?

Ne trebate znati programirati. Ne trebate veliki budžet. Trebate samo jasnu sliku o tome koji procesi vam troše najviše vremena — a da pritom ne zahtijevaju kreativno razmišljanje.

Repetitivni taskovi su idealni kandidati za automatizaciju:
- Procesiranje emailova i sortiranje po kategorijama
- Unos podataka iz jednog sustava u drugi
- Generiranje izvještaja iz više izvora
- Slanje automatiziranih odgovora i follow-up poruka
- Praćenje i obavještavanje o promjenama na webu

## Zaključak

AI automatizacija nije luksuz — to je competitive advantage koji si danas može priuštiti svaki biznis. Pitanje nije možete li si to priuštiti, nego možete li si priuštiti da to ne radite.

Ako želite saznati kako automatizacija može pomoći vašem poslovanju, javite mi se za besplatan konzultacijski poziv.`,
  },
  '5-procesa-koje-mozete-automatizirati-danas': {
    slug: '5-procesa-koje-mozete-automatizirati-danas',
    title: '5 procesa koje možete automatizirati danas',
    date: '2026-03-05',
    readTime: '7 min',
    tag: 'Automatizacija',
    content: `Automatizacija ne mora biti komplicirana. Evo 5 poslovnih procesa koje možete automatizirati — bez ikakvog programiranja, koristeći dostupne no-code alate.

## 1. Email triage i kategorizacija

Umjesto da ručno čitate i sortirate svaki email, AI može automatski kategorizirati dolazne poruke (hitno, upit, spam, zakazivanje) i proslijediti ih u pravi kanal ili odgovoriti automatski.

Alat: n8n + Claude AI

## 2. Data entry iz dokumenata

Faktore, ponude, narudžbe — AI može izvući ključne podatke iz PDF-ova i slika i unijeti ih direktno u vaš spreadsheet ili CRM.

Alat: n8n + OpenAI Vision

## 3. Social media monitoring

Automatski pratite spomena vašeg branda, konkurencije ili ključnih pojmova na LinkedInu, Twitteru i web portalima. Dobijte obavijest kad se nešto važno dogodi.

Alat: Apify + n8n + Telegram/Slack

## 4. Generiranje izvještaja

Umjesto da svaki tjedan ručno sastavljate izvještaje iz više izvora, automatizirani workflow može povući podatke, formatirati izvještaj i poslati ga timu na email.

Alat: n8n + Google Sheets + Gmail

## 5. Lead enrichment i outreach

Kad dobijete novi lead, automatski pronađite dodatne informacije (LinkedIn profil, firma, pozicija) i pošaljite personalizirani follow-up email — sve bez ručnog rada.

Alat: Apify + n8n + Gmail

## Kako početi?

Odaberite jedan proces koji vam troši najviše vremena. Javite mi se, i u jednom pozivu ćemo identificirati optimalno rješenje za vaš slučaj. Besplatno, bez obaveza.`,
  },
  'kako-sam-scrapao-1000-kontakata-u-sat-vremena': {
    slug: 'kako-sam-scrapao-1000-kontakata-u-sat-vremena',
    title: 'Kako sam scrapao 1.000 kontakata u sat vremena',
    date: '2026-02-28',
    readTime: '6 min',
    tag: 'Web Scraping',
    content: `Klijent mi je trebao 1.000+ kontakata za B2B outreach kampanju. Ručno bi to trajalo minimalno 2 tjedna. S pravim alatima, napravio sam to u sat vremena. Evo kako.

## Definiranje cilja

Prije nego što počnete scrapati, morate točno znati što tražite:
- Koji tip tvrtki? (industrija, veličina, lokacija)
- Koje podatke trebate? (email, telefon, kontakt osoba, web stranica)
- Iz kojih izvora? (poslovni registri, LinkedIn, web stranice)

## Alati koje sam koristio

Za ovaj projekt koristio sam kombinaciju **Apify** platforme za cloud scraping, **Antigravity** za orkestraciju i čišćenje podataka, te **Google Sheets** za finalni strukturirani output.

## Proces

Cijeli proces je bio jednostavan: definirao sam ciljanu industriju i geografsko područje, postavio Apify actor za scraping poslovnih registara, pokrenuo crawling koji automatski prolazi kroz stranice i izvlači podatke, a zatim Antigravity procesira raw podatke — deduplikacija, validacija emailova, strukturiranje. Čisti podaci automatski se upisuju u Google Sheets.

## Rezultat

1.000+ kontakata s validnim email adresama, strukturirano u tablicu s imenom tvrtke, kontakt osobom, emailom, telefonom i web stranicom. Ukupno vrijeme: oko 1 sat uključujući setup. Ručno bi to trajalo 80+ sati, odnosno više od 2 tjedna rada.

## Zaključak

Data extraction je jedan od najkonkretnijih primjera gdje AI i automatizacija donose instant ROI. Ako vam trebaju podaci za outreach, istraživanje tržišta ili lead generaciju — to se može riješiti u satima, ne tjednima.`,
  },
};

const allSlugs = Object.keys(posts);

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post nije pronađen' };

  return {
    title: post.title,
    description: post.content.substring(0, 155) + '...',
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 155) + '...',
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const otherPosts = allSlugs
    .filter((s) => s !== slug)
    .map((s) => posts[s]);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-cta transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Natrag na blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cta/10 text-cta border border-cta/20 mb-4">
              {post.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('hr-HR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span className="w-1 h-1 rounded-full bg-muted-dark" />
              <span>{post.readTime} čitanja</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-foreground mt-12 mb-6"
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter((line) => line.startsWith('- '));
                return (
                  <ul key={i} className="space-y-2 my-6">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-cta mt-2.5 flex-shrink-0" />
                        <span>{item.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (
                paragraph.startsWith('1. ') ||
                paragraph.startsWith('2. ') ||
                paragraph.startsWith('3. ')
              ) {
                const items = paragraph.split('\n').filter((line) => /^\d+\./.test(line));
                return (
                  <ol key={i} className="space-y-2 my-6">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted">
                        <span className="w-6 h-6 rounded-full bg-cta/10 text-cta text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {j + 1}
                        </span>
                        <span>{item.replace(/^\d+\.\s*/, '')}</span>
                      </li>
                    ))}
                  </ol>
                );
              }
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i} className="text-muted leading-relaxed my-4">
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return (
                        <strong key={j} className="text-foreground font-medium">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return <span key={j}>{part}</span>;
                  })}
                </p>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 rounded-2xl bg-surface/40 border border-border text-center">
            <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-3">
              Želite saznati više?
            </h3>
            <p className="text-muted mb-6">
              Zakažite besplatni konzultacijski poziv i razgovarajmo o vašem projektu.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold bg-cta text-background hover:bg-cta-dark transition-all duration-200 shadow-lg shadow-cta-glow"
            >
              Zakažite poziv
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Other articles */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-6">
              Ostali članci
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherPosts.map((op) => (
                <Link
                  key={op.slug}
                  href={`/blog/${op.slug}`}
                  className="group p-5 rounded-xl bg-surface/30 border border-border hover:border-cta/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-cta/10 text-cta mb-2">
                    {op.tag}
                  </span>
                  <h4 className="text-sm font-medium text-foreground group-hover:text-cta transition-colors line-clamp-2">
                    {op.title}
                  </h4>
                  <div className="text-xs text-muted mt-2">{op.readTime} čitanja</div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
