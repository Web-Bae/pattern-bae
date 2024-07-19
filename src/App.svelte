<script lang="ts">
  let count = 0;
</script>

<main>
  <button on:click={() => (count += 1)}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
  </button>
</main>

<style>
</style>
