import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/omrader/")({
  component: AreasIndex,
  head: () => ({
    meta: [
      { title: "Områder vi dekker – CleanAura rengjøring" },
      { name: "description", content: "CleanAura tilbyr rengjøring i Oslo, Bærum, Asker, Lillestrøm og Drammen. Se ditt område og bestill profesjonell renhold." },
      { property: "og:title", content: "Områder – CleanAura" },
      { property: "og:url", content: "/omrader" },
    ],
    links: [{ rel: "canonical", href: "/omrader" }],
  }),
});

function AreasIndex() {
  return (
    <>
      <PageHero eyebrow="OMRÅDER" title="Vi er der du er" subtitle="CleanAura leverer rengjøring i hele Stor-Oslo og omegn. Velg ditt område for å se lokale tilbud." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <Link key={c.slug} to="/omrader/$city" params={{ city: c.slug }} className="group rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-lg">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-foreground">Rengjøring i {c.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{c.intro}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Se {c.name} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
