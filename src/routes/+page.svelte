
<script lang="ts">
  interface Data {
    brands: Record<string, any>[];
    carousel: Record<string, any>[];
    highlight: Record<string, any>[];
    main_carousel: Record<string, any>[];
    paget_title: string;
    title: string;
  }
  
  export let data: {
    content: Data;
  }
</script>

<svelte:head>
  <title>{data.content.title}</title>
</svelte:head>


<h1 class="text-2xl">Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
