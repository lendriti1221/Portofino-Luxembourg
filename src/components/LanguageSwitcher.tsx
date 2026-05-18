import { useI18n, type Lang } from "@/lib/i18n";

const langs: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={`flex gap-3 text-[10px] uppercase tracking-[0.3em] ${className}`}>
      {langs.map((l, i) => (
        <span key={l.code} className="flex items-center gap-3">
          <button
            onClick={() => setLang(l.code)}
            className={`transition-colors duration-500 ${
              lang === l.code ? "text-brand-gold" : "text-white/50 hover:text-white"
            }`}
            aria-label={`Switch language to ${l.label}`}
          >
            {l.label}
          </button>
          {i < langs.length - 1 && <span className="text-white/20">·</span>}
        </span>
      ))}
    </div>
  );
}
