<script lang="ts">
	import type { Topic } from '$lib/types';

	export let topic: Topic;
</script>

<section class="w-full h-screen snap-start relative">
	<div
		class="p-8 pt-24 bg-#55555A h-full [clip-path:polygon(0px_0px,_100%_0px,_100%_85.77%,_0%_91.23%)]"
	>
		<h3 class="mb-4 text-3xl text-#ACC37E">{topic.title}</h3>
		<p class="text-sm text-#ddd">{@html topic.description}</p>
	</div>
</section>
