import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, Leaf, Check, Star, Quote, Award, SlidersHorizontal } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CleanAura – Et renere hjem. En bedre hverdag." },
      { name: "description", content: "Profesjonell rengjøring i Oslo og omegn. Standard vask, Airbnb-vask og flyttevask til fastpris. 100 % fornøydhetsgaranti." },
      { property: "og:title", content: "CleanAura – Premium rengjøring" },
      { property: "og:description", content: "Et renere hjem. En bedre hverdag. Få gratis tilbud i dag." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const testimonials = [
  { name: "Marte H.", role: "Frogner", text: "CleanAura har endret hverdagen vår. Faste tider, samme renholder og alltid skinnende rent. Anbefales på det varmeste!" },
  { name: "Eirik S.", role: "Daglig leder, Skøyen", text: "Vi har brukt CleanAura til kontoret i to år. Profesjonelle, diskrete og leverer alltid avtalt kvalitet." },
  { name: "Nora L.", role: "Bekkestua", text: "Flyttevasken ble godkjent uten kommentarer fra megler. Fastpris og null stress – verdt hver krone." },
];

const priser = [
  {
    name: "Standard vask",
    price: "Fra 990,- NOK",
    desc: "Regelmessig vedlikehold, støvsuging, flatevask av gulv, grundig bad og kjøkkenflater.",
    highlight: false,
  },
  {
    name: "Airbnb-vask",
    price: "Fra 1 490,- NOK",
    desc: "Rask turnaround mellom gjester, skift av sengetøy/håndklær, påfyll av forbruksvarer og visuell sjekk.",
    highlight: true,
  },
  {
    name: "Flyttevask",
    price: "Fra 3 490,- NOK",
    desc: "Total nedvask av tom bolig, inkludert innvendig vask av skap, skuffer, hvitevarer og vinduer.",
    highlight: false,
  },
];

function Index() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-8">
        <div className="overflow-hidden rounded-3xl bg-primary-soft">
          <div className="grid items-stretch gap-0 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="mb-6 inline-flex w-fit rounded-md bg-background/70 px-3 py-1.5 text-xs font-semibold tracking-wider text-primary">
                PROFESJONELL RENGJØRING
              </span>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Et <span className="text-primary">renere</span> hjem.<br />
                En <span className="text-primary">bedre</span> hverdag.
              </h1>
              <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
                CleanAura leverer profesjonell rengjøring med kvalitet, pålitelighet og omtanke. Vi tar oss av rengjøringen – så du får tid til det som betyr mest.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/kontakt" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
                  Få gratis tilbud
                </Link>
                <a href="#priser" className="rounded-md border border-primary/30 bg-background px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5">
                  Se våre priser
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, title: "Pålitelig & trygg", desc: "Bakgrunnssjekkede renholdere." },
                  { icon: Sparkles, title: "Skinnende resultat", desc: "Kvalitet i hver detalj." },
                  { icon: Leaf, title: "Miljøvennlig", desc: "Svanemerkede produkter." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <f.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] md:min-h-full">
              <img src={heroImg} alt="Profesjonelle rengjørere fra CleanAura i arbeid" width={1280} height={896} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Priser */}
      <section id="priser" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">PRISER</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Velg tjenesten som passer deg</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Transparente fastpriser – ingen skjulte kostnader. Få et uforpliktende tilbud tilpasset din bolig.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {priser.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 transition ${
                p.highlight
                  ? "border-primary bg-primary-soft/70 shadow-lg"
                  : "border-border bg-card hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
              <p className="mt-3 text-3xl font-bold text-primary">{p.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <Link
                to="/kontakt"
                hash="skjema"
                className={`mt-6 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary/30 text-primary hover:bg-primary/5"
                }`}
              >
                Få et uforpliktende tilbud
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-primary-soft/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-wider text-primary">HVORFOR CLEANAURA</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Premium renhold du kan stole på</h2>
              <p className="mt-4 text-muted-foreground">
                Vi har bygget CleanAura på tre prinsipper: kvalitet, ærlighet og omtanke. Hver renholder er bakgrunnssjekket, opplært i våre standarder og forsikret. Vi vasker hjemmet ditt som om det var vårt eget.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "100 % fornøydhetsgaranti",
                  "Faste, kjente renholdere",
                  "Miljøvennlige produkter",
                  "Fullt forsikret og godkjent",
                  "Fastpris uten skjulte kostnader",
                  "Fleksibel booking 7 dager i uka",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, title: "Pålitelig service", desc: "Profesjonelt renhold med fokus på kvalitet, detaljer og et skinnende resultat hver gang." },
                { icon: Leaf, title: "Miljøvennlige produkter", desc: "Vi bruker skånsomme og effektive rengjøringsprodukter som er trygge for hjem, familie og arbeidsplass." },
                { icon: SlidersHorizontal, title: "Fleksible løsninger", desc: "Velg renhold som passer dine behov – enten det gjelder fast vask, flyttevask eller Airbnb." },
                { icon: Award, title: "Kvalitetsgaranti", desc: "Vi er ikke fornøyde før du er fornøyd. Vårt mål er høy kvalitet i hvert eneste oppdrag." },
              ].map((t) => (
                <div key={t.title} className="rounded-2xl bg-background p-8 text-center shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <t.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-foreground">{t.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">SLIK FUNGERER DET</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Enkelt fra start til slutt</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", title: "Få tilbud", desc: "Fyll ut skjema eller ring. Vi svarer innen 24 timer." },
            { n: "02", title: "Planlegg", desc: "Vi avtaler tid, frekvens og omfang som passer deg." },
            { n: "03", title: "Vi vasker", desc: "Faste renholdere leverer kvalitet hver gang." },
            { n: "04", title: "Nyt resultatet", desc: "Skinnende rent hjem. Trygg betaling etter besøk." },
          ].map((step) => (
            <div key={step.n} className="rounded-2xl bg-card border border-border p-7">
              <span className="text-3xl font-bold text-primary/30">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-soft/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wider text-primary">KUNDEUTTALELSER</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Hva kundene sier</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-background p-7">
                <Quote className="h-7 w-7 text-primary/40" />
                <p className="mt-4 text-foreground/90">{t.text}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
