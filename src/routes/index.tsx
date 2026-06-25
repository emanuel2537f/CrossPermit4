import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";

import heroImg from "@/assets/hero-mountains.jpg";
import thethImg from "@/assets/dest-theth.jpg";
import valbonaImg from "@/assets/dest-valbona.jpg";
import rugovaImg from "@/assets/dest-rugova.jpg";
import korabImg from "@/assets/dest-korab.jpg";
import kukesImg from "@/assets/dest-kukes.jpg";
import diberImg from "@/assets/dest-diber.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Destination = {
  id: string;
  name: string;
  region: string;
  blurb: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

const destinations: Destination[] = [
  {
    id: "theth",
    name: "Theth",
    region: "Northern Albanian Alps",
    blurb:
      "Theth is one of the most iconic mountain villages in the Balkans and the starting point for many alpine crossings. Surrounded by dramatic peaks and traditional stone houses, it offers waterfalls, hiking trails, and authentic mountain hospitality. The famous Theth–Valbona trail is among the most popular trekking experiences in the region.",
    highlights: [
      "Blue Eye (Syri i Kaltër)",
      "Grunas Waterfall",
      "Traditional stone towers",
      "Alpine hiking routes",
    ],
    image: thethImg,
    imageAlt: "Theth village and Albanian Alps hiking route",
  },
  {
    id: "valbona",
    name: "Valbona Valley",
    region: "Tropojë District",
    blurb:
      "Valbona is known for its wide alpine valley, crystal-clear river, and access to some of Albania’s most scenic trekking routes. It is a key destination for visitors crossing mountain areas between Albania and neighboring regions.",
    highlights: [
      "Valbona River",
      "Mountain trekking",
      "Traditional guesthouses",
      "Cross-border hiking access",
    ],
    image: valbonaImg,
    imageAlt: "Valbona Valley river and Albanian Alps trekking landscape",
  },
  {
    id: "rugova",
    name: "Rugova Canyon",
    region: "Peja, Kosovo",
    blurb:
      "Located near Peja, Rugova is one of the most spectacular mountain areas in Kosovo and forms part of the broader Balkan alpine network. Visitors come for hiking, panoramic viewpoints, and access to international trekking routes.",
    highlights: [
      "Rugova Gorge",
      "Peaks of the Balkans access",
      "Mountain villages",
      "Outdoor activities",
    ],
    image: rugovaImg,
    imageAlt: "Rugova Canyon mountain hiking route near Peja Kosovo",
  },
  {
    id: "kukes",
    name: "Kukës",
    region: "Northern Gateway",
    blurb:
      "Kukës connects northern Albania with important mountain regions and serves as a gateway for nature tourism and cross-border adventures. It offers access to remote landscapes and protected areas.",
    highlights: ["Alpine landscapes", "Traditional culture", "Access to mountain routes"],
    image: kukesImg,
    imageAlt: "Kukes northern Albania mountain gateway and cross-border hiking routes",
  },
  {
    id: "diber",
    name: "Dibër",
    region: "Eastern Highlands",
    blurb:
      "Dibër is known for its mountainous terrain, traditional villages, and outdoor experiences. It is one of the entrances toward protected mountain areas and alpine routes.",
    highlights: ["Mountain tourism", "Traditional cuisine", "Scenic valleys"],
    image: diberImg,
    imageAlt: "Diber eastern Albania highlands and scenic mountain valleys",
  },
  {
    id: "korab",
    name: "Mount Korab",
    region: "Albania – N. Macedonia border",
    blurb:
      "Korab is the highest mountain in Albania and one of the most impressive destinations for experienced hikers. The surrounding protected landscape includes alpine meadows, forests, and panoramic viewpoints.",
    highlights: ["Highest peak in Albania", "Guided trekking", "Protected natural landscape"],
    image: korabImg,
    imageAlt: "Mount Korab trekking route on the Albania and North Macedonia border",
  },
];

