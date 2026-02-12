import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer({ text }) {
  return (
    <footer className="border-t border-white/10 bg-black/70 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <img
            src="/images/logo-eatburger.png"
            alt="EatBurger"
            className="h-10 w-auto sm:h-11"
            loading="lazy"
            decoding="async"
          />
          <p className="font-body text-sm text-brand-muted">{text}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="rounded-full border border-white/20 p-2 text-white transition hover:border-brand-primary hover:text-brand-primary"
          >
            <FiFacebook size={16} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full border border-white/20 p-2 text-white transition hover:border-brand-primary hover:text-brand-primary"
          >
            <FiInstagram size={16} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="rounded-full border border-white/20 p-2 text-white transition hover:border-brand-primary hover:text-brand-primary"
          >
            <FiTwitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
