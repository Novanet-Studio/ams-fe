<script lang="ts">
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/actions/clickOutside';

	import { fly } from 'svelte/transition';
	import type { HomeCategories$result, QueryResult } from '$houdini';
	import { getImageUrl } from '$lib/utils';

	export let data: QueryResult<HomeCategories$result, null>;

	console.log('Categories asd', data);

	let active = '';

	function handleActive(item: string | undefined) {
		if (!item) return;
		if (item === active) {
			goto(`/productos/${item}`);
			return;
		}
		active = item;
	}

	function animateElements() {}
</script>

<section class="snap-start snap-always h-screen relative" on:enter={animateElements}>
	<div
		class="max-h-screen h-screen bg-[#003B49] z-3 flex flex-col justify-center pl-6 md:(pl-10) lg:(pl-16 gap-8)"
	>
		<div class="w-full flex justify-center">
			<h4 id="name" class="text-#e3d268 text-lg md:text-3xl lg:text-4xl">Productos</h4>
		</div>

		<ul
			class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:(px-16) lg:pt-30 lg:(grid-cols-3) lg:-mt-20"
			use:clickOutside
			on:clickoutside={() => (active = '')}
		>
			{#if data.data?.categories?.data.length}
				{#each data.data?.categories?.data as category (category?.attributes?.name)}
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
							<h4 id="name" class="text-#fff font-bold text-xl sm:text-2xl lg:text-2xl">
								{category?.attributes?.name}
							</h4>
							<div
								class="i-ph-arrow-right-bold mt-1 ml-1 text-xl md:text-2xl text-#fff"
								transition:fly={{ x: -10, delay: 0.5 }}
							></div>
						</div>
					</button>
				{/each}
			{/if}
		</ul>
	</div>
</section>
