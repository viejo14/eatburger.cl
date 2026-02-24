import QrScanSimulation from "./components/QrScanSimulation";

export default function QrScanPage() {
  return (
    <div className="min-h-screen bg-app-texture text-brand-text">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/55 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-3" aria-label="Volver a EatBurger">
            <img
              src="/images/logo-eatburger.png"
              alt="EatBurger"
              className="h-10 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </a>
          <a
            href="/"
            className="rounded-md border border-white/20 bg-black/30 px-4 py-2 font-body text-sm font-semibold text-white transition hover:border-brand-primary hover:text-brand-primary"
          >
            Volver al inicio
          </a>
        </div>
      </header>

      <main>
        <QrScanSimulation />
      </main>
    </div>
  );
}
