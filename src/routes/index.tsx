import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import sectionWhy from "@/assets/section-why.jpg";
import sectionCoverage from "@/assets/section-coverage.jpg";
import sectionPricing from "@/assets/section-pricing.jpg";
import { Reveal, Watermark } from "@/components/Bits";
import { Parallax } from "@/components/Parallax";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { PriceCalculator } from "@/components/PriceCalculator";
import { FAQAccordion } from "@/components/FAQAccordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Junk Removal — Same-Day Hauling in Miami Beach, FL" },
      { name: "description", content: "You Call. We Haul. Fast same-day junk removal & cleanouts across Miami Beach and surrounding areas. 786-572-8486." },
    ],
  }),
  component: Home,
});

const NEIGHBORHOODS = [
  "South Beach", "Mid-Beach", "North Beach", "Sunset Harbour",
  "Bal Harbour", "Surfside", "Bay Harbor Islands", "Aventura",
  "Brickell", "Wynwood", "Coral Gables", "Doral",
  "Hialeah", "Kendall", "Pinecrest", "Homestead",
];

const FAQS = [
  { q: "How fast can you pick up?", a: "Most jobs we book the same day or next morning. Call us and we'll get a truck rolling." },
  { q: "What do you take?", a: "Furniture, appliances, mattresses, e-waste, yard debris, construction debris, full estate cleanouts — basically anything non-hazardous." },
  { q: "How is pricing calculated?", a: "We charge by trailer volume plus any extras like appliances or stairs. Use the estimator above to see a ballpark in seconds." },
  { q: "Do you donate or recycle?", a: "Yes — we sort usable items for donation and recycle metals, electronics, and yard waste whenever possible." },
  { q: "Do I need to be home?", a: "Not always. If items are accessible (curb, garage, yard) we can handle the haul without you on-site." },
];

