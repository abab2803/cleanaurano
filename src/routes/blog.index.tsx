import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blogg – Råd og tips om rengjøring | CleanAura" },
      { name: "description", content: "Ekspertråd, prisguider og rengjøringstips fra CleanAura. Lær hva flyttevask koster, hvordan velge renholdsfirma og mye mer." },
      { property: "og:title", content: "CleanAura Blogg" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogIndex() {
  return (
    <>
      <PageHero eyebrow="BLOGG" title="Råd, tips og prisguider" subtitle="Lær alt om rengjøring fra CleanAuras eksperter. Praktiske guider for hjem og bedrift." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <article key={p.slug} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">{p.category}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(p.date).toLocaleDateString("no-NO", { day: "numeric", month: "short", year: "numeric" })}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readMinutes} min</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-primary">{p.title}</Link>
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Les artikkelen <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
