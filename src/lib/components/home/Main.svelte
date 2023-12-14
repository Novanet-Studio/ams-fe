<script lang="ts">
	import { animate, inView } from 'motion';
	import { brands } from '$lib/brands';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { scrollY } from '$lib/store';

	const spaceBetween = 10;

	function animateElements(repeat = false) {
		inView('swiper-slide', (info) => {
			animate(
				info.target.querySelector('h3') as Element,
				{ opacity: [0, 1], x: [-100, 0] },
				{ duration: 0.5, delay: repeat ? 0.1 : 0.5, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				info.target.querySelector('p') as Element,
				{ opacity: [0, 1], x: [-100, 0] },
				{ duration: 0.5, delay: repeat ? 0.3 : 0.7, easing: [0.17, 0.55, 0.55, 1] }
			);
			animate(
				info.target.querySelector('img#banner') as Element,
				{ opacity: [0, 1] },
				{ duration: 0.5, delay: repeat ? 0.5 : 0.9, easing: [0.17, 0.55, 0.55, 1] }
			);
		});
	}

	const onProgress = (e: any) => {
		const [swiper, progress] = e.detail;
		// console.log(progress);
	};

	const onSlideChange = (e: any) => {
		console.log('slide changed');
		animateElements();
	};

	$: if ($scrollY < 300) {
		animateElements(true);
	}

	onMount(() => {
		animateElements();
	});
</script>

<section class="snap-start snap-always h-screen">
	<swiper-container
		class="min-h-screen w-full top-0"
		slides-per-view={1}
		space-between={spaceBetween}
		centered-slides={true}
		pagination={{}}
		breakpoints={{
			768: {
				slidesPerView: 3
			}
		}}
		on:swiperprogress={onProgress}
		on:swiperslidechange={onSlideChange}
		id="mainSlider"
	>
		{#each brands as brand (brand.name)}
			<swiper-slide>
				<div class="min-h-screen min-w-full relative">
					<h3 class="absolute left-12 top-[20%] text-#E3D268 text-3xl font-light" in:blur>
						{brand.copy.main}
					</h3>
					<p class="absolute left-12 top-[30%] text-white text-lg max-w-[80%]">
						{brand.copy.secondary}
					</p>
					<img class="min-w-full min-h-screen object-cover" src={brand.banner} alt={brand.name} />
					<img
						id="banner"
						class="absolute p-6 top-[45%] backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md"
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