const TESTIMONIALS = [
  { name: "Carlos M.", area: "Brickell", rating: 5, text: "Showed up two hours after I called. Cleared my whole garage. Unreal service." },
  { name: "Janelle R.", area: "Coral Gables", rating: 5, text: "Honest pricing, no nonsense. Hauled an old sofa and three appliances same day." },
  { name: "Diego S.", area: "Hialeah", rating: 5, text: "Cleaned out my dad's storage unit for me. Super respectful crew. Highly recommend." },
  { name: "Priya K.", area: "Aventura", rating: 5, text: "Quick text, quick quote, gone in under an hour. Best haul-away crew on the beach." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden diagonal-cut-b">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 stripe-bg opacity-30" />
        </div>
        <Parallax speed={0.25} className="absolute inset-0"><Watermark /></Parallax>

        <div data-testid="hero-orbit" className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl leading-[0.85] animate-[fade-in_0.6s_ease-out]">
              YOU CALL.
              <br />
              <span className="text-orange">WE HAUL.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground font-display tracking-wide">
              Junk Removal · Miami Beach, FL & Surrounding Areas
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/contact" className="bg-orange text-background px-6 sm:px-8 py-3 sm:py-4 font-display font-extrabold text-base sm:text-lg hover:bg-orange-bright hover:scale-[1.03] transition-all">
                Get a Free Quote
              </Link>
              <a href="tel:7865728486" className="border-2 border-foreground text-foreground px-6 sm:px-8 py-3 sm:py-4 font-display font-extrabold text-base sm:text-lg hover:bg-foreground hover:text-background transition-colors">
                Call 786-572-8486
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img src={logo} alt="RS Junk Removal dump trailer" className="w-full max-w-lg mx-auto -rotate-6 drop-shadow-[0_0_60px_rgba(232,96,10,0.6)]" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative bg-charcoal py-16 sm:py-20 px-6 overflow-hidden">
        <Parallax speed={0.12} className="absolute inset-[-8%]">
          <img src={sectionWhy} alt="" loading="lazy" className="w-full h-full object-cover opacity-15" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-12 inline-block bg-orange text-background px-4 py-2 skew-stripe">
              <span className="inline-block transform -skew-x-[-15deg]">Why RS?</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "🚛", title: "Fast Same-Day Service", text: "Need it gone today? We show up, load up, and haul out — fast." },
              { icon: "💰", title: "Upfront Pricing", text: "No surprises. Honest quotes, fair rates, no hidden fees." },
              { icon: "📍", title: "All of Miami Beach", text: "Serving Miami Beach and every surrounding neighborhood." },
            ].map((p) => (
              <Reveal key={p.title}>
                <div className="bg-background border-t-4 border-orange p-6 sm:p-8 h-full hover:-translate-y-2 transition-transform">
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="relative bg-background py-16 sm:py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div>
              <div className="text-xs font-display tracking-wider text-orange mb-2">SERVICE COVERAGE</div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">
                Miami Beach <span className="text-orange">& Beyond</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                Trucks ready across the beach and inland. If you're in greater Miami-Dade, we're rolling to you.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {NEIGHBORHOODS.map((n) => (
                  <span key={n} className="bg-charcoal border border-orange/50 text-foreground px-3 py-1 text-sm font-display tracking-wide">
                    {n}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="bg-orange text-background px-6 py-3 font-display font-extrabold hover:bg-orange-bright transition">
                  Check Availability →
                </Link>
                <a href="tel:7865728486" className="border-2 border-foreground px-6 py-3 font-display font-extrabold hover:bg-foreground hover:text-background transition">
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative border-2 border-orange overflow-hidden glow-orange">
              <img src={sectionCoverage} alt="Miami Beach service coverage map" loading="lazy" className="w-full h-48 object-cover" />
              <iframe
                title="Miami Beach service area"
                src="https://www.google.com/maps?q=Miami+Beach,+FL&output=embed"
                className="w-full h-72 sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-orange text-background py-12 sm:py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 sm:gap-6 text-center">
          {[["500+", "Jobs Completed"], ["100%", "Happy Customers"], ["7 Days", "Same-Day Pickups"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-display font-black text-3xl sm:text-5xl md:text-7xl">{n}</div>
              <div className="font-display tracking-wider text-xs sm:text-sm md:text-base mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING / CALCULATOR */}
      <section className="relative bg-charcoal py-16 sm:py-20 px-6 overflow-hidden">
        <Parallax speed={0.1} className="absolute right-0 top-[-8%] w-1/2 h-[116%] hidden md:block">
          <img src={sectionPricing} alt="" loading="lazy" className="w-full h-full object-cover opacity-10" />
        </Parallax>
        <div className="relative max-w-6xl mx-auto">
          <Reveal>
            <div className="text-xs font-display tracking-wider text-orange mb-2">INSTANT ESTIMATE</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3">
              Price it <span className="text-orange">in seconds</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Pick your load size, add any extras, and get a real ballpark instantly. We confirm the final upfront price on arrival — never any hidden fees.
            </p>
          </Reveal>
          <Reveal>
            <PriceCalculator />
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-16 sm:py-20 px-6 relative overflow-hidden">
        <Parallax speed={-0.15} className="absolute inset-0 opacity-30"><Watermark /></Parallax>
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-12 text-center">
              Real <span className="text-orange">Reviews</span>
            </h2>
          </Reveal>
          <Reveal>
            <TestimonialsCarousel items={TESTIMONIALS} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-charcoal py-16 sm:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-xs font-display tracking-wider text-orange mb-2">QUESTIONS</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-8 sm:mb-10">
              Frequently <span className="text-orange">Asked</span>
            </h2>
          </Reveal>
          <Reveal>
            <FAQAccordion items={FAQS} />
          </Reveal>
          <div className="mt-8 text-center">
            <Link to="/faq" className="inline-block border-2 border-orange text-orange px-6 py-3 font-display font-extrabold hover:bg-orange hover:text-background transition">
              See All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-background py-20 sm:py-24 px-6 text-center stripe-bg">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl">
            Got Junk? <span className="text-orange">We Got This.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">Tap below for a free quote in minutes.</p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="bg-orange text-background px-8 sm:px-10 py-4 sm:py-5 font-display font-extrabold text-lg sm:text-xl hover:bg-orange-bright transition">
              Get My Free Quote
            </Link>
            <Link to="/faq" className="border-2 border-foreground px-8 sm:px-10 py-4 sm:py-5 font-display font-extrabold text-lg sm:text-xl hover:bg-foreground hover:text-background transition">
              See FAQs
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
