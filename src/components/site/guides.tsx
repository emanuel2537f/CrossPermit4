import { ArrowUpRight, Mail } from "lucide-react";

import logoIcon from "@/assets/logo-crosspermit-icon.png";
import { type Guide, guides } from "@/lib/guide-content";

function Logo() {
  return (
    <img
      src={logoIcon}
      alt=""
      className="h-8 w-14 shrink-0 object-contain"
      aria-hidden="true"
    />
  );
}

function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex items-center justify-between py-6">
        <a href="/" className="flex items-center gap-2 text-parchment">
          <Logo />
          <span className="font-display text-xl tracking-tight">CrossPermit</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-parchment/85 md:flex">
          <a href="/#about" className="hover:text-parchment">
            About
          </a>
          <a href="/#destinations" className="hover:text-parchment">
            Destinations
          </a>
          <a href="/#permits" className="hover:text-parchment">
            Permits
          </a>
          <a href="/guides" className="hover:text-parchment">
            Guides
          </a>
          <a href="/#faq" className="hover:text-parchment">
            FAQ
          </a>
        </nav>
        <a
          href="/#contact"
          className="rounded-full border border-parchment/40 px-5 py-2 text-sm text-parchment transition-colors hover:bg-parchment hover:text-ink"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-ink py-10 text-parchment">
      <div className="container-x flex flex-col gap-6 border-t border-parchment/10 pt-8 md:flex-row md:items-center md:justify-between">
        <a href="/" className="inline-flex items-center gap-2 transition-colors hover:text-ember">
          <Logo />
          <span className="font-display text-2xl tracking-tight">CrossPermit</span>
        </a>
        <div className="flex flex-wrap gap-5 text-sm text-parchment/70">
          <a href="/guides" className="transition-colors hover:text-ember">
            Guides
          </a>
          <a href="/#permits" className="transition-colors hover:text-ember">
            Permits
          </a>
          <a href="/#contact" className="transition-colors hover:text-ember">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export function GuidesCenter() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative overflow-hidden bg-ink pt-36 text-parchment md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(215,91,42,0.22),transparent_35%),linear-gradient(180deg,rgba(11,27,17,0.2),rgba(11,27,17,1))]" />
        <div className="container-x relative pb-20 md:pb-28">
          <div className="max-w-4xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-parchment/55">
              CrossPermit Guides
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[0.98] sm:text-7xl">
              Guides Center
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-parchment/70 sm:text-lg">
              Helpful guides for green border permits, cross-border hiking Albania routes, and
              practical mountain travel planning across the Balkans.
            </p>
          </div>
        </div>
      </section>

      <main className="container-x py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-ember/40 hover:shadow-[0_24px_60px_-35px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <img
                  src={guide.image}
                  alt={guide.imageAlt}
                  width={900}
                  height={675}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-85 transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-parchment px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink">
                  {guide.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                  {guide.readTime}
                </div>
                <h2 className="mt-4 font-display text-3xl leading-tight text-ink">{guide.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{guide.excerpt}</p>
                <a
                  href={`/guides/${guide.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-parchment transition-all hover:-translate-y-0.5 hover:bg-ember"
                >
                  Read Guide
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function GuidePage({ guide }: { guide: Guide }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <article>
        <section className="relative overflow-hidden bg-ink pt-36 text-parchment md:pt-44">
          <img
            src={guide.image}
            alt={guide.imageAlt}
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/80 to-ink" />
          <div className="container-x relative pb-16 md:pb-24">
            <div className="max-w-4xl">
              <a
                href="/guides"
                className="font-mono text-[11px] uppercase tracking-[0.28em] text-parchment/60 transition-colors hover:text-ember"
              >
                Guides / {guide.category}
              </a>
              <h1 className="mt-6 font-display text-5xl leading-[0.98] sm:text-7xl">
                {guide.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-parchment/75 sm:text-lg">
                {guide.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-parchment/20 px-4 py-2 text-sm text-parchment/75">
                  {guide.readTime}
                </span>
                <span className="rounded-full border border-parchment/20 px-4 py-2 text-sm text-parchment/75">
                  {guide.category}
                </span>
              </div>
            </div>
          </div>
        </section>

        <main className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-8 border-y border-ink/15 py-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-stone">
                Table of contents
              </div>
              <nav className="mt-5 space-y-3 text-sm text-ink/70">
                {guide.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block transition-colors hover:text-ember"
                  >
                    {section.title}
                  </a>
                ))}
                <a href="#faq" className="block transition-colors hover:text-ember">
                  FAQ
                </a>
              </nav>
            </div>
          </aside>

          <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
            <div className="space-y-14">
              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-10">
                  <h2 className="font-display text-4xl leading-tight text-ink">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-6 grid gap-3 text-sm text-ink/75 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 rounded-xl border border-ink/10 bg-ink/[0.03] p-4"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section id="faq" className="scroll-mt-10 border-t border-ink/15 pt-12">
                <div className="eyebrow mb-4">FAQ</div>
                <h2 className="font-display text-4xl leading-tight text-ink">
                  Frequently Asked Questions
                </h2>
                <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
                  {guide.faqs.map((faq) => (
                    <div key={faq.question} className="py-6">
                      <h3 className="font-display text-2xl leading-tight text-ink">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-ink/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl bg-[#0b1b11] p-8 text-parchment md:p-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-parchment/45">
                  CrossPermit support
                </div>
                <h2 className="mt-4 font-display text-4xl leading-tight">
                  Need help with your permit? Contact CrossPermit.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-parchment/70">
                  We can help you prepare traveler details, route information, and official
                  application support for your mountain itinerary.
                </p>
                <a
                  href="/#contact"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-parchment px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  Contact CrossPermit
                  <Mail className="h-4 w-4" strokeWidth={2} aria-hidden />
                </a>
              </section>
            </div>
          </div>
        </main>
      </article>
      <SiteFooter />
    </div>
  );
}
