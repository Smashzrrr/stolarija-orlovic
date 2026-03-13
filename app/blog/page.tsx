import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Članci o AI automatizaciji, no-code rješenjima i poslovnoj optimizaciji. Praktični savjeti i case studije.',
};

const posts = [
  {
    slug: 'zasto-ai-automatizacija-nije-samo-za-velike-firme',
    title: 'Zašto AI automatizacija nije samo za velike firme',
    excerpt:
      'Ako mislite da je AI automatizacija rezervirana za korporacije s velikim budžetima, u krivu ste. Saznajte kako i mali biznisi mogu profitirati.',
    date: '2026-03-10',
    readTime: '5 min',
    tag: 'AI Strategija',
    tagColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
    gradientFrom: 'from-indigo-600/20',
    gradientTo: 'to-violet-600/20',
  },
  {
    slug: '5-procesa-koje-mozete-automatizirati-danas',
    title: '5 procesa koje možete automatizirati danas',
    excerpt:
      'Od email managementa do izvještavanja — ovih 5 poslovnih procesa možete automatizirati bez ikakvog programiranja.',
    date: '2026-03-05',
    readTime: '7 min',
    tag: 'Automatizacija',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    gradientFrom: 'from-emerald-600/20',
    gradientTo: 'to-teal-600/20',
  },
  {
    slug: 'kako-sam-scrapao-1000-kontakata-u-sat-vremena',
    title: 'Kako sam scrapao 1.000 kontakata u sat vremena',
    excerpt:
      'Detaljni pregled procesa — od definiranja ciljanih podataka do finalne strukturirane baze kontakata.',
    date: '2026-02-28',
    readTime: '6 min',
    tag: 'Web Scraping',
    tagColor: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    gradientFrom: 'from-amber-600/20',
    gradientTo: 'to-orange-600/20',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
              Blog
            </h1>
            <p className="text-muted text-lg max-w-xl">
              Praktični članci o AI automatizaciji, no-code alatima i poslovnoj optimizaciji.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cta to-accent rounded-full mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="h-full flex flex-col rounded-2xl bg-surface/40 border border-border hover:border-cta/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cta/10 transition-all duration-400 overflow-hidden">
                  {/* Gradient header zone — unique per card */}
                  <div className={`relative h-48 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                        backgroundSize: '24px 24px',
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${post.tagColor}`}>
                        {post.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 text-xs text-muted mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('hr-HR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="w-1 h-1 rounded-full bg-muted-dark" />
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-foreground mb-3 group-hover:text-cta transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 inline-flex items-center text-sm font-medium text-cta">
                      Pročitaj više
                      <svg
                        className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
