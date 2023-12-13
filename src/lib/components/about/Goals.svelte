<script lang="ts">
	import type { Topic } from '$lib/types';

	export let info: {
		title: string;
		content: Topic[];
	};
</script>

<section class="w-full h-screen snap-start relative">
	<div
		class="p-8 pt-24 bg-#003B49 h-full [clip-path:polygon(0px_0px,_100%_0px,_100%_85.77%,_0%_91.23%)]"
	>
		<ul>
			{#each info.content as item}
				<li class="mb-4">
					<h4 class="mb-2 text-xl text-#E3D268">{item.title}</h4>
					<p class="text-xs text-#ddd">{item.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
