import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Bits";
import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import g5 from "@/assets/gallery-5.png";
import g6 from "@/assets/gallery-6.png";
import g7 from "@/assets/gallery-7.png";
import g8 from "@/assets/gallery-8.png";
import g9 from "@/assets/gallery-9.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — RS Junk Removal | Real Miami Cleanouts" },
      { name: "description", content: "Before & after photos of RS Junk Removal jobs across Miami Beach." },
    ],
  }),
  component: Gallery,
});

const IMAGES = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="py-20 px-6 stripe-bg">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl">
            The <span className="text-orange">Work</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">Real jobs. Real Miami. Tap any image to enlarge.</p>
        </div>
      </section>

      <section className="bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {IMAGES.map((src, i) => (
            <Reveal key={i}>
              <button
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden border-2 border-transparent hover:border-orange transition-all"
              >
                <img src={src} alt={`Job ${i + 1}`} loading="lazy" className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="absolute top-0 right-0 w-10 h-10 bg-orange opacity-0 group-hover:opacity-100 transition" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {open !== null && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 animate-[fade-in_0.2s]">
          <div className="absolute inset-4 border-4 border-orange pointer-events-none" />
          <button onClick={(e) => { e.stopPropagation(); setOpen((o) => (o! - 1 + IMAGES.length) % IMAGES.length); }} className="absolute left-6 text-orange text-5xl font-display">‹</button>
          <img src={IMAGES[open]} alt="" className="max-h-[85vh] max-w-[85vw] object-contain" />
          <button onClick={(e) => { e.stopPropagation(); setOpen((o) => (o! + 1) % IMAGES.length); }} className="absolute right-6 text-orange text-5xl font-display">›</button>
        </div>
      )}
    </>
  );
}
