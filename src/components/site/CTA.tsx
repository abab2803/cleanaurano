import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Klar for et skinnende rent hjem?",
  subtitle = "Få et gratis og uforpliktende tilbud i dag. Vi svarer innen 24 timer.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 text-center md:p-16">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary transition hover:bg-background/90">
            Få gratis tilbud <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+4745131748" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
            Ring 451 31 748
          </a>
        </div>
      </div>
    </section>
  );
}
