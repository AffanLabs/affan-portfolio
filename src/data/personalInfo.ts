/**
 * EDIT_HERE: personalInfo.ts
 *
 * All personal / brand details live here.
 * Change these values — nothing else in the codebase needs to be touched
 * to rebrand this template for a new client.
 */

export const personalInfo = {
  // ─── Identity ────────────────────────────────────────────────────────────
  name: "Affan",
  /** Short name used in the logo mark (e.g. "A.") */
  initial: "A",
  tagline: "Tech Creator",
  /** Shown below the hero heading */
  subheadline: "Hardware Builder & Web Developer",
  /** Longer hero description paragraph */
  heroDescription:
    "I build real-world systems and practical technology solutions — from robots and IoT devices to clean, fast websites.",

  // ─── About section ───────────────────────────────────────────────────────
  aboutHeading:
    "I'm a Diploma AI/ML student building practical systems that solve real-life problems.",
  aboutParagraphs: [
    "My focus is simple: take an everyday problem, design something that actually works, and ship it. That usually means combining hardware — Arduino, ESP8266, sensors, motors — with clean software on top.",
    "I'm especially interested in robotics and IoT, where the physical and digital meet. Whether it's an autonomous robot or a small web app, I care about the same things: clarity, reliability and a good user experience.",
  ],

  /** Quick-facts grid shown in About section */
  facts: [
    { label: "Focus", value: "Hardware + Web" },
    { label: "Studying", value: "Diploma AI/ML" },
    { label: "Based in", value: "India" },
    { label: "Available", value: "Freelance" },
  ],

  // ─── Contact ─────────────────────────────────────────────────────────────
  contactHeading: ["Let's", "build", "something", "useful."],
  contactSubtext:
    "Have a project in mind — a website, an automation idea, or a hardware build? I'd love to hear about it.",
  /** The "highlighted" word in contactHeading (zero-based index) */
  contactHighlightIndex: 3,

  channels: [
    {
      label: "WhatsApp",
      value: "Chat directly",
      href: "https://wa.me/919930662948?text=HI%20AFFAN,%20I%20AM%20INTERESTED%20IN%20HIRING%20YOU!",
    },
    {
      label: "Instagram",
      value: "@its_affans",
      href: "https://instagram.com/its_affans",
    },
    {
      label: "Email",
      value: "skaffan981@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=skaffan981@gmail.com&su=Project%20Inquiry&body=Hi%20Affan,%20I%27m%20interested%20in%20hiring%20you%20for%20a%20project.",
    },
  ],

  // ─── Footer ──────────────────────────────────────────────────────────────
  footerTagline: "Built for precision.",
  /** System version badge shown in footer (cosmetic) */
  sysVersion: "SYS_v1.0.8",

  // ─── SEO / Meta ──────────────────────────────────────────────────────────
  seo: {
    title: "Affan — Tech Creator, Hardware Builder & Web Developer",
    description:
      "Affan builds real-world systems — robotics, IoT, Arduino & ESP8266 projects, smart automation, and clean responsive websites. Available for freelance work.",
    ogTitle: "Affan — Tech Creator",
    ogDescription: "Hardware builder & web developer. Real systems, shipped.",
  },
} as const;
