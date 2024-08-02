import { derived, writable } from "svelte/store";
import type { PatternType } from "./types";

export let selectedPatternKey = writable("pattern-1");
export let selectedElement = writable<AnyElement | null>(null);
export const colorOne = writable("#000000");
export const colorTwo = writable("#ffffff");
export const size = writable(50);

export const patterns: PatternType = derived(
  [colorOne, colorTwo, size],
  ([$colorOne, $colorTwo, $size]) => ({
    "pattern-1": {
      name: "Horizontal",
      backgroundImage: `linear-gradient(0deg, ${$colorOne} ${$size}%, ${$colorTwo} ${$size}%)`,
    },
    "pattern-2": {
      name: "Vertical",
      backgroundImage: `linear-gradient(to right, ${$colorOne} ${$size}%, ${$colorTwo} ${$size}%)`,
    },
    "pattern-3": {
      name: "Diagonal",
      backgroundImage: `linear-gradient(45deg, ${$colorOne} ${
        $size / 2
      }%, ${$colorTwo} ${
        $size / 2
      }%, ${$colorTwo} ${$size}%, ${$colorOne} ${$size}%, ${$colorOne} ${
        $size * 1.5
      }%, ${$colorTwo} ${$size * 1.5}%, ${$colorTwo})`,
    },
  })
);
