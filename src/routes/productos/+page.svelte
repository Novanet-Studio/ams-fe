<script lang="ts">
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { productsImages } from '$lib/images';
	import { elementColors } from '$lib/store';
	import { animate, stagger, timeline } from 'motion';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	interface Data {
		title: string;
		page_title: string;
		categories: Record<string, any>[];
		products: Record<string, any>[];
	}

	export let data: { content: Data };

	let active = '';

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

	function handleActive(item: string) {
		if (item === active) {
			goto(`/productos/${item}`);
			return;
		}

		active = item;
	}

	function animateElements() {
		timeline(
			[
				[
					'#productCategories',
					{ opacity: [0, 1], background: ['#fff', '#003B49'] },
					{ duration: 0.5, easing: 'ease-out' }
				],
				[
					'#productCategories > h3',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.5, easing: 'ease-out' }
				],
				[
					'#productCategories > ul > button',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 0.5, easing: 'ease-out', delay: stagger(0.1) }
				]
			],
			{
				duration: 2
			}
		);
	}

	function getImageName(path: string) {
		return path.replace('.png', '');
	}

	onMount(() => {
		animateElements();
		$elementColors.copyright = 'light';
	});
</script>

<section id="productCategories" class="h-screen bg-#003B49 flex flex-col items-center pt-28 p-8">
	<h3 class="text-2xl text-#E3D268">{data.content.title}</h3>
	<ul class="px-6 flex flex-col gap-8 mt-8" use:clickOutside on:clickoutside={() => (active = '')}>
		{#each data.content.categories as category (category.name)}
			<button on:click|preventDefault={() => handleActive(category.name.toLowerCase())}>
				<li id={category.name.toLowerCase()} class="relative">
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
					<img id="image" src={productsImages[getImageName(category.image)]} alt={category.name} />
				</li>
			</button>
		{/each}
	</ul>
</section>
