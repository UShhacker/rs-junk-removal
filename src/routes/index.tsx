import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Reveal, Watermark } from "@/components/Bits";
import { Parallax } from "@/components/Parallax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Junk Removal — Same-Day Hauling in Miami Beach, FL" },
      { name: "description", content: "You Call. We Haul. Fast same-day junk removal & cleanouts across Miami Beach and surrounding areas. 786-572-8486." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] stripe-bg overflow-hidden diagonal-cut-b">
        <Parallax speed={0.25} className="absolute inset-0"><Watermark /></Parallax>
        {/* particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="particle absolute w-2 h-2 bg-orange"
              style={{ left: `${15 + i * 22}%`, animationDelay: `${i * 1.5}s` }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl leading-[0.85] animate-[fade-in_0.6s_ease-out]">
              YOU CALL.
              <br />
              <span className="text-orange">WE HAUL.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-display tracking-wide">
              Junk Removal · Miami Beach, FL & Surrounding Areas
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-orange text-background px-8 py-4 font-display font-extrabold text-lg hover:bg-orange-bright hover:scale-[1.03] transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:7865728486"
                className="border-2 border-foreground text-foreground px-8 py-4 font-display font-extrabold text-lg hover:bg-foreground hover:text-background transition-colors"
              >
                Call 786-572-8486
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={logo}
              alt="RS Junk Removal dump trailer"
              className="w-full max-w-lg mx-auto -rotate-6 drop-shadow-[0_0_60px_rgba(232,96,10,0.4)]"
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl mb-12 inline-block bg-orange text-background px-4 py-2 skew-stripe">
              <span className="inline-block transform -skew-x-[-15deg]">Why RS?</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🚛", title: "Fast Same-Day Service", text: "Need it gone today? We show up, load up, and haul out — fast." },
              { icon: "💰", title: "Upfront Pricing", text: "No surprises. Honest quotes, fair rates, no hidden fees." },
              { icon: "📍", title: "All of Miami Beach", text: "Serving Miami Beach and every surrounding neighborhood." },
            ].map((p) => (
              <Reveal key={p.title}>
                <div className="bg-background border-t-4 border-orange p-8 h-full hover:-translate-y-2 transition-transform">
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-orange text-background py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            ["500+", "Jobs Completed"],
            ["100%", "Happy Customers"],
            ["7 Days", "Same-Day Pickups"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display font-black text-5xl md:text-7xl">{n}</div>
              <div className="font-display tracking-wider text-sm md:text-base mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 px-6 relative overflow-hidden">
        <Parallax speed={-0.15} className="absolute inset-0 opacity-30"><Watermark /></Parallax>
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl mb-12">
              Real <span className="text-orange">Reviews</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Carlos M.", area: "Brickell", text: "Showed up two hours after I called. Cleared my whole garage. Unreal service." },
              { name: "Janelle R.", area: "Coral Gables", text: "Honest pricing, no nonsense. Hauled an old sofa and three appliances same day." },
              { name: "Diego S.", area: "Hialeah", text: "Cleaned out my dad's storage unit for me. Super respectful crew. Highly recommend." },
            ].map((t) => (
              <Reveal key={t.name}>
                <div className="bg-charcoal border-t-4 border-orange p-6 h-full">
                  <div className="text-orange text-5xl font-display font-black leading-none">"</div>
                  <p className="text-muted-foreground italic">{t.text}</p>
                  <div className="mt-4 text-orange tracking-widest">★★★★★</div>
                  <div className="font-display mt-2">{t.name} <span className="text-muted-foreground text-sm">— {t.area}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-background py-24 px-6 text-center stripe-bg">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl">
            Got Junk? <span className="text-orange">We Got This.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Tap below for a free quote in minutes.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-orange text-background px-10 py-5 font-display font-extrabold text-xl hover:bg-orange-bright transition">
              Get My Free Quote
            </Link>
            <Link to="/faq" className="border-2 border-foreground px-10 py-5 font-display font-extrabold text-xl hover:bg-foreground hover:text-background transition">
              See FAQs
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
