import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "de" | "fr" | "en";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  de: {
    "nav.menu": "Speisekarte",
    "nav.story": "Unsere Geschichte",
    "nav.visit": "Besuch",
    "nav.reserve": "Reservierungen",
    "hero.kicker": "Feine italienische Küche — Luxemburg-Stadt",
    "hero.title.1": "Eine italienische Seele im",
    "hero.title.2": "Herzen Luxemburgs.",
    "hero.cta": "Tisch reservieren",
    "hero.location": "Route d'Arlon · Luxemburg-Stadt",
    "hero.established": "Gegründet 1994",
    "story.kicker": "Das Handwerk",
    "story.quote": '"Wir servieren keine Gerichte —\nwir servieren eine Erinnerung\nan die ligurische Küste."',
    "story.p1": "Geboren in einem Fischerdorf an der italienischen Riviera, brachte Chefkoch Marco Rossi 1994 das Erbe der Küche seiner Großmutter nach Luxemburg. Drei Jahrzehnte später bleibt Portofino einem Prinzip verbunden: die Zutat respektieren, die Jahreszeit ehren.",
    "story.p2": "Jeder Teller ist das Ergebnis eines stillen Gesprächs zwischen mediterraner Tradition und den feinsten Erzeugern des Großherzogtums.",
    "story.chef": "— Chefkoch Marco Rossi",
    "menu.kicker": "Herbstkollektion",
    "menu.title": "I Piatti d'Autore",
    "menu.intro": "Kuratierte saisonale Auswahl von der ligurischen Küste, neu interpretiert mit Präzision und den feinsten Produkten des Großherzogtums.",
    "menu.tab.antipasti": "Antipasti",
    "menu.tab.primi": "Primi",
    "menu.tab.secondi": "Secondi",
    "menu.tasting": "Degustationsmenü — fünf Gänge, 95 · sieben Gänge, 130",
    "visit.kicker": "Besuch",
    "visit.title": "Ein kerzenbeleuchteter Raum,\nwenige Schritte vom Zentrum.",
    "visit.address": "Adresse",
    "visit.hours": "Öffnungszeiten",
    "visit.contact": "Kontakt",
    "visit.lunch": "Mittagessen · Di – Sa",
    "visit.dinner": "Abendessen · Di – Sa",
    "visit.closed.days": "So – Mo",
    "visit.closed": "Geschlossen",
    "reserve.kicker": "Reservierungen",
    "reserve.title": "Wir haben einen Tisch\nfür Sie heute Abend reserviert.",
    "reserve.intro": "Reservierungen werden empfohlen. Für Gruppen ab sechs Personen erreichen Sie uns bitte direkt telefonisch.",
    "reserve.cta": "Zum Reservieren anrufen",
    "footer.legal": "Impressum",
    "footer.privacy": "Datenschutz",
    "cookie.title": "Cookies & Privatsphäre",
    "cookie.body": "Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und unseren Datenverkehr zu analysieren. Sie können dies jederzeit ändern.",
    "cookie.accept": "Alle akzeptieren",
    "cookie.decline": "Nur notwendige",
    "cookie.learn": "Mehr erfahren",
    "legal.title": "Impressum",
    "legal.h.company": "Verantwortlicher Herausgeber",
    "legal.h.contact": "Kontakt",
    "legal.h.register": "Handelsregister",
    "legal.h.vat": "Umsatzsteuer-Identifikationsnummer",
    "legal.h.host": "Hosting",
    "legal.h.liability": "Haftungsausschluss",
    "legal.liability.body": "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
    "privacy.title": "Datenschutzerklärung",
    "privacy.h.intro": "Einleitung",
    "privacy.intro.body": "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).",
    "privacy.h.contact": "Kontakt mit uns",
    "privacy.contact.body": "Wenn Sie per Telefon, E-Mail oder über unser Reservierungsformular Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert.",
    "privacy.h.cookies": "Cookies",
    "privacy.cookies.body": "Unsere Website verwendet Cookies, um die Funktionalität zu gewährleisten und das Nutzungserlebnis zu verbessern. Sie können Ihre Einstellungen jederzeit über das Cookie-Banner ändern.",
    "privacy.h.rights": "Ihre Rechte",
    "privacy.rights.body": "Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Sie erreichen uns unter reservations@portofino.lu.",
    "back.home": "Zurück zur Startseite",
  },
  fr: {
    "nav.menu": "Carte",
    "nav.story": "Notre histoire",
    "nav.visit": "Visite",
    "nav.reserve": "Réservations",
    "hero.kicker": "Cuisine italienne raffinée — Luxembourg-Ville",
    "hero.title.1": "Une âme italienne au",
    "hero.title.2": "cœur du Luxembourg.",
    "hero.cta": "Réserver une table",
    "hero.location": "Route d'Arlon · Luxembourg-Ville",
    "hero.established": "Fondé en 1994",
    "story.kicker": "L'artisanat",
    "story.quote": '"Nous ne servons pas des plats —\nnous servons un souvenir\nde la côte ligure."',
    "story.p1": "Né dans un village de pêcheurs sur la Riviera italienne, le chef Marco Rossi a apporté l'héritage de la cuisine de sa grand-mère au Luxembourg en 1994. Trois décennies plus tard, Portofino reste fidèle à un principe : respecter l'ingrédient, honorer la saison.",
    "story.p2": "Chaque assiette est le fruit d'une conversation discrète entre la tradition méditerranéenne et les meilleurs producteurs du Grand-Duché.",
    "story.chef": "— Chef Marco Rossi",
    "menu.kicker": "Collection d'automne",
    "menu.title": "I Piatti d'Autore",
    "menu.intro": "Sélections saisonnières de la côte ligure, réinventées avec précision et les meilleurs produits du Grand-Duché.",
    "menu.tab.antipasti": "Antipasti",
    "menu.tab.primi": "Primi",
    "menu.tab.secondi": "Secondi",
    "menu.tasting": "Menu dégustation — cinq plats, 95 · sept plats, 130",
    "visit.kicker": "Visite",
    "visit.title": "Une salle aux chandelles,\nà deux pas du centre.",
    "visit.address": "Adresse",
    "visit.hours": "Horaires",
    "visit.contact": "Contact",
    "visit.lunch": "Déjeuner · Mar – Sam",
    "visit.dinner": "Dîner · Mar – Sam",
    "visit.closed.days": "Dim – Lun",
    "visit.closed": "Fermé",
    "reserve.kicker": "Réservations",
    "reserve.title": "Nous avons gardé une table\npour vous ce soir.",
    "reserve.intro": "La réservation est recommandée. Pour les groupes de six personnes ou plus, veuillez nous joindre directement par téléphone.",
    "reserve.cta": "Appeler pour réserver",
    "footer.legal": "Mentions légales",
    "footer.privacy": "Confidentialité",
    "cookie.title": "Cookies et confidentialité",
    "cookie.body": "Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. Vous pouvez modifier ce choix à tout moment.",
    "cookie.accept": "Tout accepter",
    "cookie.decline": "Strictement nécessaires",
    "cookie.learn": "En savoir plus",
    "legal.title": "Mentions légales",
    "legal.h.company": "Éditeur responsable",
    "legal.h.contact": "Contact",
    "legal.h.register": "Registre du commerce",
    "legal.h.vat": "Numéro de TVA",
    "legal.h.host": "Hébergement",
    "legal.h.liability": "Limitation de responsabilité",
    "legal.liability.body": "Malgré un contrôle attentif du contenu, nous déclinons toute responsabilité quant au contenu des liens externes. Les exploitants des sites liés sont seuls responsables de leur contenu.",
    "privacy.title": "Politique de confidentialité",
    "privacy.h.intro": "Introduction",
    "privacy.intro.body": "La protection de vos données personnelles est une priorité pour nous. Nous traitons vos données exclusivement sur la base des dispositions légales (RGPD).",
    "privacy.h.contact": "Nous contacter",
    "privacy.contact.body": "Si vous nous contactez par téléphone, e-mail ou via notre formulaire de réservation, les données que vous fournissez sont conservées pendant six mois pour le traitement de votre demande et d'éventuelles questions de suivi.",
    "privacy.h.cookies": "Cookies",
    "privacy.cookies.body": "Notre site utilise des cookies pour assurer son bon fonctionnement et améliorer votre expérience. Vous pouvez modifier vos préférences à tout moment via la bannière de cookies.",
    "privacy.h.rights": "Vos droits",
    "privacy.rights.body": "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité, de retrait et d'opposition. Contactez-nous à reservations@portofino.lu.",
    "back.home": "Retour à l'accueil",
  },
  en: {
    "nav.menu": "Menu",
    "nav.story": "The Story",
    "nav.visit": "Visit",
    "nav.reserve": "Reservations",
    "hero.kicker": "Fine Italian Dining — Luxembourg City",
    "hero.title.1": "An Italian soul in the",
    "hero.title.2": "heart of Luxembourg.",
    "hero.cta": "Book a Table",
    "hero.location": "Route d'Arlon · Luxembourg City",
    "hero.established": "Established 1994",
    "story.kicker": "The Craft",
    "story.quote": '"We don\'t serve dishes —\nwe serve a memory\nof the Ligurian coast."',
    "story.p1": "Born in a fishing village on the Italian Riviera, Chef Marco Rossi brought the heritage of his grandmother's kitchen to Luxembourg in 1994. Three decades later, Portofino remains anchored to one principle: respect the ingredient, honor the season.",
    "story.p2": "Every plate is the result of a quiet conversation between Mediterranean tradition and the Grand Duchy's finest producers.",
    "story.chef": "— Chef Marco Rossi",
    "menu.kicker": "Autumn Collection",
    "menu.title": "I Piatti d'Autore",
    "menu.intro": "Curated seasonal selections from the Ligurian coast, reimagined with precision and the finest produce of the Grand Duchy.",
    "menu.tab.antipasti": "Antipasti",
    "menu.tab.primi": "Primi",
    "menu.tab.secondi": "Secondi",
    "menu.tasting": "Tasting menu — five courses, 95 · seven courses, 130",
    "visit.kicker": "Visit",
    "visit.title": "A candlelit room,\na short walk from the city.",
    "visit.address": "Address",
    "visit.hours": "Hours",
    "visit.contact": "Contact",
    "visit.lunch": "Lunch · Tue – Sat",
    "visit.dinner": "Dinner · Tue – Sat",
    "visit.closed.days": "Sun – Mon",
    "visit.closed": "Closed",
    "reserve.kicker": "Reservations",
    "reserve.title": "We've kept a table\nfor you tonight.",
    "reserve.intro": "Reservations are recommended. For parties of six or more, please reach us directly by phone.",
    "reserve.cta": "Call to Reserve",
    "footer.legal": "Legal Notice",
    "footer.privacy": "Privacy",
    "cookie.title": "Cookies & Privacy",
    "cookie.body": "We use cookies to improve your experience and analyze our traffic. You can change this anytime.",
    "cookie.accept": "Accept all",
    "cookie.decline": "Only necessary",
    "cookie.learn": "Learn more",
    "legal.title": "Legal Notice",
    "legal.h.company": "Publisher",
    "legal.h.contact": "Contact",
    "legal.h.register": "Trade Register",
    "legal.h.vat": "VAT Number",
    "legal.h.host": "Hosting",
    "legal.h.liability": "Liability Disclaimer",
    "legal.liability.body": "Despite careful content review, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
    "privacy.title": "Privacy Policy",
    "privacy.h.intro": "Introduction",
    "privacy.intro.body": "The protection of your personal data is a particular concern to us. We process your data exclusively on the basis of the legal provisions (GDPR).",
    "privacy.h.contact": "Contacting Us",
    "privacy.contact.body": "If you contact us by phone, email or via our reservation form, the data you provide will be stored for six months to process your request and any follow-up questions.",
    "privacy.h.cookies": "Cookies",
    "privacy.cookies.body": "Our website uses cookies to ensure functionality and improve your experience. You can change your preferences anytime via the cookie banner.",
    "privacy.h.rights": "Your Rights",
    "privacy.rights.body": "You have the rights to access, rectification, erasure, restriction, portability, withdrawal and objection. Contact us at reservations@portofino.lu.",
    "back.home": "Back to home",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored && translations[stored]) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => translations[lang][key] ?? translations.de[key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
