import { aboutConfig } from "@/client/branding";
import { aboutContent } from "@/client/content";
import { useInView } from "@/hooks/useInView";

function FactCard({ label, value, delay }: { label: string; value: string; delay: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.5, delay, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`glass-premium rounded-xl p-5 relative overflow-hidden group rgb-border-subtle fact-card ${isInView ? "fact-animate" : ""}`}
    >
      <div className="absolute top-0 left-0 w-3 h-[1px] bg-primary/45" />
      <div className="absolute top-0 left-0 w-[1px] h-3 bg-primary/45" />
      <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-primary/20" />
      <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-primary/20" />

      <dt className="text-[9px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2.5 text-[15px] font-semibold text-foreground tracking-tight flex items-center gap-1.5">
        {label === "Available" && <span className="indicator-dot animate-pulse" />}
        {value}
      </dd>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="py-6 xs:py-8 md:py-12 border-t border-border/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 gloss-depth" />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="reveal reveal-blur is-visible">
          <span className="eyebrow">{aboutContent.eyebrow}</span>
          <h2 className="mt-4 text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            {aboutConfig.heading}
          </h2>
          <div className="mt-3 hairline" />
        </div>

        <div className="reveal reveal-up is-visible" style={{ transitionDelay: "120ms" }}>
          <div className="mt-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
            {aboutConfig.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutConfig.facts.map((f, i) => (
            <FactCard key={f.label} label={f.label} value={f.value} delay={i * 150} />
          ))}
        </dl>
      </div>
    </section>
  );
}
