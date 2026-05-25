/**
 * EDIT_HERE: content.ts
 * 
 * All visible text content, labels, buttons, and UI strings.
 * These are the strings users see on the website.
 */

export interface HeroContent {
  /** Status badge text */
  systemStatus: string;
  /** Hero headline prefix */
  heroPrefix: string;
  /** View work button */
  viewWork: string;
  /** Contact button */
  contact: string;
}

export const heroContent: HeroContent = {
  systemStatus: "System Online",
  heroPrefix: "Hi, I'm",
  viewWork: "View Work",
  contact: "Contact",
};

export interface IdentityPanelContent {
  /** Status badge text with version */
  statusBadge: string;
  /** Center monogram label */
  coreLabel: string;
  /** Bottom left heading */
  hardwareHeading: string;
  /** Bottom left subtext */
  hardwareSub: string;
  /** Bottom right heading */
  softwareHeading: string;
  /** Bottom right subtext */
  softwareSub: string;
  /** Corner coordinate labels */
  cornerLabels: { topLeft: string; topRight: string; bottomLeft: string; bottomRight: string };
}

export const identityPanelContent: IdentityPanelContent = {
  statusBadge: "Active [SYS_v1.0.4]",
  coreLabel: "CORE ENGINE",
  hardwareHeading: "Hardware",
  hardwareSub: "Robotics · IoT",
  softwareHeading: "Software",
  softwareSub: "Web · Systems",
  cornerLabels: {
    topLeft: "[0,0]",
    topRight: "[460,0]",
    bottomLeft: "[0,460]",
    bottomRight: "[460,460]",
  },
};

export interface NavContent {
  /** Nav link labels */
  links: { hash: string; label: string }[];
  /** Deep dives link label */
  deepDives: string;
  /** Hire me button */
  hireMe: string;
  /** Default project slug for deep dives */
  defaultProjectSlug: string;
}

export const navContent: NavContent = {
  links: [
    { hash: "top", label: "Home" },
    { hash: "work", label: "Work" },
    { hash: "skills", label: "Skills" },
    { hash: "about", label: "About" },
    { hash: "services", label: "Services" },
    { hash: "contact", label: "Contact" },
  ],
  deepDives: "Deep Dives",
  hireMe: "Hire me",
  defaultProjectSlug: "smart-vacuum-mopping-robot",
};

export interface ProjectsContent {
  /** Section eyebrow */
  eyebrow: string;
  /** Section heading */
  heading: string;
  /** Section subtext */
  subtext: string;
  /** Featured badge */
  featured: string;
  /** View project link */
  viewProject: string;
}

export const projectsContent: ProjectsContent = {
  eyebrow: "Selected Work",
  heading: "Real systems, shipped.",
  subtext: "A mix of hardware and software projects built to solve practical problems — not demos, not theory.",
  featured: "Featured",
  viewProject: "View Project →",
};

export interface SkillsContent {
  /** Section eyebrow */
  eyebrow: string;
  /** Section heading */
  heading: string;
  /** Section subtext */
  subtext: string;
  /** Units suffix */
  unitsSuffix: string;
}

export const skillsContent: SkillsContent = {
  eyebrow: "Capabilities",
  heading: "A balanced toolkit.",
  subtext: "A focused stack across hardware and software — chosen for reliability and real-world delivery.",
  unitsSuffix: "UNITS",
};

export interface ServicesContent {
  /** Section eyebrow */
  eyebrow: string;
  /** Section heading */
  heading: string;
  /** Section subtext */
  subtext: string;
}

export const servicesContent: ServicesContent = {
  eyebrow: "Services",
  heading: "What I can build for you.",
  subtext: "Available for freelance work — hardware, web, or both together.",
};

export interface AboutContent {
  /** Section eyebrow */
  eyebrow: string;
}

export const aboutContent: AboutContent = {
  eyebrow: "About",
};

export interface ContactContent {
  /** Section eyebrow */
  eyebrow: string;
}

export const contactContent: ContactContent = {
  eyebrow: "Contact",
};

export interface ProjectDetailContent {
  /** Back to work link */
  backLink: string;
  /** Retry button */
  retry: string;
  /** Back to portfolio link */
  backToPortfolio: string;
  /** Not found message */
  notFoundMessage: string;
  /** Next project label */
  nextProject: string;
  /** Open spec link */
  openSpec: string;
  /** Story section labels */
  storyLabels: {
    problem: string;
    solution: string;
    components: string;
    breakdown: string;
    challenges: string;
    outcome: string;
    gallery: string;
  };
}

export const projectDetailContent: ProjectDetailContent = {
  backLink: "← All Work",
  retry: "Retry",
  backToPortfolio: "Back to portfolio",
  notFoundMessage: 'Project "{slug}" not found',
  nextProject: "Next Project",
  openSpec: "Open Spec",
  storyLabels: {
    problem: "Problem",
    solution: "Solution",
    components: "Components",
    breakdown: "Breakdown",
    challenges: "Challenges",
    outcome: "Outcome",
    gallery: "Gallery",
  },
};

export const content = {
  hero: heroContent,
  identityPanel: identityPanelContent,
  nav: navContent,
  projects: projectsContent,
  skills: skillsContent,
  services: servicesContent,
  about: aboutContent,
  contact: contactContent,
  projectDetail: projectDetailContent,
};

export default content;