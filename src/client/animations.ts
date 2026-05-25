/**
 * EDIT_HERE: animations.ts
 * 
 * Animation-related content: loader text, transitions, etc.
 */

export interface LoaderContent {
  /** Loading steps displayed during init */
  steps: string[];
  /** Subtext shown during loading */
  subtext: string;
}

export const loaderContent: LoaderContent = {
  steps: [
    "Initializing system...",
    "Building UI framework...",
    "Generating hero section...",
    "Loading portfolio assets...",
    "Compiling skills database...",
    "Rendering services grid...",
    "Activating contact module...",
    "Launching complete...",
  ],
  subtext: "Building your experience",
};

export const animations = {
  loader: loaderContent,
};

export default animations;