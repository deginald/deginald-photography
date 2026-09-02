export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
            About
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#f2ede4] md:text-5xl">
            Behind the camera
          </h2>
        </div>

        <div className="md:col-span-8">
          <p className="font-display text-2xl leading-relaxed text-[#f2ede4]/90 md:text-3xl">
            I'm building toward great photography one session at a time
            technical, organized, and obsessed with getting the light right
            before I ever ask you to move.
          </p>
          <p className="mt-8 max-w-2xl font-body text-base leading-relaxed text-[#f2ede4]/60">
            Every session is shot and edited with a simple rule: the people
            in front of my lens stay exactly who they are. No reshaping
            bodies, no altering features just honest portraits with clean,
            confident editing. Based in Surf City, NC, available to
            travel for the right shoot on the ground or in the air.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              { k: "Portraits", v: "mini sessions, $75" },
              { k: "Drone", v: "aerial photo & video" },
              { k: "Real Estate", v: "listing media" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-2xl text-[#c9622a]">{s.k}</p>
                <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-[#f2ede4]/50">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
