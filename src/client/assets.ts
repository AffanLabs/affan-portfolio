/**
 * EDIT_HERE: assets.ts
 * 
 * URLs, external links, social profiles, and asset references.
 * Update these to point to your own resources.
 */

export interface AssetPaths {
  /** Project images directory */
  projectImages: string;
}

export const assetPaths: AssetPaths = {
  projectImages: "/",
};

export interface SocialLinks {
  /** Social profile entries */
  profiles: { platform: string; url: string }[];
}

export const socialLinks: SocialLinks = {
  profiles: [
    { platform: "Instagram", url: "https://instagram.com/its_affans" },
    { platform: "WhatsApp", url: "https://wa.me/919930662948" },
    { platform: "GitHub", url: "https://github.com" },
  ],
};

export interface ContactLinks {
  /** Direct contact URLs */
  channels: {
    whatsapp: string;
    instagram: string;
    email: string;
  };
}

export const contactLinks: ContactLinks = {
  channels: {
    whatsapp: "https://wa.me/919930662948?text=HI%20AFFAN,%20I%20AM%20INTERESTED%20IN%20HIRING%20YOU!",
    instagram: "https://instagram.com/its_affans",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=skaffan981@gmail.com&su=Project%20Inquiry&body=Hi%20Affan,%20I%27m%20interested%20in%20hiring%20you%20for%20a%20project.",
  },
};

export interface ProjectImages {
  /** Map of project slugs to image paths */
  [slug: string]: string;
}

export const projectImages: ProjectImages = {
  "smart-vacuum-mopping-robot": "/vacuum.webp",
  "food-serving-robot": "/food serving.webp",
  "arduino-iot-systems": "/Arduino.webp",
  "metal-detection-robot": "/metal detector.webp",
  "voice-based-system": "/voice based systems.webp",
  "web-development-projects": "/web dev.webp",
};

export const assets = {
  paths: assetPaths,
  social: socialLinks,
  contact: contactLinks,
  projectImages,
};

export default assets;