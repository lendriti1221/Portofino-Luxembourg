import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function CookieBanner() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("cookie-consent")) {
      const tm = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(tm);
    }
  }, []);

  const decide = (value: "all" | "necessary") => {
    localStorage.setItem("cookie-consent", value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[95] p-4 md:p-6 animate-fade-up-slow"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-5xl mx-auto bg-black/85 backdrop-blur-md border border-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h3 className="font-serif italic text-lg md:text-xl text-white mb-2">
            {t("cookie.title")}
          </h3>
          <p className="text-xs md:text-sm font-light text-stone-400 leading-relaxed max-w-2xl">
            {t("cookie.body")}{" "}
            <Link
              to="/datenschutz"
              onClick={() => setShow(false)}
              className="text-brand-gold underline-offset-4 hover:underline"
            >
              {t("cookie.learn")}
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => decide("necessary")}
            className="px-5 py-3 border border-white/20 text-white/80 text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-colors duration-500"
          >
            {t("cookie.decline")}
          </button>
          <button
            onClick={() => decide("all")}
            className="px-5 py-3 bg-brand-gold text-brand-bg text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-brand-gold-soft transition-colors duration-500"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
