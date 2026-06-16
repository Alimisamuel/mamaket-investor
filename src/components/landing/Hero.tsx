export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-plum-100)_0%,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,_rgba(255,205,41,0.18)_0%,_transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-plum-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-plum-500) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div
          className="eyebrow eyebrow-line animate-soft-pulse animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
          Invitation Only · Operation SDC
        </div>

        <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-5xl xl:text-[5.5rem] leading-[1.02] text-balance text-primary">
          <span
            className="block animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            The future of cultural commerce
          </span>
          <span
            className="block animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            is being forged{" "}
            <em className="not-italic text-plum-600">right now,</em>
            <br />
          </span>
          <p className="lg:text-5xl xl:text-[3.0rem] leading-[65px]">
            the investors who seize this opportunity will be the power brokers
            of a new global market.
          </p>
          <span
            className="block animate-fade-up text-3xl sm:text-4xl lg:text-5xl mt-6 text-muted-foreground font-normal italic"
            style={{ animationDelay: "520ms" }}
          ></span>
        </h1>

        <p
          className="mt-10 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground text-pretty animate-fade-up"
          style={{ animationDelay: "720ms" }}
        >
         You are being invited to shape the first marketplace infrastructure that connects immigrants, multicultural families and culture enthusiasts to the cultures they love. Your investment will scale the ecosystem for the curation, access and discovery of cultural products and services in the United States and beyond.
        </p>

        <div
          className="mt-16 flex flex-col items-center gap-3 animate-fade-up"
          style={{ animationDelay: "920ms" }}
        >
          <a
            href="#problem"
            className="group inline-flex flex-col items-center text-xs uppercase tracking-[0.28em] text-plum-600 hover:text-primary transition-colors"
          >
            Scroll to learn more
            <span className="mt-3 h-10 w-px bg-gradient-to-b from-plum-300 to-transparent" />
            <span className="-mt-2 pl-1 animate-bounce-down" aria-hidden>
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* corner badges */}
      <div className="absolute bottom-8 left-6 lg:left-10 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 hidden md:block">
        Mamaket Global, Inc.
      </div>
      <div className="absolute bottom-8 right-7 lg:right-10 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 hidden md:block">
        Seamless · Sophisticated · Intuitive
      </div>
    </section>
  );
}
