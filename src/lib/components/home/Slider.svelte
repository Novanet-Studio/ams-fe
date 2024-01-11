<script lang="ts">
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';
	import { Navigation } from 'swiper/modules';
	import { carousel } from '$lib/brands';
	import * as actions from '$lib/actions/inView';
	import { elementColors } from '$lib/store';
	import NavigationBtn from '../common/NavigationBtn.svelte';

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

	$: swiperEl = document.querySelector('swiper-container');

	const onSlideChange = () => {
		animateElements();
	};

	onMount(() => {
		animateElements();
	});
</script>

<section
	class="snap-start snap-always h-screen relative"
	use:actions.inView={{ bottom: 100, top: 100 }}
	on:enter={animateElements}
>
	<NavigationBtn icon="i-fa6-solid-arrow-left" class="prev-btn" />
	<swiper-container
		class="min-h-screen w-full top-0"
		slides-per-view={1}
		space-between={spaceBetween}
		centered-slides={true}
		modules={[Navigation]}
		navigation={{
			// enabled: false
			nextEl: 'next-btn',
			prevEl: 'prev-btn'
		}}
		pagination={{}}
		breakpoints={{
			1024: {
				pagination: false,
				navigation: true
			}
		}}
	>
		{#each carousel.accesories as accesory (accesory.name)}
			<swiper-slide
				class="min-h-screen min-w-full bg-center bg-cover flex flex-col justify-center items-start pl-16"
				style="background-image: url({accesory.image})"
			>
				<img
					id="sliderBanner"
					class="p-8 drop-shadow-sm drop-shadow-color-#ddd rounded-md"
					src={accesory.logo}
					alt={accesory.name}
				/>
			</swiper-slide>
		{/each}
	</swiper-container>

	<NavigationBtn icon="i-fa6-solid-arrow-right" class="next-btn" position="right" />
</section>

<style>
	swiper-container::part(pagination) {
		--swiper-pagination-bottom: 5rem;
		--swiper-pagination-color: #fff;
	}
</style>
