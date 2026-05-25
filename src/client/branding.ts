/**
 * EDIT_HERE: branding.ts
 * 
 * Core identity and brand identifiers.
 * Change these values to rebrand the entire portfolio.
 */

export interface IdentityConfig {
  /** Full name displayed in hero */
  name: string;
  /** Short name/initial for logo (e.g., "A.") */
  initial: string;
  /** Professional tagline (e.g., "Tech Creator") */
  tagline: string;
  /** Subheadline shown below hero heading */
  subheadline: string;
  /** Longer hero description paragraph */
  heroDescription: string;
  /** Short hero phrase (e.g., "I build real systems.") */
  heroPhrase: string;
}

export const identity: IdentityConfig = {
  name: "Affan",
  initial: "A",
  tagline: "Tech Creator",
  subheadline: "Hardware Builder & Web Developer",
  heroDescription:
    "I build real-world systems and practical technology solutions — from robots and IoT devices to clean, fast websites.",
  heroPhrase: "I build real systems.",
};

export interface AboutConfig {
  /** About section heading */
  heading: string;
  /** About section paragraphs */
  paragraphs: string[];
  /** Quick-facts grid (label + value pairs) */
  facts: { label: string; value: string }[];
}

export const aboutConfig: AboutConfig = {
  heading: "I'm a Diploma AI/ML student building practical systems that solve real-life problems.",
  paragraphs: [
    "My focus is simple: take an everyday problem, design something that actually works, and ship it. That usually means combining hardware — Arduino, ESP8266, sensors, motors — with clean software on top.",
    "I'm especially interested in robotics and IoT, where the physical and digital meet. Whether it's an autonomous robot or a small web app, I care about the same things: clarity, reliability and a good user experience.",
  ],
  facts: [
    { label: "Focus", value: "Hardware + Web" },
    { label: "Studying", value: "Diploma AI/ML" },
    { label: "Based in", value: "India" },
    { label: "Available", value: "Freelance" },
  ],
};

export interface ContactConfig {
  /** Contact heading words (array for styling) */
  heading: string[];
  /** Highlight index for styling a specific word */
  highlightIndex: number;
  /** Contact section subtext */
  subtext: string;
  /** Footer tagline */
  footerTagline: string;
  /** System version badge */
  sysVersion: string;
}

export const contactConfig: ContactConfig = {
  heading: ["Let's", "build", "something", "useful."],
  highlightIndex: 3,
  subtext: "Have a project in mind— a website, an automation idea, or a hardware build? I'd love to hear about it.",
  footerTagline: "Built for precision.",
  sysVersion: "SYS_v1.0.8",
};

export interface ChannelConfig {
  label: string;
  value: string;
  href: string;
}

export const channels: ChannelConfig[] = [
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
];

export interface SeoConfig {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export const seoConfig: SeoConfig = {
  title: "Affan — Tech Creator, Hardware Builder & Web Developer",
  description:
    "Affan builds real-world systems — robotics, IoT, Arduino & ESP8266 projects, smart automation, and clean responsive websites. Available for freelance work.",
  ogTitle: "Affan — Tech Creator",
  ogDescription: "Hardware builder & web developer. Real systems, shipped.",
};

export const branding = {
  identity,
  about: aboutConfig,
  contact: contactConfig,
  channels,
  seo: seoConfig,
};

export default branding;