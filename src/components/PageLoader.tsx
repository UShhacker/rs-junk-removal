import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function PageLoader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduced);
    const duration = reduced ? 400 : 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const done = count >= 100;

  return (
    <div
      data-testid="page-loader"
      role="dialog"
      aria-modal="true"
      aria-labelledby="page-loader-title"
      aria-describedby="page-loader-status"
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <h2 id="page-loader-title" className="sr-only">Loading RS Junk Removal</h2>
      <div className={reducedMotion ? "text-center" : "text-center animate-[scale-in_0.6s_ease-out]"}>
        <img src={logo} alt="" aria-hidden="true" className="h-44 w-44 object-contain mx-auto drop-shadow-[0_0_40px_rgba(232,96,10,0.5)]" />
      </div>
      <div
        id="page-loader-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="absolute bottom-6 right-6 font-mono text-white text-xl font-bold bg-orange px-3 py-1.5 shadow-lg tabular-nums"
      >
        <span aria-label={done ? "Loading complete" : `Loading ${count} percent`}>
          {String(count).padStart(3, "0")}%
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={count}
        aria-label="Page load progress"
        className="absolute bottom-0 left-0 h-1 bg-orange transition-all duration-100"
        style={{ width: `${count}%` }}
      />
    </div>
  );
}
