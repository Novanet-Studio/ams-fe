<script lang="ts">
	import inView from '$lib/actions/inView';
	import { isDesktop } from '$lib/store';
	import { animate, stagger, timeline } from 'motion';

	function enterAnimation() {
		timeline(
			[
				[
					'#contact',
					{
						opacity: [0, 1]
					},
					{ duration: 0.5, delay: 0.5, easing: [0.17, 0.55, 0.55, 1] }
				],
				[
					'#contact > div',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
							$isDesktop
								? 'polygon(0 0, 100% 0, 100% 85.4%, 0% 91.23%)'
								: 'polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)'
						]
					},
					{ duration: 0.5 }
				],
				[
					'#contact > div > h3',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.5 }
				],
				[
					'#contact > div > form > input',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: stagger(0.3) }
				],
				[
					'#contact > div > form > textarea',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.1 }
				],
				[
					'#contact > div > form > button',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.1 }
				]
			],
			{
				duration: 2.2
			}
		);
	}

	function exitAnimation() {
		animate(
			'#contact',
			{ opacity: [1, 0] },
			{ duration: 0.5, delay: 0.5, easing: [0.17, 0.55, 0.55, 1] }
		);
	}
</script>

<section
	id="contact"
	class="w-full h-screen snap-start relative"
	use:inView={{ bottom: 100, top: 100 }}
	on:enter={enterAnimation}
	on:exit={exitAnimation}
>
	<div class="p-8 pt-24 bg-#003B49 h-94vh md:(pt-32 p-12) lg:pl-16">
		<h3 class="mb-4 text-2xl text-#E3D268 md:text-4xl">Contáctanos</h3>
		<form class="flex flex-col gap-4 md:gap-6">
			<input class="w-full" type="text" name="name" placeholder="Nombre" />
			<input class="w-full" type="text" name="phone" placeholder="Teléfono" />
			<input class="w-full" type="text" name="lastname" placeholder="Apellido" />
			<input class="w-full" type="email" name="email" placeholder="Email" />
			<textarea class="pt-3 pl-3" name="message" id="" rows="4" placeholder="Mensaje"></textarea>
			<button class="self-start bg-#ACC37E py-2 px-12 rounded-full">Enviar</button>
		</form>
		<!-- <p class="text-0.73rem leading-normal text-#ddd md:(text-1.15rem max-w-90%)">
			{@html topic.description}
		</p> -->
	</div>
</section>
