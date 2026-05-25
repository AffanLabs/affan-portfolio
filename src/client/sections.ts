/**
 * EDIT_HERE: sections.ts
 * 
 * Section visibility toggles and hero keywords.
 * Set any section to false to hide it from the homepage.
 */

export interface SectionConfig {
  /** Show/hide homepage sections */
  visibility: {
    hero: boolean;
    projects: boolean;
    skills: boolean;
    about: boolean;
    services: boolean;
    contact: boolean;
  };
  /** Typewriter rotating keywords */
  keywords: string[];
  /** Identity panel floating labels */
  identityLabels: string[];
  /** Identity panel bottom labels */
  identityBottomLabels: {
    left: { heading: string; sub: string };
    right: { heading: string; sub: string };
  };
}

export const sectionConfig: SectionConfig = {
  visibility: {
    hero: true,
    projects: true,
    skills: true,
    about: true,
    services: true,
    contact: true,
  },
  keywords: ["Robotics", "IoT", "Systems", "Automation", "Web"],
  identityLabels: ["Hardware Systems", "IoT / Embedded", "Robotics / AI"],
  identityBottomLabels: {
    left: { heading: "Hardware", sub: "Robotics · IoT" },
    right: { heading: "Software", sub: "Web · Systems" },
  },
};

export const sections = sectionConfig;

export default sections;