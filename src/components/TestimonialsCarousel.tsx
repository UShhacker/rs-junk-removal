import { useEffect, useState } from "react";

export type Testimonial = { name: string; area: string; text: string; rating: number };

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length, paused]);

  const go = (n: number) => setI((n + items.length) % items.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {items.map((t) => (
            <div key={t.name} className="min-w-full px-2 sm:px-6">
              <div className="bg-charcoal border-t-4 border-orange p-6 sm:p-10 max-w-3xl mx-auto text-center">
                <div className="text-orange text-2xl tracking-widest" aria-label={`${t.rating} out of 5 stars`}>
                  {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                </div>
                <p className="mt-4 text-lg sm:text-2xl text-foreground italic leading-relaxed">"{t.text}"</p>
                <div className="mt-6 font-display text-xl">
                  {t.name} <span className="text-muted-foreground text-sm">— {t.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => go(i - 1)}
        aria-label="Previous review"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange text-background w-10 h-10 flex items-center justify-center font-display text-xl hover:bg-orange-bright transition"
      >
        ‹
      </button>
      <button
        onClick={() => go(i + 1)}
        aria-label="Next review"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange text-background w-10 h-10 flex items-center justify-center font-display text-xl hover:bg-orange-bright transition"
      >
        ›
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, n) => (
          <button
            key={n}
            onClick={() => go(n)}
            aria-label={`Go to review ${n + 1}`}
            className={`h-2 transition-all ${n === i ? "w-8 bg-orange" : "w-2 bg-muted hover:bg-muted-foreground"}`}
          />
        ))}
      </div>
    </div>
  );
}
