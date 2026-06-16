import Image from "next/image";
import img1 from "../../../public/team/newton.webp"
import img2 from "../../../public/team/samani.webp"
import img3 from "../../../public/team/amar.webp"
import img4 from "../../../public/team/nadia.webp"
import img5 from "../../../public/team/philip.webp"


const team = [
  {
    initials: "NU",
    name: "Newton-Ray Ukwuoma",
    title: "Founder, CEO/President",
    bio: "As the founder and chief executive leading Mamaket Global Inc.’s mission to make immigrant culture goods and services discoverable and scalable through a technology marketplace, Newton-Ray brings execution driven leadership informed by multidisciplinary training (data science + communication) and a disciplined, mission focused operating style shaped by service as a U.S. Navy Reserve Engineer, translating vision into product delivery, platform reliability, company-building momentum, founder-led velocity, product-and-platform execution, data-driven decision making, and resilient leadership under pressure.",
    img:img1
  },
    {
    initials: "JS",
    name: "Jeannice Fairrer Samani",
    title: " PhD, MBA, CSM: Chief Innovation Architect (CIA) / AI Governance & Digital Risk Strategist",
    bio: "Jeannice operates at the intersection of AI, governance, and enterprise systems design, advising on responsible AI integration, human in the loop accountability, decision architecture, and long-term organizational resilience. She helps ensure Mamaket scales innovation without creating unmanaged risk, bringing board-level oversight discipline as AI and automation become core to operations and growth strategy.",
    img:img2
  },
  {
    initials: "AA",
    name: "Amar Amarnath",
    title: "Chief Technology Officer (CTO)",
    bio: "Amar is a technology and data leader focused on building revenue-generating software/data products, leading AI initiatives, and scaling international teams. He brings deep capability in models, simulators, predictive insights, and cloud productization, turning “data to action” and transforming operations in ways that improve customer experience and margin outcomes. He is the man for platform scalability, AI/data product strategy, cloud commercialization (“idea → customer delight”), and performance-driven engineering execution.",
    img:img3
  },

  {
    initials: "ND",
    name: "Nadia Daley, Esq..",
    title: "CIPP/US, CIPP/E, LAIG: Chief Legal Officer (CLO)",
    bio: "Nadia is a strategic legal leader working at the intersection of law, technology, privacy, and compliance, designing legal frameworks that scale with growth. She strengthens Mamaket’s investor readiness through privacy/compliance maturity, commercial contracting rigor, vendor/thirdparty risk controls, and operationally efficient legal governance. We have her for enterprise-grade privacy/compliance posture, scalable contracting and vendor risk management, and governance infrastructure that reduces regulatory and operational friction.",
    img:img4
  },
  {
    initials: "ND",
    name: "Philip Cheshire",
    title: "Adviser (Technology Leadership & Execution)",
    bio: "Philip is a results-driven technology executive known for building high-accountability teams, recruiting and developing top talent, and aligning technology roadmaps to business strategy. He contributes enterprise, web, and cloud architecture leadership with a “business advocate” lens, ensuring systems remain extensible, scalable, and aligned to customer needs and market evolution. He brings leadership depth, team-building and operational rigor, strategic roadmap alignment, and scalable architecture that supports profitable growth.",
    img:img5
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
                <div className="shrink-0 relative h-14 w-14 rounded-full overflow-hidden bg-plum-50 border border-plum-100 grid place-items-center font-display text-lg text-plum-700" >
                <Image src={m.img} alt={m.initials} width={500} height={200} className="object-cover w-14 h-14 relative"/>
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
            Apply to Join the Founding Council
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
