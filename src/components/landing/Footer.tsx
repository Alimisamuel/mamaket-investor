export function Footer() {
  return (
    <footer className="py-12 px-6 bg-plum-950 text-plum-300">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          <span className="font-display text-base text-primary-foreground">Mamaket Global, Inc.</span>
        </div>
        <div className="uppercase tracking-[0.28em] text-plum-400">Confidential · For Authorized Distribution Only</div>
        <div className="text-plum-400">© 2026 Mamaket Global, Inc.</div>
      </div>
    </footer>
  );
}
