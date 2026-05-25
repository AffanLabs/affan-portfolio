import { useRef } from "react";
import { Floating3DShape } from "./Floating3DShape";
import { identity } from "@/client/branding";
import { heroContent, identityPanelContent } from "@/client/content";
import { sectionConfig } from "@/client/sections";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useIdentityPanelParallax } from "@/hooks/useIdentityPanelParallax";

export function Hero() {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const { displayText } = useTypewriter({
    words: sectionConfig.keywords,
    typeSpeed: 80,
    deleteSpeed: 50,
    pauseDuration: 1500,
  });

  useIdentityPanelParallax(panelRef);

  return (
    <section id="top" className="relative overflow-hidden pt-16 xs:pt-20 pb-12 xs:pb-16 md:pt-28 md:pb-20">
      {/* Static dot grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {/* Animated moving grid */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      {/* Animated gradient glow */}
      <div className="pointer-events-none absolute inset-0 hero-glow opacity-80" />
      {/* Slow light sweep */}
      <div className="pointer-events-none absolute inset-0 light-sweep" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-10 items-center">
        {/* ── Left: copy ──────────────────────────────────────────────── */}
        <div className="text-left relative">
          <Floating3DShape className="absolute -top-4 -right-4 md:-right-16 w-24 h-24 opacity-70" />

          <div className="fade-in-up flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {heroContent.systemStatus}
            </span>
            <span className="text-xs font-medium text-primary tracking-[0.25em] uppercase">
              {identity.tagline}
            </span>
          </div>

          <h1
            data-no-fx
            className="fade-in-up fade-in-up-delay-1 mt-6 text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] relative"
          >
            <span className="relative inline-block">
              <span aria-hidden="true" className="breathe-glow" />
              <span className="relative">{heroContent.heroPrefix} {identity.name}.</span>
            </span>
            <br />
            <span className="text-muted-foreground">{identity.heroPhrase}</span>
          </h1>

          <p className="fade-in-up fade-in-up-delay-2 mt-6 text-base md:text-lg text-muted-foreground font-medium flex items-center gap-2 flex-wrap">
            <span>{identity.subheadline}</span>
            <span className="hidden sm:inline-block h-3 w-px bg-border" />
            <span className="inline-flex items-center gap-2 text-sm text-foreground/80">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {/* Typewriter cycling keyword */}
              <span className="keyword-rotate typing-cursor min-w-[60px]">{displayText}</span>
            </span>
          </p>

          <p className="fade-in-up fade-in-up-delay-3 mt-4 max-w-xl text-base text-muted-foreground/90 leading-relaxed">
            {identity.heroDescription}
          </p>

          <div className="fade-in-up fade-in-up-delay-4 mt-10 flex items-center gap-4 flex-wrap">
            <a href="#work" className="btn-premium-telemetry group hover-btn-premium">
              <span className="btn-premium-inner">
                {heroContent.viewWork}{" "}
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-[0_4px_15px_-5px_rgba(var(--primary-rgb),0.1)] hover-btn-premium"
            >
              {heroContent.contact}
            </a>
          </div>
        </div>

        {/* ── Right: Tech Identity Panel ──────────────────────────────── */}
        <div className="fade-in-up fade-in-up-delay-2 relative hidden md:block group">
          <div
            ref={panelRef}
            className="identity-panel relative aspect-square w-full max-w-[460px] ml-auto"
            style={{
              ["--px" as string]: "0px",
              ["--py" as string]: "0px",
              ["--rx" as string]: "0deg",
              ["--ry" as string]: "0deg",
            }}
          >
            <div className="absolute -inset-8 hero-orb rounded-full opacity-40 blur-2xl" />

            {/* Futuristic corner guides */}
            <div className="absolute -inset-4 border border-primary/10 rounded-[2rem] pointer-events-none transition-all duration-300 group-hover:scale-[1.02] border-dashed">
              <span className="absolute -top-1.5 -left-1.5 text-[8px] font-mono text-primary/40">
                {identityPanelContent.cornerLabels.topLeft}
              </span>
              <span className="absolute -top-1.5 -right-1.5 text-[8px] font-mono text-primary/40">
                {identityPanelContent.cornerLabels.topRight}
              </span>
              <span className="absolute -bottom-2 -left-1.5 text-[8px] font-mono text-primary/40">
                {identityPanelContent.cornerLabels.bottomLeft}
              </span>
              <span className="absolute -bottom-2 -right-1.5 text-[8px] font-mono text-primary/40">
                {identityPanelContent.cornerLabels.bottomRight}
              </span>
            </div>

            <div className="identity-card glass-strong absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 identity-grid opacity-[0.09]" />
              <div className="absolute inset-0 identity-inner-glow pointer-events-none" />
              <div className="absolute -top-1/3 -left-1/3 w-[180%] h-[60%] rotate-[-18deg] bg-gradient-to-r from-transparent via-primary/10 to-transparent identity-sheen" />

              {/* Status tag */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/50 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                {identityPanelContent.statusBadge}
              </div>

              {/* Floating labels from config */}
              <div className="identity-float identity-float-1 absolute top-[22%] right-5 rounded-full border border-primary/10 bg-background/70 backdrop-blur-md px-3.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-foreground/90 font-medium">
                {sectionConfig.identityLabels[0]}
              </div>
              <div className="identity-float identity-float-2 absolute top-[48%] left-4 rounded-full border border-primary/10 bg-background/70 backdrop-blur-md px-3.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-foreground/90 font-medium">
                {sectionConfig.identityLabels[1]}
              </div>
              <div className="identity-float identity-float-3 absolute bottom-[26%] right-8 rounded-full border border-primary/10 bg-background/70 backdrop-blur-md px-3.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-foreground/90 font-medium">
                {sectionConfig.identityLabels[2]}
              </div>

              {/* Center monogram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="identity-center relative">
                  <div className="absolute -inset-10 rounded-full bg-primary/10 blur-2xl" />
                  <div className="relative h-28 w-28 rounded-2xl border border-primary/20 bg-background/80 flex flex-col items-center justify-center shadow-[0_15px_45px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(var(--primary-rgb),0.1)] overflow-hidden">
                    <div className="absolute top-2 right-2 flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <div className="text-3xl font-bold tracking-tight text-foreground select-none">
                      {identity.initial}
                      <span className="text-primary">.</span>
                    </div>
                    <div className="text-[7px] font-mono text-muted-foreground uppercase tracking-widest mt-1">
                      {identityPanelContent.coreLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom labels */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <div>
                  <div className="text-foreground/80 font-semibold">
                    {sectionConfig.identityBottomLabels.left.heading}
                  </div>
                  <div className="mt-1">{sectionConfig.identityBottomLabels.left.sub}</div>
                </div>
                <div className="text-right">
                  <div className="text-foreground/80 font-semibold">
                    {sectionConfig.identityBottomLabels.right.heading}
                  </div>
                  <div className="mt-1">{sectionConfig.identityBottomLabels.right.sub}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
