import { createFileRoute } from "@tanstack/react-router";
import { LegalShell, LegalSection } from "@/components/LegalShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/impressum")({
  component: ImpressumPage,
  head: () => ({
    meta: [
      { title: "Impressum | Portofino Luxembourg" },
      { name: "description", content: "Impressum — Portofino Luxembourg" },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

function ImpressumPage() {
  const { t } = useI18n();
  return (
    <LegalShell title={t("legal.title")}>
      <LegalSection title={t("legal.h.company")}>
        <p>Portofino S.à r.l.</p>
        <p>12 Route d'Arlon, L-1150 Luxembourg City</p>
      </LegalSection>
      <LegalSection title={t("legal.h.contact")}>
        <p>+352 26 12 34 56</p>
        <p>reservations@portofino.lu</p>
      </LegalSection>
      <LegalSection title={t("legal.h.register")}>
        <p>RCS Luxembourg : B 123456</p>
      </LegalSection>
      <LegalSection title={t("legal.h.vat")}>
        <p>LU 12345678</p>
      </LegalSection>
      <LegalSection title={t("legal.h.host")}>
        <p>Lovable Cloud</p>
      </LegalSection>
      <LegalSection title={t("legal.h.liability")}>
        <p>{t("legal.liability.body")}</p>
      </LegalSection>
    </LegalShell>
  );
}
