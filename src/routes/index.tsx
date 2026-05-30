import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, Leaf, Check, ArrowRight, Star, Quote, Award, SlidersHorizontal } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";
import bucketImg from "@/assets/bucket.jpg";
import { services } from "@/data/services";
import { CTASection } from "@/components/site/CTA";
import { FAQList } from "@/components/site/FAQList";
import { allFaqs } from "@/data/faqs";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CleanAura – Et renere hjem. En bedre hverdag." },
      { name: "description", content: "Profesjonell rengjøring i Oslo, Bærum, Asker, Lillestrøm og Drammen. Fast lav pris, miljøvennlig, godkjent-garanti." },
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
                <Link to="/tjenester" className="rounded-md border border-primary/30 bg-background px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5">
                  Se våre tjenester
                </Link>
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

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">VÅRE TJENESTER</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Rengjøring tilpasset dine behov</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Vi tilbyr et bredt spekter av rengjøringstjenester for private hjem og bedrifter i Oslo og omegn.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.slug} to="/tjenester/$slug" params={{ slug: s.slug }} className="group rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-lg">
              <s.icon className="h-10 w-10 text-primary" strokeWidth={1.75} />
              <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Les mer <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
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
                { icon: SlidersHorizontal, title: "Fleksible løsninger", desc: "Velg renhold som passer dine behov – enten det gjelder fast vask, flyttevask eller bedrift." },
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

      {/* Before/After */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">FØR & ETTER</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Synlig forskjell – hver eneste gang</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-2">
              <div className="relative bg-muted aspect-[4/3] flex items-center justify-center">
                <span className="absolute left-3 top-3 rounded bg-foreground/80 px-2 py-1 text-xs font-medium text-background">Før</span>
                <span className="text-muted-foreground text-sm">Bad – før</span>
              </div>
              <div className="relative bg-primary-soft aspect-[4/3] flex items-center justify-center">
                <span className="absolute left-3 top-3 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">Etter</span>
                <span className="text-primary font-medium">Skinnende rent</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground">Bad – avkalking og dyprens</h3>
              <p className="mt-1 text-sm text-muted-foreground">Profesjonell avkalking, fugevask og polering.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-2">
              <div className="relative bg-muted aspect-[4/3] flex items-center justify-center">
                <span className="absolute left-3 top-3 rounded bg-foreground/80 px-2 py-1 text-xs font-medium text-background">Før</span>
                <span className="text-muted-foreground text-sm">Kjøkken – før</span>
              </div>
              <div className="relative bg-primary-soft aspect-[4/3] flex items-center justify-center">
                <span className="absolute left-3 top-3 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">Etter</span>
                <span className="text-primary font-medium">Som nytt</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground">Kjøkken – ovn og ventilator</h3>
              <p className="mt-1 text-sm text-muted-foreground">Grundig fettrens og polering av flater.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary-soft/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
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
              <div key={step.n} className="rounded-2xl bg-background p-7">
                <span className="text-3xl font-bold text-primary/30">{step.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">KUNDEUTTALELSER</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Hva kundene sier</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7">
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
      </section>

      {/* Pricing teaser */}
      <section className="bg-primary-soft/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-wider text-primary">PRISER</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Transparente priser, ingen overraskelser</h2>
              <p className="mt-4 text-muted-foreground">
                Alle våre tjenester har fast pris eller medlemspris. Du vet alltid hva du betaler – og du betaler aldri for mer enn du får.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { name: "Hjemmerengjøring", price: "fra 690 kr/besøk" },
                  { name: "Flyttevask med godkjent-garanti", price: "fra 3 490 kr" },
                  { name: "Vindusvask", price: "fra 990 kr" },
                  { name: "Kontorvask", price: "fra 1 490 kr/mnd" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center justify-between rounded-lg bg-background px-5 py-4">
                    <span className="font-medium text-foreground">{p.name}</span>
                    <span className="text-primary font-semibold">{p.price}</span>
                  </div>
                ))}
              </div>
              <Link to="/priser" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Se alle priser <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src={bucketImg} alt="Rengjøringsutstyr" width={768} height={768} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">SPØRSMÅL & SVAR</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Ofte stilte spørsmål</h2>
        </div>
        <div className="mt-12">
          <FAQList items={allFaqs.slice(0, 8)} />
        </div>
        <div className="mt-6 text-center">
          <Link to="/faq" className="text-sm font-semibold text-primary hover:underline">Se alle 30+ spørsmål →</Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
