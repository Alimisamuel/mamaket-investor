const metrics = [
  { value: "20M+", label: "College students in target states" },
  { value: "45M+", label: "Immigrant population" },
  { value: "$550B+", label: "Cultural commerce market by 2034" },
  { value: "0", label: "Dominant platform exists today" },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-28 lg:pb-40 lg:pt-20 px-6">
      <div className="mx-auto max-w-7xl ">
        <div className="mb-20 grid lg:grid-cols-1 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          <div className="bg-plum-50/40 p-10 lg:p-14">
            <div className="text-xs uppercase tracking-[0.28em] text-plum-700 font-semibold">
              About Mamaket
            </div>
            <p className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-800">
              Mamaket is a US-based marketplace infrastructure for cultural
              commerce. We connect immigrants, multicultural families,
              travelers, and culture enthusiasts to the cultures they love,
              facilitating an ecosystem for the curation, access, and discovery
              of culturally authentic products and services, while empowering
              the small businesses that serve diverse communities.
              <br />
              <br />
              Millions of people relocate every year, often leaving behind the
              products, traditions, experiences, and sense of belonging that
              made them feel at home. This cultural disconnection affects
              wellbeing, identity, and community engagement. Mamaket was created
              to bridge that gap, making cultural products and services
              accessible no matter where people live.
              <br />
              <br />
              Our platform enables users to shop for authentic foods, fashion,
              beauty products, cultural services, and experiences from around
              the world. At the same time, we provide small businesses with
              digital tools and access to customers who value cultural
              authenticity and heritage.
            </p>


{/* Our Mission */}
            <div className="flex flex-col lg:flex-row mt-10 rounded-2xl overflow-hidden">
               <div className="bg-background p-10 lg:p-14 relative">
            <div
              className="absolute top-0 right-0 h-24 w-24 bg-amber-100/60 rounded-bl-[80px]"
              aria-hidden
            />
            <div className="text-xs uppercase tracking-[0.28em] text-amber-700 font-semibold relative">
              Our Mission
            </div>
           
            <ul className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-800">
              To build a seamless, sophisticated, and intuitive commerce infrastructure that bridges global cultures and local economies.
            </ul>
          
          </div>
               <div className="bg-background p-10 lg:p-14 relative">
            <div
              className="absolute top-0 right-0 h-24 w-24 bg-amber-100/60 rounded-bl-[80px]"
              aria-hidden
            />
            <div className="text-xs uppercase tracking-[0.28em] text-amber-700 font-semibold relative">
            Our Vision
            </div>
          
            <ul className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-800">
            To make global cultures accessible to everyone in their own language and taste, allowing people to shop according to their cultural cravings.
            </ul>
           
          </div>
            </div>
          </div>

         
        </div>
        <div className="max-w-4xl">
          <div className="eyebrow eyebrow-line">02 · The Opportunity</div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-primary">
            There is a <span className="text-plum-600">$550 billion</span>{" "}
            market that nobody has claimed.
            <span className="block italic font-normal text-muted-foreground mt-2">
              Until now.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          <div className="bg-plum-50/40 p-10 lg:p-14">
            <div className="text-xs uppercase tracking-[0.28em] text-plum-700 font-semibold">
              The Problem
            </div>
            <ul className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-800">
              <li className="flex gap-4">
                <span className="text-amber-600 mt-1">—</span>
                Most immigrants — especially international students — struggle
                to discover cultural items they rely on to feel connected to
                their heritage.
              </li>
              <li className="flex gap-4">
                <span className="text-amber-600 mt-1">—</span>
                About{" "}
                <span className="font-semibold text-primary">
                  80% of cultural transactions
                </span>{" "}
                happen on fragmented channels: word of mouth, social media, cash
                in hand.
              </li>
              <li className="flex gap-4">
                <span className="text-amber-600 mt-1">—</span>
                Vendors struggle to reach students. Students struggle to find
                vendors.
              </li>
              <li className="flex gap-4">
                <span className="text-amber-600 mt-1">—</span>
                Prices remain inflated due to scarce competition in most
                regions.
              </li>
            </ul>
            <p className="mt-10 text-sm italic text-plum-700 border-l-2 border-plum-300 pl-4">
              The result: a massive, underserved market with no dominant player.
            </p>
          </div>

          <div className="bg-background p-10 lg:p-14 relative">
            <div
              className="absolute top-0 right-0 h-24 w-24 bg-amber-100/60 rounded-bl-[80px]"
              aria-hidden
            />
            <div className="text-xs uppercase tracking-[0.28em] text-amber-700 font-semibold relative">
              The Solution
            </div>
            <p className="mt-8 text-lg font-display text-primary leading-snug">
              Mamaket is a cultural, campus-focused commerce marketplace
              connecting vendors and students.
            </p>
            <ul className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-800">
              <li className="flex gap-4">
                <span className="text-plum-600 mt-1">✓</span>
                Vendors get instant access to a captive, high-intent audience
                with strong repeat purchase behavior.
              </li>
              <li className="flex gap-4">
                <span className="text-plum-600 mt-1">✓</span>
                Students get a curated, reliable cultural marketplace — a piece
                of home.
              </li>
              <li className="flex gap-4">
                <span className="text-plum-600 mt-1">✓</span>
                Mamaket earns a transaction fee, an annual vendor subscription,
                and a user membership fee.
              </li>
            </ul>
            <div className="mt-10 flex gap-2 flex-wrap">
              {["Simple", "Scalable", "Inevitable"].map((w) => (
                <span
                  key={w}
                  className="text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-primary text-primary-foreground"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background p-8 lg:p-10">
              <div className="font-display text-4xl lg:text-5xl text-primary tracking-tight">
                {m.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#traction"
            className="inline-flex items-center gap-3 text-sm font-medium text-primary hover:text-plum-600 transition-colors group"
          >
            See the traction
            <span className="h-px w-10 bg-current group-hover:w-16 transition-all" />
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
