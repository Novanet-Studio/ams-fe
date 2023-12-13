<script>
	import { beforeNavigate } from '$app/navigation';
	import { isOpen } from '$lib/store';
	import { animate, stagger } from 'motion';

	function disableScroll() {
		document.body.style.overflow = 'hidden';
		document.body.style.userSelect = 'none';
	}

	function enableScroll() {
		document.body.style.overflow = 'auto';
		document.body.style.userSelect = 'auto';
	}

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

	$: $isOpen ? disableScroll() : enableScroll();

	beforeNavigate(() => {
		$isOpen = false;
	});
</script>

<aside
	class="absolute w-full min-h-screen bg-[#003B49] text-white shadow-lg top-0 bottom-0 z-10 max-h-screen overflow-hidden"
	class:open={$isOpen}
>
	<nav class="p-12 text-2xl flex flex-col gap-4 items-center mt-24">
		<a class="link block" href="/">Inicio</a>
		<a class="link block" href="/nosotros">Nosotros</a>
		<a class="link block" href="/productos">Productos</a>
		<a class="link block" href="/coaches">Coaches</a>
		<a class="link block" href="/contacto">Contact</a>
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
