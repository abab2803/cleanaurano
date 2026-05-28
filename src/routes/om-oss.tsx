import { createFileRoute } from "@tanstack/react-router";
import { Heart, Leaf, Shield, Award, Users, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";
import heroImg from "@/assets/hero-cleaning.jpg";

export const Route = createFileRoute("/om-oss")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Om oss – CleanAura" },
      { name: "description", content: "CleanAura er Oslos profesjonelle rengjøringspartner. Lær om vår historie, våre verdier, kvalitetsgaranti og miljøvennlige produkter." },
      { property: "og:title", content: "Om CleanAura" },
      { property: "og:url", content: "/om-oss" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="OM OSS" title="Profesjonelt renhold med hjerte og presisjon" subtitle="CleanAura ble grunnlagt med ett mål: å frigjøre tid for travle mennesker gjennom premium rengjøring." />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Vår historie</h2>
            <p className="mt-4 text-muted-foreground">
              CleanAura startet i 2019 med en enkel idé: rengjøring i Norge skulle være enklere, mer profesjonelt og mer pålitelig. Etter mange år med erfaring fra renholdsbransjen så vi at kundene fortjente bedre – faste team, transparente priser og en garanti som faktisk holdt vann.
            </p>
            <p className="mt-4 text-muted-foreground">
              I dag er vi over 40 ansatte med base i Oslo, og vi betjener tusenvis av hjem og bedrifter i hele Stor-Oslo. Vi vokser jevnt – ikke ved å presse priser eller skjære ned på kvalitet, men ved å bygge tillit, ett oppdrag av gangen.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={heroImg} alt="CleanAura team" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-primary-soft/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Misjon og verdier</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Vi tror at et rent hjem og en ren arbeidsplass skaper bedre liv. Vår jobb er å levere det – hver dag, hver gang.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Heart, title: "Omtanke", desc: "Vi behandler hjem og kunder med ekte omsorg og respekt." },
              { icon: Shield, title: "Pålitelighet", desc: "Vi møter alltid presis. Vi holder det vi lover." },
              { icon: Sparkles, title: "Kvalitet", desc: "Vi går ikke på akkord med detaljene. Resultatet skal skinne." },
              { icon: Leaf, title: "Miljø", desc: "Svanemerkede produkter og bærekraftige rutiner." },
              { icon: Users, title: "Folk først", desc: "Ansatte med trygge vilkår og kontinuerlig opplæring." },
              { icon: Award, title: "Profesjonalitet", desc: "Sertifisert og godkjent renholdsbedrift." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-background p-7">
                <v.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Kvalitetsgaranti</h2>
            <p className="mt-4 text-muted-foreground">
              Vi gir deg 100 % fornøydhetsgaranti på alle våre tjenester. Hvis du ikke er fornøyd, kommer vi tilbake og fikser det – gratis. For flyttevask har vi i tillegg «godkjent-garanti»: dersom megler eller utleier ikke godkjenner vasken, kommer vi tilbake innen 48 timer.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Sertifiseringer</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>✓ Godkjent renholdsbedrift hos Arbeidstilsynet</li>
              <li>✓ Medlem av NHO Service og Handel</li>
              <li>✓ Svanemerket leverandør</li>
              <li>✓ Full ansvarsforsikring via Gjensidige</li>
              <li>✓ HMS-sertifisert team med gyldig HMS-kort</li>
              <li>✓ GDPR-compliant – sertifisert nøkkelhåndtering</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Bli en del av CleanAura-familien" subtitle="Tusenvis av nordmenn stoler på oss – det kan du også." />
    </>
  );
}
