import { createFileRoute } from "@tanstack/react-router";
import { LegalShell, LegalSection } from "@/components/LegalShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/datenschutz")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Datenschutz | Portofino Luxembourg" },
      { name: "description", content: "Datenschutzerklärung — Portofino Luxembourg" },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

function PrivacyPage() {
  const { t } = useI18n();
  return (
    <LegalShell title={t("privacy.title")}>
      <LegalSection title={t("privacy.h.intro")}>
        <p>{t("privacy.intro.body")}</p>
      </LegalSection>
      <LegalSection title={t("privacy.h.contact")}>
        <p>{t("privacy.contact.body")}</p>
      </LegalSection>
      <LegalSection title={t("privacy.h.cookies")}>
        <p>{t("privacy.cookies.body")}</p>
      </LegalSection>
      <LegalSection title={t("privacy.h.rights")}>
        <p>{t("privacy.rights.body")}</p>
      </LegalSection>
    </LegalShell>
  );
}
