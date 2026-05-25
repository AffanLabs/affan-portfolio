# EDIT_HERE.md — Where to Change Things

A complete guide to customising this portfolio template for a new client.
Every task below can be done without touching core logic or animations.

---

## 1. Personal Information (name, tagline, bio, contact)

**File:** `src/data/personalInfo.ts`

| What to change                      | Key in the file                       |
| ----------------------------------- | ------------------------------------- |
| Name                                | `name`                                |
| Logo initial (e.g. "A.")            | `initial`                             |
| Badge tagline (e.g. "Tech Creator") | `tagline`                             |
| Subtitle below name                 | `subheadline`                         |
| Hero paragraph                      | `heroDescription`                     |
| About section heading               | `aboutHeading`                        |
| About paragraphs                    | `aboutParagraphs` (array)             |
| Quick-facts grid                    | `facts` (array of `{ label, value }`) |
| Contact section heading words       | `contactHeading` (array)              |
| Contact subtext                     | `contactSubtext`                      |
| WhatsApp / Instagram / Email links  | `channels` (array)                    |
| Footer tagline                      | `footerTagline`                       |
| SEO title / description             | `seo` object                          |

---

## 2. Projects

**File:** `src/data/projects.ts`

Each entry in the `projects` array is one project card + detail page.

Fields per project:

- `slug` — URL path (e.g. `/projects/my-project`)
- `title` — shown on card and detail page
- `impact` — one-line tagline on the card
- `description` — longer description paragraph
- `tags` — technology tags (array of strings)
- `badge` — small label top-left of card (e.g. "Featured · Hardware")
- `image` — path to image in `/public/` (e.g. `"/vacuum.webp"`)
- `meta` — key/value pairs shown in sidebar
- `specs` — key/value pairs shown in specs block
- `story` — full project story for the detail page

**To add a project:** copy an existing entry and change its values.
**To remove a project:** delete the entry from the array.

---

## 3. Skills

**File:** `src/data/skills.ts`

Each `SkillGroup` has:

- `title` — group heading
- `caption` — short subtitle
- `systemLabel` — badge code (e.g. `"SYS_HW"`)
- `layerLabel` — layer label (e.g. `"Hardware Layer"`)
- `items` — array of skill tag strings

Add/remove skill tags freely. Add new groups by adding objects to the array.

---

## 4. Services

**File:** `src/data/services.ts`

Each service has `title`, `desc`, and `category`.
Add or remove objects from the `services` array.

---

## 5. Colors / Theme

**File:** `src/styles.css` (look for the `:root` and `html.dark` blocks)

The primary brand accent is `--primary`. Change its `oklch()` value to recolor:

- buttons, glows, dots, tags, highlights

Quick presets (paste into `--primary`):

```
Gold / Amber  → oklch(0.78 0.15 70)    ← current
Cyan / Teal   → oklch(0.75 0.18 200)
Violet        → oklch(0.72 0.20 290)
Emerald       → oklch(0.74 0.17 160)
Rose          → oklch(0.72 0.21 15)
```

See `src/config/themeConfig.ts` for a full token map.

---

## 6. Section Visibility

**File:** `src/config/siteConfig.ts`

Set any section to `false` to hide it completely:

```ts
export const sections = {
  hero: true,
  projects: true,
  skills: false, // ← hidden
  about: true,
  services: true,
  contact: true,
};
```

---

## 7. Navigation Links

**File:** `src/config/siteConfig.ts` → `navLinks` array

Each entry: `{ hash: "anchor-id", label: "Display Name" }`

---

## 8. Hero Typewriter Keywords

**File:** `src/config/siteConfig.ts` → `heroKeywords` array

Words that cycle in the animated typewriter on the hero section.

---

## 9. Hero Identity Panel Labels

**File:** `src/config/siteConfig.ts`

- `identityLabels` — three floating pill labels on the card
- `identityBottomLabels` — the left/right footer labels on the card

---

## 10. Images

All images live in `/public/`. Reference them in `src/data/projects.ts` using `/filename.webp`.

Recommended: use `.webp` format for best performance. The project includes an
`optimize-images.cjs` script that converts JPEG → WebP:

```bash
node optimize-images.cjs
```

---

## 11. Section Heading Copy (eyebrow, heading, subtext)

**File:** `src/config/siteConfig.ts`

- `projectsSectionCopy`
- `skillsSectionCopy`
- `servicesSectionCopy`

---

## Quick-Start Checklist for a New Client

- [ ] Update `src/data/personalInfo.ts` — name, bio, contact links
- [ ] Update `src/data/projects.ts` — replace all project entries
- [ ] Update `src/data/skills.ts` — replace skill groups
- [ ] Update `src/data/services.ts` — replace service cards
- [ ] Update `src/config/siteConfig.ts` — toggle sections, keywords, copy
- [ ] Replace images in `/public/`
- [ ] Update `--primary` in `src/styles.css` for brand color
- [ ] Run `npm run build` to verify no TypeScript errors
