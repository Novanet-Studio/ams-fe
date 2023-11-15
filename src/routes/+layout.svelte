<script lang="ts">
  import 'virtual:uno.css';
  import '@unocss/reset/tailwind.css';
	import BurgerMenu from '$lib/components/BurgerMenu.svelte';
</script>

<div class="font-primary p-6">
  <header>
    <img src="/ams-main.png" alt="AMS Logo" />
    <BurgerMenu />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    Footer goes here...
  </footer>
</div>