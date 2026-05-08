import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Bits";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — RS Junk Removal | Common Questions" },
      { name: "description", content: "Answers to common questions about junk removal, pricing, and service in Miami Beach." },
    ],
  }),
  component: FAQ,
});

const QA = [
  { q: "How fast can you come?", a: "Same-day in most cases. Call before noon and we'll usually be there before sundown." },
  { q: "What does it cost?", a: "Pricing is based on volume and job type. We give upfront quotes — what we say is what you pay." },
  { q: "What do you take?", a: "Furniture, appliances, yard waste, construction debris, full property cleanouts. If it's junk, we haul it." },
  { q: "Do you serve my area?", a: "We cover Miami Beach and all surrounding neighborhoods — Brickell, Coral Gables, Hialeah, Doral, Aventura, Wynwood, Kendall, Homestead, South Beach and more." },
  { q: "Do I need to be home?", a: "Nope. As long as we can access the items, we'll handle it and send you photos when we're done." },
  { q: "How do you handle estate or sensitive cleanouts?", a: "With respect and discretion. We've done plenty — we treat every home like it's our own." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="py-20 px-6 stripe-bg">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl">
            Frequently <span className="text-orange">Asked</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">Quick answers. Real Miami service.</p>
        </div>
      </section>

      <section className="bg-background py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i}>
                <div className="bg-charcoal border-l-4 border-orange">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <span className="font-display text-xl uppercase">{item.q}</span>
                    <span className={`text-orange text-2xl font-display transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
