"use client";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { LiaCoinsSolid } from "react-icons/lia";
import { IoTimeOutline } from "react-icons/io5";
import { BiLayer } from "react-icons/bi";
import { IoIosCheckmarkCircleOutline, IoMdTrendingUp } from "react-icons/io";
import { MdOutlineTrendingUp } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { year: "2024", value: 500 },
  { year: "2025", value: 2200 },
  { year: "2026", value: 5500 },
  { year: "2027", value: 10000 },
];

const rows = [
  {
    c: "Technology & Platform",
    p: 35,
    a: "$525,000",
    u: "Dev, infrastructure, mobile",
  },
  {
    c: "Sales & Marketing",
    p: 25,
    a: "$375,000",
    u: "Investor & vendor outreach",
  },
  {
    c: "Operations & Staffing",
    p: 20,
    a: "$300,000",
    u: "Team, operating partner",
  },
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
              <span className="block italic font-normal text-muted-foreground mt-2">
                A limited number of seats.
              </span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground max-w-md">
              This is not a public offering. This is a private invitation to the
              people who will shape Mamaket's future.
            </p>

            <div className="mt-12 p-8 bg-gradient-to-br from-plum-50 to-amber-50 rounded-2xl border border-plum-100">
              <div className="text-xs uppercase tracking-[0.24em] text-plum-700 font-semibold">
                Total Round Size
              </div>
              <div className="mt-3 font-display text-6xl lg:text-7xl text-primary tracking-tight">
                $1,500,000
              </div>
              <dl className="mt-8 space-y-4 text-sm">
                {[
                  ["Round Type", "Seed / Early-Stage Equity"],
                  ["Minimum Investment", "To be discussed"],
                  ["Supplemental Debt", "$50,000 – $100,000 bridge"],
                  ["Availability", "Limited — Founding Circle only"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-6 border-t border-plum-200/60 pt-3"
                  >
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-primary font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.24em] text-plum-600 font-semibold">
              Use of Funds
            </div>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {rows.map((r) => (
                <div
                  key={r.c}
                  className="py-6 grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-12 sm:col-span-5">
                    <div className="font-display text-lg text-primary">
                      {r.c}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {r.u}
                    </div>
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
                    <div className="font-display text-xl text-primary">
                      {r.p}%
                    </div>
                    <div className="text-xs text-muted-foreground">{r.a}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex mt-10 items-center gap-3 flex-col md:flex-row">
              <div className="h-[200px] w-full py-3 border rounded-[10px] flex-1 flex flex-col justify-center items-center">
                <div className="w-10 h-10 border rounded-full grid place-content-center">
                  <LiaCoinsSolid className="text-[#7B408C] text-[20px]" />
                </div>
                <div className="mt-3 text-center">
                  <h1 className="text-[18px] font-bold">$10M</h1>
                  <p className="text-[13px] uppercase font-semibold">
                    Revenue Target
                  </p>
                  <p className="mt-1 text-[12px] text-gray-500">
                    By Year 3 operations
                  </p>
                </div>
              </div>
              <div className="h-[200px] w-full py-3 border rounded-[10px] flex-1 flex flex-col justify-center items-center">
                <div className="w-10 h-10 border rounded-full grid place-content-center">
                  <IoTimeOutline className="text-[#7B408C] text-[20px]" />
                </div>
                <div className="mt-3 text-center">
                  <h1 className="text-[18px] font-bold">18 mo</h1>
                  <p className="text-[13px] uppercase font-semibold">
                    Deployment
                  </p>
                  <p className="mt-1 text-[12px] text-gray-500">
                    To cash-deposit state
                  </p>
                </div>
              </div>
              <div className="h-[200px] w-full py-3 border rounded-[10px] flex-1 flex flex-col justify-center items-center">
                <div className="w-10 h-10 border rounded-full grid place-content-center">
                  <BiLayer className="text-[#7B408C] text-[20px]" />
                </div>
                <div className="mt-3 text-center">
                  <h1 className="text-[18px] font-bold">$1.5M</h1>
                  <p className="text-[13px] uppercase font-semibold">
                    Total Raise
                  </p>
                  <p className="mt-1 text-[12px] text-gray-500">
                    First & final external round
                  </p>
                </div>
              </div>
              <div className="h-[200px] w-full py-3 border rounded-[10px] flex-1 flex flex-col justify-center items-center">
                <div className="w-10 h-10 border rounded-full grid place-content-center">
                  <IoMdTrendingUp className="text-[#7B408C] text-[20px]" />
                </div>
                <div className="mt-3 text-center">
                  <h1 className="text-[18px] font-bold">Monthly 14</h1>
                  <p className="text-[13px] uppercase font-semibold">
                    Breakeven
                  </p>
                  <p className="mt-1 text-[12px] text-gray-500">
                    Operational sustainability
                  </p>
                </div>
              </div>
            </div>

            {/* REVENUE CHART */}
            <div className=" rounded-[10px] mt-5 bg-white p-4 py-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="md:text-[18px] text-[16px]  font-bold">Revenue Projections</h1>
                  <p className="md:text-[13px] text-[12px] text-gray-500">
                    3 year growth model based on current beta metrics
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-x-1 text-[13px] text-[#7B408C]">
                  <MdOutlineTrendingUp />
                  <p>Growth Assumptions</p>
                </div>
              </div>

              <div className="mt-5 flex flex-col md:flex-row gap-5 items-center gap-x-4">
                <div className="flex-1 w-full">
                  <div className="w-full h-[200px] rounded-[10px] border bg-white p-3 -pl-5">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={data}
                        margin={{
                          top: 0,
                          right: 0,
                          left: -34,
                          bottom: 0,
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="growthGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#7B408C"
                              stopOpacity={0.85}
                            />
                            <stop
                              offset="100%"
                              stopColor="#7B408C"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>

                        <CartesianGrid
                          strokeDasharray="4 6"
                          stroke="#E5E7EB"
                          vertical={false}
                        />

                        <XAxis
                          dataKey="year"
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 8,
                            fill: "#2E1834",
                          }}
                        />

                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 8,
                            fill: "#2E1834",
                          }}
                          domain={[0, 12000]}
                          ticks={[0, 3000, 6000, 9000, 12000]}
                        />

                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#2E1834"
                          strokeWidth={1}
                          fill="url(#growthGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="flex-1 w-full ">
                  <div className="border rounded-[10px] overflow-hidden ">
                    <div className="text-[11px] flex gap-x-2 font-semibold p-2 ">
                      <p className="flex-1">PERIOD</p>
                      <p className="w-[30%]">ANN. EBITDA</p>
                      <p>CUMULATIVE</p>
                    </div>
                    <div className="text-[11px] p-2 bg-gray-100 flex gap-x-2 ">
                      <p className="flex-1">Year 1 (2024)</p>
                      <p className="w-[30%]">$480K</p>
                      <p>$480K</p>
                    </div>
                    <div className="text-[11px] p-2 flex gap-x-2 ">
                      <p className="flex-1">Year 2 (2025)</p>
                      <p className="w-[30%]">$2.4M</p>
                      <p>$2.88M</p>
                    </div>
                    <div className="text-[11px] p-2 bg-gray-100 flex gap-x-2 ">
                      <p className="flex-1">Year 3 (2026)</p>
                      <p className="w-[30%]">$5.76M</p>
                      <p>$8.64M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a
                href="#team"
                className="inline-flex items-center gap-3 text-sm font-medium text-primary hover:text-plum-600 transition-colors group"
              >
                Meet the team
                <span className="h-px w-10 bg-current group-hover:w-16 transition-all" />
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex justify-between">
            <div>
              <h1 className="md:text-[25px] text-[18px] font-bold">Line-Item Deployment</h1>
              <p className="mt-1 text-gray-500 text-[13px] md:text-[12px]">
                Granular breakdown of capital utilization across the 18-month
                roadmap
              </p>
            </div>

            <div className="md:flex items-center gap-x-4 hidden ">
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="text-[13px]">Fully Audited</span>
              </div>
              <div className="flex items-center gap-x-2">
                <GoShieldCheck />
                <span className="text-[13px]">Secured Allocation</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2 ">
           {
            lineitems?.map((item, idx)=>(
               <div key={idx} className="bg-white border rounded-[10px] p-3 py-5 flex-1">
              <div className="flex justify-between items-center w-full">
                <div className="border border-[#7B408C] px-2 rounded-full">
                  <p className="text-[10px] font-medium text-[#7B408C]">
                  {item.category}
                  </p>
                </div>
                <p className="text-[12px] font-medium">{item.perc}% </p>
              </div>

              <div className="mt-10">
                <h1 className="font-black text-[20px]">${item.amount}</h1>
                <p className="text-[13px] mt-2 text-gray-500">
                 {item.use}
                </p>
              </div>
            </div>
            ))
           }
          </div>
        </div>
      </div>
    </section>
  );
}


const lineitems = [
  {
    category:"TECHNOLOGY & PLATFORM",
    perc:"35",
    amount:"525,000",
    use:"Platform dev, mobile app, Mamapurse card, Cultural Intelligence Engine, Mars dashboard, delivery app, AI tools, infrastructure"
  },
  {
    category:"Sales & Marketing",
    perc:"25",
    amount:"375,000",
    use:"Vendor acquisition campaigns, campus ambassador programs, brand building, social media"
  },
  {
    category:"Operations & Staffing",
    perc:"20",
    amount:"300,000",
    use:"Team expansion, operating partners per state, campus operations, weekly webinars"
  },
  {
    category:"Market Expansion",
    perc:"12",
    amount:"180,000",
    use:"State-by-state launch events, campus partnerships, chamber of commerce outreach, local marketing"
  },
  {
    category:"Working Capital",
    perc:"8",
    amount:"120,000",
    use:"Operational buffer, contingency fund, bridge financing support, logistics setup costs"
  },
]