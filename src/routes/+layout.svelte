<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Sidebar from '$lib/components/navigation/Sidebar.svelte';
	import { scrollY } from '$lib/store';
	import { register } from 'swiper/element/bundle';
	import type { Snippet } from 'svelte';
	register();

	let { children }: { children: Snippet } = $props();
</script>

<svelte:window bind:scrollY={$scrollY} />

<div class="font-primary">
	<Header />
	<Sidebar />
	<main class="h-screen overflow-y-scroll snap-y snap-mandatory">
		{@render children()}
	</main>
	<Footer />
</div>
