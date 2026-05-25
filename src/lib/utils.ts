import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get CSS variable as RGB string for canvas/rendering use
 * Returns "r, g, b" format for rgba(var(--primary-rgb), alpha)
 */
export function getThemeColor(cssVar: string): string {
  if (typeof document === "undefined") return "201, 168, 76"; // Default fallback
  const computed = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  // Parse oklch or other format to RGB - for now return stored RGB variable
  // This works with the *-rgb variables defined in tokens.css
  const rgbVar = cssVar.replace("color", "rgb").replace("--", "--");
  const rgbValue = getComputedStyle(document.documentElement).getPropertyValue(rgbVar).trim();
  return rgbValue || "201, 168, 76";
}

export function getPrimaryColor(): string {
  return getThemeColor("--primary-rgb");
}

export function getSecondaryColor(): string {
  return getThemeColor("--secondary-rgb");
}

export function getAccentColor(): string {
  return getThemeColor("--accent-rgb");
}
