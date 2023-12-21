<script>
	import { elementColors, isOpen } from '$lib/store';
	import { blur } from 'svelte/transition';
	import NovanetLogo from '../common/NovanetLogo.svelte';

	$: isLight = $elementColors.copyright === 'light' || $isOpen;
</script>

<footer
	class="flex justify-between items-center fixed bottom-6 w-full z-10 px-6 lg:px-16"
	transition:blur={{ amount: 10 }}
>
	<section class="flex gap-2">
		<p class="text-sm {isLight ? 'text-white' : 'text-[#55555A]'}">Sitio hecho por</p>
		<NovanetLogo height={24} class="w-24 p-0 m-0" isDark={!isLight} />
	</section>
	<section class="flex gap-4">
		<button
			class="w-10 h-10 rounded-full bg-[#93B7BB] text-[#003B49] flex items-center justify-center"
		>
			<div class="i-fa6-brands-whatsapp text-xl"></div>
		</button>
		<button
			class="w-10 h-10 rounded-full bg-[#ACC37E] text-[#003B49] flex items-center justify-center"
		>
			<div class="i-fa6-brands-facebook-f text-xl"></div>
		</button>
		<button
			class="w-10 h-10 rounded-full bg-[#E3D268] text-[#003B49] flex items-center justify-center"
		>
			<div class="i-fa6-brands-instagram text-xl"></div>
		</button>
	</section>
</footer>
