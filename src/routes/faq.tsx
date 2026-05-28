import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FAQList } from "@/components/site/FAQList";
import { CTASection } from "@/components/site/CTA";
import { allFaqs } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "Ofte stilte spørsmål – CleanAura" },
      { name: "description", content: "Svar på over 30 spørsmål om rengjøring, priser, garantier, områder og prosess hos CleanAura." },
      { property: "og:title", content: "FAQ – CleanAura" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
});

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Spørsmål og svar" subtitle="Vi har samlet de vanligste spørsmålene fra våre kunder. Finner du ikke svar? Ta kontakt – vi hjelper deg gjerne." />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <FAQList items={allFaqs} />
      </section>
      <CTASection />
    </>
  );
}
