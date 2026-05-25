/**
 * EDIT_HERE: services.ts
 *
 * All service cards shown in the Services section.
 * Add or remove entries to match what the client offers.
 */

export interface Service {
  title: string;
  desc: string;
  /** Short category label shown at the bottom of each card (e.g. "Web · Design") */
  category: string;
}

export const services: Service[] = [
  {
    title: "Portfolio Websites",
    desc: "Personal sites that present your work with clarity and confidence.",
    category: "Web · Design",
  },
  {
    title: "Business Landing Pages",
    desc: "Conversion-focused pages with clean design and fast load times.",
    category: "Web · Conversion",
  },
  {
    title: "Responsive Websites",
    desc: "Pixel-perfect across phones, tablets and desktops.",
    category: "Web · Mobile-first",
  },
  {
    title: "Arduino & IoT Solutions",
    desc: "Custom sensor and automation systems tailored to your problem.",
    category: "Hardware · IoT",
  },
  {
    title: "Robotics Projects",
    desc: "Mobile robots and mechanisms built for real-world tasks.",
    category: "Hardware · Robotics",
  },
  {
    title: "Smart Automation Systems",
    desc: "Wi-Fi enabled controls for home, lab or small business.",
    category: "Hardware · Wi-Fi",
  },
  {
    title: "Voice System Integration",
    desc: "Basic voice-triggered or voice-response system setups.",
    category: "Hardware · Audio",
  },
];
