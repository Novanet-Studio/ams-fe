<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { stagger, timeline } from 'motion';
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { elementColors } from '$lib/store';
	import { getImageUrl } from '$lib/utils';
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ Categories } = data);

	let active = '';

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
		$elementColors.copyright = 'light';
	});
</script>

<section
	id="productCategories"
	class="h-screen bg-#003B49 flex flex-col justify-center items-center pt-14 lg:pt-18"
>
	<div class="w-full flex justify-center">
		<h4 id="name" class="text-#e3d268 text-lg md:text-3xl lg:text-4xl">Productos</h4>
	</div>

	<ul
		class="max-w-[90%] lg:max-w-[80%] mx-auto w-full py-12 md:py-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
		use:clickOutside
		on:clickoutside={() => (active = '')}
	>
		{#if $Categories.data?.categories?.data.length}
			{#each $Categories.data?.categories?.data as category (category?.attributes?.name)}
				<li>
					<button
						on:click|preventDefault={() => handleActive(category?.attributes?.name?.toLowerCase())}
						class="group block w-full overflow-hidden relative"
					>
						<img
							id="image"
							src={getImageUrl(category?.attributes?.image?.data?.attributes?.url)}
							alt={category?.attributes?.name}
							class="w-full h-56 object-cover"
						/>

						<div
							class="absolute inset-0 bg-transparent transition-colors duration-300 ease-in-out group-hover:bg-[#93B7BB]/70 flex items-center justify-center"
						>
							<div
								class="relative w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							>
								<div
									class="absolute top-0 left-0 w-full h-full bg-[#93B7BB] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
									style="clip-path: polygon(0% 0%, 100% 0%, 25% 15%)"
								/>

								<div
									class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
								>
									<h4 class="text-#003B49 font-bold text-3xl">
										{category?.attributes?.name}
									</h4>
								</div>

								<div
									class="absolute bottom-0 left-0 w-full h-full bg-[#93B7BB] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
									style="clip-path: polygon(0% 100%, 100% 100%, 75% 85%)"
								/>
							</div>
						</div>
					</button>
				</li>
			{/each}
		{/if}
	</ul>
</section>
