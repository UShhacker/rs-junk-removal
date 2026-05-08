import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header data-testid="navbar" className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur border-b-2 border-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <img src={logo} alt="RS Junk Removal" className="h-12 w-12 object-contain transition-transform group-hover:scale-110" />
          <span className="hidden sm:block font-display text-xl text-foreground tracking-wide">
            RS <span className="text-orange">JUNK REMOVAL</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 font-display font-bold text-base">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-orange" }}
              className="px-2 py-1 hover:text-orange transition-colors uppercase tracking-wider"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:7865728486"
            className="hidden md:inline-flex bg-orange text-background px-4 py-2 font-display font-extrabold hover:bg-orange-bright transition-colors"
          >
            786-572-8486
          </a>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-11 w-11 place-items-center border-2 border-orange text-orange font-display text-2xl"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      {open && (
        <nav data-testid="navbar-overlay" className="md:hidden border-t border-border bg-background px-4 py-4 font-display font-bold shadow-2xl">
          <div className="grid gap-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-orange" }}
                onClick={() => setOpen(false)}
                className="px-3 py-3 uppercase tracking-wider hover:text-orange transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:7865728486" className="mt-2 bg-orange text-background px-3 py-3 text-center font-extrabold">
              Call 786-572-8486
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
