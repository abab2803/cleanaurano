import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getPost, blogPosts } from "@/data/blog";
import { CTASection } from "@/components/site/CTA";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: [
        { title: p ? `${p.title} – CleanAura Blogg` : "Artikkel" },
        { name: "description", content: p?.excerpt ?? "" },
        { property: "og:title", content: p?.title ?? "" },
        { property: "og:description", content: p?.excerpt ?? "" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: p ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          datePublished: p.date,
          author: { "@type": "Organization", name: "CleanAura" },
        }),
      }] : [],
    };
  },
  component: BlogPost,
  notFoundComponent: () => <div className="py-20 text-center">Artikkelen finnes ikke.</div>,
});

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: import("@/data/blog").BlogPost };
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Tilbake til bloggen
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">{post.category}</span>
          <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("no-NO", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readMinutes} min lesning</span>
        </div>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-10 space-y-6">
          {post.content.map((para: string, i: number) => (
            <p key={i} className="leading-relaxed text-foreground/85">{para}</p>
          ))}
        </div>
      </article>

      <section className="bg-primary-soft/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-foreground">Les også</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="rounded-2xl bg-background p-6 transition hover:shadow-md">
                <span className="text-xs font-medium text-primary">{r.category}</span>
                <h3 className="mt-2 font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
