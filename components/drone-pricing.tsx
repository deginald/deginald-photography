import { Check } from "lucide-react";

const PACKAGES = [
  {
    name: "Aerial Stills",
    price: "$100",
    tagline: "Photos only",
    features: [
      "Up to 15 edited aerial photos",
      "One location, one flight",
      "Delivered within 5–7 days",
      "Great as a standalone add-on",
    ],
    featured: false,
  },
  {
    name: "Aerial Photo + Video",
    price: "$175",
    tagline: "Most requested",
    features: [
      "Edited aerial photos + 4K video clip",
      "One location, extended flight time",
      "Perfect for events & properties",
      "Delivered within 5–7 days",
    ],
    featured: true,
  },
  {
    name: "Session Add-On",
    price: "+$75",
    tagline: "Pair with any portrait session",
    features: [
      "Add aerial coverage to a booked shoot",
      "Same-day flight, same location",
      "3–5 aerial images included",
      "No separate travel fee",
    ],
    featured: false,
  },
];

export function DronePricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-14 max-w-xl">
        <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
          Drone Packages &amp; Pricing
        </p>
        <h2 className="mt-4 font-display text-4xl text-[#f2ede4] md:text-5xl">
          Take it to the sky
        </h2>
        <p className="mt-4 font-body text-sm text-[#f2ede4]/50">
          Final quote depends on location, flight time, and deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            className={`flex flex-col rounded-sm border p-8 ${
              pkg.featured
                ? "border-[#c9622a] bg-[#c9622a]/[0.06]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            {pkg.featured && (
              <span className="mb-4 inline-block w-fit rounded-full bg-[#c9622a] px-3 py-1 font-body text-[10px] uppercase tracking-[0.2em] text-[#0c0b09]">
                Most Popular
              </span>
            )}
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#f2ede4]/50">
              {pkg.tagline}
            </p>
            <h3 className="mt-3 font-display text-2xl text-[#f2ede4]">
              {pkg.name}
            </h3>
            <p className="mt-2 font-display text-4xl text-[#c9622a]">
              {pkg.price}
            </p>

            <ul className="mt-8 flex flex-1 flex-col gap-3">
              {pkg.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 font-body text-sm text-[#f2ede4]/70"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c9622a]" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className={`mt-8 rounded-full py-3 text-center font-body text-sm uppercase tracking-[0.18em] transition-colors ${
                pkg.featured
                  ? "bg-[#c9622a] text-[#0c0b09] hover:bg-[#e07539]"
                  : "border border-white/20 text-[#f2ede4] hover:border-[#c9622a] hover:text-[#c9622a]"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
