import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function PageLoader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="text-center animate-[scale-in_0.6s_ease-out]">
        <img src={logo} alt="RS Junk Removal" className="h-44 w-44 object-contain mx-auto drop-shadow-[0_0_40px_rgba(232,96,10,0.5)]" />
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-black text-2xl font-bold">
        {String(count).padStart(2, "0")}
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 bg-orange transition-all duration-100"
        style={{ width: `${count}%` }}
      />
    </div>
  );
}
