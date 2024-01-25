<script lang="ts">
	import { goto } from '$app/navigation';
	import { elementColors } from '$lib/store';
	import { animate, stagger, timeline } from 'motion';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { Topic } from '$lib/types';

	interface Coaches {
		name: string;
		title: string;
	}

	interface Data {
		title: string;
		page_title: string;
		coaches: Coaches[];
		topics: Topic[];
	}

	export let data: { content: Data };

	const info = {
		title: data.content.topics[0].title,
		content: data.content.topics[0].description
	};

	function topAnimation(node) {
		const ctrl = animate(
			node,
			{ y: [10, 0], opacity: [0, 1] },
			{ duration: 0.2, easing: 'ease-out' }
		);

		return {
			duration: ctrl.duration,
			tick: (t, u) => {
				// ctrl.currentTime = t;
			}
		};
	}

	function middleAnimation(node) {
		const an = animate(
			node,
			{ background: ['#93B7BB', '#93B7BB80'], opacity: [0, 1] },
			{ duration: 0.2, easing: 'ease-out' }
		);

		return {
			duration: an.duration,
			tick: () => {
				// console.log(t);
			}
		};
	}

	function animateElements() {
		timeline(
			[
				[
					'#coachesList',
					{ opacity: [0, 1], background: ['#fff', '#003B49'] },
					{ duration: 0.5, easing: 'ease-out' }
				],
				[
					'#coachesList > h3',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.5, easing: 'ease-out' }
				],
				[
					'#coachesList > ul > li',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 0.5, easing: 'ease-out', delay: stagger(0.1) }
				]
			],
			{
				duration: 2
			}
		);
	}

	onMount(() => {
		animateElements();
		$elementColors.copyright = 'light';
	});
</script>

<section id="coachesList" class="h-screen bg-#003B49 flex flex-col items-center pt-28 p-8">
	<h3 class="text-2xl text-#E3D268 md:text-3xl">{info.title}</h3>
	<p>{info.content}</p>
	<!-- <ul class="px-6 flex flex-col gap-8 mt-8 lg:(flex-row mt-24 gap-10)">
		{#each data.content.categories as category (category.name)}
			<li id={category.name.toLowerCase()} class="relative md:(max-w-80% mx-auto) lg:max-w-full">
				{#if active === category.name.toLowerCase()}
					<div
						id="top"
						class="absolute top-0 left-0 w-full h-12 [clip-path:polygon(0%_0%,_100%_0%,_19.74%_81.25%)] bg-#93B7BB transition ease"
						in:topAnimation
					/>
					<div
						id="middle"
						class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#93B7BB/50 gap-2 transition ease"
						in:middleAnimation
					>
						<h4 id="name" class="text-#003B49 font-bold text-lg">{category.name}</h4>
						<div class="i-ph-arrow-right" transition:fly={{ x: -10, delay: 0.5 }}></div>
					</div>
					<div
						id="bottom"
						class="absolute bottom-0 left-0 w-full h-12 [clip-path:polygon(76.92%_24.99%,_101.28%_100%,_0%_103%)] bg-#93B7BB transition ease"
					/>
				{/if}
				<img id="image" src={productsImages[category.image]} alt={category.name} />
			</li>
		{/each}
	</ul> -->
</section>
