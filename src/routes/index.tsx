import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollFx } from "@/components/portfolio/ScrollFx";
import { SectionDivider } from "@/components/portfolio/SectionDivider";
import { sectionConfig } from "@/client/sections";
import { seoConfig } from "@/client/branding";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: seoConfig.title },
      { name: "description", content: seoConfig.description },
      { property: "og:title", content: seoConfig.ogTitle },
      { property: "og:description", content: seoConfig.ogDescription },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollFx />
      <Nav />

      {/* Each section is conditionally rendered based on sectionConfig toggles */}
      {sectionConfig.visibility.hero && <Hero />}

      {sectionConfig.visibility.projects && (
        <>
          <SectionDivider />
          <Projects />
        </>
      )}

      {sectionConfig.visibility.skills && (
        <>
          <SectionDivider />
          <Skills />
        </>
      )}

      {sectionConfig.visibility.about && (
        <>
          <SectionDivider />
          <About />
        </>
      )}

      {sectionConfig.visibility.services && (
        <>
          <SectionDivider />
          <Services />
        </>
      )}

      {sectionConfig.visibility.contact && (
        <>
          <SectionDivider />
          <Contact />
        </>
      )}
    </main>
  );
}
