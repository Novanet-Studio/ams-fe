
<script lang="ts">
  export let data: {
    content: Record<string, any>[];
  }
</script>

<svelte:head>
  <title>AMS</title>
</svelte:head>


<h1 class="text-2xl">Welcome to SvelteKit</h1>

{#if data.content.length}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{/if}

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
