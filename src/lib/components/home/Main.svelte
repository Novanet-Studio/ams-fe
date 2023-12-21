<script lang="ts">
	import { animate, inView } from 'motion';
	import { brands } from '$lib/brands';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import * as actions from '$lib/actions/inView';
	import { elementColors } from '$lib/store';

	const spaceBetween = 10;

	function animateElements(repeat = false) {
		$elementColors.burger = 'light';
		inView('swiper-slide', (info) => {
			animate(
				info.target.querySelector('h3') as Element,
				{ opacity: [0, 1], x: [-100, 0] },
				{ duration: 1.5, delay: repeat ? 0.1 : 0.5, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				info.target.querySelector('p') as Element,
				{ opacity: [0, 1], x: [-100, 0] },
				{ duration: 1.5, delay: repeat ? 0.3 : 0.7, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				info.target.querySelector('img#banner') as Element,
				{ opacity: [0, 1] },
				{ duration: 1.5, delay: repeat ? 0.5 : 0.9, easing: [0.17, 0.55, 0.55, 1] }
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
		id="mainSlider"
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
		{#each brands as brand (brand.name)}
			<swiper-slide>
				<div class="min-h-screen min-w-full relative">
					<h3
						class="absolute left-12 top-[20%] text-#E3D268 text-3xl font-light md:(text-4xl max-w-50%) lg:(text-5xl left-16)"
						in:blur
					>
						{brand.copy.main}
					</h3>
					<p
						class="absolute left-12 top-[30%] text-white text-lg max-w-[80%] md:(text-xl top-[30%] max-w-[50%]) lg:(text-2xl left-16 top-26% max-w-45%)"
					>
						{brand.copy.secondary}
					</p>
					<img
						class="min-w-full min-h-screen object-cover lg:max-h-screen"
						src={brand.banner}
						alt={brand.name}
					/>
					<img
						id="banner"
						class="absolute p-6 top-[45%] drop-shadow drop-shadow-color-#ddd rounded-md md:(top-[40%] left-8)"
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
