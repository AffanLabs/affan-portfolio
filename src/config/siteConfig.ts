/**
 * EDIT_HERE: siteConfig.ts
 *
 * Global site-level controls:
 *  - section visibility toggles (show/hide whole sections without deleting code)
 *  - nav links
 *  - hero rotating keywords
 *  - identity panel floating labels
 *
 * Set any section to `false` to hide it from the homepage.
 */

// ─── Section visibility toggles ────────────────────────────────────────────
export const sections = {
  hero: true,
  projects: true,
  skills: true,
  about: true,
  services: true,
  contact: true,
} as const;

// ─── Navigation links ───────────────────────────────────────────────────────
// Each entry maps to a hash anchor on the homepage.
export const navLinks = [
  { hash: "top", label: "Home" },
  { hash: "work", label: "Work" },
  { hash: "skills", label: "Skills" },
  { hash: "about", label: "About" },
  { hash: "services", label: "Services" },
  { hash: "contact", label: "Contact" },
] as const;

// ─── Hero rotating typewriter keywords ──────────────────────────────────────
// Words that cycle in the typewriter animation on the hero section.
export const heroKeywords = ["Robotics", "IoT", "Systems", "Automation", "Web"];

// ─── Hero identity panel floating labels ────────────────────────────────────
// The three floating pill labels on the right-hand identity card.
export const identityLabels = ["Hardware Systems", "IoT / Embedded", "Robotics / AI"];

// ─── Hero identity panel bottom labels ──────────────────────────────────────
export const identityBottomLabels = {
  left: { heading: "Hardware", sub: "Robotics · IoT" },
  right: { heading: "Software", sub: "Web · Systems" },
};

// ─── Projects section heading copy ─────────────────────────────────────────
export const projectsSectionCopy = {
  eyebrow: "Selected Work",
  heading: "Real systems, shipped.",
  subtext:
    "A mix of hardware and software projects built to solve practical problems — not demos, not theory.",
};

// ─── Skills section heading copy ───────────────────────────────────────────
export const skillsSectionCopy = {
  eyebrow: "Capabilities",
  heading: "A balanced toolkit.",
  subtext:
    "A focused stack across hardware and software — chosen for reliability and real-world delivery.",
};

// ─── Services section heading copy ─────────────────────────────────────────
export const servicesSectionCopy = {
  eyebrow: "Services",
  heading: "What I can build for you.",
  subtext: "Available for freelance work — hardware, web, or both together.",
};
