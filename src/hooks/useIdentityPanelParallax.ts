import { useEffect, useRef, type RefObject } from "react";

export function useIdentityPanelParallax<T extends HTMLElement>(ref: RefObject<T | null>) {
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const tx = (e.clientX - cx) / rect.width;
      const ty = (e.clientY - cy) / rect.height;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${tx * 8}px`);
        el.style.setProperty("--py", `${ty * 8}px`);
        el.style.setProperty("--rx", `${-ty * 4}deg`);
        el.style.setProperty("--ry", `${tx * 4}deg`);
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--px", `0px`);
        el.style.setProperty("--py", `0px`);
        el.style.setProperty("--rx", `0deg`);
        el.style.setProperty("--ry", `0deg`);
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ref]);
}

export default useIdentityPanelParallax;