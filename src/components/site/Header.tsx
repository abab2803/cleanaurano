import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/tjenester", label: "Tjenester" },
  { to: "/priser", label: "Priser" },
  { to: "/omrader", label: "Områder" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/blog", label: "Blogg" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-sm text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+4721000000" className="hidden items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary md:inline-flex">
            <Phone className="h-4 w-4" /> 21 00 00 00
          </a>
          <Link to="/kontakt" className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:inline-flex">
            Få gratis tilbud
          </Link>
          <button onClick={() => setOpen(!open)} className="rounded-md p-2 lg:hidden" aria-label="Meny">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-primary/5">
                {n.label}
              </Link>
            ))}
            <Link to="/kontakt" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground">
              Få gratis tilbud
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
