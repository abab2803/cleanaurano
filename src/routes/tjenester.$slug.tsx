import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { getService, services } from "@/data/services";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQList } from "@/components/site/FAQList";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/tjenester/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: [
        { title: s ? `${s.title} – CleanAura` : "Tjeneste – CleanAura" },
        { name: "description", content: s?.short ?? "" },
        { property: "og:title", content: s ? `${s.title} – CleanAura` : "" },
        { property: "og:description", content: s?.short ?? "" },
        { property: "og:url", content: `/tjenester/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/tjenester/${params.slug}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => <div className="py-20 text-center">Tjenesten finnes ikke. <Link to="/tjenester" className="text-primary underline">Se alle tjenester</Link></div>,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: import("@/data/services").Service };
  return (
    <>
      <PageHero eyebrow="TJENESTE" title={service.title} subtitle={service.short} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Om tjenesten</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Hva er inkludert</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.includes.map((i) => (
                  <li key={i} className="flex gap-3 rounded-lg bg-primary-soft/60 px-4 py-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Fordeler</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Hvem er det for?</h2>
              <p className="mt-3 text-muted-foreground">{service.forWho}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Priseksempler</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {service.pricing.map((p) => (
                  <div key={p.name} className="rounded-2xl border border-border bg-card p-5 text-center">
                    <h3 className="text-sm font-medium text-muted-foreground">{p.name}</h3>
                    <p className="mt-2 text-2xl font-bold text-primary">{p.price}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{service.priceDisclaimer ?? "Endelig pris settes etter befaring eller skriftlig tilbud."}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Slik fungerer det</h2>
              <ol className="mt-5 space-y-4">
                {service.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-2xl bg-primary-soft/50 p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Ofte stilte spørsmål</h2>
              <div className="mt-5">
                <FAQList items={service.faq} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Få gratis tilbud</h3>
                <p className="mt-1 text-sm text-muted-foreground">Vi svarer innen 24 timer.</p>
                <div className="mt-4">
                  <ContactForm compact defaultService={service.title} />
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="font-semibold text-foreground">Andre tjenester</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {services.filter((s) => s.slug !== service.slug).slice(0, 5).map((s) => (
                    <li key={s.slug}>
                      <Link to="/tjenester/$slug" params={{ slug: s.slug }} className="flex items-center justify-between text-foreground/80 hover:text-primary">
                        {s.title} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTASection title={`Klar for ${service.title.toLowerCase()}?`} subtitle="Bestill befaring eller send oss en forespørsel – vi er klare." />
    </>
  );
}
