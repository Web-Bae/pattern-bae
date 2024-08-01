import { setElementStyles } from "./setElementStyles";
import { selectedElement, selectedPatternKey } from "../stores";
import { get } from "svelte/store";

export async function createWebflowElement() {
  const selEl = get(selectedElement);
  const selPatternKey = get(selectedPatternKey);

  if (!selEl) return;

  const blankDiv = await selEl.after(webflow.elementPresets.DivBlock);
  const divWithStyles = await setElementStyles(blankDiv);

  console.log(`${JSON.stringify(divWithStyles)}`);
}
