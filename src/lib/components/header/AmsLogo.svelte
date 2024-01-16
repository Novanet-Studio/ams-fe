<script lang="ts">
	import { elementColors } from '$lib/store';

	$: src = $elementColors.logo === 'light' ? '/ams-light.png' : '/ams-dark.png';
</script>

<a href="/">
	<picture class="z-10">
		<img {src} alt="AMS Logo" class="drop-shadow-sm drop-shadow-color-#000" />
	</picture>
</a>
