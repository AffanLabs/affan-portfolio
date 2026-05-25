/**
 * EDIT_HERE: Client Configuration
 * 
 * This is the central hub for all client-editable content.
 * Edit any of these files to rebrand the portfolio:
 * 
 * - branding.ts   → Name, identity, about, contact info
 * - content.ts    → All labels, buttons, UI text
 * - assets.ts     → URLs, links, image paths
 * - sections.ts   → Section visibility, keywords
 * - animations.ts → Loader text
 */

export {
  branding,
  identity,
  aboutConfig,
  contactConfig,
  channels,
  seoConfig,
  type IdentityConfig,
  type AboutConfig,
  type ContactConfig,
  type ChannelConfig,
  type SeoConfig,
} from "./branding";

export {
  content,
  heroContent,
  identityPanelContent,
  navContent,
  projectsContent,
  skillsContent,
  servicesContent,
  aboutContent,
  contactContent,
  projectDetailContent,
  type HeroContent,
  type IdentityPanelContent,
  type NavContent,
  type ProjectsContent,
  type SkillsContent,
  type ServicesContent,
  type AboutContent,
  type ContactContent,
  type ProjectDetailContent,
} from "./content";

export {
  assets,
  assetPaths,
  socialLinks,
  contactLinks,
  projectImages,
  type AssetPaths,
  type SocialLinks,
  type ContactLinks,
  type ProjectImages,
} from "./assets";

export {
  sections,
  sectionConfig,
  type SectionConfig,
} from "./sections";

export {
  animations,
  loaderContent,
  type LoaderContent,
} from "./animations";