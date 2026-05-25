import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/data/projects";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";
import { identity } from "@/client/branding";
import { projectDetailContent } from "@/client/content";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: `Project — ${identity.name}` }] };
    return {
      meta: [
        { title: `${p.title} — ${identity.name}` },
        { name: "description", content: p.impact },
        { property: "og:title", content: `${p.title} — ${identity.name}` },
        { property: "og:description", content: p.impact },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  component: ProjectDetail,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
});

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="text-center">
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold"
        >
          {projectDetailContent.retry}
        </button>
      </div>
    </div>
  );
}

function NotFoundComponent() {
  const { slug } = Route.useParams();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="text-center max-w-md">
        <p className="eyebrow justify-center">Not Found</p>
        <h1 className="mt-3 text-3xl font-bold">{projectDetailContent.notFoundMessage.replace("{slug}", slug)}</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold"
        >
          {projectDetailContent.backToPortfolio}
        </Link>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pt-28 xs:pt-32 pb-12 xs:pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
        <div className="absolute inset-0 hero-glow opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <Link
              to="/"
              hash="work"
              className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {projectDetailContent.backLink}
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary border border-primary/25 px-3 py-1 text-[11px] font-medium tracking-wide">
                <span className="h-1 w-1 rounded-full bg-current opacity-70" />
                {project.badge}
              </span>
              <span className="text-[11px] text-muted-foreground tracking-widest tabular-nums">
                / {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-5 text-3xl xs:text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {project.impact}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 hairline" />
            <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries({ ...project.meta, ...project.specs })
                .slice(0, 8)
                .map(([k, v]) => (
                  <div
                    key={k}
                    className="glass-premium rounded-xl p-5 relative overflow-hidden group"
                  >
                    {/* Tech micro line guides on corners */}
                    <div className="absolute top-0 left-0 w-3 h-[1px] bg-primary/45" />
                    <div className="absolute top-0 left-0 w-[1px] h-3 bg-primary/45" />
                    <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-primary/20" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-primary/20" />

                    <dt className="text-[9px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-2 text-sm text-foreground font-semibold tracking-tight">
                      {v}
                    </dd>
                  </div>
                ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-primary/10 bg-secondary/20 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.8)]">
              <img
                src={project.image}
                alt={project.title}
                className={`h-full w-full ${project.fit === "contain" ? "object-contain object-center" : "object-cover object-center"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story sections */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10">
          {/* Sticky side index */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-28 space-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">
              {[
                projectDetailContent.storyLabels.problem,
                projectDetailContent.storyLabels.solution,
                projectDetailContent.storyLabels.components,
                projectDetailContent.storyLabels.breakdown,
                projectDetailContent.storyLabels.challenges,
                projectDetailContent.storyLabels.outcome,
              ].map(
                (label, i) => (
                  <a
                    key={label}
                    href={`#sec-${i}`}
                    className="block hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    <span className="opacity-40 mr-2.5 tabular-nums">0{i + 1} /</span>
                    {label}
                  </a>
                ),
              )}
            </div>
          </aside>

          <div className="md:col-span-9 space-y-20">
            <Story id="sec-0" eyebrow={`01 · ${projectDetailContent.storyLabels.problem}`} title="What needed solving">
              <p className="text-muted-foreground/90">{project.story.problem}</p>
            </Story>

            <Story id="sec-1" eyebrow={`02 · ${projectDetailContent.storyLabels.solution}`} title="How it was built">
              <p className="text-muted-foreground/90">{project.story.solution}</p>
            </Story>

            <Story id="sec-2" eyebrow={`03 · ${projectDetailContent.storyLabels.components}`} title="What's inside">
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {project.story.components.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3.5 rounded-xl border border-primary/10 bg-primary/5 px-4.5 py-3.5 text-sm text-foreground/95 hover:border-primary/30 transition-colors duration-300"
                  >
                    <span className="indicator-dot shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </Story>

            <Story id="sec-3" eyebrow={`04 · ${projectDetailContent.storyLabels.breakdown}`} title="How the pieces fit">
              <div className="grid gap-4">
                {project.story.breakdown.map((b, i) => (
                  <div
                    key={b.title}
                    className="rounded-xl glass-premium p-6 relative overflow-hidden group"
                  >
                    <div className="flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                      <span className="tabular-nums">
                        {String(i + 1).padStart(2, "0")} / SYS_SEG
                      </span>
                      <span className="h-[1px] flex-1 bg-primary/10" />
                    </div>
                    <h4 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                      {b.title}
                    </h4>
                    <p className="mt-2 text-muted-foreground text-[13px] leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                ))}
              </div>
            </Story>

            <Story id="sec-4" eyebrow={`05 · ${projectDetailContent.storyLabels.challenges}`} title="What broke and why">
              <div className="grid gap-4">
                {project.story.challenges.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-xl glass-premium p-6 relative overflow-hidden group"
                  >
                    <h4 className="text-lg font-bold tracking-tight text-foreground">{c.title}</h4>
                    <p className="mt-2 text-muted-foreground text-[13px] leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </Story>

            <Story id="sec-5" eyebrow={`06 · ${projectDetailContent.storyLabels.outcome}`} title="The result">
              <p className="text-lg text-foreground/90 font-medium leading-relaxed">
                {project.story.outcome}
              </p>
            </Story>

            {project.gallery && project.gallery.length > 1 && (
              <Story id="sec-6" eyebrow={projectDetailContent.storyLabels.gallery} title="More views">
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.gallery.map((src, i) => (
                    <div
                      key={src + i}
                      className="aspect-[4/3] overflow-hidden rounded-xl border border-primary/15 bg-secondary/40 shadow-lg"
                    >
                      <img
                        src={src}
                        alt={`${project.title} ${i + 1}`}
                        className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </Story>
            )}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="py-16 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group block rounded-2xl glass-premium p-8 md:p-10 relative overflow-hidden transition-all duration-300"
            >
              {/* corner markers */}
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-primary/45" />
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-primary/45" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="eyebrow flex items-center gap-1.5">
                  <span className="indicator-dot animate-pulse" />
                  {projectDetailContent.nextProject}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground tracking-widest bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                  / {String(idx + 2 > projects.length ? 1 : idx + 2).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                {next.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm max-w-2xl">{next.impact}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
                {projectDetailContent.openSpec}{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Story({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <article id={id} className="scroll-mt-28">
        <span className="eyebrow">{eyebrow}</span>
        <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">{title}</h3>
        <div className="mt-5 text-muted-foreground leading-relaxed">{children}</div>
      </article>
    </Reveal>
  );
}
