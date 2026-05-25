import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ImageSkeleton } from "./ImageSkeleton";
import { projectsContent } from "@/client/content";
import { useInView } from "@/hooks/useInView";
import { useMouseGlow } from "@/hooks/useSpotlight";

function ProjectRow({
  project: p,
  index: i,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref: containerRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const { ref: spotlightRef, glowStyle } = useMouseGlow<HTMLDivElement>({
    size: 400,
    color: "oklch(0.78 0.15 70 / 0.08)",
  });

  const slideDirection = i % 2 === 0 ? "translateX(-16px)" : "translateX(16px)";

  return (
    <div
      ref={containerRef}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0)" : slideDirection,
        transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${i * 100}ms`,
        marginBottom: "1.5rem",
      }}
    >
      <div
        ref={spotlightRef}
        className="project-tilt-card glass-premium group relative overflow-hidden hover-project-premium rgb-border"
        style={{
          borderRadius: "12px",
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={glowStyle}
        />

        <Link
          to="/projects/$slug"
          params={{ slug: p.slug }}
          className="flex flex-col md:flex-row focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-[12px] overflow-hidden relative z-10"
        >
          <div
            className="relative overflow-hidden md:w-[40%] w-full flex-shrink-0 bg-secondary/20 h-[200px] xs:h-[240px] md:h-[280px]"
            style={{ borderRadius: "12px 0 0 12px" }}
          >
            {i === 0 && (
              <span
                className="absolute z-10 uppercase"
                style={{
                  top: "1rem",
                  left: "1rem",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "rgb(var(--primary-rgb))",
                  border: "1px solid rgba(var(--primary-rgb), 0.3)",
                  padding: "3px 10px",
                  borderRadius: "3px",
                  background: "rgba(var(--background-rgb), 0.4)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {projectsContent.featured}
              </span>
            )}
            {p.fit === "contain" && (
              <ImageSkeleton
                src={p.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-40"
                fit="cover"
              />
            )}
            <ImageSkeleton
              src={p.image}
              alt={p.title}
              className={`project-img relative h-full w-full ${
                p.fit === "contain" ? "object-contain object-center" : "object-cover object-center"
              }`}
              fit={p.fit === "contain" ? "contain" : "cover"}
            />
          </div>

          <div className="md:w-[60%] w-full flex flex-col" style={{ padding: "2.5rem" }}>
            <div
              className="uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                opacity: 0.35,
                marginBottom: "0.75rem",
                color: "#fff",
              }}
            >
              {p.badge}
            </div>

            <h3
              className="text-foreground"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.75,
                opacity: 0.5,
                marginBottom: "1.5rem",
                color: "#fff",
              }}
            >
              {p.description}
            </p>

            <div className="mt-auto flex items-end justify-between gap-4 flex-wrap">
              <div className="flex flex-wrap" style={{ gap: "6px" }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      padding: "4px 10px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "4px",
                      opacity: 0.5,
                      color: "#fff",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span
                style={{
                  fontSize: "12px",
                  opacity: 0.4,
                  color: "inherit",
                  whiteSpace: "nowrap",
                }}
              >
                {projectsContent.viewProject}
              </span>
            </div>
          </div>
        </Link>
      </div>

      <style>{`
        .project-tilt-card:hover .project-img {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-10 xs:py-12 md:py-20 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 gloss-depth" />
      <div className="absolute inset-0 gloss-streak" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal-stagger">
          <span className="eyebrow">{projectsContent.eyebrow}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {projectsContent.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {projectsContent.subtext}
          </p>
          <div className="mt-8 hairline" />
        </div>

        <div className="mt-14 mx-auto" style={{ maxWidth: "900px" }}>
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
