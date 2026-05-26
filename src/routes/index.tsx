import { createFileRoute } from "@tanstack/react-router";
import { Home, Building2, KeyRound, AppWindow, ShieldCheck, Sparkles, Leaf, Check, Moon, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";
import bucketImg from "@/assets/bucket.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CleanAura – Profesjonell rengjøring for et renere hjem" },
      { name: "description", content: "CleanAura leverer skinnende rene resultater med pålitelighet, kvalitet og omtanke. Hjemmerengjøring, kontorrengjøring, flytterengjøring og vindusvask." },
    ],
  }),
});

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
        <Moon className="h-5 w-5 text-primary" strokeWidth={2.5} />
        <Sparkles className="absolute -right-0.5 -top-0.5 h-3 w-3 text-primary" strokeWidth={2.5} />
      </div>
      <span className="text-xl font-bold text-foreground">
        Clean<span className="text-primary">Aura</span>
      </span>
    </div>
  );
}

const services = [
  { icon: Home, title: "Hjemmerengjøring", desc: "Regelmessig eller enkeltrengjøring – vi holder hjemmet ditt skinnende rent." },
  { icon: Building2, title: "Kontorrengjøring", desc: "Et rent kontor gir et bedre arbeidsmiljø og økt trivsel." },
  { icon: KeyRound, title: "Flytterengjøring", desc: "Vi sørger for en grundig rengjøring ved flytting." },
  { icon: AppWindow, title: "Vindusvask", desc: "Skinnende rene vinduer gir et bedre inntrykk." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#tjenester" className="text-sm text-foreground/80 hover:text-primary">Tjenester</a>
          <a href="#om" className="text-sm text-foreground/80 hover:text-primary">Om oss</a>
          <a href="#hvorfor" className="text-sm text-foreground/80 hover:text-primary">Hvorfor oss?</a>
          <a href="#kontakt" className="text-sm text-foreground/80 hover:text-primary">Kontakt oss</a>
        </nav>
        <a href="#kontakt" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
          Få et tilbud
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="overflow-hidden rounded-3xl bg-primary-soft">
          <div className="grid items-stretch gap-0 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="mb-6 inline-flex w-fit rounded-md bg-background/70 px-3 py-1.5 text-xs font-semibold tracking-wider text-primary">
                PROFESJONELL RENGJØRING
              </span>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Et <span className="text-primary">renere</span> hjem.<br />
                En <span className="text-primary">bedre</span> hverdag.
              </h1>
              <p className="mt-6 max-w-md text-base text-muted-foreground">
                CleanAura leverer skinnende rene resultater med pålitelighet, kvalitet og omtanke. Vi tar oss av rengjøringen – så du får tid til det som betyr mest.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#kontakt" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
                  Få et uforpliktende tilbud
                </a>
                <a href="#tjenester" className="rounded-md border border-primary/30 bg-background px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5">
                  Våre tjenester
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, title: "Pålitelig & trygg", desc: "Bakgrunnssjekkede og profesjonelle rengjørere." },
                  { icon: Sparkles, title: "Skinnende resultat", desc: "Vi leverer kvalitet i hver detalj." },
                  { icon: Leaf, title: "Miljøvennlig", desc: "Effektive produkter som er skånsomme mot miljøet." },
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
              <img src={heroImg} alt="Profesjonelle rengjørere i arbeid" width={1280} height={896} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary">VÅRE TJENESTER</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Rengjøring tilpasset dine behov</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Vi tilbyr et bredt spekter av rengjøringstjenester for både private og bedrifter.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-lg">
              <s.icon className="h-10 w-10 text-primary" strokeWidth={1.75} />
              <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#kontakt" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                Les mer <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription CTA */}
      <section id="kontakt" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl bg-primary-soft">
          <div className="grid items-center gap-0 md:grid-cols-2">
            <div className="relative h-full min-h-[280px]">
              <img src={bucketImg} alt="Rengjøringsutstyr" width={768} height={768} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-8 md:p-14">
              <p className="text-sm font-semibold tracking-wider text-primary">FAST RENHOLD – FAST LAV PRIS</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Få et skinnende rent hjem – hver uke</h2>
              <p className="mt-4 text-muted-foreground">
                Abonner på fast renhold og få automatiske besøk til en fast lav pris. Fleksibelt, enkelt og bekymringsfritt.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input type="text" placeholder="Navn" className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <input type="email" placeholder="E-post" className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <button type="submit" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
                  Meld meg på
                </button>
              </form>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
                {["Ingen bindingstid", "Enkel administrasjon", "Tilpasset dine behov"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-10">
          <Logo />
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Personvern</a>
            <span>·</span>
            <a href="#" className="hover:text-primary">Vilkår</a>
            <span>·</span>
            <a href="#kontakt" className="hover:text-primary">Kontakt oss</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2024 CleanAura. Alle rettigheter reservert.</p>
        </div>
      </footer>
    </div>
  );
}
