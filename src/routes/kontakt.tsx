import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQList } from "@/components/site/FAQList";

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

const faqs = [
  {
    q: "Må jeg være hjemme når dere vasker?",
    a: "Nei, det er opp til deg. De fleste av våre faste kunder er på jobb. Du kan trygt overlevere nøkkel på forhånd, oppgi kode til elektronisk lås, eller benytte en avtalt nøkkelboks.",
  },
  {
    q: "Hva er inkludert i deres 100 % fornøydhetsgaranti?",
    a: "Din tilfredshet er vår høyeste prioritet. Hvis noe ikke skulle leve opp til forventningene, melder du fra til oss innen 24 timer, så kommer vi tilbake og utbedrer det kostnadsfritt så fort som mulig.",
  },
  {
    q: "Er det bindingstid på vaskeavtalene?",
    a: "Nei, hos CleanAura har vi ingen bindingstid. Du kan når som helst pause, endre frekvens eller avbestille. Det eneste vi ber om er at endringer gjøres senest 48 timer før avtalt oppstart.",
  },
  {
    q: "Holder dere vaskeutstyr og produkter selv?",
    a: "Ja, vi stiller med alt av profesjonelt vaskeutstyr og miljøvennlige rengjøringsmidler av høy kvalitet. Du trenger ikke å klargjøre noe som helst på forhånd.",
  },
];

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
              <h3 className="mt-3 font-semibold text-foreground">Område</h3>
              <p className="mt-1 text-foreground">Oslo og omegn</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Åpningstider</h3>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                <li>Man–Fre: 07:00–18:00</li>
                <li>Lørdag: 09:00–15:00</li>
                <li>Søndag: Stengt</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div id="skjema" className="scroll-mt-24 mb-10">
              <h2 className="text-2xl font-bold text-foreground">Få et uforpliktende tilbud</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fyll ut skjemaet, så svarer vi innen 24 timer.</p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground">Ofte stilte spørsmål</h2>
              <p className="mt-2 text-sm text-muted-foreground">Svar på det kundene våre lurer mest på.</p>
              <div className="mt-5">
                <FAQList items={faqs} />
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-primary/30 bg-primary-soft/60 p-6">
              <AlertCircle className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Akutt rengjøring – samme dag</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Trenger du hjelp i dag? Ring oss direkte på 451 31 748 – vi rykker ut innen 4 timer ved ledig kapasitet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
