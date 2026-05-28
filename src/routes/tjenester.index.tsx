import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/tjenester/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Våre tjenester – CleanAura" },
      { name: "description", content: "Komplett oversikt over rengjøringstjenestene fra CleanAura: hjemmerengjøring, flyttevask, kontorvask, vindusvask, byggvask, Airbnb-vask m.m." },
      { property: "og:title", content: "Tjenester – CleanAura" },
      { property: "og:url", content: "/tjenester" },
    ],
    links: [{ rel: "canonical", href: "/tjenester" }],
  }),
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="VÅRE TJENESTER"
        title="Komplett rengjøring for hjem og bedrift"
        subtitle="Fra ukentlig hjemmerengjøring til garantert godkjent flyttevask – CleanAura har et team for hver oppgave."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to="/tjenester/$slug" params={{ slug: s.slug }} className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-lg">
              <s.icon className="h-10 w-10 text-primary" strokeWidth={1.75} />
              <h2 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Les mer <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
