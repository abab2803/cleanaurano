import { useState } from "react";
import { Check } from "lucide-react";

export function ContactForm({ compact = false, defaultService = "" }: { compact?: boolean; defaultService?: string }) {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary-soft p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Takk for henvendelsen!</h3>
        <p className="mt-2 text-sm text-muted-foreground">Vi tar kontakt med deg innen 24 timer med et uforpliktende tilbud.</p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <input required placeholder="Navn" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <input required type="email" placeholder="E-post" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <input required placeholder="Telefon" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <input placeholder="Postnummer" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <select defaultValue={defaultService} className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary md:col-span-2">
          <option value="">Velg tjeneste</option>
          <option>Hjemmerengjøring</option>
          <option>Flyttevask</option>
          <option>Kontorvask</option>
          <option>Vindusvask</option>
          <option>Visningsvask</option>
          <option>Byggvask</option>
          <option>Fast renhold</option>
          <option>Airbnb-vask</option>
        </select>
        <textarea placeholder="Fortell oss kort om oppdraget (boligstørrelse, antall rom, ønsket dato …)" rows={4} className="md:col-span-2 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
      </div>
      <button type="submit" className="mt-5 w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:w-auto">
        Send forespørsel
      </button>
      <p className="mt-3 text-xs text-muted-foreground">Vi svarer normalt innen 24 timer. Ingen forpliktelser.</p>
    </form>
  );
}
