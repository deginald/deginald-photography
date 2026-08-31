const WORDS = [
  "MINI SESSIONS",
  "PORTRAITS",
  "DRONE SERVICES",
  "ON LOCATION",
  "FIVE EDITED IMAGES",
  "AERIAL COVERAGE",
  "BOOK YOUR SPOT",
];

export function MarqueeStrip() {
  const row = [...WORDS, ...WORDS];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#c9622a] py-3">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span
            key={i}
            className="font-display text-sm uppercase tracking-[0.25em] text-[#0c0b09]"
          >
            {w} <span className="mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
