import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "./common/PrimaryButton";
import SectionTitle from "./common/SectionTitle";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

const isValidEmail = (value) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);

export default function ContactSection({ t, locale, onDemoRedirect }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const endpoint = useMemo(() => import.meta.env.VITE_FORMSPREE_ENDPOINT, []);
  const mapQuery = encodeURIComponent(t.contact.locationAddress);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setStatus({ type: "error", message: t.contact.required });
      return;
    }

    if (!isValidEmail(email)) {
      setStatus({ type: "error", message: t.contact.invalidEmail });
      return;
    }

    if (onDemoRedirect) {
      setStatus({ type: "success", message: t.contact.demoRedirecting });
      setFormData(INITIAL_FORM);
      onDemoRedirect({ source: "contact_form", locale, formData });
      return;
    }

    if (!endpoint) {
      setStatus({ type: "error", message: t.contact.endpointMissing });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus({ type: "success", message: t.contact.success });
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus({ type: "error", message: t.contact.fail });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-section-fire opacity-50" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl"
        >
          <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} align="center" />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-2xl border border-white/15 bg-black/40 p-6 shadow-panel backdrop-blur-sm sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="font-body text-sm text-brand-text">
                  {t.contact.name}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    className="mt-2 w-full rounded-md border border-white/15 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-brand-primary"
                  />
                </label>

                <label className="font-body text-sm text-brand-text">
                  {t.contact.email}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    className="mt-2 w-full rounded-md border border-white/15 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-brand-primary"
                  />
                </label>
              </div>

              <label className="font-body text-sm text-brand-text">
                {t.contact.phone}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onChange}
                  className="mt-2 w-full rounded-md border border-white/15 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-brand-primary"
                />
              </label>

              <label className="font-body text-sm text-brand-text">
                {t.contact.message}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  rows={5}
                  className="mt-2 w-full resize-none rounded-md border border-white/15 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-brand-primary"
                />
              </label>

              <PrimaryButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? t.contact.sending : t.contact.submit}
              </PrimaryButton>

              {status.message ? (
                <p
                  role="status"
                  className={[
                    "font-body text-sm",
                    status.type === "success" ? "text-green-400" : "text-red-400"
                  ].join(" ")}
                >
                  {status.message}
                </p>
              ) : null}
            </form>

            <aside className="overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-panel backdrop-blur-sm">
              <div className="border-b border-white/10 p-6 sm:p-8">
                <h3 className="font-heading text-2xl text-white">{t.contact.locationTitle}</h3>
                <p className="mt-3 font-body text-sm uppercase tracking-[0.15em] text-brand-primary">
                  {t.contact.locationLabel}
                </p>
                <p className="mt-1 font-body text-base text-brand-text">{t.contact.locationAddress}</p>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-md border border-brand-primary/60 px-4 py-2 font-body text-sm text-brand-primary transition hover:bg-brand-primary/15 hover:text-white"
                >
                  {t.contact.locationCta}
                </a>
              </div>
              <iframe
                title={t.contact.locationTitle}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 sm:h-[360px]"
                allowFullScreen
              />
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
