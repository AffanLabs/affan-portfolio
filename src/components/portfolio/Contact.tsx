import { contactConfig, channels, identity } from "@/client/branding";
import { contactContent } from "@/client/content";
import { useInView } from "@/hooks/useInView";

function ContactCard({ channel, index }: { channel: { label: string; value: string; href: string }; index: number }) {
  const { ref, isInView } = useInView<HTMLAnchorElement>({ threshold: 0.5, delay: index * 250, triggerOnce: false });

  return (
    <a
      ref={ref}
      href={channel.href}
      target="_blank"
      rel="noreferrer"
      className={`contact-card-anim ${isInView ? "contact-card-visible" : ""}`}
    >
      <div className="rounded-2xl glass-premium p-6 text-left h-full relative overflow-hidden group hover-contact-premium rgb-border-subtle">
        <div className="absolute top-0 left-0 w-2.5 h-[1px] bg-primary/40" />
        <div className="absolute top-0 left-0 w-[1px] h-2.5 bg-primary/40" />
        <div className="absolute bottom-0 right-0 w-2.5 h-[1px] bg-primary/20" />
        <div className="absolute bottom-0 right-0 w-[1px] h-2.5 bg-primary/20" />

        <div className="relative z-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
            {channel.label}
          </p>
          <p className="mt-2.5 text-[15px] font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
            {channel.value}
          </p>
        </div>
      </div>
    </a>
  );
}

export function Contact() {

  return (
    <section
      id="contact"
      className="py-10 xs:py-14 md:py-20 border-t border-border/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="reveal reveal-blur is-visible">
          <span className="eyebrow">{contactContent.eyebrow}</span>
          <h2
            data-no-fx
            className="mt-3 text-3xl xs:text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            {contactConfig.heading.map((w, i) => (
              <span
                key={`${w}-${i}`}
                data-fx="word"
                style={{ ["--fx-d" as string]: `${i * 80}ms` }}
                className={`fx-word ${i === contactConfig.highlightIndex ? "text-primary" : ""}`}
              >
                {w}
                {i < contactConfig.heading.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {contactConfig.subtext}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
          {channels.map((c, i) => (
            <ContactCard key={c.label} channel={c} index={i} />
          ))}
        </div>
      </div>

      <footer className="relative mt-24 border-t border-border/60 pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono tracking-wider text-muted-foreground/80 gap-3">
          <p>
            © {new Date().getFullYear()} {identity.name} // {contactConfig.sysVersion}
          </p>
          <p className="uppercase tracking-[0.22em] text-primary/60">{contactConfig.footerTagline}</p>
        </div>
      </footer>
    </section>
  );
}
