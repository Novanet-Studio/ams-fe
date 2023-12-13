<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { productsImages } from '$lib/images';
	import { getImage } from '$lib/utils';
	import { blur, fly } from 'svelte/transition';

	interface Data {
		title: string;
		page_title: string;
		categories: Record<string, any>[];
		products: Record<string, any>[];
	}

	export let data: { content: Data };

	let active = '';

	$: categoryName = $page.url.pathname.split('/')[2];
	$: category = data.content.categories.find(
		(category) => category.name.toLowerCase() === categoryName
	);

	function handleActive(item: string) {
		if (item === active) {
			goto(`/productos/${categoryName}/${item}`);
			return;
		}

		active = item;
	}
</script>

<section class="h-screen bg-#003B49 flex flex-col items-center pt-14">
	<div>
		<div
			id="top"
			class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#93B7BB"
		/>
		<div class="w-full h-36 relative overflow-hidden">
			<div
				id="middle"
				class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#93B7BB/50 gap-2"
			>
				<h4 id="name" class="text-#003B49 font-bold text-lg">{category?.name}</h4>
			</div>
			<img
				id="image"
				src={productsImages[getImage(category?.name.toLowerCase())]}
				alt={category?.name}
			/>
		</div>
		<div
			id="bottom"
			class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB"
		/>
	</div>
	<ul
		class="px-12 pt-18 mb-18 flex flex-col gap-8 -mt-10 bg-#fff w-full"
		use:clickOutside
		on:clickoutside={() => (active = '')}
	>
		{#each category?.items as item}
			<button class="last:mb-36" on:click|preventDefault={() => handleActive(item.name)}>
				<li class="relative">
					<img src={productsImages[getImage(item.image)]} alt={item.name} />
					{#if active === item.name}
						<div
							class="absolute top-0 left-0 w-full h-full bg-#003B49/70 flex justify-center items-center backdrop-blur-2px"
							transition:blur
						>
							<h5 class="font-bold text-xl text-white first-letter:uppercase">{item.name}</h5>
							<div
								class="i-ph-arrow-right text-white text-xl"
								transition:fly={{ x: 10, delay: 300 }}
							></div>
						</div>
					{/if}
				</li>
			</button>
		{/each}
	</ul>
</section>
