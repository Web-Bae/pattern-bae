import type { Pattern } from "../types";
import { setElementStyles } from "./setElementStyles";

export async function createWebflowElement(
  selectedElement: AnyElement | null,
  selectedPatternKey: string,
  patterns: Record<string, Pattern>
) {
  if (!selectedElement) return;

  const blankDiv = await selectedElement.after(webflow.elementPresets.DivBlock);
  const divWithStyles = await setElementStyles(
    blankDiv,
    selectedPatternKey,
    patterns
  );

  console.log(`${JSON.stringify(divWithStyles)}`);
}
