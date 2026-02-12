export default function DemoRedirectToast({ notice, onOpenNow, onClose }) {
  if (!notice) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[90] mx-auto w-full max-w-xl rounded-xl border border-white/20 bg-[rgba(8,3,2,0.94)] p-4 shadow-[0_18px_42px_rgba(0,0,0,0.55)] backdrop-blur">
      <p className="font-heading text-xl text-white">{notice.title}</p>
      <p className="mt-1 font-body text-sm text-brand-muted">{notice.message}</p>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenNow}
          className="rounded-md bg-brand-primary px-3 py-2 font-body text-sm font-semibold text-black transition hover:bg-brand-primaryStrong"
        >
          {notice.openNow}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-white/25 px-3 py-2 font-body text-sm font-semibold text-white transition hover:border-brand-primary hover:text-brand-primary"
        >
          {notice.cancel}
        </button>
      </div>
    </div>
  );
}
