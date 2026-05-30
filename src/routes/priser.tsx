import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";
import { FAQList } from "@/components/site/FAQList";

export const Route = createFileRoute("/priser")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Priser – CleanAura rengjøring" },
      { name: "description", content: "Transparente priser på rengjøring: hjemmerengjøring fra 1 190 kr, flyttevask fra 3 490 kr, vindusvask, kontorvask m.m. Ingen skjulte kostnader." },
      { property: "og:title", content: "Priser – CleanAura" },
      { property: "og:url", content: "/priser" },
    ],
    links: [{ rel: "canonical", href: "/priser" }],
  }),
});

const plans = [
  {
    name: "Hver uke",
    price: "1 190",
    unit: "kr / besøk",
    badge: "Beste pris",
    perks: ["Fast renholder", "Inkluderer alt utstyr", "Prioritert booking", "Ingen bindingstid"],
    highlight: false,
  },
  {
    name: "Annenhver uke",
    price: "1 390",
    unit: "kr / besøk",
    badge: "Mest populær",
    perks: ["Fast renholder", "Inkluderer alt utstyr", "Fleksibel endring", "Ingen bindingstid"],
    highlight: true,
  },
  {
    name: "Hver måned",
    price: "1 690",
    unit: "kr / besøk",
    badge: "Vedlikehold",
    perks: ["Fast renholder", "Inkluderer alt utstyr", "Perfekt som tillegg", "Ingen bindingstid"],
    highlight: false,
  },
];

const movePrices = [
  { size: "Inntil 50 m²", price: "fra 3 490 kr" },
  { size: "50–80 m²", price: "fra 4 690 kr" },
  { size: "80–120 m²", price: "fra 6 290 kr" },
  { size: "120–180 m²", price: "fra 8 490 kr" },
  { size: "180–250 m²", price: "fra 11 990 kr" },
  { size: "250+ m²", price: "Etter befaring" },
];

const officePrices = [
  { size: "Inntil 100 m²", price: "fra 2 990 kr/mnd", note: "1× ukentlig" },
  { size: "100–300 m²", price: "fra 6 990 kr/mnd", note: "2× ukentlig" },
  { size: "300–600 m²", price: "fra 12 990 kr/mnd", note: "3× ukentlig" },
  { size: "600+ m²", price: "Tilbud", note: "Daglig renhold" },
];

const windowPrices = [
  { size: "Leilighet (inntil 10 vinduer)", price: "fra 990 kr" },
  { size: "Rekkehus / medium", price: "fra 1 490 kr" },
  { size: "Enebolig", price: "fra 2 190 kr" },
  { size: "Næringsbygg", price: "Tilbud etter befaring" },
];

const faqs = [
  { q: "Hva er inkludert i prisen?", a: "All arbeidskraft, profesjonelt utstyr og miljøvennlige rengjøringsprodukter. Ingen skjulte kostnader." },
  { q: "Er det MVA på prisene?", a: "For privatkunder oppgis alle priser inkludert 25 % mva. For bedriftskunder (kontorvask) oppgis prisene eksklusive mva." },
  { q: "Hvordan betaler jeg?", a: "Vi sender faktura på e-post eller EHF (for bedrifter) etter utført oppdrag. Privatkunder kan også velge automatisk korttrekk eller Vipps." },
  { q: "Får jeg rabatt på fast renhold?", a: "Ja, våre abonnementspriser er allerede rabattert sammenlignet med engangsoppdrag. Jo hyppigere vi besøker deg, jo lavere blir prisen per besøk." },
  { q: "Hva koster det å avbestille?", a: "Du kan fritt avbestille eller flytte timen din inntil 48 timer før avtalt tid. Avbestillinger senere enn dette belastes med 50 % av oppdragets verdi." },
];

function PricingPage() {
  return (
    <>
      <PageHero eyebrow="PRISER" title="Transparente priser. Ingen overraskelser." subtitle="Vi tror på ærlig prising. Du vet alltid hva du betaler – og du betaler aldri for mer enn du får." />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">Abonnement på fast renhold</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-7 ${p.highlight ? "border-primary bg-primary-soft/70 shadow-lg" : "border-border bg-card"}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${p.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>{p.badge}</span>
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{p.price}</span>
                <span className="text-muted-foreground">{p.unit}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-primary" /> {perk}</li>
                ))}
              </ul>
              <Link to="/kontakt" className={`mt-6 block rounded-md px-5 py-3 text-center text-sm font-medium transition ${p.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary/30 text-primary hover:bg-primary/5"}`}>
                Velg {p.name.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          *Prisene baserer seg på mindre boliger og forutsetter normalt vedlikeholdsbehov. Dersom boligen bærer preg av manglende renhold over lengre tid, vil det påløpe et tillegg for en utvidet førstegangsvask på det første besøket for å bringe boligen opp på standard. Dette avtales alltid med deg på forhånd. Prisene inkluderer mva.
        </p>
      </section>

      <section className="bg-primary-soft/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Flyttevask – fastpris med garanti</h2>
              <p className="mt-2 text-sm text-muted-foreground">Inkluderer vinduer, ovn, ventilator, kjøl/frys og signert sjekkliste.</p>
              <div className="mt-5 divide-y divide-border rounded-2xl bg-background">
                {movePrices.map((m) => (
                  <div key={m.size} className="flex items-center justify-between px-5 py-4">
                    <span className="text-foreground">{m.size}</span>
                    <span className="font-semibold text-primary">{m.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Vindusvask</h2>
              <p className="mt-2 text-sm text-muted-foreground">Innvendig og utvendig. Stripefri-garanti.</p>
              <div className="mt-5 divide-y divide-border rounded-2xl bg-background">
                {windowPrices.map((w) => (
                  <div key={w.size} className="flex items-center justify-between px-5 py-4">
                    <span className="text-foreground">{w.size}</span>
                    <span className="font-semibold text-primary">{w.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground">Kontorvask – månedspakker</h2>
        <p className="mt-2 text-sm text-muted-foreground">Prisene gjelder næringsoppdrag og oppgis eksklusive mva.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {officePrices.map((o) => (
            <div key={o.size} className="rounded-2xl border border-border bg-card p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground">{o.size}</h3>
              <p className="mt-2 text-xl font-bold text-primary">{o.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">{o.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-foreground">Spørsmål om pris</h2>
        <div className="mt-6"><FAQList items={faqs} /></div>
      </section>

      <CTASection />
    </>
  );
}
