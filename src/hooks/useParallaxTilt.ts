import { useEffect, useRef, type RefObject } from "react";

interface UseParallaxTiltOptions {
  strength?: number;
  perspective?: number;
  speed?: number;
}

export function useParallaxTilt<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: UseParallaxTiltOptions = {},
) {
  const { strength = 8, perspective = 1000, speed = 0.15 } = options;
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rotateX = y * -strength;
        const rotateY = x * strength;
        el.style.transition = `transform ${speed}s ease-out`;
        el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.transform = "none";
      });
    };

    const parent = el.parentElement;
    if (!parent) return;

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ref, strength, perspective, speed]);
}

export default useParallaxTilt;