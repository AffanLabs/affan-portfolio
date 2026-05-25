/**
 * EDIT_HERE: themeConfig.ts
 *
 * Visual / brand tokens.
 *
 * NOTE: This project uses CSS custom properties (vars) defined in styles.css
 * for the actual rendering. This file documents the semantic meaning of each
 * token so you know which CSS variable to change for a given design decision.
 *
 * To change the color scheme:
 *  1. Open  src/styles.css
 *  2. Find the  :root  block (dark theme is applied on  html.dark)
 *  3. Update the oklch() values for the tokens listed below.
 *
 * Token map (CSS var → semantic role):
 *
 *  --primary           Brand accent color (currently gold/amber)
 *                      → Used for: buttons, glows, dots, highlights, tags
 *
 *  --background        Page background
 *  --foreground        Primary text color
 *  --muted-foreground  Secondary / subdued text
 *  --border            Subtle divider lines
 *  --card              Card surface background
 *  --card-foreground   Text on cards
 *
 * Quick theme presets (replace --primary in styles.css):
 *
 *   Gold / Amber   oklch(0.78 0.15 70)   ← current
 *   Cyan / Teal    oklch(0.75 0.18 200)
 *   Violet         oklch(0.72 0.20 290)
 *   Emerald        oklch(0.74 0.17 160)
 *   Rose           oklch(0.72 0.21 15)
 */
export const themeConfig = {
  /**
   * Human-readable label for the current palette.
   * Purely informational — not used in rendering.
   */
  palette: "Gold / Dark Tech",

  /**
   * If true, the dark class is applied at the html level (see __root.tsx).
   * Changing to false and removing the "dark" class switches to the light theme
   * (you'd also need to define light-mode CSS vars in styles.css).
   */
  defaultDark: true,
} as const;
