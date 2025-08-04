<script lang="ts">
	import { onMount } from 'svelte';
	import { stagger, timeline } from 'motion';
	import { elementColors } from '$lib/store';
	import { getImageUrl } from '$lib/utils';
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ ProductsBySubcategory } = data);

	$: subcategory = $ProductsBySubcategory?.data?.subcategories?.data[0];
	$: category = subcategory?.attributes?.categoria?.data;
	$: products = subcategory?.attributes?.productos?.data;

	function animation() {
		timeline(
			[
				[
					'#products',
					{
						opacity: [0, 1],
						background: ['#fff', '#003B49']
					},
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#products #image',
					{ opacity: [0, 1], filter: ['blur(2px)', 'blur(0)'] },
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#products #middle',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.1, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#products #middle #name',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.3, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#products #top',
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
					'#products #bottom',
					{
						opacity: [0, 1],
						clipPath: ['polygon(40% 70%, 0 0, 100% 0)', 'polygon(32% 60%, 0 0, 100% 0)']
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				['#products h3', { opacity: [0, 1], y: [-10, 0] }, { duration: 1, easing: 'ease-out' }],
				[
					'#products ul li',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 1, easing: 'ease-out', delay: stagger(0.1) }
				]
			],
			{
				duration: 2
			}
		);
	}

	onMount(() => {
		$elementColors.copyright = 'dark';
		animation();
	});
</script>

<section id="products" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18">
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
					{category?.attributes?.name ?? 'Productos'}
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

	<div class="w-full bg-white pb-20 lg:-mt-20">
		<div class="max-w-4xl mx-auto px-6 pt-12 md:pt-20 text-center">
			<h3 class="font-bold text-3xl text-#003B49 first-letter:uppercase">
				{subcategory?.attributes?.name}
			</h3>
		</div>

		<ul
			class="max-w-7xl mx-auto w-full px-6 py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
		>
			{#if $ProductsBySubcategory.fetching}
				<p class="col-span-full text-center text-gray-500">Cargando productos...</p>
			{:else if !products?.length}
				<p class="col-span-full text-center text-gray-500">
					No hay productos disponibles en esta subcategoría.
				</p>
			{:else}
				{#each products as product (product?.id)}
					<li class="rounded-lg shadow-md overflow-hidden bg-white flex flex-col">
						<img
							class="w-full h-64 object-cover"
							src={getImageUrl(product?.attributes?.image?.data?.attributes?.url)}
							alt={product?.attributes?.name}
						/>
						<div class="p-4 flex flex-col flex-grow">
							<p class="text-sm font-semibold text-gray-500">Marca: {product?.attributes?.brand}</p>
							<h4 class="text-xl font-bold text-#003B49 mt-1">{product?.attributes?.name}</h4>
							<div class="flex-grow" />
							<button class="mt-4 w-full bg-#e3d268 text-[#003B49] font-bold py-2 rounded">
								Ver especificaciones
							</button>
						</div>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</section>
