<script lang="ts">
import { page } from '$app/stores';

console.log($page.url.pathname)
</script>

{#if $page.url.pathname === '/'}
  <img src="/ams-light.png" alt="AMS Logo" />
{:else}
  <img src="/ams-dark.png" alt="AMS Logo" />
{/if}
