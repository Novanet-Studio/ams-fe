<script>
	import { isOpen } from '$lib/store';
	import { animate, stagger } from 'motion';

	$: if ($isOpen) {
		animate(
			'.link',
			{ x: [-200, 0], opacity: [0, 1] },
			{
				delay: stagger(0.1),
				duration: 0.2,
				easing: [0.22, 0.03, 0.26, 0.1]
			}
		);
	}
</script>

<aside
	class="absolute w-full min-h-screen bg-[#003B49] border-r-2 text-white shadow-lg bottom-0"
	class:open={$isOpen}
>
	<nav class="p-12 text-2xl flex flex-col gap-4 items-center mt-24">
		<a class="link block" href="#about">Inicio</a>
		<a class="link block" href="#about">Nosotros</a>
		<a class="link block" href="#products">Productos</a>
		<a class="link block" href="#coaches">Coaches</a>
		<a class="link block" href="#contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		min-height: 100vh;
	}

	.open {
		left: 0;
	}
</style>
