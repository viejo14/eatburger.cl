import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";

const ABOUT_BG_FALLBACK =
  "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=1800&q=80";

const applyFallback = (event) => {
  const image = event.currentTarget;
  if (!image.dataset.fallbackApplied) {
    image.dataset.fallbackApplied = "1";
    image.src = ABOUT_BG_FALLBACK;
  }
};

export default function AboutSection({ t }) {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24">
      <img
        src="/images/about-bg.jpg"
        alt="Team preparing burgers"
        onError={applyFallback}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/72" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-section-fire" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-black/35 p-8 text-center shadow-panel backdrop-blur-sm"
        >
          <SectionTitle title={t.about.title} align="center" />
          <p className="mt-5 font-body text-base leading-relaxed text-brand-muted sm:text-lg">
            {t.about.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
