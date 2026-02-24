import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { menuItems } from "../data/menuItems";
import SectionTitle from "./common/SectionTitle";

const CARD_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80";

const applyFallback = (event) => {
  const image = event.currentTarget;
  if (!image.dataset.fallbackApplied) {
    image.dataset.fallbackApplied = "1";
    image.src = CARD_IMAGE_FALLBACK;
  }
};

const clpFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});

const normalizeUrl = (value) => {
  const parsed = String(value || "").trim();
  if (!parsed) {
    return "";
  }

  if (parsed.startsWith("http://") || parsed.startsWith("https://")) {
    return parsed;
  }

  return "";
};

const DEFAULT_PLATFORM_LINKS = {
  ubereats: "https://www.ubereats.com/cl",
  rappi: "https://www.rappi.cl",
  pedidosya: "https://www.pedidosya.cl"
};

const resolvePlatformLink = (key, envValue) =>
  normalizeUrl(envValue) || DEFAULT_PLATFORM_LINKS[key] || "";

export default function MenuSection({ locale, t }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const deliveryPlatforms = [
    {
      id: "ubereats",
      name: "Uber Eats",
      href: resolvePlatformLink("ubereats", import.meta.env.VITE_UBEREATS_STORE_URL),
      logo: "/images/logo-ubereat.webp",
      alt: "Uber Eats logo"
    },
    {
      id: "rappi",
      name: "Rappi",
      href: resolvePlatformLink("rappi", import.meta.env.VITE_RAPPI_STORE_URL),
      logo: "/images/logo-rappi.jpg",
      alt: "Rappi logo"
    },
    {
      id: "pedidosya",
      name: "PedidosYa",
      href: resolvePlatformLink("pedidosya", import.meta.env.VITE_PEDIDOSYA_STORE_URL),
      logo: "/images/logo-pedidosya.jpg",
      alt: "PedidosYa logo"
    }
  ];

  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <section id="menu" className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-30 bg-flame" />
        <img
          src="/images/llama.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.52)_0%,rgba(16,7,3,0.78)_48%,rgba(5,2,1,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-section-fire" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow={t.menu.eyebrow} title={t.menu.title} subtitle={t.menu.subtitle} align="center" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {menuItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20, scale: 0.995 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: index * 0.035, duration: 0.32, ease: [0.22, 1, 0.36, 1] }
                }}
                viewport={{ once: true, amount: 0.12 }}
                whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.16, ease: "easeOut" } }}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group cursor-pointer overflow-hidden rounded-xl border border-white/12 bg-[rgba(10,4,2,0.8)] shadow-panel transform-gpu will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={locale === "es" ? item.name : item.nameEn}
                    onError={applyFallback}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded bg-brand-primary px-2.5 py-1 text-xs font-bold uppercase text-black">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3 p-5">
                  <h3 className="font-heading text-2xl text-white">
                    {locale === "es" ? item.name : item.nameEn}
                  </h3>
                  <p className="font-body text-sm text-brand-muted">
                    {locale === "es" ? item.description : item.descriptionEn}
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <p className="font-heading text-3xl text-brand-primary">{clpFormatter.format(item.price)}</p>
                    <p className="font-body text-xs font-semibold uppercase tracking-wide text-brand-primary">
                      {locale === "es" ? "Ver detalle" : "View details"}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.article
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[rgba(8,3,2,0.96)] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            >
              <button
                type="button"
                aria-label={locale === "es" ? "Cerrar modal" : "Close modal"}
                onClick={() => setSelectedItem(null)}
                className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white transition hover:border-brand-primary hover:text-brand-primary"
              >
                <FiX size={18} />
              </button>

              <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[16rem] md:min-h-[24rem]">
                  <img
                    src={selectedItem.image}
                    alt={locale === "es" ? selectedItem.name : selectedItem.nameEn}
                    onError={applyFallback}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>

                <div className="relative space-y-4 p-6 sm:p-8">
                  <span className="inline-flex rounded bg-brand-primary px-2.5 py-1 text-xs font-bold uppercase text-black">
                    {selectedItem.badge}
                  </span>

                  <h3 className="font-heading text-3xl leading-tight text-white sm:text-4xl">
                    {locale === "es" ? selectedItem.name : selectedItem.nameEn}
                  </h3>

                  <p className="font-body text-base leading-relaxed text-brand-muted">
                    {locale === "es" ? selectedItem.description : selectedItem.descriptionEn}
                  </p>

                  <div className="pt-2">
                    <p className="font-heading text-4xl text-brand-primary">
                      {clpFormatter.format(selectedItem.price)}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                    <p className="font-body text-sm font-semibold text-white">{t.menu.modalDeliveryTitle}</p>
                    <p className="mt-1 font-body text-xs text-brand-muted">{t.menu.modalDeliverySubtitle}</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {deliveryPlatforms.map((platform) => (
                        <a
                          key={platform.id}
                          href={platform.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={platform.name}
                          className="flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/95 p-2 transition hover:border-brand-primary"
                        >
                          <img
                            src={platform.logo}
                            alt={platform.alt}
                            className="h-full w-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
