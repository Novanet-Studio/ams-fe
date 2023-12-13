<script lang="ts">
	import { timeline } from 'motion';
	import { elementColor, scrollY } from '$lib/store';

	let rect: DOMRect;

	$: isIn = $scrollY >= rect?.height - 200;
	$: if (isIn) {
		$elementColor = 'dark';
		timeline(
			[
				'bg',
				[
					'#featuredMessage > div.max-h-screen',
					{
						clipPath: [
							'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
							'polygon(0% 0%,70% 0%,100% 100%,0% 100%)'
						]
					},
					{ duration: 0.5, at: 'bg' }
				],
				[
					'#featuredMessage > div.absolute',
					{
						opacity: [0, 1],
						x: [-200, 0],
						clipPath: [
							'polygon(0% 0%, 100% 0%, 100% 99.41%, 0% 100%)',
							'polygon(0.08% 0.12%, 100% 0%, 82.52% 41.59%, 1.2% 89.93%)'
						]
					},
					{ duration: 0.5, delay: 0.3, at: 'bg' }
				],
				[
					'#featuredMessage h4',
					{ opacity: [0, 1], x: [-100, 0] },
					{ duration: 0.5, delay: 0.2, at: 'bg' }
				],
				[
					'#featuredMessage p',
					{ opacity: [0, 1], x: [-100, 0] },
					{ duration: 0.5, delay: 0.4, at: 'bg' }
				]
			],
			{ duration: 0.5 }
		);

		// animate(
		// 	'#featuredMessage > div',
		// 	// { opacity: [0, 1], x: [-100, 0] },
		// 	{
		// 		clipPath: [
		// 			// 'polygon(0% 0%,70% 0%,100% 100%,0% 100%)',
		// 			'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
		// 			'polygon(0% 0%,70% 0%,100% 100%,0% 100%)'
		// 		],
		// 		backgroundColor: '#003B49'
		// 	},
		// 	{ duration: 0.5, delay: 0, easing: [0.17, 0.55, 0.55, 1] }
		// );

		// animate(
		// 	'#featuredMessage h4',
		// 	{ opacity: [0, 1], x: [-100, 0] },
		// 	{ duration: 0.6, delay: 0.3, easing: [0.17, 0.55, 0.55, 1] }
		// );
	} else {
		$elementColor = 'light';
	}
</script>

<section
	id="featuredMessage"
	class="relative snap-start snap-always max-h-screen min-h-screen w-full"
	bind:contentRect={rect}
>
	<!-- <div
		class="max-h-screen h-screen [clip-path:polygon(0%_0%,70%_0%,100%_100%,0%_100%)] bg-[#003B49] z-3 flex flex-col justify-center pl-6"
	> -->
	<div id="" class="max-h-screen h-screen bg-[#003B49] z-3 flex flex-col justify-center pl-6">
		<h4 class="text-[#E3D268] text-xl opacity-0 font-300 max-w-sm z-4">
			Somos representantes exclusivos de Wilier e Inspire Fitness. También, distribuidores de
			equipos True
		</h4>
		<p class="text-[#DDDDDD] font-300 opacity-0 max-w-sm mt-4">
			Ofrecemos su garantía comercial además de brindarte el servicio que te mereces. Tenemos a tu
			disposición una selección de las mejores bicicletas y equipos
		</p>
	</div>

	<!-- <div
		class="absolute top-0 right-0 bottom-0 [clip-path:polygon(0%_0%,100%_0%,60%_100%,0%_100%)] bg-blue min-h-screen w-full"
	></div> -->

	<div
		class="absolute top-0 right-0 bottom-0 [clip-path:polygon(70.23%_0%,_100%_0%,_82.52%_41.59%,_72.71%_10.19%)] bg-[#93B7BB] w-full -z-1"
	></div>
</section>
