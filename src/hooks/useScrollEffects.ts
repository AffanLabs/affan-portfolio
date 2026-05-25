import { useEffect } from "react";

export function useScrollEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Auto-tag h2 headings with clip-path reveal
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("section h2:not([data-no-fx])"),
    );
    headings.forEach((h) => h.setAttribute("data-fx", "heading"));

    // Generic IO for data-fx elements
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("fx-in");
            el.classList.add("is-visible");
          } else {
            el.classList.remove("fx-in");
            el.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>("[data-fx]").forEach((el) => io.observe(el));
      document.querySelectorAll<HTMLElement>(".reveal-stagger").forEach((el) => io.observe(el));
    };
    observeAll();

    const rescanId = window.setTimeout(observeAll, 300);

    return () => {
      window.clearTimeout(rescanId);
      io.disconnect();
    };
  }, []);
}

export function useNavScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        const nav = document.querySelector<HTMLElement>("header[data-nav]");
        if (!nav) return;
        if (window.scrollY > 50) nav.classList.add("nav-scrolled");
        else nav.classList.remove("nav-scrolled");
      }, 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}

export function useHashScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };

    const mountTimeout = window.setTimeout(handleHashScroll, 350);
    window.addEventListener("hashchange", handleHashScroll);

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;

      try {
        const url = new URL(link.href, window.location.href);
        if (
          url.origin === window.location.origin &&
          url.pathname === window.location.pathname &&
          url.hash
        ) {
          e.preventDefault();
          window.history.pushState(null, "", url.hash);
          handleHashScroll();
        }
      } catch {
        // Skip invalid urls
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.clearTimeout(mountTimeout);
      window.removeEventListener("hashchange", handleHashScroll);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
}

export default { useScrollEffects, useNavScroll, useHashScroll };