import { patterns } from "../stores";
import { selectedPatternKey } from "../stores";
import { get } from "svelte/store";

export async function setElementStyles(newDiv: BlockElement) {
  const newStyle = await webflow.createStyle(`pattern-bae-${Date.now()}`);

  const patternsObject = get(patterns);

  newStyle.setProperties({
    "background-image": patternsObject[get(selectedPatternKey)].backgroundImage,
    "background-size": "10px 10px",
  });

  await newDiv.setStyles([newStyle]);
  return newDiv;
}
