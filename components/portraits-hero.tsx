import { ArrowRight } from "lucide-react";

export function PortraitsHero() {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,98,42,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-6 font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
          Portrait &amp; Mini Session Photography
        </p>
        <h1 className="max-w-3xl font-display text-6xl font-light leading-[0.98] tracking-tight text-[#f2ede4] md:text-7xl">
          Five frames.
          <br />
          <span className="italic text-[#c9622a]">One good light.</span>
        </h1>
        <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-[#f2ede4]/60">
          On-location mini sessions built for real moments — clean edits, no
          filters that change who you are.
        </p>
        <a
          href="#pricing"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#c9622a] px-6 py-3 font-body text-sm uppercase tracking-[0.2em] text-[#0c0b09] transition-colors hover:bg-[#e07539]"
        >
          See Pricing
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
