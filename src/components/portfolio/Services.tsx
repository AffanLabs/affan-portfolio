import { Reveal } from "./Reveal";
import { services } from "@/data/services";
import { servicesContent } from "@/client/content";
import type { Service } from "@/data/services";
import { useInView } from "@/hooks/useInView";
import { useSpotlight } from "@/hooks/useSpotlight";

function ServiceCard({ s, i, large }: { s: Service; i: number; large?: boolean }) {
  const { ref: inViewRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.3, triggerOnce: false });
  const { ref: spotlightRef, style } = useSpotlight<HTMLDivElement>({
    size: 280,
    color: "oklch(0.78 0.15 70 / 0.07)",
  });

  const ref = (el: HTMLDivElement | null) => {
    (inViewRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    (spotlightRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };

  return (
    <div
      ref={ref}
      className={`glass-premium rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden hover-lift-scale rgb-border-subtle service-card min-h-[160px] xs:min-h-[200px] ${large ? "md:col-span-2" : ""} ${isInView ? "service-anim-in" : ""}`}
      style={{
        transitionDelay: `${i * 100}ms`,
        ...style,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), oklch(0.78 0.15 70 / 0.07), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        <div className="indicator-dot mb-5" />
        <h3 className="text-base font-bold text-foreground tracking-tight mb-2.5">{s.title}</h3>
        <p className="text-[13px] leading-relaxed text-muted-foreground/80">{s.desc}</p>
      </div>

      <div className="relative z-10 mt-5 text-[9px] font-mono uppercase tracking-[0.2em] text-primary/70">
        {s.category}
      </div>
    </div>
  );
}

export function Services() {
  const row1 = services.slice(0, 2);
  const row2 = [services[3], services[5], services[6]];
  const row3 = [services[2], services[4]];

  return (
    <section
      id="services"
      className="py-10 xs:py-12 md:py-20 border-t border-border/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 gloss-depth" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="eyebrow">{servicesContent.eyebrow}</span>
          <h2 className="mt-4 text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            {servicesContent.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
            {servicesContent.subtext}
          </p>
        </Reveal>

        <div className="mt-12 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {row1.map((s, i) => (
              <ServiceCard key={s.title} s={s} i={i} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {row2.map((s, i) => (
              <ServiceCard key={s.title} s={s} i={i + 2} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-1">
              <ServiceCard s={row3[0]} i={5} large={false} />
            </div>
            <div className="md:col-span-2">
              <ServiceCard s={row3[1]} i={6} large={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
