<script lang="ts">
  import { onMount } from "svelte";
  
  import MainMenu from "@/ui/menus/MainMenu.svelte";

  import { Game } from "@/engine/core";

  let game: Game = null;

  let canvasLayerElement: HTMLCanvasElement = null;
  let hudLayerElement: HTMLDivElement = null;
  let uiLayerElement: HTMLDivElement = null;

  onMount(() => {
    game = new Game(canvasLayerElement);
    game.start();
  });
</script>

<canvas class="layer" bind:this={canvasLayerElement} />
<div class="layer" bind:this={hudLayerElement} />
<div class="ui layer" bind:this={uiLayerElement}>
  <MainMenu />
</div>

<style>
  :global(body) {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
  }
  .layer {
    display: block;
    width: 100vw;
    height: 100vh;
  }
  .layer:not(:first-child) {
    position: absolute;
    top: 0;
  }
  .ui.layer {
    display: flex;
    flex-flow: column nowrap;
  }
</style>
