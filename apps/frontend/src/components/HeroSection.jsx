import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import PrimaryButton from "./common/PrimaryButton";

export default function HeroSection({ t }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 170, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 170, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[30rem] overflow-hidden pt-20 lg:h-[clamp(30rem,56vh,42rem)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.56)_100%)]" />

      <div className="relative mx-auto grid h-full w-full max-w-7xl items-center gap-6 px-4 pb-8 pt-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="z-10 max-w-2xl"
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
          initial={{ opacity: 0, x: 28, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.68, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[34rem]"
          style={{ perspective: 1200 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="pointer-events-none absolute inset-x-12 bottom-10 h-20 " />
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl p-3"
          >
            <div className="absolute inset-2 " />
            <img
              src="/images/img-burger/img-burger-hero.png"
              alt="EatBurger signature burger"
              className="relative w-full object-contain drop-shadow-[0_30px_55px_rgba(0,0,0,0.72)]"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
