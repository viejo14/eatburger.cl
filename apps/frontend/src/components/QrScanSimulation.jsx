import { motion } from "framer-motion";
import { FiCheckCircle, FiSmartphone } from "react-icons/fi";

const EATBURGER_LOGO = "/images/logo-eatburger.png";
const MENU_QR_IMAGE = "/images/eatburger_menu_qr.png";

export default function QrScanSimulation() {
  return (
    <section className="relative isolate overflow-hidden py-20">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_10%,rgba(242,163,32,0.20),transparent_45%),radial-gradient(circle_at_82%_16%,rgba(255,78,33,0.16),transparent_42%),linear-gradient(180deg,#0d0402_0%,#140702_55%,#0a0301_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-section-fire opacity-45" />

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/15 bg-black/45 p-6 shadow-panel backdrop-blur-sm sm:p-8"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/45 bg-brand-primary/15 text-brand-primary">
              <FiSmartphone size={20} />
            </span>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
              Escaneo QR
            </p>
          </div>

          <h2 className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl">
            Escanea y abre el menu digital
          </h2>
          <p className="mt-3 max-w-xl font-body text-sm text-brand-muted sm:text-base">
            Simulacion visual del escaneo QR para acceso rapido al menu de EatBurger.
          </p>

          <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/10 bg-black/35 p-3">
            <FiCheckCircle className="text-brand-primary" size={18} />
            <p className="font-body text-sm text-brand-text">QR detectado correctamente.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative rounded-[2rem] border border-white/20 bg-black/55 p-4 shadow-panel backdrop-blur-sm">
            <div className="mb-3 rounded-xl border border-white/10 bg-white/95 p-3">
              <img
                src={EATBURGER_LOGO}
                alt="EatBurger"
                className="mx-auto h-10 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl border-2 border-brand-primary/60 bg-white p-3">
              <img
                src={MENU_QR_IMAGE}
                alt="Codigo QR menu EatBurger"
                className="w-full rounded-lg object-contain"
                loading="lazy"
                decoding="async"
              />

              <motion.div
                initial={{ y: "-10%" }}
                animate={{ y: "102%" }}
                transition={{ duration: 2.1, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-x-2 top-0 h-8 rounded-full bg-[linear-gradient(180deg,rgba(242,163,32,0.0),rgba(242,163,32,0.55),rgba(242,163,32,0.0))]"
              />

              <div className="pointer-events-none absolute inset-2 rounded-lg border border-brand-primary/45" />
            </div>

            <p className="mt-4 text-center font-body text-xs uppercase tracking-[0.14em] text-brand-primary">
              Acerca tu camara al codigo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
