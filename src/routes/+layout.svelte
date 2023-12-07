<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Sidebar from '$lib/components/navigation/Sidebar.svelte';
	import { scrollY } from '$lib/store';
</script>

<svelte:window bind:scrollY={$scrollY} />

<div class="font-primary relative">
	<Header />
	<Sidebar />
	<main class="snap-y snap-mandatory">
		<slot />
	</main>
	<Footer />
</div>
