import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// BYTT UT DENNE MED DIN EGEN FORMSPREE-ID
// 1. Gå til https://formspree.io/ og opprett en gratis konto
// 2. Lag et nytt skjema – du får en unik URL som f.eks.:
//    https://formspree.io/f/xwplzerv
// 3. Bytt ut "DIN_FORM_ID_HER" nedenfor med ID-en fra URL-en din
//    (alt etter /f/ i URL-en)
// ═══════════════════════════════════════════════════════════════
const FORMSPREE_ENDPOINT = "https://formspree.io/f/DIN_FORM_ID_HER";

export function ContactForm({ compact = false, defaultService = "" }: { compact?: boolean; defaultService?: string }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        const body = await response.json();
        setError(body?.error || "Noe gikk galt. Prøv igjen eller send oss en e-post.");
      }
    } catch {
      setError("Kunne ikke sende melding. Sjekk internettforbindelsen din og prøv igjen.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <input name="navn" required placeholder="Navn" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <input name="epost" required type="email" placeholder="E-post" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <input name="telefon" required placeholder="Telefon" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <input name="postnummer" placeholder="Postnummer" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <select name="tjeneste" defaultValue={defaultService} className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary md:col-span-2">
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
        <textarea name="melding" placeholder="Fortell oss kort om oppdraget (boligstørrelse, antall rom, ønsket dato …)" rows={4} className="md:col-span-2 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60 md:w-auto"
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sender …
          </>
        ) : (
          "Send forespørsel"
        )}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">Vi svarer normalt innen 24 timer. Ingen forpliktelser.</p>
    </form>
  );
}
