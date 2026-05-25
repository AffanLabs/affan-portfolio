import { useEffect, useRef, useState, type RefObject } from "react";

interface UseSpotlightOptions {
  size?: number;
  color?: string;
}

export function useSpotlight<T extends HTMLElement>(options: UseSpotlightOptions = {}) {
  const { size = 280, color = "oklch(0.78 0.15 70 / 0.07)" } = options;
  const ref = useRef<T | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  const style = {
    "--spotlight-size": `${size}px`,
    "--spotlight-color": color,
  } as React.CSSProperties;

  return { ref, style, position };
}

export function useMouseGlow<T extends HTMLElement>(options: UseSpotlightOptions = {}) {
  const { size = 400, color = "oklch(0.78 0.15 70 / 0.08)" } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
    };

    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  const glowStyle = {
    background: `radial-gradient(${size}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${color}, transparent 80%)`,
  };

  return { ref, glowStyle };
}

export default useSpotlight;