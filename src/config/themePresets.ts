/**
 * THEME PRESETS - Pre-configured color schemes
 * 
 * HOW TO USE:
 * 1. Import this file
 * 2. Choose a preset or create custom theme object
 * 3. Apply via CSS variables or React context
 * 
 * Example usage:
 *   import { themes } from '@/config/themePresets';
 *   
 *   // Apply premiumDark preset
 *   document.documentElement.style.setProperty('--primary', themes.premiumDark.primary);
 *   document.documentElement.style.setProperty('--primary-rgb', themes.premiumDark.primaryRgb);
 *   // ... repeat for all tokens
 * 
 * Or use with a ThemeProvider component (recommended for React apps)
 * 
 * ─────────────────────────────────────────────────────────────────────────────
 * COLOR FORMAT: All colors use oklch() for perceptual color consistency
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface ThemePreset {
  name: string;
  description: string;
  
  // Brand Colors
  primary: string;
  primaryRgb: string;
  secondary: string;
  secondaryRgb: string;
  accent: string;
  accentRgb: string;
  
  // Backgrounds
  background: string;
  backgroundRgb: string;
  surface: string;
  surfaceRgb: string;
  surface2: string;
  surface2Rgb: string;
  glass: string;
  
  // Text
  text: string;
  textMuted: string;
  textSecondary: string;
  
  // Borders
  border: string;
  borderRgb: string;
  borderSubtle: string;
  
  // Glow Effects
  glow: string;
  glowIntense: string;
  glowSubtle: string;
  
  // Semantic
  success: string;
  warning: string;
  error: string;
  info: string;
}

export const themes: Record<string, ThemePreset> = {
  /**
   * PREMIUM DARK - Current Gold/Amber Tech Theme
   * 
   * Characteristics:
   * - Deep black-navy background (#050608)
   * - Warm gold/amber accent (#C9A84C)
   * - High contrast, cinematic feel
   * - Best for: Tech portfolios, developer sites, premium brands
   */
  premiumDark: {
    name: "Premium Dark",
    description: "Deep cinematic black with warm gold accents - premium tech feel",
    
    primary: "oklch(0.78 0.15 70)",
    primaryRgb: "201 168 76",
    secondary: "oklch(0.75 0.13 60)",
    secondaryRgb: "191 166 60",
    accent: "oklch(0.72 0.20 290)",
    accentRgb: "183 102 232",
    
    background: "oklch(0.08 0.005 260)",
    backgroundRgb: "8 5 260",
    surface: "oklch(0.12 0.005 260)",
    surfaceRgb: "12 5 260",
    surface2: "oklch(0.09 0.005 260)",
    surface2Rgb: "9 5 260",
    glass: "oklch(0.1 0.005 260 / 0.4)",
    
    text: "oklch(0.94 0.004 250)",
    textMuted: "oklch(0.65 0.01 260)",
    textSecondary: "oklch(0.5 0.012 260)",
    
    border: "oklch(1 0 0 / 6%)",
    borderRgb: "255 255 255",
    borderSubtle: "oklch(1 0 0 / 9%)",
    
    glow: "oklch(0.78 0.15 70 / 0.35)",
    glowIntense: "oklch(0.78 0.15 70 / 0.5)",
    glowSubtle: "oklch(0.78 0.15 70 / 0.15)",
    
    success: "oklch(0.74 0.17 160)",
    warning: "oklch(0.78 0.15 70)",
    error: "oklch(0.6 0.18 25)",
    info: "oklch(0.75 0.18 200)",
  },

  /**
   * MINIMAL LIGHT - Clean White Minimal Theme
   * 
   * Characteristics:
   * - Near-white background (#FCFCFD)
   * - Muted gold accent (darker for contrast)
   * - Clean, professional, editorial feel
   * - Best for: Agencies, consultants, minimal brands
   */
  minimalLight: {
    name: "Minimal Light",
    description: "Clean white with refined gold accents - elegant minimal feel",
    
    primary: "oklch(0.55 0.15 45)",
    primaryRgb: "140 38 115",
    secondary: "oklch(0.45 0.12 50)",
    secondaryRgb: "115 30 127",
    accent: "oklch(0.6 0.15 250)",
    accentRgb: "153 38 255",
    
    background: "oklch(0.99 0.002 250)",
    backgroundRgb: "253 1 254",
    surface: "oklch(0.97 0.003 250)",
    surfaceRgb: "247 1 254",
    surface2: "oklch(0.95 0.004 250)",
    surface2Rgb: "242 1 254",
    glass: "oklch(1 0 0 / 0.6)",
    
    text: "oklch(0.2 0.015 260)",
    textMuted: "oklch(0.5 0.01 260)",
    textSecondary: "oklch(0.4 0.01 260)",
    
    border: "oklch(0.92 0.005 255)",
    borderRgb: "235 2 255",
    borderSubtle: "oklch(0.94 0.004 255)",
    
    glow: "oklch(0.55 0.15 45 / 0.2)",
    glowIntense: "oklch(0.55 0.15 45 / 0.35)",
    glowSubtle: "oklch(0.55 0.15 45 / 0.1)",
    
    success: "oklch(0.65 0.15 150)",
    warning: "oklch(0.6 0.15 45)",
    error: "oklch(0.55 0.18 20)",
    info: "oklch(0.7 0.15 200)",
  },

  /**
   * CYBER BLUE - Futuristic Cyan Theme
   * 
   * Characteristics:
   * - Deep navy background
   * - Cyan/teal accent (#4FC3F7)
   * - Sci-fi, tech-forward feel
   * - Best for: SaaS, developers, tech startups
   */
  cyberBlue: {
    name: "Cyber Blue",
    description: "Deep navy with vibrant cyan accents - futuristic tech feel",
    
    primary: "oklch(0.75 0.18 200)",
    primaryRgb: "79 195 247",
    secondary: "oklch(0.7 0.15 180)",
    secondaryRgb: "70 153 204",
    accent: "oklch(0.8 0.20 300)",
    accentRgb: "204 102 255",
    
    background: "oklch(0.08 0.008 250)",
    backgroundRgb: "20 2 255",
    surface: "oklch(0.12 0.006 250)",
    surfaceRgb: "31 2 255",
    surface2: "oklch(0.1 0.006 250)",
    surface2Rgb: "26 2 255",
    glass: "oklch(0.1 0.006 250 / 0.5)",
    
    text: "oklch(0.92 0.004 250)",
    textMuted: "oklch(0.6 0.01 250)",
    textSecondary: "oklch(0.5 0.01 250)",
    
    border: "oklch(1 0 0 / 8%)",
    borderRgb: "255 255 255",
    borderSubtle: "oklch(1 0 0 / 12%)",
    
    glow: "oklch(0.75 0.18 200 / 0.4)",
    glowIntense: "oklch(0.75 0.18 200 / 0.6)",
    glowSubtle: "oklch(0.75 0.18 200 / 0.2)",
    
    success: "oklch(0.7 0.18 160)",
    warning: "oklch(0.75 0.18 50)",
    error: "oklch(0.65 0.2 15)",
    info: "oklch(0.75 0.18 200)",
  },
};