export default function Index() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Destinations />
      <Permits />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path
        d="M2 22 L9 9 L13 16 L17 11 L24 22 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="6" r="1.6" fill="currentColor" />
    </svg>
  );
}

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuRendered, setIsMenuRendered] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuLinks = [
    { number: "01", label: "About us", href: "#about" },
    { number: "02", label: "Destinations", href: "#destinations" },
    { number: "03", label: "Permits", href: "#permits" },
    { number: "04", label: "FAQ", href: "#faq" },
    { number: "05", label: "Contact", href: "#contact" },
  ];
  const menuAnimationDuration = 520;
  const menuStaggerDelay = 55;
  const menuUnmountDelay = menuAnimationDuration + (menuLinks.length - 1) * menuStaggerDelay;

  const openMenu = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsMenuRendered(true);
    window.requestAnimationFrame(() => setIsMenuOpen(true));
  }, []);

  const closeMenu = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    setIsMenuOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setIsMenuRendered(false);
      closeTimerRef.current = null;
    }, menuUnmountDelay);
  }, [menuUnmountDelay]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMenuRendered) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isMenuRendered]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-x relative z-10 flex items-center justify-between py-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-parchment"
          onClick={closeMenu}
        >
          <Logo />
          <span className="font-display text-xl tracking-tight">CrossPermit</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-parchment/85 md:flex">
          <a href="#about" className="hover:text-parchment">
            About
          </a>
          <a href="#destinations" className="hover:text-parchment">
            Destinations
          </a>
          <a href="#permits" className="hover:text-parchment">
            Permits
          </a>
          <a href="#faq" className="hover:text-parchment">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-parchment/40 px-5 py-2 text-sm text-parchment transition-colors hover:bg-parchment hover:text-ink md:inline-flex"
          >
            Contact Us
          </a>
          <button
            type="button"
            className="relative grid h-11 w-11 place-items-center rounded-full border border-parchment/40 text-parchment transition-colors hover:bg-parchment hover:text-ink md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            <Menu
              className={`absolute h-5 w-5 transition-all duration-300 ${
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
              strokeWidth={1.8}
              aria-hidden
            />
            <X
              className={`absolute h-5 w-5 transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
              strokeWidth={1.8}
              aria-hidden
            />
          </button>
        </div>
      </div>

      {isMenuRendered ? (
        <div
          className="fixed inset-0 z-0 overflow-y-auto bg-[#0b1b11] text-parchment md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="container-x flex min-h-[100svh] flex-col pb-8 pt-28 sm:pt-32">
            <nav className="flex-1">
              {menuLinks.map((link, i) => {
                const animationDelay = isMenuOpen
                  ? i * menuStaggerDelay
                  : (menuLinks.length - 1 - i) * menuStaggerDelay;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`group grid grid-cols-[2.5rem_1fr_2rem] items-center gap-4 border-b border-parchment/15 py-5 transition-[opacity,transform,color] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid-cols-[3rem_1fr_2.5rem] sm:py-6 ${
                      isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                    } hover:text-ember`}
                    style={{ transitionDelay: `${animationDelay}ms` }}
                    onClick={closeMenu}
                  >
                    <span className="font-mono text-sm text-parchment/40">{link.number}</span>
                    <span className="font-display text-4xl font-normal leading-[1.05] tracking-normal sm:text-5xl">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="h-6 w-6 text-parchment/65 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember"
                      strokeWidth={1.6}
                      aria-hidden
                    />
                  </a>
                );
              })}
            </nav>

            <div className="border-t border-parchment/15 pt-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-parchment/45">
                Get in touch
              </div>
              <a
                href="mailto:info@crosspermit.com"
                className="mt-5 inline-flex items-center gap-4 text-base font-semibold text-ember transition-colors hover:text-parchment sm:text-lg"
              >
                <Mail className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                info@crosspermit.com
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Misty peaks of the Albanian Alps at dawn"
        width={1920}
        height={1280}
        className="animate-ken-burns absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/85" />

      <div className="container-x flex min-h-[100svh] flex-col justify-end pb-20 pt-40">
        <div className="max-w-4xl text-parchment">
          <div
            className="animate-rise mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-parchment/70"
            style={{ ["--rise-delay" as string]: "100ms" }}
          >
            <span className="h-px w-10 bg-parchment/60" />
            Cross-border mountain travel
          </div>
          <h1
            className="animate-rise text-balance font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-[7.5rem]"
            style={{ ["--rise-delay" as string]: "250ms" }}
          >
            Cross the
            <br />
            <span className="italic text-parchment/90">Balkan</span> ridgelines.
          </h1>
          <p
            className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-parchment/80 sm:text-lg"
            style={{ ["--rise-delay" as string]: "500ms" }}
          >
            Welcome to your trusted gateway for cross-border mountain adventures, green border
            crossing permit Albania requests, and Albania border crossing permit guidance across the
            Balkans.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-3"
            style={{ ["--rise-delay" as string]: "700ms" }}
          >
            <a
              href="#permits"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-parchment px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-ember hover:text-parchment hover:shadow-lg"
            >
              Request a permit →
            </a>
            <a
              href="#destinations"
              className="rounded-full border border-parchment/40 px-6 py-3 text-sm font-medium text-parchment transition-all hover:-translate-y-0.5 hover:bg-parchment/10"
            >
              Explore destinations
            </a>
          </div>
        </div>

        <div
          className="animate-rise mt-20 grid grid-cols-2 gap-6 border-t border-parchment/20 pt-8 text-parchment/80 sm:grid-cols-4"
          style={{ ["--rise-delay" as string]: "900ms" }}
        >
          {[
            ["06", "Mountain regions"],
            ["2,764m", "Highest summit · Korab"],
            ["192km", "Peaks of the Balkans trail"],
            ["48h", "Avg. permit reply"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-3xl text-parchment">{k}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-parchment/60">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Theth", "Valbona", "Rugova", "Korab", "Kukës", "Dibër", "Peaks of the Balkans"];
  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-5">
      <div className="flex animate-[scroll_25s_linear_infinite] gap-12 whitespace-nowrap font-display text-2xl text-ink/70">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            {w}
            <span className="animate-drift inline-block text-ember">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from {transform: translateX(0)} to {transform: translateX(-50%)} }`}</style>
    </div>
  );
}

function About() {
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = revealRef.current;
    if (!container) return;

    const words = Array.from(container.querySelectorAll<HTMLElement>("[data-word]"));
    if (!words.length) return;

    gsap.set(words, { color: "#B8B8B8" });

    const tl = gsap.to(words, {
      color: "#000000",
      duration: 1,
      ease: "power2.out",
      stagger: {
        each: 0.04,
        from: "start",
      },
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "center 45%",
        scrub: 0.8,
        once: false,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  const renderAnimatedText = (text: string) =>
    text.split(/(\s+)/).map((part, index) => {
      if (/^\s+$/.test(part)) {
        return <span key={`${part}-${index}`}>{part}</span>;
      }

      return (
        <span
          key={`${part}-${index}`}
          data-word
          style={{
            color: "#B8B8B8",
            display: "inline-block",
            transition: "color 220ms ease-out",
            whiteSpace: "pre-wrap",
          }}
        >
          {part}
        </span>
      );
    });

  return (
    <section id="about" className="bg-white py-28 md:py-40">
      <div className="container-x grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4" data-reveal="left">
          <div className="eyebrow mb-4">01 — About us</div>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
            A trusted gateway to the <em className="text-ember">wild north</em>.
          </h2>
        </div>

        <div
          ref={revealRef}
          className="space-y-6 text-lg leading-relaxed text-ink/80 md:col-span-7 md:col-start-6"
          data-reveal
        >
          <p>
            {renderAnimatedText(
              "We help travelers explore some of the most spectacular hiking destinations in the Balkans while simplifying the process of obtaining green border crossing permits where required, including support for cross-border hiking Albania routes.",
            )}
          </p>
          <p>
            {renderAnimatedText(
              "Our mission is to make remote mountain experiences more accessible, organized and compliant with local regulations. Discover routes, understand permit requirements, submit applications, and prepare safely for unforgettable journeys across Albania's mountain landscapes.",
            )}
          </p>
          <p className="text-ink/60">
            {renderAnimatedText(
              "Whether you're hiking independently or planning a group expedition, we provide a smooth and reliable experience from application to approval for Balkan mountain travel permits.",
            )}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              {
                num: "01",
                icon: (
                  <path
                    d="M4 20 L10 8 L13 13 L16 9 L22 20 Z M17 5 a1.4 1.4 0 1 0 0.01 0"
                    strokeWidth="1.4"
                  />
                ),
                title: "Green border crossing permit applications",
                desc: "",
                tag: "Permits",
              },
              {
                num: "02",
                icon: (
                  <>
                    <path d="M4 7 h16 M4 12 h16 M4 17 h10" strokeWidth="1.4" />
                    <circle cx="18" cy="17" r="2.2" strokeWidth="1.4" />
                  </>
                ),
                title: "Permit requirement updates",
                desc: "",
                tag: "Updates",
              },
            ].map((c) => (
              <div
                key={c.num}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember/40 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
              >
                <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-ember/0 via-transparent to-ember/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-8 -top-8 select-none font-display text-[7rem] leading-none text-ink/[0.04] transition-colors duration-500 group-hover:text-ember/20">
                  {c.num}
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-ink/10 bg-parchment text-ink transition-all duration-500 group-hover:border-ember group-hover:bg-ink group-hover:text-parchment">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      aria-hidden
                    >
                      {c.icon}
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                    {c.tag}
                  </span>
                </div>

                <div className="relative mt-6">
                  <div className="eyebrow mb-2">What we offer</div>
                  <div className="font-display text-2xl leading-tight">{c.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{c.desc}</p>
                </div>

                <div className="relative mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ember opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="h-px w-6 bg-ember" />
                  Learn more
                </div>
              </div>
            ))}
          </div>

          <p className="pt-6 font-display text-2xl italic text-ink">
            Explore responsibly. Travel legally. Experience the Balkans.
          </p>
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="bg-ink py-28 text-parchment md:py-40">
      <div className="container-x">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl" data-reveal="left">
            <div className="eyebrow mb-4 text-parchment/60">02 — Destinations</div>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-6xl">
              Six landscapes,
              <br />
              <em className="text-ember">one ridgeline</em>.
            </h2>
          </div>
          <p className="max-w-sm text-parchment/70" data-reveal>
            From limestone towers to alpine meadows, these are the regions our permits and
            itineraries are built around, including Peaks of the Balkans permit planning, Theth
            Valbona permit routes, Rugova hiking permit questions, and Mount Korab trekking permit
            guidance.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-parchment/15 bg-parchment/15 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <article
              key={d.id}
              className="group relative flex flex-col bg-ink"
              data-reveal="zoom"
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.imageAlt}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.22em] text-parchment/70">
                  {String(i + 1).padStart(2, "0")} / {String(destinations.length).padStart(2, "0")}
                </div>
                <div className="absolute inset-x-5 bottom-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-parchment/70">
                    {d.region}
                  </div>
                  <h3 className="mt-1 font-display text-3xl text-parchment">{d.name}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <p className="text-sm leading-relaxed text-parchment/75">{d.blurb}</p>
                <ul className="mt-auto space-y-2 border-t border-parchment/15 pt-4 text-sm">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-parchment/85">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ember" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PermitContactBlock() {
  return (
    <>
      <a
        href="mailto:info@crosspermit.com?subject=Green%20Border%20Crossing%20Permit%20Request"
        className="group block"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-stone">
          Send all documents to
        </div>
        <div className="mt-3 font-display text-xl text-ink sm:text-2xl">
          info@crosspermit.com
        </div>
        <div className="mt-5 inline-flex items-center gap-4 rounded-full border-0 bg-parchment px-8 py-4 text-base font-semibold text-ink shadow-[0_18px_35px_-24px_rgba(0,0,0,0.5)] transition-all group-hover:-translate-y-0.5 group-hover:bg-white">
          <Mail className="h-5 w-5" strokeWidth={1.8} aria-hidden />
          Send now
          <ArrowUpRight
            className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.8}
            aria-hidden
          />
        </div>
      </a>

      <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/65 sm:text-base">
        After receiving your information, our team will prepare and attach the official application
        form and submit it for the approval process with the relevant border authorities. Once
        approved, you will receive confirmation and further instructions by email.
      </p>

      <TrustSignals />

      <div className="mt-8 flex gap-4 rounded-xl border border-ember/30 bg-ember/[0.06] p-5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ember/40 font-display text-sm italic text-ember">
          i
        </span>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
            Please note
          </div>
          <p className="mt-1 text-sm leading-relaxed text-ink/80">
            Processing times vary by route, season and authority approval requirements. Apply
            several days before your planned crossing date.
          </p>
        </div>
      </div>
    </>
  );
}

function TrustSignals({ dark = false }: { dark?: boolean }) {
  const signals = [
    "Response within 48h",
    "Permit assistance",
    "Route guidance",
    "Official application support",
  ];

  return (
    <ul className={`mt-8 grid gap-3 sm:grid-cols-2 ${dark ? "text-parchment" : "text-ink"}`}>
      {signals.map((signal) => (
        <li
          key={signal}
          className={`flex items-center gap-3 rounded-full border px-4 py-3 text-sm ${
            dark
              ? "border-parchment/15 bg-parchment/[0.04] text-parchment/75"
              : "border-ink/10 bg-ink/[0.03] text-ink/70"
          }`}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
          {signal}
        </li>
      ))}
    </ul>
  );
}

function Permits() {
  const info = [
    "Full name (as shown on passport / ID)",
    "Nationality",
    "Date of birth",
    "Passport or ID number",
    "Planned travel dates",
    "Planned route / destination",
    "Number of travelers",
    "Contact phone number",
  ];
  return (
    <section id="permits" className="relative overflow-hidden py-20 md:py-40">
      {/* Topographic background */}
      <svg
        className="pointer-events-none absolute inset-0 -z-0 h-full w-full text-ink/[0.04]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden
      >
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((o) => (
          <path
            key={o}
            d={`M-50,${380 + o * 0.4} Q200,${260 + o * 0.4} 450,${340 + o * 0.4} T900,${300 + o * 0.4} T1300,${360 + o * 0.4}`}
          />
        ))}
      </svg>

      <div className="container-x relative">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5" data-reveal="left">
            <div className="eyebrow mb-4">03 — Permits</div>
            <h2 className="font-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl">
              Permit
              <br />
              <em className="text-ember">Information</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
              Planning to cross designated green border mountain routes?
              <br />
              To request your Green Border Crossing Permit, please send your travel information by
              email. We help clarify Albania border crossing permit requirements before you travel.
            </p>

            <div className="mt-8 hidden md:block">
              <PermitContactBlock />
            </div>
          </div>

          <div className="space-y-12 md:col-span-6 md:col-start-7" data-reveal>
            <div className="border border-ink/20 px-6 py-10 sm:px-10 sm:py-12 md:px-12">
              <div className="font-mono text-xs uppercase tracking-[0.32em] text-ink/70">
                Required information
              </div>

              <ol className="mt-10">
                {info.map((line, i) => (
                  <li
                    key={line}
                    className="grid grid-cols-[2.25rem_1fr] items-center gap-4 border-b border-ink/15 py-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-5"
                  >
                    <span className="font-display text-xl leading-none text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-snug text-ink sm:text-lg">{line}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-ink/20 pt-10">
              <div className="font-mono text-xs uppercase tracking-[0.32em] text-ink/70">
                Required documents
              </div>
              <ul className="mt-8 space-y-3 text-base leading-relaxed text-ink sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="pt-0.5 text-ember" aria-hidden>
                    →
                  </span>
                  <span>A copy of your passport or identification document.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="pt-0.5 text-ember" aria-hidden>
                    →
                  </span>
                  <span>Additional travel information, if applicable.</span>
                </li>
              </ul>
            </div>

            <div className="md:hidden">
              <PermitContactBlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    {
      question: "What is a Green Border Crossing Permit?",
      answer:
        "It is an official approval required for specific mountain routes that cross designated border areas. Requirements depend on the route, dates, traveler details, and the relevant authorities.",
    },
    {
      question: "How early should I request a permit?",
      answer:
        "We recommend sending your information several days before your planned crossing date. Processing time can vary by season, route, and authority approval requirements.",
    },
    {
      question: "What documents do I need to send?",
      answer:
        "You should send your travel information, passport or ID details, planned route, travel dates, number of travelers, and a copy of your passport or identification document.",
    },
    {
      question: "Can you help with route planning too?",
      answer:
        "Yes. Alongside permit guidance, we can help you understand route options, border crossing points, local conditions, and preparation details for alpine travel.",
    },
    {
      question: "How will I receive confirmation?",
      answer:
        "After the permit process is approved, confirmation and any further instructions will be sent to you by email.",
    },
  ];

  return (
    <section id="faq" className="relative overflow-hidden border-t border-ink/10 py-20 md:py-32">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/[0.035] to-transparent" />
      <div className="container-x relative">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4" data-reveal="left">
            <div className="eyebrow mb-4">04 - FAQ</div>
            <h2 className="font-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl">
              Frequently
              <br />
              <em className="text-ember">Asked Questions</em>
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/70 sm:text-lg">
              Quick answers before you prepare your documents, choose a route, or contact our team.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6" data-reveal>
            <div className="border-y border-ink/20">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;

                return (
                  <div key={faq.question} className="border-b border-ink/15 py-6 last:border-b-0">
                    <button
                      type="button"
                      className="grid w-full cursor-pointer grid-cols-[2.25rem_1fr_2rem] items-center gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/60 focus-visible:ring-offset-4 focus-visible:ring-offset-parchment"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                    >
                      <span className="font-display text-xl leading-none text-ember">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg leading-snug text-ink transition-colors hover:text-ember sm:text-xl">
                        {faq.question}
                      </span>
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full border text-lg transition-colors duration-300 ${
                          isOpen
                            ? "border-ember text-ember"
                            : "border-ink/20 text-ink"
                        }`}
                      >
                        <span
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      aria-hidden={!isOpen}
                      className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="mt-4 max-w-2xl pl-[3.25rem] text-sm leading-relaxed text-ink/70 sm:pl-[3.75rem] sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const body = [
      `Full name: ${name}`,
      `Email address: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:info@crosspermit.com?subject=${encodeURIComponent(
      "CrossPermit contact request",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-background px-4 py-16 sm:px-6 md:py-24">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#0b1b11] px-6 py-12 text-parchment shadow-[0_24px_70px_-45px_rgba(11,27,17,0.75)] sm:px-10 md:px-12 md:py-16 lg:px-16"
        data-reveal
      >
        <div className="grid gap-12 md:grid-cols-12 md:items-start md:gap-16">
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-parchment/45">
              05 - Contact
            </div>
            <h2 className="mt-6 font-display text-[2.4rem] leading-[1.05] text-parchment sm:text-5xl md:text-6xl">
              Still have
              <br />
              <em className="text-ember">Questions?</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-parchment/65 sm:text-lg">
              Let's talk and clear everything up. Send us your details and our team will get back
              to you shortly.
            </p>

            <div className="mt-10 border-l border-parchment/20 pl-6">
              <a
                href="mailto:info@crosspermit.com"
                className="inline-flex items-center gap-4 text-sm font-semibold text-ember transition-colors hover:text-parchment sm:text-base"
              >
                <Mail className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                info@crosspermit.com
              </a>
              <p className="mt-4 text-sm leading-relaxed text-parchment/45">
                Reply within ~48 hours, Monday to Saturday, CET.
              </p>
            </div>

            <TrustSignals dark />
          </div>

          <form className="space-y-5 md:col-span-6 md:col-start-7" onSubmit={handleContactSubmit}>
            <label className="sr-only" htmlFor="contact-name">
              Full Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="h-16 w-full rounded-2xl border border-parchment/20 bg-transparent px-6 text-base text-parchment outline-none transition-colors placeholder:text-parchment/45 focus:border-ember"
            />

            <label className="sr-only" htmlFor="contact-email">
              Email Address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="h-16 w-full rounded-2xl border border-parchment/20 bg-transparent px-6 text-base text-parchment outline-none transition-colors placeholder:text-parchment/45 focus:border-ember"
            />

            <label className="sr-only" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              placeholder="Message"
              rows={6}
              className="min-h-44 w-full resize-none rounded-2xl border border-parchment/20 bg-transparent px-6 py-5 text-base text-parchment outline-none transition-colors placeholder:text-parchment/45 focus:border-ember"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-full bg-parchment px-7 py-4 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b1b11]"
            >
              Send Message
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-parchment">
      {/* Top accent ridge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-70" />

      {/* Background mountain silhouette */}
      <svg
        className="absolute -bottom-6 left-0 right-0 h-40 w-full text-parchment/[0.03]"
        viewBox="0 0 1440 160"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,160 L0,100 L180,40 L320,90 L480,20 L640,80 L840,10 L1000,70 L1180,30 L1320,85 L1440,45 L1440,160 Z" />
      </svg>

      {/* Giant watermark */}
      <div className="pointer-events-none absolute -top-10 left-6 select-none font-display text-[18vw] leading-none tracking-tighter text-parchment/[0.025] md:left-10">
        CrossPermit
      </div>

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12" data-reveal>
          <div className="md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2 transition-colors hover:text-ember"
            >
              <Logo />
              <span className="font-display text-2xl tracking-tight">CrossPermit</span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-parchment/65">
              Your trusted gateway for cross-border mountain adventures in Albania and the Balkans.
              Green border permits, route guidance, and remote alpine experiences made simple.
            </p>
            <a
              href="mailto:info@crosspermit.com"
              className="mt-6 inline-flex items-center gap-2 font-display text-lg text-ember transition-colors hover:text-parchment"
            >
              info@crosspermit.com
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <div className="eyebrow mb-4 text-parchment/50">Navigate</div>
            <ul className="space-y-3 text-sm text-parchment/80">
              <li>
                <a href="#about" className="transition-colors hover:text-ember">
                  About us
                </a>
              </li>
              <li>
                <a href="#destinations" className="transition-colors hover:text-ember">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#permits" className="transition-colors hover:text-ember">
                  Permits
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4 text-parchment/50">Services</div>
            <ul className="space-y-3 text-sm text-parchment/80">
              <li className="transition-colors hover:text-ember">Permit applications</li>
              <li className="transition-colors hover:text-ember">Route guidance</li>
              <li className="transition-colors hover:text-ember">Expedition support</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4 text-parchment/50">Contact</div>
            <p className="text-sm leading-relaxed text-parchment/80">
              Reply within ~48 hours, Monday to Saturday, CET.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-parchment/20 px-4 py-2 text-sm text-parchment/80 transition-colors hover:border-ember hover:text-ember">
              <span>✉</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Email us</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-parchment/10 pt-8 text-xs text-parchment/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} CrossPermit — Cross-border mountain travel.</div>
          <div className="font-mono uppercase tracking-[0.22em]">Explore · Travel · Experience</div>
          <a
            href="#top"
            className="inline-flex items-center gap-1 font-mono uppercase tracking-[0.22em] transition-colors hover:text-ember"
          >
            Back to top <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
