import { Check, ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  "Aerial portraits & establishing shots",
  "Property, venue & real estate flyovers",
  "Event coverage from above",
  "4K aerial video + still photography",
];

export function DroneSection() {
  return (
    <section
      id="drone"
      className="grain relative overflow-hidden border-t border-white/10 bg-[#0c0b09] py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(201,98,42,0.16),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
            New — Aerial Photography
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#f2ede4] md:text-5xl">
            Drone Services
          </h2>
          <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-[#f2ede4]/60">
            Take your session, event, or property to the sky. FAA-compliant
            aerial photo &amp; video coverage that pairs with any ground
            session or stands on its own.
          </p>
          <a
            href="#book"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#c9622a] px-6 py-3 font-body text-sm uppercase tracking-[0.2em] text-[#0c0b09] transition-colors hover:bg-[#e07539]"
          >
            Book Drone Coverage
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="md:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h}
                className="flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-6"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c9622a]" />
                <span className="font-body text-sm text-[#f2ede4]/70">
                  {h}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-sm border border-[#c9622a]/40 bg-[#c9622a]/[0.06] p-6">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-[#f2ede4]/50">
                Add-on or standalone
              </p>
              <p className="mt-1 font-display text-2xl text-[#c9622a]">
                Starting at $100
              </p>
            </div>
            <p className="max-w-[10rem] text-right font-body text-xs text-[#f2ede4]/50">
              Final quote depends on location, flight time &amp; deliverables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
