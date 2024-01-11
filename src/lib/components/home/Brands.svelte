<script lang="ts">
	import { animate, stagger } from 'motion';
	import inView from '$lib/actions/inView';
	import { elementColors } from '$lib/store';
	import { brands } from '$lib/brands';

	let classname = '';

	function animateElements() {
		animate(
			'#brands > div.flex',
			{
				x: [-100, 0],
				opacity: [0, 1]
			},
			{ duration: 1, delay: stagger(0.1) }
		);
		$elementColors.logo = 'dark';
		$elementColors.burger = 'dark';
		$elementColors.copyright = 'dark';
	}

	function handleExit() {
		$elementColors.logo = 'light';
		$elementColors.copyright = 'light';
	}

	export { classname as class };
</script>

<section
	id="brands"
	class="min-h-screen h-screen grid grid-cols-2 gap-16 place-items-center place-content-center snap-start snap-always {classname}"
	use:inView={{ bottom: 100, top: 100 }}
	on:enter={animateElements}
	on:exit={handleExit}
>
	{#each brands as brand}
		<div class="flex items-center justify-center">
			<img src={brand.image} alt={brand.name} class="w-2/3" />
		</div>
	{/each}
</section>
