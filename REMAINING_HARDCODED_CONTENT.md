# REMAINING HARDCODED CONTENT

## Overview
After refactoring, this documents any hardcoded content that remains in components but could potentially be centralized.

## Verified: Content Successfully Moved to @/client

These items were identified and moved to centralized config:

| Item | Old Location | New Location |
|------|--------------|--------------|
| Name "Affan" | Hero.tsx, Nav.tsx | branding.ts:identity.name |
| Initial "A" | Hero.tsx, Loader.tsx | branding.ts:identity.initial |
| Tagline "Tech Creator" | Hero.tsx | branding.ts:identity.tagline |
| "System Online" | Hero.tsx | content.ts:heroContent.systemStatus |
| "I build real systems." | Hero.tsx | branding.ts:identity.heroPhrase |
| "View Work" | Hero.tsx | content.ts:heroContent.viewWork |
| "Contact" button | Hero.tsx | content.ts:heroContent.contact |
| "Active [SYS_v1.0.4]" | Hero.tsx | content.ts:identityPanelContent.statusBadge |
| "CORE ENGINE" | Hero.tsx | content.ts:identityPanelContent.coreLabel |
| Corner labels [0,0], etc. | Hero.tsx | content.ts:identityPanelContent.cornerLabels |
| Identity floating labels | Hero.tsx | sections.ts:sectionConfig.identityLabels |
| Hardware/Software labels | Hero.tsx | sections.ts:sectionConfig.identityBottomLabels |
| Typewriter keywords | Hero.tsx | sections.ts:sectionConfig.keywords |
| Nav links | Nav.tsx | content.ts:navContent.links |
| "Deep Dives" | Nav.tsx | content.ts:navContent.deepDives |
| "Hire me" | Nav.tsx | content.ts:navContent.hireMe |
| Projects section text | Projects.tsx | content.ts:projectsContent |
| "Featured" badge | Projects.tsx | content.ts:projectsContent.featured |
| "View Project →" | Projects.tsx | content.ts:projectsContent.viewProject |
| Skills section text | Skills.tsx | content.ts:skillsContent |
| "UNITS" suffix | Skills.tsx | content.ts:skillsContent.unitsSuffix |
| Services section text | Services.tsx | content.ts:servicesContent |
| About section | About.tsx | branding.ts:aboutConfig + content.ts |
| Contact section | Contact.tsx | branding.ts + content.ts |
| Footer tagline | Contact.tsx | branding.ts:contactConfig.footerTagline |
| "SYS_v1.0.8" | Contact.tsx | branding.ts:contactConfig.sysVersion |
| Loader steps | Loader.tsx | animations.ts:loaderContent.steps |
| Project detail labels | projects.$slug.tsx | content.ts:projectDetailContent |
| SEO meta | index.tsx | branding.ts:seoConfig |

## Remaining Hardcoded (By Design)

These items are intentionally hardcoded as they are structural/technical:

### Components Using Data Files (Not Hardcoded)
- Projects use `src/data/projects.ts` - Project data comes from file
- Services use `src/data/services.ts` - Service data comes from file
- Skills use `src/data/skills.ts` - Skill groups come from file

### Visual/CSS Values (Acceptable)
- Animation timings, CSS class names
- Color values (in CSS variables, not here)
- Padding/margin values
- Font sizes

### Structural Elements
- HTML element structure
- Component composition
- Conditional logic

## Potential Future Improvements

If additional customization is needed, these could be moved:

1. **Project Detail Page**
   - Hardcoded labels like "Problem", "Solution" - Already in projectDetailContent
   - "01 · Problem", "02 · Solution" - Already in projectDetailContent.storyLabels
   - Section counts (6 sections) - Could be dynamic

2. **Skills**
   - Layer labels like "Hardware Layer" - Still in data/skills.ts (acceptable)

3. **Services**
   - Grid layout (row1, row2, row3) - Could be configurable
   - Card sizing (large vs normal) - Could be configurable

## Conclusion

All user-facing text is now centralized. The remaining hardcoded content is either:
- Data that should come from files (projects, services, skills)
- Technical/structural elements that don't need customization
- CSS/visual values that belong in styles.css

The refactoring goal has been achieved - all branding, labels, and content that a client would want to change is now in `src/client/`.