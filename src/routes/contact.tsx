import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/Bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RS Junk Removal | Free Quote in Minutes" },
      { name: "description", content: "Get a free junk removal quote in Miami Beach. Call 786-572-8486 or send a message." },
    ],
  }),
  component: Contact,
});

const AREAS = ["Miami Beach", "Coral Gables", "Hialeah", "Doral", "Aventura", "Brickell", "Wynwood", "Kendall", "Homestead", "South Beach"];
const SERVICES = ["Junk Removal", "Hauling Trash", "Cleanouts", "Furniture Delivery", "Garage Cleanouts"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[\d\s\-+()]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  city: z.string().trim().min(2, "Tell us your city or area").max(80),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(10, "Please describe your job (10+ chars)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Errors = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Errors;
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSent(true);
  };

  const fieldClass = (k: keyof Errors) =>
    `w-full bg-background border outline-none px-4 py-3 transition-colors ${
      errors[k] ? "border-destructive" : "border-border focus:border-orange"
    }`;

  return (
    <>
      <section className="py-16 px-6 stripe-bg">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl">
            Get In <span className="text-orange">Touch</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">Free quote. No pressure. Same-day pickup possible.</p>
        </div>
      </section>

      <section className="bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-charcoal border-t-4 border-orange p-6 sm:p-8">
              <h2 className="font-display text-3xl mb-6">Get Your Free Quote</h2>
              {sent ? (
                <div className="bg-orange text-background p-6 animate-[scale-in_0.3s_ease-out]">
                  <div className="font-display text-3xl mb-2">✓ Request Received!</div>
                  <p className="text-background/90">Thanks — we'll call you back fast at the number you provided. Most quotes go out within 30 minutes.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 underline font-display"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  {([
                    ["name", "Name", "text"],
                    ["phone", "Phone", "tel"],
                    ["email", "Email", "email"],
                    ["city", "City / Area", "text"],
                  ] as const).map(([n, l, t]) => (
                    <div key={n}>
                      <label className="block text-xs font-display tracking-wider text-orange mb-1">{l} *</label>
                      <input name={n} type={t} className={fieldClass(n)} aria-invalid={!!errors[n]} />
                      {errors[n] && <div className="text-destructive text-sm mt-1">{errors[n]}</div>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-display tracking-wider text-orange mb-1">Service Type *</label>
                    <select name="service" className={fieldClass("service")} defaultValue="">
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    {errors.service && <div className="text-destructive text-sm mt-1">{errors.service}</div>}
                  </div>
                  <div>
                    <label className="block text-xs font-display tracking-wider text-orange mb-1">Describe your job *</label>
                    <textarea name="message" rows={4} className={fieldClass("message")} />
                    {errors.message && <div className="text-destructive text-sm mt-1">{errors.message}</div>}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-orange text-background font-display font-extrabold py-4 text-lg hover:bg-orange-bright transition disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send Request →"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <div className="bg-charcoal p-6 border-l-4 border-orange">
                <div className="text-sm font-display tracking-wider text-orange">PHONE</div>
                <a href="tel:7865728486" className="font-display text-3xl sm:text-4xl text-foreground hover:text-orange">786-572-8486</a>
              </div>
              <div className="bg-charcoal p-6 border-l-4 border-orange">
                <div className="text-sm font-display tracking-wider text-orange">SERVICE AREA</div>
                <p className="font-display text-xl sm:text-2xl">Miami Beach, FL & Surrounding Areas</p>
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
