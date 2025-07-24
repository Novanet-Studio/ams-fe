<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { animate, stagger, timeline } from 'motion';
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { elementColors } from '$lib/store';
	import { getImageUrl } from '$lib/utils';
	import type { PageData } from './$houdini';

	import { productsBanner } from '$lib/products';

	export let data: PageData;

	$: ({ Categories } = data);

	let active = '';

	function topAnimation(node: any) {
		const ctrl = animate(
			node,
			{ y: [10, 0], opacity: [0, 1] },
			{ duration: 0.2, easing: 'ease-out' }
		);

		return {
			duration: ctrl.duration,
			tick: (t: number, u: number) => {
				// ctrl.currentTime = t;
			}
		};
	}

	function middleAnimation(node: any) {
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

	function handleActive(item: string | undefined) {
		if (!item) return;

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

	onMount(() => {
		animateElements();
		$elementColors.copyright = 'dark';
	});
</script>

<section id="productCategories" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18">
	<div class="w-full">
		<div
			id="top"
			class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#93B7BB lg:h-80px"
		/>
		<div class="w-full h-36 relative overflow-hidden lg:h-300px">
			<div
				id="middle"
				class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#93B7BB/70 gap-2 z-2"
			>
				<h4 id="name" class="text-#003B49 font-bold text-lg md:text-3xl lg:text-4xl">Productos</h4>
			</div>
			<img
				id="image"
				class="md:min-w-full h-full object-cover object-center"
				src={productsBanner}
				alt="productBanner"
			/>
		</div>
		<div
			id="bottom"
			class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB lg:h-80px"
		/>
	</div>

	<ul
		class="px-6 mt-8 pb-20 grid gap-8 grid-cols-1 bg-white sm:grid-cols-2 lg:(px-16) lg:pt-30 lg:(grid-cols-3) lg:-mt-20"
		use:clickOutside
		on:clickoutside={() => (active = '')}
	>
		{#if $Categories.data?.categories?.data.length}
			{#each $Categories.data?.categories?.data as category (category?.attributes?.name)}
				<button
					on:click|preventDefault={() => handleActive(category?.attributes?.name?.toLowerCase())}
				>
					<li id={category?.attributes?.name?.toLowerCase()} class="relative max-w-full">
						<img
							id="image"
							src={getImageUrl(category?.attributes?.image?.data?.attributes?.url)}
							alt={category?.attributes?.name}
						/>
					</li>
					<div class=" flex justify-center p-3 bg-#93B7BB">
						<h4 id="name" class="text-#003B49 font-bold text-xl sm:text-2xl lg:text-2xl">
							{category?.attributes?.name}
						</h4>
						<div
							class="i-ph-arrow-right-bold mt-1 ml-1 text-xl md:text-2xl text-#003B49"
							transition:fly={{ x: -10, delay: 0.5 }}
						></div>
					</div>
				</button>
			{/each}
		{/if}
	</ul>
</section>
