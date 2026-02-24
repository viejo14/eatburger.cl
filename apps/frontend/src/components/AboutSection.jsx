import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";

export default function AboutSection({ t }) {
  return (
    <section id="nosotros" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-section-fire opacity-45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-2xl border border-white/15 bg-black/45 p-6 shadow-panel backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-xl border border-white/15 bg-black/20">
              <img
                src="/images/img-dueno.webp"
                alt={t.about.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <p className="border-t border-white/10 bg-black/40 px-4 py-3 font-body text-xs uppercase tracking-[0.14em] text-brand-primary">
                {t.about.imageCaption}
              </p>
            </div>

            <div>
              <SectionTitle title={t.about.title} />
              <p className="mt-5 font-body text-base leading-relaxed text-brand-muted sm:text-lg">
                {t.about.text}
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-brand-muted sm:text-lg">
                {t.about.text2}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
