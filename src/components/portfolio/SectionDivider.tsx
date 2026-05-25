import { useEffect, useRef, useState } from "react";

export function SectionDivider() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVis(e.isIntersecting)),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative flex items-center justify-center max-w-[85%] mx-auto py-10 overflow-visible select-none"
    >
      {/* Left side line */}
      <div
        className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/20"
        style={{
          transform: vis ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "right",
          transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {/* Technical CAD Crosshair guide */}
      <div
        className="mx-5 text-[9px] font-mono text-primary/50 transition-all duration-700 flex items-center gap-2"
        style={{
          opacity: vis ? 0.75 : 0,
          transform: vis ? "scale(1)" : "scale(0.6)",
          transitionDelay: "150ms",
        }}
      >
        <span className="text-[8px] opacity-35 tracking-[0.25em] font-mono uppercase">
          SYS_GRID_ALGN
        </span>
        <span className="font-bold text-primary/75 text-xs">+</span>
      </div>
      {/* Right side line */}
      <div
        className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/20"
        style={{
          transform: vis ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
