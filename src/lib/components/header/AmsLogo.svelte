<script lang="ts">
	import { elementColors } from '$lib/store';

	$: src = $elementColors.logo === 'light' ? '/ams-light.svg' : '/ams-dark.svg';
</script>

<a href="/">
	<picture class="z-10">
		<img {src} alt="AMS Logo" class="w-80 drop-shadow-md drop-shadow-color-#444" />
	</picture>
</a>
