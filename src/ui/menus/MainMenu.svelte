<script lang="ts">
  import Layout from "@/ui/common/Layout.svelte";
  import Logo from "@/ui/common/Logo.svelte";

  export let title: string = "";
</script>

<Layout>
  <header slot="header">
    <Logo {title} />
  </header>
  <main slot="main">
    <p>This game is a work in progress, please come back later</p>
  </main>
  <footer slot="footer">
    {title} • copyright 2021 • Brakasssss' Softworks
  </footer>
</Layout>

<style>
  header {
    margin: 0 auto;
    padding: 1em;
    max-width: 960px;
    text-align: center;
  }
  footer {
    padding: 0.5em;
    text-align: center;
  }
  main {
    flex-grow: 1;
    margin: 0 auto;
    padding: 4em 1em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 960px;
    max-width: 960px;
  }
  p {
    padding: 1em 0;
    font-size: 1.5em;
    text-align: center;
  }
</style>
