import { ArrowRight } from "lucide-react";

export function RealEstateHero() {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(201,98,42,0.16),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-6 font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
          Real Estate Media
        </p>
        <h1 className="max-w-3xl font-display text-6xl font-light leading-[0.98] tracking-tight text-[#f2ede4] md:text-7xl">
          Listings that <span className="italic text-[#c9622a]">sell</span>{" "}
          themselves.
        </h1>
        <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-[#f2ede4]/60">
          Interior &amp; exterior photography, aerial drone coverage,
          cinematic video walkthroughs, and twilight edits — everything an
          agent needs to make a listing stand out, 24-hour turnaround.
        </p>
        <a
          href="#builder"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#c9622a] px-6 py-3 font-body text-sm uppercase tracking-[0.2em] text-[#0c0b09] transition-colors hover:bg-[#e07539]"
        >
          Build Your Package
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            { k: "24h", v: "delivery turnaround" },
            { k: "300%", v: "more clicks w/ twilight" },
            { k: "4K", v: "aerial video & stills" },
            { k: "100%", v: "satisfaction guarantee" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-3xl text-[#c9622a]">{s.k}</p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-[#f2ede4]/50">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
