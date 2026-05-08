import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Bits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — RS Junk Removal | Miami Beach Hauling" },
      { name: "description", content: "Junk removal, hauling, cleanouts, furniture delivery, and garage cleanouts in Miami Beach, FL." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { title: "Junk Removal", desc: "Single items to truckloads — gone the same day.", icon: "🗑️" },
  { title: "Hauling Trash", desc: "Heavy debris, yard waste, construction leftovers.", icon: "🚛" },
  { title: "Cleanouts", desc: "Estate, foreclosure, storage unit, full property.", icon: "🏚️" },
  { title: "Furniture Delivery", desc: "Pick up & drop off — sofas, beds, appliances.", icon: "🛋️" },
  { title: "Garage Cleanouts", desc: "Reclaim your garage in a single afternoon.", icon: "🚗" },
];

function Services() {
  return (
    <>
      <section className="relative py-20 px-6 stripe-bg">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl">
            Our <span className="text-orange">Services</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            One crew. Five ways we make your space cleaner. Fast, fair, and Miami-tough.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <Reveal key={s.title}>
              <div className="group relative bg-charcoal border-t-4 border-orange p-8 hover:-translate-y-2 transition-all overflow-hidden">
                <div className="text-5xl mb-3">{s.icon}</div>
                <h3 className="font-display text-3xl">{s.title}</h3>
                <p className="text-muted-foreground mt-2">{s.desc}</p>
                <Link to="/contact" className="inline-block mt-4 text-orange font-display font-bold tracking-wider hover:underline">
                  GET A QUOTE →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-orange text-background py-16 px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl">Ready When You Are.</h2>
        <a href="tel:7865728486" className="inline-block mt-6 bg-background text-orange px-8 py-4 font-display font-extrabold text-xl hover:scale-105 transition">
          Call 786-572-8486
        </a>
      </section>
    </>
  );
}