/**
 * Helper function to apply a theme preset to the document
 * Call this in your app initialization or ThemeProvider
 */
export function applyTheme(themeName: string): void {
  const theme = themes[themeName];
  if (!theme) {
    console.warn(`Theme "${themeName}" not found. Available: ${Object.keys(themes).join(', ')}`);
    return;
  }

  const root = document.documentElement;
  
  // Apply all tokens
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--primary-rgb', theme.primaryRgb);
  root.style.setProperty('--secondary', theme.secondary);
  root.style.setProperty('--secondary-rgb', theme.secondaryRgb);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-rgb', theme.accentRgb);
  
  root.style.setProperty('--background', theme.background);
  root.style.setProperty('--background-rgb', theme.backgroundRgb);
  root.style.setProperty('--surface', theme.surface);
  root.style.setProperty('--surface-rgb', theme.surfaceRgb);
  root.style.setProperty('--surface-2', theme.surface2);
  root.style.setProperty('--surface-2-rgb', theme.surface2Rgb);
  root.style.setProperty('--glass', theme.glass);
  
  root.style.setProperty('--text', theme.text);
  root.style.setProperty('--text-muted', theme.textMuted);
  root.style.setProperty('--text-secondary', theme.textSecondary);
  
  root.style.setProperty('--border', theme.border);
  root.style.setProperty('--border-rgb', theme.borderRgb);
  root.style.setProperty('--border-subtle', theme.borderSubtle);
  
  root.style.setProperty('--glow', theme.glow);
  root.style.setProperty('--glow-intense', theme.glowIntense);
  root.style.setProperty('--glow-subtle', theme.glowSubtle);
  
  root.style.setProperty('--success', theme.success);
  root.style.setProperty('--warning', theme.warning);
  root.style.setProperty('--error', theme.error);
  root.style.setProperty('--info', theme.info);
}

/**
 * Get CSS variables as a string for injection
 * Useful for SSR or generating stylesheets
 */
export function getThemeCSS(themeName: string): string {
  const theme = themes[themeName];
  if (!theme) return '';
  
  return `
    --primary: ${theme.primary};
    --primary-rgb: ${theme.primaryRgb};
    --secondary: ${theme.secondary};
    --secondary-rgb: ${theme.secondaryRgb};
    --accent: ${theme.accent};
    --accent-rgb: ${theme.accentRgb};
    --background: ${theme.background};
    --background-rgb: ${theme.backgroundRgb};
    --surface: ${theme.surface};
    --surface-rgb: ${theme.surfaceRgb};
    --surface-2: ${theme.surface2};
    --surface-2-rgb: ${theme.surface2Rgb};
    --glass: ${theme.glass};
    --text: ${theme.text};
    --text-muted: ${theme.textMuted};
    --text-secondary: ${theme.textSecondary};
    --border: ${theme.border};
    --border-rgb: ${theme.borderRgb};
    --border-subtle: ${theme.borderSubtle};
    --glow: ${theme.glow};
    --glow-intense: ${theme.glowIntense};
    --glow-subtle: ${theme.glowSubtle};
    --success: ${theme.success};
    --warning: ${theme.warning};
    --error: ${theme.error};
    --info: ${theme.info};
  `;
}

// Default export for convenience
export default themes;