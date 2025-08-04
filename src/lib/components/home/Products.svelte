<script lang="ts">
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/actions/clickOutside';

	import { fly } from 'svelte/transition';
	import type { HomeCategories$result, QueryResult } from '$houdini';
	import { getImageUrl } from '$lib/utils';

	export let data: QueryResult<HomeCategories$result, null>;

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
				{/each}
			{/if}
		</ul>
	</div>
</section>
