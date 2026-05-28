import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-medium text-foreground">{item.q}</span>
            {open === i ? <Minus className="h-4 w-4 shrink-0 text-primary" /> : <Plus className="h-4 w-4 shrink-0 text-primary" />}
          </button>
          {open === i && <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
