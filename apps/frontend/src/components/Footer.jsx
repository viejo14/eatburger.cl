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
          <a
            href="https://syrtix.com"
            target="_blank"
            rel="noreferrer"
            className="group mt-1 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-brand-muted transition hover:border-brand-primary/70 hover:bg-brand-primary/10 hover:text-white"
          >
            <img
              src="/images/img-logo-syrtix.png"
              alt="Syrtix"
              className="h-5 w-auto rounded-sm object-contain"
              loading="lazy"
              decoding="async"
            />
            <span className="font-body">
              Pagina creada por <span className="font-semibold text-brand-primary transition group-hover:text-brand-primaryStrong">syrtix.com</span>
            </span>
          </a>
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
