import Image from "next/image";

const TILES = [
  {
    label: "Portraits",
    span: "md:col-span-7",
    ratio: "aspect-[1536/1024]",
    src: "https://xluscvqwnxqmmi0m.public.blob.vercel-storage.com/dowtown-portraits.png",
  },
  {
    label: "Maternity",
    span: "md:col-span-5",
    ratio: "aspect-[1024/1536]",
    src: "https://xluscvqwnxqmmi0m.public.blob.vercel-storage.com/golden-hour.png",
  },
  {
    label: "Prom",
    span: "md:col-span-7",
    ratio: "aspect-[1534/1025]",
    src: "https://xluscvqwnxqmmi0m.public.blob.vercel-storage.com/stidio-light.png",
  },
  {
    label: "Graduation",
    span: "md:col-span-5",
    ratio: "aspect-[1023/1537]",
    src: "https://xluscvqwnxqmmi0m.public.blob.vercel-storage.com/on-location.png",
  },
  {
    label: "Candid Series",
    span: "md:col-span-5",
    ratio: "aspect-[1440/1800]",
    src: "https://xluscvqwnxqmmi0m.public.blob.vercel-storage.com/candid-series.jpg",
  },
  {
    label: "Family Sessions",
    span: "md:col-span-7",
    ratio: "aspect-[1577/997]",
    src: "https://xluscvqwnxqmmi0m.public.blob.vercel-storage.com/family-sessions.png",
  },
];

export function PortfolioGallery() {
  return (
    <section id="work" className="border-t border-white/10 bg-[#111008]">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
              Selected Work
            </p>
            <h2 className="mt-4 font-display text-4xl text-[#f2ede4] md:text-5xl">
              The gallery
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm text-[#f2ede4]/50">
            A selection of recent portrait and mini session frames, shot
            on-location with natural light.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {TILES.map((t) => (
            <div
              key={t.label}
              className={`group relative overflow-hidden rounded-sm border border-white/10 bg-[#1a1812] ${t.span} ${t.ratio}`}
            >
              <Image
                src={t.src}
                alt={t.label}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end p-5">
                <span className="font-display text-lg italic text-[#f2ede4]/60 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
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
