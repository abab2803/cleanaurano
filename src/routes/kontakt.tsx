import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { cities } from "@/data/cities";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Kontakt CleanAura – Få gratis tilbud" },
      { name: "description", content: "Ta kontakt med CleanAura for et uforpliktende tilbud på rengjøring. Ring, send e-post eller fyll ut skjemaet. Vi svarer innen 24 timer." },
      { property: "og:title", content: "Kontakt CleanAura" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="KONTAKT" title="La oss snakke om hjemmet ditt" subtitle="Send en forespørsel, ring oss eller send e-post. Vi svarer innen 24 timer – ofte raskere." />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-6">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Telefon</h3>
              <a href="tel:+4745131748" className="mt-1 block text-primary hover:underline">451 31 748</a>
              <p className="mt-1 text-sm text-muted-foreground">Hverdager 08:00–17:00</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">E-post</h3>
              <a href="mailto:post@cleanaura.no" className="mt-1 block text-primary hover:underline">post@cleanaura.no</a>
              <p className="mt-1 text-sm text-muted-foreground">Svar innen 24 timer</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Adresse</h3>
              <p className="mt-1 text-foreground">CleanAura AS<br />Karl Johans gate 1<br />0154 Oslo</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Åpningstider</h3>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                <li>Man–Fre: 07:00–18:00</li>
                <li>Lørdag: 09:00–15:00</li>
                <li>Søndag: Stengt (akutt tlf)</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />

            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Kart"
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.736%2C59.910%2C10.760%2C59.918&amp;layer=mapnik"
                className="h-80 w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-primary/30 bg-primary-soft/60 p-6">
              <AlertCircle className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Akutt rengjøring – samme dag</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Trenger du hjelp i dag? Vi har akutt-team på vakt i Oslo-området. Ring oss direkte på 451 31 748 – vi rykker ut innen 4 timer ved kapasitet.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground">Vi betjener disse områdene</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cities.map((c) => c.name).join(" · ")} og omegn.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
