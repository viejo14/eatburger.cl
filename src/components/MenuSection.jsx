import { motion } from "framer-motion";
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

export default function MenuSection({ locale, t }) {
  return (
    <section id="menu" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-flame" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-section-fire" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={t.menu.eyebrow} title={t.menu.title} subtitle={t.menu.subtitle} align="center" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {menuItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.46 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group overflow-hidden rounded-xl border border-white/12 bg-[rgba(10,4,2,0.8)] shadow-panel"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={locale === "es" ? item.name : item.nameEn}
                  onError={applyFallback}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
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
                <p className="font-heading text-3xl text-brand-primary">{clpFormatter.format(item.price)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
