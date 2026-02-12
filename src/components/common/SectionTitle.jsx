export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const aligned = align === "center" ? "text-center" : "text-left";

  return (
    <div className={aligned}>
      {eyebrow ? (
        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl text-brand-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-brand-muted sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
