export default function PrimaryButton({
  as = "button",
  children,
  className = "",
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={[
        "inline-flex items-center justify-center rounded-md bg-brand-primary px-6 py-3",
        "font-body text-sm font-semibold uppercase tracking-wide text-black",
        "transition duration-300 hover:-translate-y-0.5 hover:bg-brand-primaryStrong hover:shadow-glow",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
