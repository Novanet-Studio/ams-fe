<script lang="ts">
	import backgroundImage from '$lib/assets/main/avila-multisports-training-info-bg-alt.webp';

	const plans = [
		{
			number: 1,
			color: 'bg-[#93B7BB]',
			details: [
				{ title: 'Planificación', text: 'Salvatore Cali' },
				{ title: 'Seguimiento', text: 'Oscar Arapé. 1 vez al mes' },
				{ title: 'Análisis de data', text: 'Johnny Frias. 1 vez al mes' }
			]
		},
		{
			number: 2,
			color: 'bg-[#ACC37E]',
			details: [
				{ title: 'Planificación', text: 'Salvatore Cali' },
				{ title: 'Seguimiento', text: 'Salvatore Cali/Oscar Arapé. 1 vez al mes' },
				{ title: 'Análisis de data', text: 'Johnny Frias. 1 vez al mes' }
			]
		},
		{
			number: 3,
			color: 'bg-[#E3D268]',
			details: [
				{ title: 'Planificación', text: 'Salvatore Cali' },
				{ title: 'Seguimiento', text: 'Salvatore Cali/Oscar Arapé. Más de una vez por semana' },
				{ title: 'Análisis de data', text: 'Salvatore Cali/Johnny Frias. Semanalmente' }
			]
		}
	];

	function getColors(index: number): { li: string; path: string } {
		const colorSets = [
			{
				li: 'bg-#93B7BB border-#93B7BB',
				path: 'bg-#93B7BB'
			},
			{
				li: 'bg-#ACC37E border-#ACC37E',
				path: 'bg-#ACC37E'
			},
			{
				li: 'bg-#E3D268 border-#E3D268',
				path: 'bg-#E3D268'
			}
		];

		const effectiveIndex = index % colorSets.length;

		return colorSets[effectiveIndex];
	}

	function animateElements() {}
</script>

<section
	class="snap-start snap-always min-h-screen w-full relative overflow-hidden filtered-background flex flex-col items-center justify-center p-6 md:p-12"
	style="--bg-image: url({backgroundImage});"
>
	<div class="w-full max-w-7xl mx-auto flex flex-col items-center">
		<div class="text-center">
			<h4 id="name" class="text-[#E3D268] text-4xl font-bold">Entrenamiento</h4>
			<p class="mt-4 w-full mx-auto text-white/90 text-lg md:text-xl leading-relaxed">
				Nuestros planes se adaptan a tus necesidades y nivel, con ajustes diarios si los requieres.
				La diferencia entre ellos radica en el nivel de seguimiento que prefieras. Todo el equipo de
				Ávila Multisport está disponible para resolver tus dudas.
			</p>
		</div>

		<div class="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8 w-full">
			{#each plans as plan, index}
				<div class="relative">
					<div
						class="absolute -top-12 left-1/2 -translate-x-1/2 z-10 w-24 h-24 bg-gray-200/90 rounded-full flex items-center justify-center backdrop-blur-sm"
					>
						<span class="text-4xl font-bold text-[#003B49]">{plan.number}</span>
					</div>

					<div
						id="coachesTop"
						class="w-full absolute left-0 -top-65px h-16
							[clip-path:polygon(0%_100%,_100%_100%,_75%_50%)]
							) {getColors(index).path}"
					/>

					<div class="h-full {plan.color} text-start p-8 pt-16 flex flex-col gap-4">
						{#each plan.details as item}
							<div>
								<p class="text-center font-bold text-[#003B49]">{item.title}</p>
								<p class="text-center text-sm text-black/60">{item.text}</p>
							</div>
						{/each}
					</div>

					<div
						id="coachesBottom"
						class="absolute -bottom-48px left-0 w-full h-12
							[clip-path:polygon(25%_50%,_0_0,_100%_0)]
							) {getColors(index).path}"
					/>
				</div>
			{/each}
		</div>

		<div class="mt-16">
			<a
				href="/planes"
				class="bg-white text-[#003B49] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors"
			>
				Ver toda la información de los planes
			</a>
		</div>
	</div>
</section>

<style>
	.filtered-background::before {
		content: '';
		position: absolute;
		inset: 0;

		background-image: var(--bg-image);
		background-size: cover;
		background-position: center;

		z-index: -1;
	}
</style>
