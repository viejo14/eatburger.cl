import { motion } from "framer-motion";
import { statsItems } from "../data/statsItems";
import PrimaryButton from "./common/PrimaryButton";

export default function OrderSection({ locale, t }) {
  return (
    <section id="pedido" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 z-10 bg-transparent" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_100%,rgba(255,112,38,0.20),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-section-fire opacity-45" />

      <div className="relative z-30 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <h2 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.order.titleA} <span className="text-brand-primary">{t.order.titleB}</span>
            <br />
            {t.order.titleC}
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {statsItems.map((stat, index) => (
            <motion.article
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              className="rounded-xl border border-white/20 bg-white/95 p-5 text-black shadow-panel"
            >
              <p className="font-heading text-4xl text-brand-primary">{stat.value}</p>
              <h3 className="mt-2 font-body text-lg font-bold text-black">
                {locale === "es" ? stat.label : stat.labelEn}
              </h3>
              <p className="mt-2 font-body text-sm text-black/70">
                {locale === "es" ? stat.detail : stat.detailEn}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-10"
        >
          <PrimaryButton as="a" href="#domicilio">
            {t.order.cta}
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
