<script lang="ts">
  import 'virtual:uno.css';
  import '@unocss/reset/tailwind.css';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<div class="font-primary p-6 min-h-screen relative">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>