import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "./common/PrimaryButton";

const HERO_BG_FALLBACK =
  "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=2000&q=80";
const HERO_BURGER_FALLBACK =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80";

const applyFallback = (event, fallbackUrl) => {
  const image = event.currentTarget;
  if (!image.dataset.fallbackApplied) {
    image.dataset.fallbackApplied = "1";
    image.src = fallbackUrl;
  }
};

export default function HeroSection({ t }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const next = Math.min(window.scrollY * 0.12, 26);
      setOffset(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[30rem] overflow-hidden pt-20 lg:h-[clamp(28rem,52vh,40rem)]"
    >
      <img
        src="/images/llama.avif"
        alt="Llama background"
        className="absolute inset-0 h-full w-full object-cover object-center brightness-[1.10] saturate-[1.16] contrast-[1.18]"
        onError={(event) => applyFallback(event, HERO_BG_FALLBACK)}
      />
      <div className="absolute inset-0 bg-hero-cinematic" />
      <div className="absolute inset-0 bg-hero-vignette" />
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="pointer-events-none absolute inset-0 bg-section-fire" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-4 px-4 pb-4 pt-2 sm:gap-6 sm:px-6 sm:pb-6 sm:pt-3 lg:h-full lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-2 lg:px-8 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="z-10 max-w-lg"
        >
          <p className="mb-1 font-body text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary sm:text-sm">
            EatBurger
          </p>
          <h1 className="font-heading text-[1.95rem] leading-[0.92] text-white sm:text-[2.35rem] lg:text-[2.9rem] xl:text-[3.35rem]">
            <span className="block text-brand-primary">{t.hero.titleStart}</span>
            <span className="block">{t.hero.titleMid}</span>
            <span className="block text-brand-primary">{t.hero.titleEnd}</span>
          </h1>
          <p className="mt-1.5 max-w-lg font-body text-sm leading-snug text-brand-muted sm:text-base lg:text-[0.95rem]">
            {t.hero.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-2"
          >
            <PrimaryButton as="a" href="#menu" className="px-6 py-2.5">
              {t.hero.cta}
            </PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 22 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.72, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <div className="absolute bottom-4 h-56 w-56 animate-flame-pulse rounded-full bg-[rgba(242,163,32,0.35)] blur-[76px] sm:h-72 sm:w-72 lg:h-80 lg:w-80" />
          <img
            src="/images/burger7.png"
            alt="EatBurger signature burger"
            className="relative max-h-[280px] w-full max-w-[540px] object-contain drop-shadow-[0_26px_50px_rgba(0,0,0,0.65)] sm:max-h-[340px] lg:max-h-[390px] xl:max-h-[430px]"
            onError={(event) => applyFallback(event, HERO_BURGER_FALLBACK)}
          />
        </motion.div>
      </div>
    </section>
  );
}
