<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { stagger, animate } from 'motion';
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { elementColors } from '$lib/store';
	import { getImageUrl } from '$lib/utils';

	import { productsBanner } from '$lib/products';

	let { data }: { data: any } = $props();
	let Categories = $derived(data.Categories);

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
		animate(
			[
				[
					'#productCategories',
					{ opacity: [0, 1], background: ['#fff', '#003B49'] },
					{ duration: 0.5, ease: 'ease-out' }
				],
				[
					'#productCategories > h3',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.5, ease: 'ease-out' }
				],
				[
					'#productCategories > ul > button',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 0.5, ease: 'ease-out', delay: stagger(0.1) }
				]
			] as any,
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
	class="bg-#003B49 flex flex-col justify-center items-center pt-26 pb-12 lg:pt-18"
>
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
				<h4 id="name" class="text-#003B49 font-bold text-2xl md:text-3xl lg:text-4xl">Productos</h4>
			</div>
			<img
				id="image"
				class="md:min-w-full h-full object-cover object-center grayscale"
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
		class="max-w-[90%] lg:max-w-[80%] mx-auto w-full py-12 md:py-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
		use:clickOutside
		onclickoutside={() => (active = '')}
	>
		{#if $Categories.data?.categories?.length}
			{#each $Categories.data?.categories as category (category?.name)}
				<li>
					<button
						onclick={(e) => {
							e.preventDefault();
							handleActive(category?.name?.toLowerCase());
						}}
						class="group block w-full overflow-hidden relative"
					>
						<img
							id="image"
							src={getImageUrl(category?.image?.url)}
							alt={category?.name}
							class="w-full h-40 md:h-auto object-cover"
						/>

						<div class=" flex justify-center p-3 bg-#93B7BB">
							<h4 id="name" class="text-#003B49 font-bold text-xl sm:text-2xl lg:text-2xl">
								{category?.name}
							</h4>
							<div
								class="i-ph-arrow-right-bold mt-1 ml-1 text-xl md:text-2xl text-#003B49"
								transition:fly={{ x: -10, delay: 0.5 }}
							/>
						</div>

						<div
							class="absolute inset-0 bg-transparent transition-colors duration-300 ease-in-out group-hover:bg-[#93B7BB]/70 flex items-center justify-center"
						>
							<div
								class="relative w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							>
								<div
									class="absolute top-0 left-0 w-full h-full bg-[#93B7BB] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-250 ease-out"
									style="clip-path: polygon(0% 0%, 100% 0%, 25% 15%)"
								/>

								<div
									class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
								>
									<h4 class="text-#003B49 font-bold text-xl">
										{category?.name}
									</h4>
								</div>

								<div
									class="absolute bottom-0 left-0 w-full h-full bg-[#93B7BB] transform translate-y-full group-hover:translate-y-0 transition-transform duration-250 ease-out"
									style="clip-path: inset(80% 0 0 0);"
								/>
							</div>
						</div>
					</button>
				</li>
			{/each}
		{/if}
	</ul>
</section>
