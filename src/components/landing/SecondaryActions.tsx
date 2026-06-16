"use client"

import { useState } from "react";

export function SecondaryActions() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="connect" className="relative py-28 lg:py-36 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="eyebrow eyebrow-line">Before You Apply</div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance text-primary">
            Want to learn more first?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Two ways to get acquainted with Mamaket before joining the Founding Council.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {/* Request Deck */}
          <div className="relative p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-plum-50 to-background border border-plum-100 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-plum-700">01 · Investor Deck</span>
              <span className="text-amber-600 text-xl" aria-hidden>↗</span>
            </div>
            <h3 className="mt-6 font-display text-3xl text-primary leading-tight">
              Request the full deck.
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
              Receive the complete Mamaket investor deck — financials, market analysis, and the full Operation SDC strategy — delivered to your inbox.
            </p>

            {sent ? (
              <div className="mt-8 p-4 rounded-lg bg-background border border-plum-200 text-sm text-primary">
                ✓ Deck on its way to <span className="font-medium">{email}</span>. Check your inbox shortly.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-8 flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-plum-600/40 focus:border-plum-600 transition"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-plum-700 transition-colors shadow-md whitespace-nowrap"
                >
                  Send Deck
                  <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </div>

          {/* Schedule chat */}
          <div className="relative p-10 lg:p-12 rounded-2xl bg-primary text-primary-foreground overflow-hidden flex flex-col">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" aria-hidden />
            <div className="relative flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-amber-400">02 · 1:1 With the CEO</span>
              <span className="text-amber-400 text-xl" aria-hidden>↗</span>
            </div>
            <h3 className="relative mt-6 font-display text-3xl leading-tight">
              Schedule a 30-min chat with the CEO.
            </h3>
            <p className="relative mt-4 text-sm text-plum-200 leading-relaxed flex-1">
              Have a private conversation with Newton-Ray Ukwuoma. Ask anything — strategy, traction, terms, vision.
            </p>

            <a
              href="https://scheduler.zoom.us/mamaket/30-mins-with-newton-ray-ukwuoma-ceo-of-mamaket"
              data-zoom-scheduler
              target="_blank"
              className="relative mt-8 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-amber-500 text-plum-950 font-medium hover:bg-amber-400 transition-colors shadow-lg"
            >
              Book a 30-minute call
              <span aria-hidden>→</span>
            </a>
            <p className="relative mt-3 text-[11px] uppercase tracking-[0.2em] text-plum-300">
              Zoom scheduler · Confidential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
