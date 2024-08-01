import type { Pattern } from "../types";

export async function setElementStyles(
  newDiv: BlockElement,
  selectedPatternKey: string,
  patterns: Record<string, Pattern>
) {
  const newStyle = await webflow.createStyle(`pattern-bae-${Date.now()}`);

  newStyle.setProperties({
    "background-image": patterns[selectedPatternKey].backgroundImage,
    "background-size": "10px 10px",
  });

  await newDiv.setStyles([newStyle]);
  return newDiv;
}
