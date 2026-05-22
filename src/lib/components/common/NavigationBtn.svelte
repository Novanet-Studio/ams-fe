<script lang="ts">
	let {
		icon,
		class: classnames = '',
		position = 'left',
		onclick
	}: {
		icon: string;
		class?: string;
		position?: 'left' | 'right';
		onclick?: (e: MouseEvent) => void;
	} = $props();
</script>

<button
	class="{classnames} w-8 h-8 md:w-12 md:h-12 bg-#55555A/50 hover:bg-#55555A/80 rounded-full flex items-center justify-center absolute z-10 bottom-47% {position ===
	'left'
		? 'left-2'
		: 'right-2'}"
	{onclick}
>
	<div class="{icon} text-white text-md md:text-lg" />
</button>
