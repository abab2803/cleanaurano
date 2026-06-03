import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-soft/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">
            CleanAura er din lokale, profesjonelle rengjøringspartner. Vi leverer skinnende rene resultater med kvalitet, pålitelighet og omtanke.
          </p>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <p>Telefon: 451 31 748</p>
            <p>E-post: post@cleanaura.no</p>
            <p>Adresse: Oslo, Norge</p>
          </div>
        </div>
        <div className="md:justify-self-end">
          <h4 className="text-sm font-semibold text-foreground">Sider</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Hjem</Link></li>
            <li><Link to="/priser" className="hover:text-primary">Priser</Link></li>
            <li><Link to="/om-oss" className="hover:text-primary">Om oss</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} CleanAura AS · CleanAura.no</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Personvern</a>
            <a href="#" className="hover:text-primary">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
