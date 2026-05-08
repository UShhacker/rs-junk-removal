import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — RS Junk Removal" },
      { name: "description", content: "How RS Junk Removal handles your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 prose prose-invert">
      <h1 className="font-display text-5xl">Privacy Policy</h1>
      <p className="text-muted-foreground mt-4">Last updated: 2026</p>
      <div className="space-y-6 mt-8 text-foreground/90">
        <p>RS Junk Removal ("we", "us") respects your privacy. This page explains what we collect and how we use it.</p>
        <h2 className="font-display text-2xl text-orange">What we collect</h2>
        <p>When you submit our quote form we collect your name, phone, email, city, and the details you provide about your job. That's it.</p>
        <h2 className="font-display text-2xl text-orange">How we use it</h2>
        <p>To contact you about your quote and to schedule your pickup. We don't sell or share your info with third parties for marketing.</p>
        <h2 className="font-display text-2xl text-orange">Cookies</h2>
        <p>We use a single cookie to remember that you dismissed the cookie banner. No tracking across other sites.</p>
        <h2 className="font-display text-2xl text-orange">Contact</h2>
        <p>Questions? Call <a href="tel:7865728486" className="text-orange font-bold">786-572-8486</a>.</p>
      </div>
    </section>
  );
}
