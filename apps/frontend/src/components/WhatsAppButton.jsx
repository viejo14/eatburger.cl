import { FaWhatsapp } from "react-icons/fa";

const SYRTIX_PHONE = "56988126316";
const DEFAULT_MESSAGE = "Hola Syrtix, vi el demo de EatBurger y quiero una web similar.";

const normalizePhone = (value) => String(value ?? "").replace(/\D/g, "");

export default function WhatsAppButton({ locale, onDemoRedirect }) {
  const rawPhone = import.meta.env.VITE_WHATSAPP_PHONE;
  const phone = normalizePhone(rawPhone) || SYRTIX_PHONE;

  if (!phone) {
    return null;
  }

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
  const onClick = (event) => {
    if (!onDemoRedirect) {
      return;
    }

    event.preventDefault();
    onDemoRedirect({ source: "whatsapp_button", locale });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      aria-label="Abrir WhatsApp"
      className="fixed bottom-4 right-4 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1fbe59] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
