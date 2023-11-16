<script lang="ts">
  import 'virtual:uno.css';
  import '@unocss/reset/tailwind.css';
	import BurgerMenu from '$lib/components/BurgerMenu.svelte';
	import AmsLogo from '$lib/components/AmsLogo.svelte';
</script>

<div class="font-primary p-6">
  <header class="flex border border-red-500 items-center justify-between">
    <AmsLogo />
    <BurgerMenu />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    Footer goes here...
  </footer>
</div>