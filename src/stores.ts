import { derived, writable } from "svelte/store";
import type { PatternType } from "./types";

export let selectedPatternKey = writable("dots"); // Update to match the actual pattern name
export let selectedElement = writable<AnyElement | null>(null);
export const colorOne = writable("#ededeb");
export const colorTwo = writable("#474747");
export const size = writable(10);

export const patterns: PatternType = derived(
  [colorOne, colorTwo, size],
  ([$colorOne, $colorTwo, $size]) => ({
    "dots": {
      name: "Dots",
      backgroundImage: `radial-gradient(circle, ${$colorOne} 10%, ${$colorTwo} 10%)`,
    },
    "graph-paper": {
      name: "Graph paper",
      backgroundImage: `linear-gradient(${$colorOne} 1px, transparent 1px), linear-gradient(90deg, ${$colorOne} 1px, ${$colorTwo} 1px)`,
    },
    "thin-vertical": {
      name: "Thin Vertical",
      backgroundImage: `repeating-linear-gradient(90deg, ${$colorOne}, ${$colorOne} 1px, ${$colorTwo} 1px, ${$colorTwo} 50%)`,
    },
    "thin-horizontal": {
      name: "Thin Horizontal",
      backgroundImage: `repeating-linear-gradient(0deg, ${$colorOne}, ${$colorOne} 1px, ${$colorTwo} 1px, ${$colorTwo} 50%)`,
    },
    "thin-diagonal": {
      name: "Thin Diagonal",
      backgroundImage: `
          repeating-linear-gradient(45deg, ${$colorOne}, ${$colorOne} 1px, ${$colorTwo} 1px, ${$colorTwo} 50%),
          repeating-linear-gradient(135deg, ${$colorOne}, ${$colorOne} 1px, ${$colorTwo} 1px, ${$colorTwo} 50%)
        `,
    },
    "horizontal": {
      name: "Horizontal",
      backgroundImage: `linear-gradient(0deg, ${$colorOne} 50%, ${$colorTwo} 50%)`,
    },
    "vertical": {
      name: "Vertical",
      backgroundImage: `linear-gradient(to right, ${$colorOne} 50%, ${$colorTwo} 50%)`,
    },
    "diagonal": {
      name: "Diagonal",
      backgroundImage: `linear-gradient(45deg, ${$colorOne} 25%, ${$colorTwo} 25%, ${$colorTwo} 50%, ${$colorOne} 50%, ${$colorOne} 75%, ${$colorTwo} 75%)`,
    },
    "checkers": {
      name: "Checkers",
      backgroundImage: `repeating-linear-gradient(45deg, ${$colorOne} 25%, transparent 25%, transparent 75%, ${$colorOne} 75%, ${$colorOne}), repeating-linear-gradient(45deg, ${$colorOne} 25%, ${$colorTwo} 25%, ${$colorTwo} 75%, ${$colorOne} 75%, ${$colorOne})`,
      backgroundPosition: `0 0, ${$size / 2}px ${$size / 2}px`,
    },
    "diamond": {
      name: "Diamond",
      backgroundImage: `
    linear-gradient(135deg, ${$colorOne} 25%, transparent 25%),
    linear-gradient(225deg, ${$colorOne} 25%, transparent 25%),
    linear-gradient(45deg, ${$colorOne} 25%, transparent 25%),
    linear-gradient(315deg, ${$colorOne} 25%, ${$colorTwo} 25%)
  `,
    },

    "triangle": {
      name: "Triangle",
      backgroundImage: `
        linear-gradient(45deg, ${$colorOne} 50%, ${$colorTwo} 50%),
        linear-gradient(45deg, ${$colorOne} 50%, ${$colorTwo} 50%)
      `,
    },
    "triangle-2": {
      name: "Triangle 2",
      backgroundImage: `
          linear-gradient(315deg, ${$colorOne} 50%, ${$colorTwo} 50%),
          linear-gradient(315deg, ${$colorOne} 50%, ${$colorTwo} 50%)
        `,
    },
    "zig-zag": {
      name: "Zig Zag",
      backgroundImage: `
        linear-gradient(135deg, ${$colorOne} 25%, transparent 25%), 
        linear-gradient(225deg, ${$colorOne} 25%, transparent 25%), 
        linear-gradient(45deg, ${$colorOne} 25%, transparent 25%), 
        linear-gradient(315deg, ${$colorOne} 25%, ${$colorTwo} 25%)
      `,
      backgroundPosition: `${$size / 2}px 0, ${$size / 2}px 0, 0 0, 0 0`,
    },
  })
);
