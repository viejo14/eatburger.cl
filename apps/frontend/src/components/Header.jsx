import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNav from "./MobileNav";

export default function Header({ locale, navItems, onChangeLocale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={[
          "fixed inset-x-0 top-0 z-30 transition duration-300",
          scrolled
            ? "border-b border-white/10 bg-black/75 backdrop-blur-md"
            : "bg-transparent"
        ].join(" ")}
        >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="inline-flex items-center" aria-label="EatBurger home">
            <img
              src="/images/logo-eatburger.png"
              alt="EatBurger"
              className="h-12 w-auto sm:h-14"
              loading="eager"
              decoding="async"
            />
          </a>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="font-body text-sm font-semibold text-white transition hover:text-brand-primary"
                  >
                    {locale === "es" ? item.label : item.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/qr-scan"
              className="inline-flex items-center justify-center rounded-md border border-brand-primary/70 bg-brand-primary/15 px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-brand-primary transition hover:bg-brand-primary hover:text-black"
            >
              {locale === "es" ? "QR Menu" : "QR Menu"}
            </a>
            <LanguageSwitcher locale={locale} onChange={onChangeLocale} />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="rounded-md border border-white/25 bg-black/25 p-2 text-white transition hover:border-brand-primary hover:text-brand-primary md:hidden"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </motion.header>

      <MobileNav
        locale={locale}
        navItems={navItems}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onChangeLocale={onChangeLocale}
      />
    </>
  );
}
