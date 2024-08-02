import { derived, writable } from "svelte/store";
import type { PatternType } from "./types";

export let selectedPatternKey = writable("pattern-1");
export let selectedElement = writable<AnyElement | null>(null);
export const colorOne = writable("#000000");
export const colorTwo = writable("#ffffff");
export const size = writable(50);

export const patterns: PatternType = derived(
  [colorOne, colorTwo],
  ([$colorOne, $colorTwo]) => ({
    "pattern-1": {
      name: "Horizontal",
      backgroundImage: `linear-gradient(0deg, ${$colorOne} 50%, ${$colorTwo} 50%)`,
    },
    "pattern-2": {
      name: "Vertical",
      backgroundImage: `linear-gradient(to right, ${$colorOne} 50%, ${$colorTwo} 50%)`,
    },
    "pattern-3": {
      name: "Diagonal",
      backgroundImage: `linear-gradient(45deg, ${$colorOne} 25%, ${$colorTwo} 25%, ${$colorTwo} 50%, ${$colorOne} 50%, ${$colorOne} 75%, ${$colorTwo} 75%, ${$colorTwo})`,
    },
  })
);
