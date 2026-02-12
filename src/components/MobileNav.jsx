import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileNav({ locale, navItems, isOpen, onClose, onChangeLocale }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm md:hidden"
        >
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 360, damping: 34 }}
            className="ml-auto flex h-full w-[82%] max-w-sm flex-col bg-brand-surface p-6 shadow-panel"
          >
            <button
              type="button"
              className="self-end rounded-md border border-white/20 px-3 py-2 text-sm text-white"
              onClick={onClose}
              aria-label="Close menu"
            >
              X
            </button>

            <div className="mt-6">
              <LanguageSwitcher locale={locale} onChange={onChangeLocale} compact />
            </div>

            <ul className="mt-10 space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-md border border-white/10 bg-black/20 px-4 py-3 font-body text-base font-semibold text-white transition hover:border-brand-primary hover:text-brand-primary"
                  >
                    {locale === "es" ? item.label : item.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
