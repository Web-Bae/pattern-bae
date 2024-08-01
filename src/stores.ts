import { writable } from "svelte/store";

export let selectedPatternKey = writable("pattern-1");
export let selectedElement = writable<AnyElement | null>(null);
