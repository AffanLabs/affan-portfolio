/**
 * EDIT_HERE: skills.ts
 *
 * All skill groups shown in the Skills / Capabilities section.
 * Add, remove, or rename groups and items freely.
 */

export interface SkillGroup {
  /** Heading for this group */
  title: string;
  /** One-line caption shown under the heading */
  caption: string;
  /** System layer label shown in top-right badge (e.g. "SYS_HW") */
  systemLabel: string;
  /** Full layer label shown in top-left badge (e.g. "Hardware Layer") */
  layerLabel: string;
  /** Individual skill tags */
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Hardware & Systems",
    caption: "Building the physical layer",
    systemLabel: "SYS_HW",
    layerLabel: "Hardware Layer",
    items: [
      "Arduino",
      "ESP8266",
      "Sensors & Automation",
      "Motor Control",
      "Circuit Design",
      "Robotics",
    ],
  },
  {
    title: "Software",
    caption: "Clean, fast interfaces",
    systemLabel: "SYS_SW",
    layerLabel: "Application Layer",
    items: ["HTML", "CSS", "JavaScript", "Basic React", "Debugging"],
  },
];
