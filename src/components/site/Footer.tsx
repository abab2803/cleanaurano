import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-soft/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">
            CleanAura er din lokale, profesjonelle rengjøringspartner. Vi leverer skinnende rene resultater med kvalitet, pålitelighet og omtanke.
          </p>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 451 31 748</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> post@cleanaura.no</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Oslo, Norge</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Tjenester</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/tjenester/$slug" params={{ slug: s.slug }} className="hover:text-primary">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Områder</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link to="/omrader/$city" params={{ city: c.slug }} className="hover:text-primary">Rengjøring i {c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Selskap</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/om-oss" className="hover:text-primary">Om oss</Link></li>
            <li><Link to="/priser" className="hover:text-primary">Priser</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blogg</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} CleanAura AS · Org.nr 999 999 999 · CleanAura.no · CleanAura.online</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Personvern</a>
            <a href="#" className="hover:text-primary">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
