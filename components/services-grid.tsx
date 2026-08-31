import Link from "next/link";
import { ArrowRight, Camera, Video, Building } from "lucide-react";

const SERVICES = [
  {
    href: "/portraits",
    icon: Camera,
    name: "Portraits & Mini Sessions",
    desc: "On-location mini sessions, $75 for 5 professionally edited images.",
    price: "From $75",
  },
  {
    href: "/drone",
    icon: Video,
    name: "Drone Services",
    desc: "Aerial photo & video coverage for portraits, events, and properties.",
    price: "From $100",
  },
  {
    href: "/real-estate",
    icon: Building,
    name: "Real Estate Media",
    desc: "Interior/exterior photos, video walkthroughs, twilight edits for listings.",
    price: "From $199",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-14 max-w-xl">
        <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
          Services
        </p>
        <h2 className="mt-4 font-display text-4xl text-[#f2ede4] md:text-5xl">
          Choose what you're here for
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex flex-col justify-between rounded-sm border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-[#c9622a]/50"
          >
            <div>
              <s.icon className="h-6 w-6 text-[#c9622a]" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl text-[#f2ede4]">
                {s.name}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[#f2ede4]/60">
                {s.desc}
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="font-display text-lg text-[#c9622a]">
                {s.price}
              </span>
              <span className="flex items-center gap-2 font-body text-xs uppercase tracking-[0.18em] text-[#f2ede4]/70">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
