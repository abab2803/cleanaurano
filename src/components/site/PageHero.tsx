export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b border-border bg-primary-soft/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {eyebrow && <p className="text-sm font-semibold tracking-wider text-primary">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
