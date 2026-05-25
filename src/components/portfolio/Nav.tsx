import { Link } from "@tanstack/react-router";
import { identity } from "@/client/branding";
import { navContent } from "@/client/content";

export function Nav() {
  return (
    <header data-nav className="fixed top-0 left-0 right-0 z-50 nav-base">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / brand mark */}
        <Link
          to="/"
          hash="top"
          className="font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {identity.name}
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navContent.links.map((l) => (
            <li key={l.hash}>
              <Link
                to="/"
                hash={l.hash}
                className="nav-link hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/projects/$slug"
              params={{ slug: navContent.defaultProjectSlug }}
              className="nav-link hover:text-foreground transition-colors duration-200"
            >
              {navContent.deepDives}
            </Link>
          </li>
        </ul>

        {/* CTA: Hire me */}
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-2 text-xs font-semibold text-primary uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all duration-300 shadow-[0_4px_15px_-5px_rgba(201,168,76,0.15)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover-btn-premium"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          {navContent.hireMe}
        </Link>
      </nav>
    </header>
  );
}
