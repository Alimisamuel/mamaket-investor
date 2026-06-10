const team = [
  {
    initials: "NU",
    name: "Newton-Ray Ukwuoma",
    title: "Founder & Chief Executive Officer",
    bio: "Visionary leader with deep expertise in marketplace technology and campus community engagement. Responsible for overall strategy, investor relations, and company direction.",
  },
  {
    initials: "AA",
    name: "Amar Amarnath",
    title: "Chief Technology Officer",
    bio: "Operations architect with a track record of scaling marketplace platforms from zero to thousands of active vendors. Leads vendor acquisition, platform operations, and market expansion.",
  },
  {
    initials: "JS",
    name: "Jeannice Samani, PhD",
    title: "Chief Innovation Architect",
    bio: "Full-stack technology leader with experience building mobile-first consumer platforms at scale. Responsible for platform architecture, product development, and technical infrastructure.",
  },
  {
    initials: "ND",
    name: "Nadia Daley-Blake",
    title: "Chief Legal Officer",
    bio: "Senior operator with deep networks across target markets. Leads on-the-ground vendor acquisition, campus partnerships, and regional market activation.",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-28 lg:py-40 px-6 bg-muted/40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="eyebrow eyebrow-line">05 · The Council</div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-primary">
            The people behind the platform.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Mamaket is built by operators who understand both technology and the communities it serves. We are not theorists. We are builders.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {team.map((m) => (
            <article key={m.name} className="bg-background p-8 lg:p-10 relative group">
              <div className="absolute top-0 left-0 h-1 w-16 bg-gradient-to-r from-plum-600 to-amber-500 group-hover:w-full transition-all duration-500" />
              <div className="flex items-start gap-5">
                <div className="shrink-0 h-14 w-14 rounded-full bg-plum-50 border border-plum-100 grid place-items-center font-display text-lg text-plum-700">
                  {m.initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-primary leading-tight">{m.name}</h3>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-amber-700 font-semibold">{m.title}</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-ink-800 leading-relaxed">{m.bio}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-medium tracking-wide hover:bg-plum-700 transition-all shadow-[0_20px_50px_-20px_rgba(46,24,52,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(46,24,52,0.6)] hover:-translate-y-0.5"
          >
            Apply to Join the Founding Circle
            <span aria-hidden>→</span>
          </a>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Limited seats · Applications reviewed by invitation only
          </p>
        </div>
      </div>
    </section>
  );
}
