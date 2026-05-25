import { useScrollEffects, useNavScroll, useHashScroll } from "@/hooks/useScrollEffects";

export function ScrollFx() {
  useScrollEffects();
  useNavScroll();
  useHashScroll();

  return null;
}
