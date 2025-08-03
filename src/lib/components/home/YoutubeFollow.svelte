<script lang="ts">
	import backgroundImage from '$lib/assets/main/avila-multisports-shared-bg.webp';

	function animateElements() {}
</script>

<section
	class="snap-start snap-always h-screen w-full relative overflow-hidden"
	style="background-image: url({backgroundImage}); background-size: cover; background-position: center;"
	on:enter={animateElements}
>
	<div
		class="relative w-full lg:w-1/2 h-screen z-20
               flex flex-col justify-center
               pl-6 pr-6 md:pl-16 md:pr-10
               "
	>
		<div class="max-w-lg">
			<div class="flex items-center">
				<div
					class="flex-shrink-0 w-20 h-20 bg-[#e3d268] rounded-full flex items-center justify-center z-1"
				>
					<div class="i-ph-youtube-logo-fill text-5xl text-[#003B49]" />
				</div>
				<div class="pl-8 pr-4 py-2 ml--4 bg-#003B49">
					<h2 class="text-white font-bold text-3xl md:text-4xl">Estamos en YouTube</h2>
				</div>
			</div>

			<p class="mt-6 text-white/90 text-lg md:text-xl leading-relaxed">
				Compartimos experiencias, entrenamientos y la filosofía que nos impulsa a vivir una vida
				activa y plena.
			</p>

			<a
				href="https://www.youtube.com/@Avilamultisport"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block mt-8 bg-[#e3d268] text-[#003B49] font-bold py-3 px-8 rounded-md
                       text-lg hover:bg-white transition-colors duration-300"
			>
				Visítanos
			</a>
		</div>
	</div>
</section>
