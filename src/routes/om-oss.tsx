import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/om-oss")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Om oss – CleanAura" },
      { name: "description", content: "CleanAura kombinerer fagkompetanse med moderne digitale løsninger. Profesjonelt renhold med hjerte, presisjon og full transparens." },
      { property: "og:title", content: "Om CleanAura" },
      { property: "og:description", content: "Profesjonelt renhold med hjerte og presisjon." },
      { property: "og:url", content: "/om-oss" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
});

const verdier = [
  { title: "Omtanke", desc: "Vi behandler hjemmet ditt med den største omsorg, diskresjon og respekt." },
  { title: "Pålitelighet", desc: "Vi kommer til avtalt tid og holder alltid det vi lover." },
  { title: "Kvalitet i detaljene", desc: "Vi går ikke på akkord med kvaliteten. Resultatet skal tale for seg selv." },
  { title: "Trygghet", desc: "Vi følger strenge og sikre rutiner for nøkkelhåndtering." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="OM OSS"
        title="Profesjonelt renhold med hjerte og presisjon"
        subtitle="CleanAura ble grunnlagt med ett klart mål: å frigjøre tid i en travel hverdag gjennom renholdstjenester av topp kvalitet, levert med full transparens og pålitelighet."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-foreground">Vår filosofi</h2>
        <p className="mt-4 text-muted-foreground">
          Vi startet CleanAura fordi vi så et stort behov i markedet for et renholdsbyrå som kombinerer solid fagkompetanse med moderne, enkle digitale løsninger. Med bakgrunn innen struktur, teknologi og profesjonell oppfølging, har vi bygget et konsept der kunden alltid er i fokus – fra første klikk på nettsiden til vi forlater boligen din skinnende ren.
        </p>
      </section>

      <section className="bg-primary-soft/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Våre verdier</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Verdiene som styrer alt vi gjør – hver dag, hvert oppdrag.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {verdier.map((v) => (
              <div key={v.title} className="rounded-2xl bg-background p-7">
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
