import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="bg-brand-bg text-white min-h-screen font-sans antialiased">
      <header className="flex justify-between items-center p-6 md:p-10 border-b border-white/5">
        <Link to="/" className="font-serif text-xl md:text-2xl tracking-[0.3em] uppercase">
          Portofino
        </Link>
        <LanguageSwitcher />
      </header>
      <main className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.3em] text-stone-500 hover:text-brand-gold transition-colors mb-12 inline-block"
        >
          ← {t("back.home")}
        </Link>
        <h1 className="text-4xl md:text-5xl font-serif italic mb-16">{title}</h1>
        <div className="prose-legal space-y-10">{children}</div>
      </main>
      <footer className="py-12 px-6 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em] text-stone-600">
        © {new Date().getFullYear()} Portofino Luxembourg
      </footer>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-4">{title}</h2>
      <div className="text-stone-300 font-light leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
