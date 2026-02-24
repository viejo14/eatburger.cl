import { motion } from "framer-motion";

const EATBURGER_LOGO = "/images/logo-eatburger.png";
const MENU_QR_IMAGE = "/images/eatburger_menu_qr.png";
const QR_BG_IMAGE = "/images/llama.avif";

export default function QrScanSimulation() {
  return (
    <section className="relative isolate overflow-hidden py-20">
      <img
        src={QR_BG_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(12,4,2,0.84)_58%,rgba(0,0,0,0.88)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(242,163,32,0.22),transparent_45%),radial-gradient(circle_at_82%_16%,rgba(255,78,33,0.18),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-section-fire opacity-45" />

      <div className="mx-auto flex w-full max-w-6xl justify-center px-4 sm:px-6 lg:px-8">
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
              Escanea este QR y veras todos nuestros productos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
