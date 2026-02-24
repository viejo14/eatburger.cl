import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";

export default function AboutSection({ t }) {
  return (
    <section id="nosotros" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 z-10 bg-black/62" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-section-fire opacity-55" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
