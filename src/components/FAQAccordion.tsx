import { useState } from "react";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="bg-charcoal border-l-4 border-orange">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left p-5 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg sm:text-xl">{it.q}</span>
              <span className={`text-orange text-2xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-muted-foreground">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
