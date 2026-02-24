import { useEffect, useRef, useState } from "react";
import { translations } from "./i18n/translations";
import { useLocale } from "./hooks/useLocale";
import { navItems } from "./data/navItems";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import OrderSection from "./components/OrderSection";
import DeliveryPlatformsSection from "./components/DeliveryPlatformsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import DemoRedirectToast from "./components/DemoRedirectToast";

const SYRTIX_PHONE = "56988126316";
const DEMO_REDIRECT_DELAY_MS = 1800;

const buildWhatsAppUrl = (message) =>
  `https://wa.me/${SYRTIX_PHONE}?text=${encodeURIComponent(message)}`;

const buildRedirectMessage = (locale, source, formData) => {
  if (source === "contact_form") {
    const labels =
      locale === "es"
        ? { name: "Nombre", email: "Email", phone: "Telefono", message: "Mensaje" }
        : { name: "Name", email: "Email", phone: "Phone", message: "Message" };

    return [
      locale === "es"
        ? "Hola Syrtix, vi el demo de EatBurger y quiero cotizar una web similar."
        : "Hi Syrtix, I saw the EatBurger demo and want to quote a similar website.",
      `${labels.name}: ${formData?.name ?? ""}`,
      `${labels.email}: ${formData?.email ?? ""}`,
      `${labels.phone}: ${formData?.phone ?? ""}`,
      `${labels.message}: ${formData?.message ?? ""}`
    ].join("\n");
  }

  return locale === "es"
    ? "Hola Syrtix, vi el demo de EatBurger y quiero una web similar."
    : "Hi Syrtix, I saw the EatBurger demo and want a similar website.";
};

export default function App() {
  const { locale, setLocale } = useLocale();
  const t = translations[locale] ?? translations.es;
  const [demoNotice, setDemoNotice] = useState(null);
  const redirectTimerRef = useRef(null);

  const clearRedirectTimer = () => {
    if (redirectTimerRef.current) {
      clearTimeout(redirectTimerRef.current);
      redirectTimerRef.current = null;
    }
  };

  useEffect(() => () => clearRedirectTimer(), []);

  const openExternalLink = (url) => {
    if (!url || import.meta.env.MODE === "test") {
      return;
    }

    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      // No-op fallback for restrictive browser environments.
    }
  };

  const closeDemoNotice = () => {
    clearRedirectTimer();
    setDemoNotice(null);
  };

  const openNoticeNow = () => {
    if (!demoNotice?.redirectUrl) {
      return;
    }

    clearRedirectTimer();
    openExternalLink(demoNotice.redirectUrl);
    setDemoNotice(null);
  };

  const handleDemoRedirect = ({ source, locale: sourceLocale, formData }) => {
    const currentLocale = sourceLocale ?? locale;
    const localeText = translations[currentLocale] ?? translations.es;
    const redirectMessage = buildRedirectMessage(currentLocale, source, formData);
    const redirectUrl = buildWhatsAppUrl(redirectMessage);

    setDemoNotice({
      ...localeText.demoRedirect,
      redirectUrl
    });

    clearRedirectTimer();
    redirectTimerRef.current = setTimeout(() => {
      openExternalLink(redirectUrl);
      setDemoNotice(null);
      redirectTimerRef.current = null;
    }, DEMO_REDIRECT_DELAY_MS);
  };

  return (
    <div className="min-h-screen bg-app-texture text-brand-text">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        {t.skipToContent}
      </a>

      <Header locale={locale} navItems={navItems} onChangeLocale={setLocale} />

      <main>
        <HeroSection t={t} />
        <MenuSection locale={locale} t={t} />
        <OrderSection locale={locale} t={t} />
        <DeliveryPlatformsSection t={t} />
        <AboutSection t={t} />
        <ContactSection t={t} locale={locale} onDemoRedirect={handleDemoRedirect} />
      </main>

      <WhatsAppButton locale={locale} onDemoRedirect={handleDemoRedirect} />
      <DemoRedirectToast notice={demoNotice} onOpenNow={openNoticeNow} onClose={closeDemoNotice} />
      <Footer text={t.footer} />
    </div>
  );
}
