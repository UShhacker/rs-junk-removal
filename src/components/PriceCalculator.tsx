import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

const LOADS = [
  { id: "min", label: "Min Load", desc: "A few items", base: 95, fraction: 1 / 8 },
  { id: "quarter", label: "1/4 Trailer", desc: "Small cleanout", base: 175, fraction: 1 / 4 },
  { id: "half", label: "1/2 Trailer", desc: "Garage / room", base: 295, fraction: 1 / 2 },
  { id: "three", label: "3/4 Trailer", desc: "Big cleanout", base: 425, fraction: 3 / 4 },
  { id: "full", label: "Full Trailer", desc: "Whole house", base: 545, fraction: 1 },
] as const;

const EXTRAS = [
  { id: "appliance", label: "Appliances", price: 35 },
  { id: "mattress", label: "Mattresses", price: 40 },
  { id: "tv", label: "TVs / Electronics", price: 25 },
  { id: "yard", label: "Yard waste", price: 50 },
];

export function PriceCalculator() {
  const [loadId, setLoadId] = useState<(typeof LOADS)[number]["id"]>("quarter");
  const [extras, setExtras] = useState<Record<string, boolean>>({});
  const [stairs, setStairs] = useState(false);

  const load = LOADS.find((l) => l.id === loadId)!;

  const total = useMemo(() => {
    let t = load.base;
    EXTRAS.forEach((e) => extras[e.id] && (t += e.price));
    if (stairs) t += 40;
    return t;
  }, [load, extras, stairs]);

  return (
    <div className="bg-charcoal border-t-4 border-orange p-6 sm:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="text-xs font-display tracking-wider text-orange mb-3">1. Choose load size</div>
          <div className="grid grid-cols-1 gap-2">
            {LOADS.map((l) => (
              <button
                key={l.id}
                onClick={() => setLoadId(l.id)}
                className={`text-left p-3 border-2 transition-all ${
                  loadId === l.id ? "border-orange bg-background" : "border-border hover:border-orange/60"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-display text-lg">{l.label}</div>
                    <div className="text-xs text-muted-foreground">{l.desc}</div>
                  </div>
                  <div className="font-display text-orange text-xl">from ${l.base}</div>
                </div>
                <div className="mt-2 h-1.5 bg-background overflow-hidden">
                  <div className="h-full bg-orange transition-all" style={{ width: `${l.fraction * 100}%` }} />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-xs font-display tracking-wider text-orange mb-3">2. Add extras</div>
          <div className="grid grid-cols-2 gap-2">
            {EXTRAS.map((e) => (
              <label
                key={e.id}
                className={`p-3 border-2 cursor-pointer transition-all ${
                  extras[e.id] ? "border-orange bg-background" : "border-border hover:border-orange/60"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={!!extras[e.id]}
                  onChange={() => setExtras((p) => ({ ...p, [e.id]: !p[e.id] }))}
                />
                <div className="font-display">{e.label}</div>
                <div className="text-orange text-sm">+${e.price}</div>
              </label>
            ))}
          </div>
          <label className="mt-3 flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={stairs}
              onChange={(e) => setStairs(e.target.checked)}
              className="w-5 h-5 accent-[var(--orange)]"
            />
            <span className="font-display">Stairs / hard access (+$40)</span>
          </label>

          <div className="mt-auto pt-6">
            <div className="bg-background p-5 border-l-4 border-orange flex items-end justify-between">
              <div>
                <div className="text-xs font-display tracking-wider text-orange">ESTIMATE</div>
                <div className="font-display text-5xl">${total}</div>
                <div className="text-xs text-muted-foreground mt-1">Final price confirmed on-site. No hidden fees.</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-4 block text-center bg-orange text-background py-4 font-display font-extrabold text-lg hover:bg-orange-bright transition"
            >
              Get Upfront Quote →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
