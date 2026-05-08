import { useEffect, useRef } from "react";

export function SectionDivider() {
  return (
    <div className="relative h-10 -my-5 z-10 pointer-events-none">
      <div className="absolute inset-0 bg-orange skew-stripe origin-top-left" />
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(40px)", transition: "all 0.8s cubic-bezier(.2,.7,.2,1)" }}
    >
      {children}
    </div>
  );
}

export function Watermark() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <span className="font-display font-black text-[28rem] text-orange opacity-[0.04] select-none leading-none">RS</span>
    </div>
  );
}
