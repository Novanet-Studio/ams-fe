<script lang="ts">
	import { page } from '$app/stores';
	import { productsImages } from '$lib/images';
	import { elementColors } from '$lib/store';
	import { getImage } from '$lib/utils';
	import { stagger, timeline } from 'motion';
	import { onMount } from 'svelte';

	interface Data {
		title: string;
		page_title: string;
		categories: Record<string, any>[];
		products: Record<string, any>[];
	}

	export let data: { content: Data };

	let products: Record<string, any>[] = [];

	$: categoryName = $page.url.pathname.split('/')[2];
	$: productName = $page.url.pathname.split('/')[3];
	$: category = data.content.categories.find(
		(category) => category.name.toLowerCase() === categoryName
	);
	$: data.content.products.forEach((product) => {
		const result = product.items.filter((item: any) => item.category === productName);

		if (result.length) {
			products = result;
		}
	});

	onMount(() => {
		$elementColors.copyright = 'dark';

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
					{ duration: 0.5, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#products #middle #name',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.5, easing: 'ease-out', delay: 0.2 }
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
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#products #bottom',
					{
						opacity: [0, 1],
						clipPath: ['polygon(40% 70%, 0 0, 100% 0)', 'polygon(32% 60%, 0 0, 100% 0)']
					},
					{ duration: 0.4, easing: 'ease-out' }
				],
				['#products ul h3', { opacity: [0, 1], y: [-10, 0] }, { duration: 1, easing: 'ease-out' }],
				[
					'#products ul li',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 1, easing: 'ease-out', delay: stagger(0.1) }
				]
			],
			{
				duration: 2.5
			}
		);
	});
</script>

<section id="products" class="h-screen bg-#003B49 flex flex-col items-center pt-14">
	<div class="w-full">
		<div
			id="top"
			class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#93B7BB"
		/>
		<div class="w-full h-36 relative overflow-hidden">
			<div
				id="middle"
				class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#93B7BB/50 gap-2 z-2"
			>
				<h4 id="name" class="text-#003B49 font-bold text-lg">{category?.name}</h4>
			</div>
			<img id="image" src={productsImages[getImage(category?.image)]} alt={category?.name} />
		</div>
		<div
			id="bottom"
			class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB"
		/>
	</div>

	<ul class="px-12 pt-18 mb-18 flex flex-col gap-8 -mt-10 bg-#fff w-full min-h-full">
		<h3 class="text-center text-2xl text-#003B49 first-letter:uppercase">{productName}</h3>
		{#each products as product (product.title)}
			<li class="border-b pb-3 border-b-#DDDDDD last:pb-34">
				<img src={productsImages[getImage(product.image)]} alt={product.title} />
				<h4 class="text-#003B49 text-lg font-bold mt-4">{product.title}</h4>
				<button>Ver especificaciones</button>
			</li>
		{/each}
	</ul>
</section>
