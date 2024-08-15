<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import { createWebflowElement } from "./helpers/createWebflowElement";
  import {
    selectedElement,
    selectedPatternKey,
    colorOne,
    colorTwo,
    patterns,
    size,
  } from "./stores";

  onMount(async () => {
    webflow.subscribe("selectedelement", setSelectedElement);
    updateBackgroundImage();
  });

  function setSelectedElement(element: AnyElement | null) {
    $selectedElement = element;
  }

  function updateBackgroundImage() {
    const pattern = $patterns[$selectedPatternKey];
    const patternDiv = document.querySelector<HTMLDivElement>(".pattern");
    if (!patternDiv) return;
    patternDiv.style.backgroundImage = pattern.backgroundImage;
    patternDiv.style.backgroundSize = `${$size}px ${$size}px`;
    patternDiv.style.backgroundPosition =
      pattern.backgroundPosition || "center";
  }

  function handlePatternButtonClick(event: Event, patternKey: string) {
    $selectedPatternKey = patternKey;
    updateBackgroundImage();
  }

  function handleSizeChange(event: Event) {
    const size = (event.target as HTMLInputElement).value;
    $size = parseInt(size, 10);
    updateBackgroundImage();
  }

  function handleColorOneSelect(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    $colorOne = color;
    updateBackgroundImage();
  }

  function handleColorTwoSelect(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    $colorTwo = color;
    updateBackgroundImage();
  }

  afterUpdate(() => {
    console.log($colorOne);
  });
</script>

<main>
  <section class="top-bar">
    <label for="color-one">C1:</label>
    <input
      type="color"
      class="color-input"
      on:change={handleColorOneSelect}
      bind:value={$colorOne}
      style="background-color: {$colorOne};"
    />
    <label for="color-two">C2:</label>
    <input
      type="color"
      class="color-input"
      on:change={handleColorTwoSelect}
      bind:value={$colorTwo}
      style="background-color: {$colorTwo};"
    />
    <label for="size">Size:</label>
    <input
      type="range"
      min="2"
      max="80"
      value="10"
      on:input={handleSizeChange}
    />
  </section>
  <section class="section-pattern">
    <div class="pattern"></div>
    <div class="container">
      <div class="pattern-list">
        {#each Object.keys($patterns) as patternKey}
          <button
            class="pattern-button"
            on:click={(event) => handlePatternButtonClick(event, patternKey)}
          >
            <div
              class="pattern-box"
              style="background-image: {$patterns[patternKey]
                .backgroundImage}; background-size: {$size}px {$size}px; background-position: {$patterns[
                patternKey
              ].backgroundPosition};"
            >
              <h2 class="pattern-name">{$patterns[patternKey].name}</h2>
            </div>
          </button>
        {/each}
      </div>
    </div>
  </section>
  <section class="bottom-bar">
    {#if $selectedElement}
      <button class="bottom-button" on:click={createWebflowElement}
        >Add Pattern to Webflow</button
      >
    {/if}
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .container {
    padding: 0.5rem;
  }
  .top-bar {
    display: flex;
    padding: 0.5rem;
    align-items: center;
    gap: 0.5rem;
    background-color: #292929;
  }
  .section-pattern {
    position: relative;
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
  }
  .pattern-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  .pattern-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    aspect-ratio: 1 / 1;
    padding-bottom: 0.5rem;
  }
  .pattern-name {
    padding: 0.25rem;
    font-size: 10.5px;
    background-color: white;
    color: black;
    border-radius: 4px;
  }
  .color-input {
    margin: 0rem;
    padding: 0rem;
    border: none;
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
  }
  .bottom-bar {
    display: flex;
    padding: 0.5rem;
    background-color: #292929;
  }
  .bottom-button {
    width: 100%;
  }
</style>
