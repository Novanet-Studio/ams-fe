<script lang="ts">
	import { timeline } from 'motion';
	import inView from '$lib/actions/inView';
	import type { Topic } from '$lib/types';

	export let topic: Topic;

	function enterAnimation() {
		timeline(
			[
				[
					'#philosophy',
					{
						opacity: [0, 1]
					},
					{ duration: 0.5, delay: 0.5, easing: [0.17, 0.55, 0.55, 1] }
				],
				[
					'#philosophy > div',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
							'polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)'
						]
					},
					{ duration: 0.5 }
				],
				[
					'#philosophy > div > h3',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.3 }
				],
				[
					'#philosophy > div > p',
					{
						opacity: [0, 1],
						x: [-10, 0]
					},
					{ duration: 0.5, delay: 0.3 }
				]
			],
			{
				duration: 2
			}
		);
	}
</script>

<section
	id="philosophy"
	class="w-full h-screen snap-start relative"
	use:inView={{ bottom: 100, top: 100 }}
	on:enter={enterAnimation}
>
	<div
		class="p-8 pt-24 bg-#55555A h-full [clip-path:polygon(0px_0px,_100%_0px,_100%_85.77%,_0%_91.23%)]"
	>
		<h3 class="mb-4 text-3xl text-#ACC37E">{topic.title}</h3>
		<p class="text-sm text-#ddd">{@html topic.description}</p>
	</div>
</section>
