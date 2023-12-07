<script lang="ts">
	import Brands from '$lib/components/home/Brands.svelte';
	import FeaturedMessage from '$lib/components/home/FeaturedMessage.svelte';
	import Main from '$lib/components/home/Main.svelte';
	import { animate, scroll } from 'motion';
	import { onMount } from 'svelte';

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
	};

	// onMount(() => {
	// 	document.querySelectorAll('section').forEach((section) => {
	// 		if (section.id === 'featuredMessage') {
	// 			scroll(
	// 				animate(section.querySelector('h4') as Element, { opacity: [0.1, 1.2], x: [-10, 10] })
	// 			);
	// 		}
	// 		// scroll(animate())
	// 	});
	// });
</script>

<svelte:head>
	<title>{data.content.title}</title>
</svelte:head>

<!-- <section class="snap-y snap-mandatory h-full"> -->
<Main />
<FeaturedMessage />
<Brands />
<!-- </section> -->
