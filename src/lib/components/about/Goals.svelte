<script lang="ts">
	import { stagger, timeline } from 'motion';
	import inView from '$lib/actions/inView';
	import type { Topic } from '$lib/types';

	export let info: {
		title: string;
		content: Topic[];
	};

	function enterAnimation() {
		timeline([
			[
				'#goals',
				{
					opacity: [0, 1]
				}
			],
			[
				'#goals > div',
				{
					opacity: [0, 1],
					clipPath: [
						'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
						'polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)'
					]
				}
			],
			[
				'#goals > div > ul',
				{
					opacity: [0, 1],
					x: [-10, 0]
				},
				{ duration: 0.75 }
			]
		]);
	}

	function exitAnimation() {
		animate(
			'#history',
			{ opacity: [1, 0] },
			{ duration: 0.5, delay: 0.5, easing: [0.17, 0.55, 0.55, 1] }
		);
	}
</script>

<section id="goals" class="w-full h-screen snap-start relative">
	<div
		class="p-8 pt-24 bg-#003B49 h-94vh [clip-path:polygon(0px_0px,_100%_0px,_100%_85.77%,_0%_91.23%)] md:(pt-40 p-12) lg:(px-16)"
		use:inView={{ bottom: 100, top: 100 }}
		on:enter={enterAnimation}
		on:exit={exitAnimation}
	>
		<ul class="grid grid-cols-1">
			<div
				class="overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
			>
				{#each info.content as item}
					<li class="mb-4 {item.title.toLowerCase() === 'valores'}">
						<h4 class="mb-2 text-xl text-#E3D268 md:text-2xl lg:text-3xl">{item.title}</h4>
						<p class="text-0.73rem leading-normal text-#ddd md:(text-1.15rem max-w-90%)">
							{item.description}
						</p>
					</li>
				{/each}
			</div>
		</ul>
	</div>
</section>
