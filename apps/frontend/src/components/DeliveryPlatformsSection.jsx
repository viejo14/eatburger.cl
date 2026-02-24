import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";

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

const platformLinks = {
  ubereats: resolvePlatformLink("ubereats", import.meta.env.VITE_UBEREATS_STORE_URL),
  rappi: resolvePlatformLink("rappi", import.meta.env.VITE_RAPPI_STORE_URL),
  pedidosya: resolvePlatformLink("pedidosya", import.meta.env.VITE_PEDIDOSYA_STORE_URL)
};

export default function DeliveryPlatformsSection({ t }) {
  const platforms = [
    {
      id: "ubereats",
      name: "Uber Eats",
      description: t.delivery.uberEatsDescription,
      href: platformLinks.ubereats,
      logoSrc: "/images/logo-ubereat.webp",
      logoAlt: "Uber Eats logo",
      cardGlow: "from-[#1dbf73]/25"
    },
    {
      id: "rappi",
      name: "Rappi",
      description: t.delivery.rappiDescription,
      href: platformLinks.rappi,
      logoSrc: "/images/logo-rappi.jpg",
      logoAlt: "Rappi logo",
      cardGlow: "from-[#ff424d]/30"
    },
    {
      id: "pedidosya",
      name: "PedidosYa",
      description: t.delivery.pedidosYaDescription,
      href: platformLinks.pedidosya,
      logoSrc: "/images/logo-pedidosya.jpg",
      logoAlt: "PedidosYa logo",
      cardGlow: "from-[#e31937]/28"
    }
  ];

  return (
    <section id="domicilio" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-section-fire opacity-35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            align="center"
            eyebrow={t.delivery.eyebrow}
            title={t.delivery.title}
            subtitle={t.delivery.subtitle}
          />
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {platforms.map((platform, index) => {
            return (
              <motion.a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/45 p-5 shadow-panel backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand-primary/60"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${platform.cardGlow} to-transparent`}
                />
                <div className="relative text-center">
                  <div className="mx-auto flex h-16 w-full max-w-[13rem] items-center justify-center rounded-lg bg-white/95 p-3">
                    <img
                      src={platform.logoSrc}
                      alt={platform.logoAlt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <h3 className="mt-4 font-heading text-2xl text-white">{platform.name}</h3>
                  <p className="mt-2 font-body text-xs uppercase tracking-[0.14em] text-brand-primary">
                    {t.delivery.buyOn.replace("{platform}", platform.name)}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
