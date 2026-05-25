import { useRef } from "react";
import { skillGroups } from "@/data/skills";
import { skillsContent } from "@/client/content";
import { useInView } from "@/hooks/useInView";

function SkillItem({ skill, delay, fromLeft }: { skill: string; delay: number; fromLeft: boolean }) {
  const { ref, isInView } = useInView<HTMLLIElement>({ threshold: 0.1, delay, triggerOnce: true });

  return (
    <li
      ref={ref}
      className={`skill-tag rounded-full border border-primary/10 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-foreground/90 hover-skill ${isInView ? (fromLeft ? "skill-fly-left" : "skill-fly-right") : ""}`}
    >
      {skill}
    </li>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-10 xs:py-12 md:py-20 border-t border-border/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 gloss-depth" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal reveal-blur is-visible">
          <span className="eyebrow">{skillsContent.eyebrow}</span>
          <h2 className="mt-4 text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {skillsContent.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {skillsContent.subtext}
          </p>
          <div className="mt-8 hairline" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <div
              key={g.title}
              className={`reveal reveal-${i === 0 ? "left" : "right"} is-visible`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="rounded-2xl glass-premium p-7 md:p-8 relative overflow-hidden group hover-card-premium rgb-border-subtle">
                <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

                <div className="flex items-center justify-between">
                  <span className="eyebrow flex items-center gap-1.5">
                    <span className="indicator-dot" />
                    {g.layerLabel}
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                    {g.systemLabel} // {g.items.length.toString().padStart(2, "0")} {skillsContent.unitsSuffix}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground tracking-tight">
                  {g.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.caption}</p>
                <div className="mt-5 hairline" />

                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s, idx) => (
                    <SkillItem key={s} skill={s} delay={idx * 120} fromLeft={i === 0} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}