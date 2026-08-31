const TILES = [
  { label: "Aerial Portrait", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { label: "Property Flyover", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { label: "Event Overhead", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { label: "Landscape Wide", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { label: "4K Video Still", span: "md:col-span-6", ratio: "aspect-square" },
  { label: "Golden Hour Aerial", span: "md:col-span-6", ratio: "aspect-square" },
];

export function DronePortfolio() {
  return (
    <section className="border-t border-white/10 bg-[#111008]">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
              Aerial Work
            </p>
            <h2 className="mt-4 font-display text-4xl text-[#f2ede4] md:text-5xl">
              From above
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm text-[#f2ede4]/50">
            Placeholder grid — drop in real flight footage and stills once
            shoots are delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {TILES.map((t, i) => (
            <div
              key={t.label}
              className={`group relative overflow-hidden rounded-sm border border-white/10 ${t.span} ${t.ratio}`}
            >
              <div
                className="absolute inset-0 bg-[#1a1812] transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    i % 2 === 0
                      ? "linear-gradient(135deg, #241f16 0%, #0c0b09 100%)"
                      : "linear-gradient(135deg, #2a1c12 0%, #0c0b09 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-5">
                <span className="font-display text-lg italic text-[#f2ede4]/60">
                  {t.label}
                </span>
              </div>
              <div className="absolute inset-0 border border-white/0 transition-colors group-hover:border-[#c9622a]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
