import { translations } from "./i18n/translations";
import { useLocale } from "./hooks/useLocale";
import { navItems } from "./data/navItems";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import OrderSection from "./components/OrderSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const { locale, setLocale } = useLocale();
  const t = translations[locale] ?? translations.es;

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
        <AboutSection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer text={t.footer} />
    </div>
  );
}
