<script lang="ts">
  export let title: string = "";
</script>

<div class="logo-container">
  <h1 class="floating" style="opacity: 0.125;">
    {title}
  </h1>
  <h1 class="floating" style="opacity: 0.25;animation-delay: -0.12s;">
    {title}
  </h1>
  <h1 class="floating" style="opacity: 0.5;animation-delay: -0.18s;">
    {title}
  </h1>
  <h1 class="floating" style="opacity: 0.75;animation-delay: -0.21s;">
    {title}
  </h1>
  <h1 class="floating" style="animation-delay: -0.235s;">
    {title}
  </h1>
</div>

<style>
  :root {
    --logo-color-rgb: var(--palette-accent-rgb);
    --logo-color: rgb(var(--logo-color-rgb));
  }
  .logo-container {
    position: relative;
    width: 100%;
  }

  .floating {
    margin: 0;
    color: var(--logo-color);
    font-family: "Grape Soda", cursive;
    font-size: 6rem;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.5, -1, 1, 1);
    text-shadow: 0 0 0.5rem rgba(var(--logo-color-rgb), 0.1),
      0 0 1rem rgba(var(--logo-color-rgb), 0.2),
      0 0 1.5rem rgba(var(--logo-color-rgb), 0.4);
  }

  .floating:not(:first-child) {
    position: absolute;
    top: 0;
  }

  @keyframes floating {
    0%,
    100% {
      transform: scale(1, 1) translate(0, 0em);
    }
    50% {
      transform: scale(1.125, 1.125) translate(0, 0.2em);
    }
  }
</style>
