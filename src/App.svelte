<script lang="ts">
  import { onMount } from "svelte";
  import { createWebflowElement } from "./helpers/createWebflowElement";
  import { patterns } from "./constants/patterns";

  let selectedPatternKey: string;
  let selectedElement: AnyElement | null;

  onMount(async () => {
    webflow.subscribe("selectedelement", setSelectedElement);
  });

  function setSelectedElement(element: AnyElement | null) {
    selectedElement = element;
  }

  function handlePatternButtonClick(event: Event, patternKey: string) {
    const pattern = patterns[patternKey];

    selectedPatternKey = patternKey;

    const patternSection =
      document.querySelector<HTMLDivElement>(".section-pattern");
    if (!patternSection) return;
    patternSection.style.backgroundImage = pattern.backgroundImage;
    patternSection.style.backgroundSize = "10px 10px";
  }
</script>

<main>
  <section>
    <div class="container">
      {#if selectedElement}
        <p>{selectedElement.type}</p>
        <button
          on:click={() =>
            createWebflowElement(selectedElement, selectedPatternKey, patterns)}
          >Create Div</button
        >
      {/if}
    </div>
  </section>
  <section class="section-pattern">
    <div class="container">
      <div class="pattern-list">
        {#each Object.keys(patterns) as patternKey}
          <button
            class="pattern-button"
            on:click={(event) => handlePatternButtonClick(event, patternKey)}
          >
            <div
              class="pattern-box"
              style="background-image: {patterns[patternKey].backgroundImage}"
            >
              <h2 class="pattern-name">{patterns[patternKey].name}</h2>
            </div>
          </button>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>
  .container {
    padding: 1rem;
  }
  .pattern-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  .pattern-button {
    width: 100%;
    display: flex;
    padding: 0px;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border-radius: 4px;
    overflow: hidden;
  }
  .pattern-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    aspect-ratio: 1 / 1;
    background-size: 10px 10px;
    padding-bottom: 0.5rem;
  }
  .pattern-name {
    padding: 0.25rem;
    font-size: small;
    background-color: white;
    color: black;
    border-radius: 4px;
  }
</style>
