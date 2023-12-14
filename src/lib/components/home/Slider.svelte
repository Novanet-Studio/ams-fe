<script lang="ts">
	import { animate, inView } from 'motion';
	import { brands } from '$lib/brands';
	import { onMount } from 'svelte';
	import { scrollY } from '$lib/store';

	const spaceBetween = 10;

	function animateElements(repeat = false) {
		inView('swiper-slide', (info) => {
			animate(
				info.target.querySelector('div > img#sliderBanner') as Element,
				{ opacity: [0, 1] },
				{ duration: 0.5, delay: repeat ? 0.1 : 0.3, easing: [0.17, 0.55, 0.55, 1] }
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
	>
		{#each brands.filter((brand) => brand.name.includes('NZ')) as brand (brand.name)}
			<swiper-slide>
				<div class="min-h-screen min-w-full relative">
					<img
						class="min-w-full min-h-screen object-cover object-right"
						src={brand.banner}
						alt={brand.name}
					/>
					<div class="flex absolute top-0 bottom-0 left-0 right-0 justify-center items-center">
						<img
							id="sliderBanner"
							class="p-8 backdrop-filter backdrop-blur-md bg-opacity-50 rounded-md"
							src={brand.image}
							alt={brand.name}
						/>
					</div>
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
