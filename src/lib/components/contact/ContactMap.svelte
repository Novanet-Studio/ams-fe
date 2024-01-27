<script lang="ts">
	import { isDesktop } from '$lib/store';
	import { timeline } from 'motion';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let section: HTMLElement;

	onMount(() => {
		timeline(
			[
				[
					'#map',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
							'polygon(0% 0%,100% 0%,100% 91%,0% 98.5%)'
						]
					},
					{ duration: 0.5, delay: 0.2 }
				],
				[
					'#map > img',
					{
						opacity: [0, 1],
						filter: ['blur(10px)', 'blur(0px)']
					},
					{ duration: 0.5, delay: 0.3 }
				],
				[
					'#mapFill',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
							$isDesktop
								? 'polygon(0% 0%, 100% 0%, 100% 88.75%, 0% 82.7%)'
								: 'polygon(0% 0%, 100% 0%, 100% 88.75%, 0% 83.06%)'
						]
					},
					{ duration: 0.5, delay: 0 }
				]
			],
			{
				duration: 2
			}
		);
	});
</script>

<section bind:this={section} class="w-full h-screen snap-start relative" transition:fade>
	<div id="map" class="bg-#003B49 h-84vh lg:h-81.4vh"></div>
	<div
		id="mapFill"
		class="absolute top-0 right-0 bottom-0 [clip-path:polygon(0%_0%,_100%_0%,_100%_88.75%,_0%_83.06%)] bg-#ACC37E w-full -z-1 lg:h-97.2vh"
	/>
</section>
