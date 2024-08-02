import { patterns, size, selectedPatternKey } from "../stores";
import { get } from "svelte/store";

export async function setElementStyles(newDiv: BlockElement) {
  const newStyle = await webflow.createStyle(`pattern-bae-${Date.now()}`);

  const patternsObject = get(patterns);

  newStyle.setProperties({
    "background-image": patternsObject[get(selectedPatternKey)].backgroundImage,
    "background-size": `${get(size)}px ${get(size)}px`,
  });

  await newDiv.setStyles([newStyle]);
  return newDiv;
}
