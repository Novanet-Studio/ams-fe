<script lang="ts">
	import { animate, inView } from 'motion';
	import { brands } from '$lib/brands';
	import { onMount } from 'svelte';
	import * as actions from '$lib/actions/inView';
	import { elementColors } from '$lib/store';

	const spaceBetween = 10;

	function animateElements(repeat = false) {
		$elementColors.burger = 'light';
		inView('swiper-slide', (info) => {
			animate(
				info.target.querySelector('div > img#sliderBanner') as Element,
				{ opacity: [0, 1] },
				{ duration: 0.5, delay: repeat ? 0.1 : 0.3, easing: [0.17, 0.55, 0.55, 1] }
			);
		});
	}

	const onSlideChange = () => {
		animateElements();
	};

	onMount(() => {
		animateElements();
	});
</script>

<section
	class="snap-start snap-always h-screen"
	use:actions.inView={{ bottom: 100, top: 100 }}
	on:enter={animateElements}
>
	<swiper-container
		class="min-h-screen w-full top-0"
		slides-per-view={1}
		space-between={spaceBetween}
		centered-slides={true}
		pagination={{}}
		breakpoints={{
			768: {
				slidesPerView: 1
			}
		}}
		on:swiperslidechange={onSlideChange}
	>
		{#each brands.filter((brand) => brand.name.includes('NZ')) as brand (brand.name)}
			<swiper-slide>
				<div
					class="min-h-screen min-w-full bg-center bg-cover flex flex-col justify-center items-center"
					style="background-image: url({brand.banner})"
				>
					<img
						id="sliderBanner"
						class="p-8 drop-shadow-sm drop-shadow-color-#ddd rounded-md"
						src={brand.image}
						alt={brand.name}
					/>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</section>

<style>
	swiper-container::part(pagination) {
		--swiper-pagination-bottom: 5rem;
		--swiper-pagination-color: #fff;
	}
</style>
