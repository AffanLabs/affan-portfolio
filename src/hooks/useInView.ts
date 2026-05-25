import { useEffect, useRef, useState, useCallback } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useInView<T extends HTMLElement>(options: UseInViewOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = false, delay = 0 } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (triggerOnce && hasTriggered) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const applyView = () => {
              if (delay > 0) {
                setTimeout(() => setIsInView(true), delay);
              } else {
                setIsInView(true);
              }
              if (triggerOnce) setHasTriggered(true);
            };
            if (delay > 0 && !triggerOnce) {
              setTimeout(() => setIsInView(true), delay);
            } else {
              applyView();
            }
          } else {
            if (!triggerOnce) {
              setIsInView(false);
            }
          }
        });
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered]);

  return { ref, isInView };
}

export function useInViewCallback<T extends HTMLElement>(
  onInView: () => void,
  options: UseInViewOptions = {},
) {
  const ref = useRef<T | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasTriggered.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          onInView();
        }
      },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin ?? "0px 0px -50px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [onInView, options.threshold, options.rootMargin]);

  return ref;
}

export default useInView;