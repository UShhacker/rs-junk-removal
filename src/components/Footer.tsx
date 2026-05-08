import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-background border-t-[3px] border-orange overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display font-black text-[20rem] text-orange opacity-[0.04] select-none">RS</span>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="RS Junk Removal" className="h-20 w-20 object-contain mb-3" />
          <p className="font-display italic text-orange text-xl font-bold">You Call. We Haul.</p>
          <p className="text-muted-foreground mt-2 text-sm">Miami Beach, FL · Est. 2026</p>
        </div>
        <div>
          <h4 className="text-orange mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["/", "Home"], ["/services", "Services"], ["/about", "About"], ["/gallery", "Gallery"], ["/contact", "Contact"], ["/privacy", "Privacy Policy"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-orange transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-orange mb-4 text-lg">Contact</h4>
          <a href="tel:7865728486" className="block font-display text-2xl text-foreground hover:text-orange transition-colors">786-572-8486</a>
          <p className="text-sm text-muted-foreground mt-2">Miami Beach, FL & Surrounding Areas</p>
          <a href="https://facebook.com/profile.php?id=61560534947399" target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm hover:text-orange">Facebook ↗</a>
        </div>
      </div>
      <div className="relative border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 RS Junk Removal. All rights reserved. · Miami, FL
      </div>
    </footer>
  );
}
