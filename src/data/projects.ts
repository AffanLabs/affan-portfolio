export type ProjectMeta = Record<string, string>;
export type ProjectSpecs = Record<string, string>;

export interface ProjectStory {
  problem: string;
  solution: string;
  components: string[];
  breakdown: { title: string; body: string }[];
  challenges: { title: string; body: string }[];
  outcome: string;
}

export interface Project {
  slug: string;
  title: string;
  impact: string;
  description: string;
  tags: string[];
  badge: string;
  image: string;
  fit?: "cover" | "contain";
  gallery?: string[];
  meta: ProjectMeta;
  specs: ProjectSpecs;
  story: ProjectStory;
}

export const projects: Project[] = [
  {
    slug: "smart-vacuum-mopping-robot",
    title: "Smart Vacuum + Mopping Robot",
    impact: "An autonomous floor cleaner that vacuums and mops in a single pass.",
    description:
      "An autonomous floor-cleaning robot that vacuums and mops in a single pass. Built around an ESP8266 controller with custom motor drivers and obstacle handling to reduce manual cleaning effort at home.",
    tags: ["ESP8266", "Robotics", "Custom Hardware"],
    badge: "Featured · Hardware",
    image: "/vacuum.webp",
    gallery: ["/vacuum.webp"],
    meta: { Year: "2025", Type: "Autonomous", Status: "Completed" },
    specs: { Power: "Battery", Control: "ESP8266", Mode: "Autonomous" },
    story: {
      problem:
        "Manual floor cleaning is repetitive and time-consuming. Off-the-shelf robot vacuums are expensive and don't combine vacuuming with wet mopping in one pass.",
      solution:
        "Designed and built a compact two-in-one robot that vacuums dry debris and wet-mops simultaneously, controlled by an ESP8266 with custom motor drivers and obstacle logic.",
      components: [
        "ESP8266 microcontroller",
        "Dual DC motors with custom driver",
        "Vacuum motor and dust chamber",
        "Water tank + microfiber pad",
        "Ultrasonic distance sensors",
        "Li-ion battery pack",
      ],
      breakdown: [
        {
          title: "Drive system",
          body: "Differential drive with two DC motors gives tight turning radius for navigating around furniture.",
        },
        {
          title: "Cleaning module",
          body: "Front vacuum intake pulls debris into a removable chamber; rear microfiber pad mops with a controlled water feed.",
        },
        {
          title: "Control loop",
          body: "ESP8266 reads ultrasonic sensors at ~20Hz and adjusts motor speeds to avoid obstacles in real time.",
        },
      ],
      challenges: [
        {
          title: "Weight balance",
          body: "Adding the water tank shifted the center of gravity. Repositioned the battery to keep traction on the drive wheels.",
        },
        {
          title: "Sensor noise",
          body: "Ultrasonic readings jittered near walls. Added a moving-average filter and a minimum-change threshold.",
        },
      ],
      outcome:
        "A working prototype that cleans a typical room without supervision. Cuts manual cleaning time significantly and proved the dual-action concept works in a compact form factor.",
    },
  },
  {
    slug: "food-serving-robot",
    title: "Food Serving Robot",
    impact: "A service robot that serves food and talks back using a pre-recorded voice system.",
    description:
      "A smart robot designed to serve food and interact with users using a pre-recorded voice system. Built for real-world use in homes or small setups, focusing on automation and human interaction.",
    tags: ["Arduino", "Robotics", "Automation", "Voice System"],
    badge: "Hardware",
    image: "/food%20serving.webp",
    fit: "contain",
    gallery: ["/food%20serving.webp"],
    meta: { Year: "2024", Type: "Service Robot", Status: "Completed" },
    specs: { Power: "Battery", Control: "Arduino", Voice: "Pre-recorded" },
    story: {
      problem:
        "Small restaurants and homes lack affordable automation for serving food at the table.",
      solution:
        "Built a wheeled service robot with a tray platform, line-following navigation, and a pre-recorded voice module that greets and prompts users.",
      components: [
        "Arduino Uno",
        "Geared DC motors + L298N driver",
        "IR line sensors",
        "DFPlayer Mini audio module",
        "Speaker + tray platform",
      ],
      breakdown: [
        {
          title: "Navigation",
          body: "IR sensors track a line path between kitchen and table positions for repeatable delivery.",
        },
        {
          title: "Voice interaction",
          body: "DFPlayer Mini triggers context-specific clips when the robot arrives or waits for the user.",
        },
      ],
      challenges: [
        {
          title: "Audio sync",
          body: "Voice clips clipped under motor noise. Moved audio trigger to a stop event, not while driving.",
        },
      ],
      outcome:
        "A demo-ready service robot that can carry food across a small space and interact naturally with users.",
    },
  },
  {
    slug: "arduino-iot-systems",
    title: "Arduino & IoT Systems",
    impact: "Sensor-driven automation with reliable triggers and Wi-Fi remote control.",
    description:
      "Sensor-driven automation for real-world problems — temperature, motion and environment monitoring with reliable triggers and remote control over Wi-Fi.",
    tags: ["Arduino", "IoT", "Sensors"],
    badge: "Hardware",
    image: "/Arduino.webp",
    gallery: ["/Arduino.webp"],
    meta: { Year: "2024", Type: "IoT", Status: "Ongoing" },
    specs: { Power: "5V DC", Control: "Arduino", Link: "Wi-Fi" },
    story: {
      problem:
        "Everyday spaces lack low-cost monitoring and remote control for lights, fans, and sensors.",
      solution:
        "Built a family of Arduino + ESP-based modules that sense environment data and expose simple Wi-Fi controls through a phone or browser.",
      components: [
        "Arduino Nano / Uno",
        "ESP8266 Wi-Fi",
        "DHT11/22 sensors",
        "PIR motion sensors",
        "Relay modules",
      ],
      breakdown: [
        {
          title: "Sensing",
          body: "Sensors are sampled at fixed intervals and pushed to a lightweight cloud endpoint.",
        },
        {
          title: "Control",
          body: "Relays handle AC loads through opto-isolated triggers for safety.",
        },
      ],
      challenges: [
        {
          title: "Wi-Fi reliability",
          body: "Reconnect logic added so devices recover automatically after router drops.",
        },
      ],
      outcome: "Reusable IoT building blocks that power multiple home and demo automations.",
    },
  },
  {
    slug: "metal-detection-robot",
    title: "Metal Detection Robot",
    impact: "Hands-free metal scanning across larger areas on a drivable chassis.",
    description:
      "A mobile metal-detection platform built for practical scanning. Combines a tuned detection coil with a drivable chassis for hands-free sweeping of larger areas.",
    tags: ["Arduino", "Robotics", "Detection"],
    badge: "Hardware",
    image: "/metal%20detector.webp",
    gallery: ["/metal%20detector.webp"],
    meta: { Year: "2024", Type: "Mobile Platform", Status: "Prototype" },
    specs: { Power: "Battery", Control: "Arduino", Sensor: "Coil" },
    story: {
      problem: "Handheld metal detectors are slow and tiring for scanning open areas.",
      solution:
        "Mounted a tuned detection coil on a remote-driven chassis so an operator can sweep ground hands-free.",
      components: [
        "Arduino Uno",
        "Detection coil + oscillator",
        "DC drive motors",
        "Chassis + wheels",
        "Buzzer + LED indicators",
      ],
      breakdown: [
        {
          title: "Detection",
          body: "Coil oscillator output is read by Arduino and compared against a baseline to flag metal.",
        },
        {
          title: "Mobility",
          body: "Differential drive lets the operator steer in tight patterns.",
        },
      ],
      challenges: [
        {
          title: "Coil interference",
          body: "Motor noise affected detection. Shielded the coil leads and added a startup calibration.",
        },
      ],
      outcome:
        "A working prototype that detects ferrous objects while in motion across a test area.",
    },
  },
  {
    slug: "voice-based-system",
    title: "Voice-Based System",
    impact: "Pre-recorded voice responses triggered by user input — ready for kiosks and demos.",
    description:
      "An interactive system that responds with pre-recorded voice clips triggered by user input — useful for kiosks, guided demos and accessibility prototypes.",
    tags: ["Embedded", "Audio", "Automation"],
    badge: "Hardware",
    image: "/voice%20based%20systems.webp",
    gallery: ["/voice%20based%20systems.webp"],
    meta: { Year: "2023", Type: "Embedded", Status: "Prototype" },
    specs: { Power: "5V DC", Trigger: "Input", Output: "Audio" },
    story: {
      problem: "Static kiosks and demos feel lifeless without spoken feedback.",
      solution:
        "An embedded board plays context-specific voice clips when buttons or sensors are triggered.",
      components: [
        "Microcontroller",
        "DFPlayer Mini",
        "MicroSD card with audio bank",
        "Buttons / sensor inputs",
        "Speaker",
      ],
      breakdown: [
        {
          title: "Input mapping",
          body: "Each input triggers a specific track from the audio bank with debounce logic.",
        },
      ],
      challenges: [
        { title: "Track latency", body: "Reduced playback delay by preloading the index on boot." },
      ],
      outcome: "A reusable voice module dropped into multiple demo projects.",
    },
  },
  {
    slug: "web-development-projects",
    title: "Web Development Projects",
    impact: "Clean, fast, responsive sites with attention to typography and clarity.",
    description:
      "Clean, responsive websites for portfolios, small businesses and landing pages — built with attention to typography, performance and clarity.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    badge: "Software",
    image: "/web%20dev.webp",
    gallery: ["/web%20dev.webp"],
    meta: { Year: "2024", Type: "Web", Status: "Ongoing" },
    specs: { Stack: "React", Focus: "Performance", Style: "Minimal" },
    story: {
      problem: "Many small business sites are slow, cluttered, and hard to maintain.",
      solution:
        "Built lightweight, responsive sites with React and modern CSS focused on speed, clarity, and easy edits.",
      components: ["React", "TypeScript", "Tailwind / modern CSS", "Vite / TanStack Start"],
      breakdown: [
        {
          title: "Performance",
          body: "Lazy-loaded images, minimal JS, and clean semantic HTML for fast first paint.",
        },
        {
          title: "Design system",
          body: "Consistent tokens for color, spacing, and type for a premium feel.",
        },
      ],
      challenges: [
        {
          title: "Cross-device polish",
          body: "Tuned breakpoints and type scale to feel right from phone to desktop.",
        },
      ],
      outcome: "Production sites that load fast, look clean, and stay easy to update.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
