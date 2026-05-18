import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-dining.jpg";
import chefImg from "@/assets/chef-portrait.jpg";
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Portofino Luxembourg | Feine italienische Küche" },
      {
        name: "description",
        content:
          "Eine italienische Seele im Herzen Luxemburgs. Saisonale ligurische Küche, kerzenbeleuchtetes Ambiente und ein kuratierter Weinkeller.",
      },
      { property: "og:title", content: "Portofino Luxembourg | Feine italienische Küche" },
      {
        property: "og:description",
        content:
          "Eine italienische Seele im Herzen Luxemburgs. Saisonale ligurische Küche in kerzenbeleuchtetem Ambiente.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const menu = {
  antipasti: [
    { name: "Carpaccio di Gamberi", desc: "Red prawns from Mazara, citrus emulsion, wild fennel, sea buckthorn", price: "28" },
    { name: "Burrata di Andria", desc: "Apulian burrata, heirloom tomato confit, basil oil, Taggiasca olives", price: "24" },
    { name: "Vitello Tonnato", desc: "Slow-cooked veal, tuna emulsion, capers, soft-boiled quail egg", price: "26" },
  ],
  primi: [
    { name: "Risotto al Tartufo", desc: "Acquerello rice, aged Parmigiano Reggiano, fresh black truffle shavings", price: "42" },
    { name: "Tagliolini al Granchio", desc: "Hand-cut pasta, blue crab from Brittany, Amalfi lemon zest, bottarga", price: "36" },
    { name: "Pappardelle al Cinghiale", desc: "Wild boar ragù, juniper berries, dark chocolate finish, aged Pecorino", price: "32" },
  ],
  secondi: [
    { name: "Branzino in Crosta", desc: "Salt-crusted sea bass, roasted artichokes, lemon-caper beurre blanc", price: "48" },
    { name: "Agnello Scottadito", desc: "Grilled lamb chops, pistachio crumble, mint reduction, spring peas", price: "45" },
    { name: "Costata di Manzo", desc: "Dry-aged ribeye, smoked bone marrow, charred radicchio, balsamic", price: "58" },
  ],
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Index() {
  const { t } = useI18n();
  const [veil, setVeil] = useState(true);
  const [letterbox, setLetterbox] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVeil(false), 1600);
    const t2 = setTimeout(() => setLetterbox(false), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="bg-brand-bg font-sans text-white antialiased relative">
      <div className="pointer-events-none fixed inset-0 z-[60] grain-overlay" aria-hidden />
      <div className="pointer-events-none fixed inset-0 z-[59] vignette-overlay" aria-hidden />

      <div
        className={`pointer-events-none fixed inset-x-0 top-0 z-[90] bg-black transition-all duration-[1400ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${
          letterbox ? "h-[12vh]" : "h-0"
        }`}
        aria-hidden
      />
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-[90] bg-black transition-all duration-[1400ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${
          letterbox ? "h-[12vh]" : "h-0"
        }`}
        aria-hidden
      />

      {veil && (
        <div className="pointer-events-none fixed inset-0 z-[100] bg-black animate-veil-out" />
      )}

      {/* HERO */}
      <header className="relative h-screen w-full flex flex-col justify-between p-6 md:p-10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            src={heroVideo.url}
            poster={heroImg}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <nav className="relative z-10 flex justify-between items-center animate-fade-up-slow">
          <div className="font-serif text-xl md:text-2xl tracking-[0.3em] uppercase">Portofino</div>
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-light items-center">
            <a href="#menu" className="hover:text-brand-gold transition-colors duration-700">{t("nav.menu")}</a>
            <a href="#story" className="hover:text-brand-gold transition-colors duration-700">{t("nav.story")}</a>
            <a href="#visit" className="hover:text-brand-gold transition-colors duration-700">{t("nav.visit")}</a>
            <a href="#reserve" className="hover:text-brand-gold transition-colors duration-700">{t("nav.reserve")}</a>
            <span className="text-white/20">|</span>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="relative z-10 max-w-4xl animate-fade-up-slow" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
          <span className="block text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-6">
            {t("hero.kicker")}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-light leading-[1.05] mb-10">
            {t("hero.title.1")}
            <br />
            {t("hero.title.2")}
          </h1>
          <a
            href="#reserve"
            className="inline-block px-10 py-4 border border-brand-gold text-brand-gold text-[11px] uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-brand-bg transition-all duration-700"
          >
            {t("hero.cta")}
          </a>
        </div>

        <div className="relative z-10 flex justify-between items-end text-[10px] uppercase tracking-[0.25em] text-white/60 animate-fade-up-slow" style={{ animationDelay: "1.4s", animationFillMode: "both" }}>
          <div>{t("hero.location")}</div>
          <div>{t("hero.established")}</div>
        </div>
      </header>

      <Course />
    </div>
  );
}

function Course() {
  const { t } = useI18n();
  const [course, setCourse] = useState<keyof typeof menu>("antipasti");
  const courseLabels: Record<keyof typeof menu, string> = {
    antipasti: t("menu.tab.antipasti"),
    primi: t("menu.tab.primi"),
    secondi: t("menu.tab.secondi"),
  };
  return (
    <>
      {/* CHEF STORY */}
      <section id="story" className="relative grid md:grid-cols-2 bg-brand-bg items-center py-32 md:py-44 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.06] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.06] blur-3xl" aria-hidden />
        <Reveal className="relative px-6 md:px-16 lg:px-24 mb-16 md:mb-0">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-8 block">{t("story.kicker")}</span>
          <h2 className="text-4xl md:text-5xl font-serif italic leading-[1.1] mb-10 text-white whitespace-pre-line">
            {t("story.quote")}
          </h2>
          <p className="text-stone-400 font-light leading-relaxed mb-4 max-w-md">{t("story.p1")}</p>
          <p className="text-stone-400 font-light leading-relaxed mb-10 max-w-md">{t("story.p2")}</p>
          <span className="text-[11px] uppercase tracking-[0.3em] border-b border-brand-gold pb-1 text-brand-gold">
            {t("story.chef")}
          </span>
        </Reveal>
        <Reveal delay={300} className="relative h-[480px] md:h-[640px] px-6 md:px-0 md:pr-16 lg:pr-24">
          <img
            src={chefImg}
            alt="Chef Marco Rossi"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full h-full object-cover outline outline-1 -outline-offset-1 outline-white/10"
          />
        </Reveal>
      </section>

      {/* MENU */}
      <section id="menu" className="relative bg-brand-bg text-white py-32 md:py-44 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/5">
        {/* Spotlight glows */}
        <div className="pointer-events-none absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.06] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.06] blur-3xl" aria-hidden />

        <div className="relative max-w-5xl mx-auto">
          <Reveal>
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 border-b border-brand-gold/20 pb-10 md:pb-12">
              <div className="space-y-4">
                <span className="block text-brand-gold text-[10px] uppercase tracking-[0.4em] font-light">
                  {t("menu.kicker")}
                </span>
                <h2 className="text-5xl md:text-7xl font-serif italic leading-none">{t("menu.title")}</h2>
              </div>
              <p className="max-w-xs text-sm text-white/60 font-light leading-relaxed">{t("menu.intro")}</p>
            </header>
          </Reveal>

          <Reveal delay={150}>
            <nav className="flex gap-10 md:gap-12 mb-16">
              {(Object.keys(menu) as Array<keyof typeof menu>).map((c) => (
                <button
                  key={c}
                  onClick={() => setCourse(c)}
                  className={`relative pb-2 text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                    course === c ? "text-brand-gold" : "text-white/40 hover:text-white"
                  }`}
                >
                  {courseLabels[c]}
                  {course === c && (
                    <span className="absolute -bottom-0 left-0 w-full h-px bg-brand-gold" />
                  )}
                </button>
              ))}
            </nav>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-14 md:gap-y-16">
            {menu[course].map((dish, i) => (
              <Reveal key={dish.name} delay={i * 120}>
                <article className="group">
                  <div className="flex justify-between items-baseline mb-3 gap-4">
                    <h3 className="text-lg md:text-xl uppercase tracking-wider font-light text-white group-hover:text-brand-gold transition-colors duration-500">
                      {dish.name}
                    </h3>
                    <span className="text-lg italic font-serif text-brand-gold tabular-nums shrink-0">{dish.price}</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-brand-gold/30 to-transparent mb-4" />
                  <p className="text-sm text-white/50 font-light leading-relaxed max-w-[90%]">{dish.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <footer className="mt-24 md:mt-32 pt-10 md:pt-12 border-t border-brand-gold/10 text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold/60">{t("menu.tasting")}</p>
            </footer>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative bg-brand-bg py-32 md:py-44 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.06] blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.06] blur-3xl" aria-hidden />
        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-4 block">{t("visit.kicker")}</span>
            <h2 className="text-4xl md:text-5xl font-serif italic leading-[1.1] mb-16 max-w-2xl whitespace-pre-line">
              {t("visit.title")}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <Reveal delay={100}>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-6">{t("visit.address")}</h4>
              <p className="text-xl font-serif italic mb-2">12 Route d'Arlon</p>
              <p className="text-sm font-light text-stone-400">L-1150 Luxembourg City</p>
            </Reveal>
            <Reveal delay={250}>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-6">{t("visit.hours")}</h4>
              <ul className="text-sm font-light text-stone-400 space-y-2">
                <li className="flex justify-between"><span>{t("visit.lunch")}</span><span className="tabular-nums">12:00 – 14:30</span></li>
                <li className="flex justify-between"><span>{t("visit.dinner")}</span><span className="tabular-nums">19:00 – 22:30</span></li>
                <li className="flex justify-between text-stone-500"><span>{t("visit.closed.days")}</span><span>{t("visit.closed")}</span></li>
              </ul>
            </Reveal>
            <Reveal delay={400}>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-6">{t("visit.contact")}</h4>
              <a href="tel:+35226123456" className="block text-xl font-serif italic mb-2 hover:text-brand-gold transition-colors">
                +352 26 12 34 56
              </a>
              <a href="mailto:reservations@portofino.lu" className="text-sm font-light text-stone-400 hover:text-brand-gold transition-colors">
                reservations@portofino.lu
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESERVE */}
      <section id="reserve" className="relative bg-brand-bg py-32 md:py-48 px-6 text-center border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/70 to-brand-bg" />
        </div>
        <Reveal className="relative max-w-3xl mx-auto">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-6 block">{t("reserve.kicker")}</span>
          <h2 className="text-4xl md:text-6xl font-serif italic leading-[1.1] mb-10 whitespace-pre-line">
            {t("reserve.title")}
          </h2>
          <p className="text-stone-400 font-light max-w-md mx-auto mb-12 leading-relaxed">{t("reserve.intro")}</p>
          <a
            href="tel:+35226123456"
            className="inline-block px-12 py-4 bg-brand-gold text-brand-bg text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-brand-gold-soft transition-colors duration-700"
          >
            {t("reserve.cta")}
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-bg py-12 px-6 md:px-16 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif italic text-2xl tracking-tight">Portofino.</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.3em] text-stone-500">
            <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-gold transition-colors">TripAdvisor</a>
            <Link to="/impressum" className="hover:text-brand-gold transition-colors">{t("footer.legal")}</Link>
            <Link to="/datenschutz" className="hover:text-brand-gold transition-colors">{t("footer.privacy")}</Link>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-stone-600">
            © {new Date().getFullYear()} Portofino Luxembourg
          </div>
        </div>
      </footer>
    </>
  );
}
