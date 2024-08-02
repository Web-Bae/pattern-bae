import type { Readable } from "svelte/store";

export type Pattern = {
  name: string;
  backgroundImage: string;
};

export type PatternType = Readable<{ [key: string]: Pattern }>;
