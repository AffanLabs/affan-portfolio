# Client Setup Guide

This guide explains how to customize and rebrand this portfolio template for your own use.

---

## Quick Start

All client-editable content lives in `src/client/`. Edit any of these files to change the portfolio:

| File | Purpose |
|------|---------|
| `branding.ts` | Name, identity, about, contact info |
| `content.ts` | Labels, buttons, UI text |
| `assets.ts` | URLs, links, image paths |
| `sections.ts` | Section visibility, hero keywords |
| `animations.ts` | Loader text |

---

## Changing Your Name & Identity

Edit `src/client/branding.ts`:

```typescript
export const identity: IdentityConfig = {
  name: "Your Name",        // Full name
  initial: "Y",            // Logo initial
  tagline: "Your Title",    // e.g., "Developer"
  subheadline: "Brief tagline",
  heroDescription: "Longer description shown in hero",
  heroPhrase: "Short headline phrase",
};
```

---

## Changing Projects

Projects are defined in `src/data/projects.ts`. Each project has:

- `title` - Project name
- `impact` - One-line impact statement
- `description` - Detailed description
- `tags` - Technology tags
- `badge` - Category badge
- `image` - Main image path
- `story` - Detailed case study sections

### Adding a New Project

```typescript
{
  slug: "your-project-slug",
  title: "Your Project Name",
  impact: "What it solves",
  description: "Full description",
  tags: ["Tag1", "Tag2"],
  badge: "Category",
  image: "/your-image.webp",
  // ... more fields
}
```

---

## Changing Colors

Colors are CSS custom properties in `src/styles.css`. Find the `:root` block and update the `oklch()` values.

```css
:root {
  --primary: oklch(0.78 0.15 70);  /* Change this for brand color */
  /* ... other tokens */
}
```

### Quick Color Presets

| Theme | Primary Color |
|-------|---------------|
| Gold (default) | `oklch(0.78 0.15 70)` |
| Cyan/Teal | `oklch(0.75 0.18 200)` |
| Violet | `oklch(0.72 0.20 290)` |
| Emerald | `oklch(0.74 0.17 160)` |
| Rose | `oklch(0.72 0.21 15)` |

---

## Changing Services

Edit `src/data/services.ts`:

```typescript
export const services: Service[] = [
  {
    title: "Service Name",
    desc: "What you offer",
    category: "Category · Tag",
  },
  // Add more services...
];
```

---

## Changing Skills

Edit `src/data/skills.ts`:

```typescript
export const skillGroups: SkillGroup[] = [
  {
    title: "Group Title",
    caption: "Group description",
    systemLabel: "SYS_CODE",  // Badge text (e.g., SYS_HW)
    layerLabel: "Layer Name", // Full layer name
    items: ["Skill1", "Skill2"],  // Skill tags
  },
];
```

---

## Replacing Images

### Project Images

Place images in the `public/` folder, then update the image path in `src/data/projects.ts`:

```typescript
image: "/your-image.webp",
```

### Other Assets

Update `src/client/assets.ts` for URLs and links.

---

## Changing Section Visibility

Edit `src/client/sections.ts` to show/hide sections:

```typescript
export const sectionConfig: SectionConfig = {
  visibility: {
    hero: true,      // Set to false to hide
    projects: true,
    skills: true,
    about: true,
    services: true,
    contact: true,
  },
  // ...
};
```

---

## Changing Hero Keywords

The rotating typewriter keywords are in `src/client/sections.ts`:

```typescript
keywords: ["Word1", "Word2", "Word3"],
```

---

## Changing Loader Text

Edit `src/client/animations.ts`:

```typescript
export const loaderContent: LoaderContent = {
  steps: [
    "Step 1...",
    "Step 2...",
    // Add/remove steps
  ],
  subtext: "Loading message",
};
```

---

## SEO Configuration

Edit the SEO section in `src/client/branding.ts`:

```typescript
export const seoConfig: SeoConfig = {
  title: "Your Name — Your Title",
  description: "Your site description",
  ogTitle: "Open Graph title",
  ogDescription: "Open Graph description",
};
```

---

## Navigation

Update nav links in `src/client/content.ts`:

```typescript
export const navContent: NavContent = {
  links: [
    { hash: "top", label: "Home" },
    { hash: "work", label: "Work" },
    // Add more links...
  ],
  deepDives: "Deep Dives",
  hireMe: "Hire me",
};
```

---

## Running the Development Server

```bash
npm run dev
```

---

## Building for Production

```bash
npm run build
```

---

## Need Help?

All `EDIT_HERE` comments in the codebase indicate places you should edit. Look for these markers to find customization points quickly.