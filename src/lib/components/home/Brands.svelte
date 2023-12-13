<script lang="ts">
	import InspireBrand from '$lib/assets/brands/inspire.png';
	import NzManufacturingBrand from '$lib/assets/brands/nz-manufacturing.png';
	import SafettiBrand from '$lib/assets/brands/safetti.png';
	import SRMBrand from '$lib/assets/brands/srm.png';
	import TrueBrand from '$lib/assets/brands/true.png';
	import WilierBrand from '$lib/assets/brands/wilier.png';
	import { scrollY, elementColor } from '$lib/store';
	import { animate, stagger } from 'motion';

	const brands = [
		{
			name: 'Inspire',
			image: InspireBrand
		},
		{
			name: 'NZ Manufacturing',
			image: NzManufacturingBrand
		},
		{
			name: 'Saffeti',
			image: SafettiBrand
		},
		{
			name: 'SRM',
			image: SRMBrand
		},
		{
			name: 'True',
			image: TrueBrand
		},
		{
			name: 'Willier',
			image: WilierBrand
		}
	];

	let rect: DOMRect;

	$: isIn = $scrollY >= rect?.height;

	$: if (isIn) {
		$elementColor = 'dark';
		animate(
			'#brands > div.flex',
			{
				x: [-100, 0],
				opacity: [0, 1]
			},
			{ delay: stagger(0.1) }
		);
	} else {
		$elementColor = 'light';
	}
</script>

<section
	id="brands"
	class="min-h-screen h-screen grid grid-cols-2 gap-24 place-items-center place-content-center snap-start snap-always"
	bind:contentRect={rect}
>
	{#each brands as brand}
		<div class="flex items-center justify-center">
			<img src={brand.image} alt={brand.name} class="w-2/3" />
		</div>
	{/each}
</section>
