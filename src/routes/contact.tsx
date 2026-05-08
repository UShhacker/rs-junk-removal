import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RS Junk Removal | Free Quote in Minutes" },
      { name: "description", content: "Get a free junk removal quote in Miami Beach. Call 786-572-8486 or send a message." },
    ],
  }),
  component: Contact;
});

const AREAS = ["Miami Beach", "Coral Gables", "Hialeah", "Doral", "Aventura", "Brickell", "Wynwood", "Kendall", "Homestead", "South Beach"];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="py-16 px-6 stripe-bg">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl">
            Get In <span className="text-orange">Touch</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">Free quote. No pressure. Same-day pickup possible.</p>
        </div>
      </section>

      <section className="bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-charcoal border-t-4 border-orange p-8">
              <h2 className="font-display text-3xl mb-6">Get Your Free Quote</h2>
              {sent ? (
                <div className="bg-orange text-background p-6 font-display text-2xl">✓ Got it! We'll call you back fast.</div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-4"
                >
                  {[
                    ["name", "Name", "text"],
                    ["phone", "Phone", "tel"],
                    ["email", "Email", "email"],
                    ["city", "City / Area", "text"],
                  ].map(([n, l, t]) => (
                    <div key={n}>
                      <label className="block text-xs font-display tracking-wider text-orange mb-1">{l}</label>
                      <input required name={n} type={t} className="w-full bg-background border border-border focus:border-orange outline-none px-4 py-3" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-display tracking-wider text-orange mb-1">Service Type</label>
                    <select required className="w-full bg-background border border-border focus:border-orange outline-none px-4 py-3">
                      <option value="">Select a service…</option>
                      {["Junk Removal", "Hauling Trash", "Cleanouts", "Furniture Delivery", "Garage Cleanouts"].map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-display tracking-wider text-orange mb-1">Describe your job</label>
                    <textarea required rows={4} className="w-full bg-background border border-border focus:border-orange outline-none px-4 py-3" />
                  </div>
                  <button type="submit" className="w-full bg-orange text-background font-display font-extrabold py-4 text-lg hover:bg-orange-bright transition">
                    Send Request →
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <div className="bg-charcoal p-6 border-l-4 border-orange">
                <div className="text-sm font-display tracking-wider text-orange">PHONE</div>
                <a href="tel:7865728486" className="font-display text-4xl text-foreground hover:text-orange">786-572-8486</a>
              </div>
              <div className="bg-charcoal p-6 border-l-4 border-orange">
                <div className="text-sm font-display tracking-wider text-orange">SERVICE AREA</div>
                <p className="font-display text-2xl">Miami Beach, FL & Surrounding Areas</p>
              </div>
              <div>
                <div className="text-sm font-display tracking-wider text-orange mb-3">WE SERVE</div>
                <div className="flex flex-wrap gap-2">
                  {AREAS.map((a) => (
                    <span key={a} className="bg-orange text-background px-3 py-1 text-sm font-display font-bold rounded-full">{a}</span>
                  ))}
                </div>
              </div>
              <div className="border-2 border-orange overflow-hidden">
                <iframe
                  title="Miami Beach map"
                  src="https://www.google.com/maps?q=Miami+Beach,+FL&output=embed"
                  className="w-full h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
