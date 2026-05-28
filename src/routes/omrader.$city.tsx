import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { getCity } from "@/data/cities";
import { services } from "@/data/services";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/omrader/$city")({
  loader: ({ params }) => {
    const city = getCity(params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ params, loaderData }) => {
    const c = loaderData?.city;
    return {
      meta: [
        { title: c ? `Rengjøring i ${c.name} – CleanAura` : "Område – CleanAura" },
        { name: "description", content: c?.intro ?? "" },
        { property: "og:title", content: c ? `Rengjøring i ${c.name}` : "" },
        { property: "og:url", content: `/omrader/${params.city}` },
      ],
      links: [{ rel: "canonical", href: `/omrader/${params.city}` }],
    };
  },
  component: CityDetail,
  notFoundComponent: () => <div className="py-20 text-center">Området finnes ikke.</div>,
});

function CityDetail() {
  const { city } = Route.useLoaderData() as { city: import("@/data/cities").City };
  return (
    <>
      <PageHero eyebrow="OMRÅDE" title={`Rengjøring i ${city.name}`} subtitle={city.intro} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {city.body.map((p: string, i: number) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-foreground">Bydeler og områder vi dekker i {city.name}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {city.neighborhoods.map((n: string) => (
                  <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1.5 text-sm text-primary">
                    <MapPin className="h-3 w-3" /> {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground">Tjenester tilgjengelig i {city.name}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link key={s.slug} to="/tjenester/$slug" params={{ slug: s.slug }} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-foreground">Få tilbud for {city.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Vi svarer innen 24 timer.</p>
              <div className="mt-4">
                <ContactForm compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTASection title={`Klar for rengjøring i ${city.name}?`} />
    </>
  );
}
