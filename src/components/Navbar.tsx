import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur border-b-2 border-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="RS Junk Removal" className="h-12 w-12 object-contain transition-transform group-hover:scale-110" />
          <span className="hidden sm:block font-display text-xl text-foreground tracking-wide">
            RS <span className="text-orange">JUNK REMOVAL</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4 font-display font-bold text-sm sm:text-base">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
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
      </div>
    </header>
  );
}
