import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Reveal } from "@/components/Bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — RS Junk Removal | Miami's Local Hauling Crew" },
      { name: "description", content: "RS Junk Removal is a local Miami crew. Founded 2026. Fast, honest, and proud to serve our neighbors." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="py-20 px-6 stripe-bg">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={logo} alt="RS Junk Removal" className="brand-orbit w-full max-w-md mx-auto drop-shadow-[0_0_60px_rgba(232,96,10,0.3)]" />
          </div>
          <div>
            <h1 className="font-display text-6xl md:text-7xl">
              Local Miami. <span className="text-orange">Loud & Proud.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              RS Junk Removal was founded in Miami in 2026 with one simple promise — <span className="text-orange italic font-bold">You Call, We Haul.</span> We're a local Miami crew that shows up fast, works hard, and leaves your space cleaner than we found it. From single-item pickups to full property cleanouts, no job is too big or too small. We're your neighbors, and we take pride in every haul.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 px-6">
        <div className="max-w-4xl mx-auto border-2 border-orange p-10">
          <h2 className="font-display text-4xl text-orange mb-6">Our Promise</h2>
          <ul className="space-y-4 text-lg">
            {[
              "Same-day service whenever possible — we respect your time.",
              "Upfront pricing — what we quote is what you pay.",
              "Spotless cleanup — we leave it better than we found it.",
            ].map((p) => (
              <li key={p} className="flex gap-3"><span className="text-orange font-display font-black">✓</span>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-5xl mb-10">What Miami's <span className="text-orange">Saying</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Carlos M.", area: "Brickell", text: "Showed up two hours after I called. Cleared my whole garage. Unreal service." },
              { name: "Janelle R.", area: "Coral Gables", text: "Honest pricing, no nonsense. They hauled an old sofa and three appliances same day." },
              { name: "Diego S.", area: "Hialeah", text: "Cleaned out my dad's storage unit for me. Super respectful crew. Highly recommend." },
            ].map((t) => (
              <Reveal key={t.name}>
                <div className="bg-charcoal border-t-4 border-orange p-6 h-full">
                  <div className="text-orange text-5xl font-display font-black leading-none">"</div>
                  <p className="text-muted-foreground italic">{t.text}</p>
                  <div className="mt-4 text-orange">★★★★★</div>
                  <div className="font-display mt-2">{t.name} <span className="text-muted-foreground text-sm">— {t.area}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
