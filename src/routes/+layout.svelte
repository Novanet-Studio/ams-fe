<script lang="ts">
  import 'virtual:uno.css';
  import '@unocss/reset/tailwind.css';
	import Header from '$lib/components/header/Header.svelte';
</script>

<div class="font-primary p-6">
  <Header />
  <main>
    <slot />
  </main>
  <footer>
    Footer goes here...
  </footer>
</div>