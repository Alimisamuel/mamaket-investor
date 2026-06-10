const rows = [
  { c: "Technology & Platform", p: 35, a: "$525,000", u: "Dev, infrastructure, mobile" },
  { c: "Sales & Marketing", p: 25, a: "$375,000", u: "Investor & vendor outreach" },
  { c: "Operations & Staffing", p: 20, a: "$300,000", u: "Team, operating partner" },
  { c: "Market Expansion", p: 12, a: "$180,000", u: "State launches, events" },
  { c: "Working Capital", p: 8, a: "$120,000", u: "Reserve & bridge support" },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="relative py-28 lg:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="eyebrow eyebrow-line">04 · The Round</div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-primary">
              A $1.5 million round.
              <span className="block italic font-normal text-muted-foreground mt-2">A limited number of seats.</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground max-w-md">
              This is not a public offering. This is a private invitation to the people who will shape Mamaket's future.
            </p>

            <div className="mt-12 p-8 bg-gradient-to-br from-plum-50 to-amber-50 rounded-2xl border border-plum-100">
              <div className="text-xs uppercase tracking-[0.24em] text-plum-700 font-semibold">Total Round Size</div>
              <div className="mt-3 font-display text-6xl lg:text-7xl text-primary tracking-tight">$1,500,000</div>
              <dl className="mt-8 space-y-4 text-sm">
                {[
                  ["Round Type", "Seed / Early-Stage Equity"],
                  ["Minimum Investment", "To be discussed"],
                  ["Supplemental Debt", "$50,000 – $100,000 bridge"],
                  ["Availability", "Limited — Founding Circle only"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-t border-plum-200/60 pt-3">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-primary font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.24em] text-plum-600 font-semibold">Use of Funds</div>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {rows.map((r) => (
                <div key={r.c} className="py-6 grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-12 sm:col-span-5">
                    <div className="font-display text-lg text-primary">{r.c}</div>
                    <div className="text-xs text-muted-foreground mt-1">{r.u}</div>
                  </div>
                  <div className="col-span-8 sm:col-span-5">
                    <div className="h-1.5 w-full bg-plum-50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-plum-600 to-amber-500 rounded-full transition-all"
                        style={{ width: `${r.p * 2.5}%` }}
                      />
                    </div>
                  </div>
                  <div className="col-span-4 sm:col-span-2 text-right">
                    <div className="font-display text-xl text-primary">{r.p}%</div>
                    <div className="text-xs text-muted-foreground">{r.a}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <a href="#team" className="inline-flex items-center gap-3 text-sm font-medium text-primary hover:text-plum-600 transition-colors group">
                Meet the team
                <span className="h-px w-10 bg-current group-hover:w-16 transition-all" />
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
