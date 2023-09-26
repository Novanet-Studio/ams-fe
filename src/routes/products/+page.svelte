<script lang="ts">
  export let data: { content: Record<string, any>[] };
</script>

<h2>Products</h2>

{#if data.content.length}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{/if}
