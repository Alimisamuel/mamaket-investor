const targets = [
  { v: "$1.5M", l: "Fundraising target" },
  { v: "10,000", l: "Vendors to onboard" },
  { v: "100,000", l: "Target transactions" },
  { v: "4 States", l: "Initial footprint" },
];

const proofs = [
  { t: "Platform built & operational", d: "The Mamaket platform is live and functional — not a concept, not a prototype. The infrastructure is in place and ready to scale." },
  { t: "Target markets identified & validated", d: "Florida, Georgia, Texas, and California represent the highest-density college markets in the U.S. — over 20 million students combined." },
  { t: "Vendor demand confirmed", d: "Early outreach has confirmed strong vendor appetite for a dedicated campus marketplace with zero infrastructure overhead." },
  { t: "Experienced leadership team", d: "Deep expertise in technology, marketplace operations, and campus community engagement." },
  { t: "Clear path to revenue", d: "Transaction fees, subscriptions, and premium placements compound into multi-layered revenue growth." },
];

export function Traction() {
  return (
    <section id="traction" className="relative py-28 lg:py-40 px-6 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #FFF9E5 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="eyebrow eyebrow-line text-amber-400">03 · Proof & Traction</div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            The numbers don't lie.
          </h2>
          <p className="mt-5 text-lg text-plum-200 max-w-xl">
            Here is where Mamaket stands — and where it is going.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-plum-700/40 border border-plum-700/60 rounded-2xl overflow-hidden">
          {targets.map((t) => (
            <div key={t.l} className="bg-plum-800/30 backdrop-blur-sm p-8 lg:p-10">
              <div className="font-display text-4xl lg:text-5xl tracking-tight text-amber-400">{t.v}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-plum-200">{t.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-x-20 gap-y-10">
          {proofs.map((p, i) => (
            <div key={p.t} className="flex gap-5 border-t border-plum-700/50 pt-8">
              <div className="shrink-0">
                <span className="font-display text-2xl text-amber-400">0{i + 1}</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary-foreground leading-tight">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-plum-200">{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <a href="#opportunity" className="inline-flex items-center gap-3 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors group">
            Explore the opportunity
            <span className="h-px w-10 bg-current group-hover:w-16 transition-all" />
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
