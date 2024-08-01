import { patterns } from "../constants/patterns";
import { selectedPatternKey } from "../stores";
import { get } from "svelte/store";

export async function setElementStyles(newDiv: BlockElement) {
  const newStyle = await webflow.createStyle(`pattern-bae-${Date.now()}`);

  newStyle.setProperties({
    "background-image": patterns[get(selectedPatternKey)].backgroundImage,
    "background-size": "10px 10px",
  });

  await newDiv.setStyles([newStyle]);
  return newDiv;
}
