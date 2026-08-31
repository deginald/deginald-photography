import { Camera } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Camera className="h-4 w-4 text-[#c9622a]" strokeWidth={1.5} />
          <span className="font-display text-sm text-[#f2ede4]/60">
            Deginald Photography
          </span>
        </div>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-[#f2ede4]/30">
          © {new Date().getFullYear()} — All portraits, no alterations.
        </p>
      </div>
    </footer>
  );
}
