import Image from "next/image";


export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          {/* <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_0_4px_rgba(255,205,41,0.18)]" /> */}
     <Image src="/logo.svg" alt="Mamaket_logo" width={130} height={50} />
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.24em] text-muted-foreground ml-2 pl-2 border-l border-border">Founding Council</span>
        </a>
        <a
          href="#apply"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-plum-700 transition-colors"
        >
          <span className="hidden sm:inline">Apply to Join the Founding Circle</span>
          <span className="sm:hidden">Apply</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </nav>
  );
}
