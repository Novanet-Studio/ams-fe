<script lang="ts">
  export let data: {
    content: Record<string, any>[];
  }
</script>

<h1>Acerca</h1>

{#if data.content.length}
  <pre>{JSON.stringify(data, null, 2)}</pre>
{/if}
