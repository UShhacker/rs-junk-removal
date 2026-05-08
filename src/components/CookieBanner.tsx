import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("rs-cookies")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-50 bg-charcoal border-2 border-orange p-5 shadow-2xl">
      <p className="text-sm text-foreground">
        We use cookies to keep RS Junk Removal running smoothly and understand how you use our site. By clicking accept, you're cool with that. Read our{" "}
        <a href="/privacy" className="text-orange underline font-bold">Privacy Policy</a>.
      </p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => { localStorage.setItem("rs-cookies", "1"); setShow(false); }}
          className="flex-1 bg-orange text-background font-display font-extrabold py-2 hover:bg-orange-bright transition"
        >
          Accept
        </button>
        <button onClick={() => setShow(false)} className="px-4 border border-border text-sm hover:border-orange">Dismiss</button>
      </div>
    </div>
  );
}
