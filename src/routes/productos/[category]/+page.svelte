<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { elementColors } from '$lib/store';
	import { getImageUrl } from '$lib/utils';
	import { stagger, timeline } from 'motion';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ Subcategories } = data);

	let active = '';

	$: categoryName = $page.url.pathname.split('/')[2];
	$: category = $Subcategories?.data?.subcategories?.data[0]?.attributes?.categoria?.data || {};

	function animation() {
		timeline(
			[
				[
					'#categories',
					{
						opacity: [0, 1],
						background: ['#fff', '#003B49']
					},
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#categories #image',
					{ opacity: [0, 1], filter: ['blur(2px)', 'blur(0)'] },
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#categories #middle',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.1, easing: 'ease-out' }
				],
				[
					'#categories #middle #name',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.3, easing: 'ease-out' }
				],
				[
					'#categories #top',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 100%, 100% 100%, 90% 70%)',
							'polygon(0% 100%, 100% 100%, 73.49% 50.75%)'
						]
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				[
					'#categories #bottom',
					{
						opacity: [0, 1],
						clipPath: ['polygon(40% 70%, 0 0, 100% 0)', 'polygon(32% 60%, 0 0, 100% 0)']
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				[
					'#categories ul > button',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 0.5, easing: 'ease-out', delay: stagger(0.1) }
				]
			],
			{
				duration: 2
			}
		);
	}

	function handleActive(item: string) {
		if (item === active) {
			goto(`/productos/${categoryName}/${item}`);
			return;
		}
		active = item;
	}

	onMount(() => {
		$elementColors.copyright = 'dark';
		animation();
	});
</script>

<section id="categories" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18">
	<div class="w-full">
		<div
			id="top"
			class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#93B7BB lg:h-20"
		/>
		<div class="w-full h-48 relative overflow-hidden lg:h-72">
			<div
				id="middle"
				class="absolute inset-0 flex justify-center items-center bg-#93B7BB/70 gap-2 z-2"
			>
				<h4 id="name" class="text-#003B49 font-bold text-2xl md:text-4xl lg:text-5xl">
					{category?.attributes?.name ?? categoryName}
				</h4>
			</div>
			<img
				id="image"
				class="w-full h-full object-cover object-center"
				src={getImageUrl(category?.attributes?.image?.data?.attributes?.url)}
				alt={category?.attributes?.name}
			/>
		</div>
		<div
			id="bottom"
			class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB lg:h-20"
		/>
	</div>

	<div class="w-full bg-white pb-20 -mt-10 lg:-mt-20">
		<ul
			class="max-w-[90%] lg:max-w-[80%] mx-auto w-full py-12 md:py-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
			use:clickOutside
			on:clickoutside={() => (active = '')}
		>
			{#if $Subcategories.fetching}
				<p class="col-span-full text-center text-gray-500">Cargando subcategorías...</p>
			{:else if !$Subcategories.data?.subcategories?.data.length}
				<p class="col-span-full text-center text-gray-500">No hay subcategorías disponibles.</p>
			{:else}
				{#each $Subcategories?.data?.subcategories?.data as subcategory (subcategory?.attributes?.name)}
					<button
						on:click|preventDefault={() =>
							handleActive(subcategory?.attributes?.name?.toLowerCase() ?? '')}
						class="group block w-full overflow-hidden relative"
					>
						<img
							id="image"
							src={getImageUrl(subcategory?.attributes?.image?.data?.attributes?.url)}
							alt={subcategory?.attributes?.name}
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
								></div>

								<div
									class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
								>
									<h4 class="text-#003B49 font-bold text-3xl">
										{subcategory?.attributes?.name}
									</h4>
								</div>

								<div
									class="absolute bottom-0 left-0 w-full h-full bg-[#93B7BB] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
									style="clip-path: polygon(0% 100%, 100% 100%, 75% 85%)"
								></div>
							</div>
						</div>
					</button>
				{/each}
			{/if}
		</ul>
	</div>
</section>
