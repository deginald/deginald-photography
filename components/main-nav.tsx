"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Camera } from "lucide-react";

const LINKS = [
  { href: "/portraits", label: "Portraits" },
  { href: "/drone", label: "Drone" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/#about", label: "About" },
];

export function MainNav({ bookHref = "#book" }: { bookHref?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0c0b09]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-[#c9622a]" strokeWidth={1.5} />
          <span className="font-display text-lg tracking-wide text-[#f2ede4]">
            Deginald - Carolina King Photography<span className="text-[#c9622a]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[13px] uppercase tracking-[0.18em] text-[#f2ede4]/70 transition-colors hover:text-[#f2ede4]"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-[13px] uppercase tracking-[0.18em] text-[#f2ede4]/70 transition-colors hover:text-[#f2ede4]"
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href={bookHref}
            className="rounded-full border border-[#c9622a] px-5 py-2 text-[13px] uppercase tracking-[0.18em] text-[#c9622a] transition-colors hover:bg-[#c9622a] hover:text-[#0c0b09]"
          >
            Book Now
          </a>
        </nav>

        <button
          className="text-[#f2ede4] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-6 pt-4 md:hidden">
          {LINKS.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-body text-sm uppercase tracking-[0.18em] text-[#f2ede4]/80"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-body text-sm uppercase tracking-[0.18em] text-[#f2ede4]/80"
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href={bookHref}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-[#c9622a] px-5 py-3 text-center text-sm uppercase tracking-[0.18em] text-[#c9622a]"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
