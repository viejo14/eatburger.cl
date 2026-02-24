export default function LanguageSwitcher({ locale, onChange, compact = false }) {
  return (
    <div
      className={[
        "inline-flex rounded-md border border-white/20 bg-black/30 p-1",
        compact ? "text-xs" : "text-sm"
      ].join(" ")}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => onChange("es")}
        className={[
          "rounded px-3 py-1.5 font-body font-semibold transition",
          locale === "es"
            ? "bg-brand-primary text-black"
            : "text-white hover:bg-white/10"
        ].join(" ")}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={[
          "rounded px-3 py-1.5 font-body font-semibold transition",
          locale === "en"
            ? "bg-brand-primary text-black"
            : "text-white hover:bg-white/10"
        ].join(" ")}
      >
        EN
      </button>
    </div>
  );
}
