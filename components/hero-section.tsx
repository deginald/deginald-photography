import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,98,42,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(201,98,42,0.10),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,9,0)_0%,rgba(12,11,9,0.9)_100%)]" />

      {/* Placeholder portrait block — swap for real photography */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-[0.14]">
        <div className="h-[140%] w-[140%] bg-[repeating-linear-gradient(115deg,#f2ede4_0px,#f2ede4_1px,transparent_1px,transparent_90px)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="mb-6 font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
          Portrait, Drone &amp; Real Estate Photography
        </p>
        <h1 className="font-display text-[13vw] font-light leading-[0.92] tracking-tight text-[#f2ede4] md:text-[7.5rem]">
          Five frames.
          <br />
          <span className="italic text-[#c9622a]">One good light.</span>
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">
          <p className="max-w-md font-body text-base text-[#f2ede4]/70">
            Portraits, aerial coverage, and real estate media, clean edits,
            no filters that change who you are. Booking now for the season.
          </p>
          <a
            href="#services"
            className="group flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-[#f2ede4]"
          >
            Explore services
            <ArrowRight className="h-4 w-4 text-[#c9622a] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
