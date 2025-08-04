<script lang="ts">
	import { elementColors } from '$lib/store';
	import { stagger, timeline } from 'motion';
	import { onMount } from 'svelte';

	//? banner
	import { coaches, allies, trainingsBanner, trainingInfoBg, info } from '$lib/training';

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

	onMount(() => {
		$elementColors.copyright = 'dark';

		timeline(
			[
				[
					'#coaches',
					{
						opacity: [0, 1],
						background: ['#fff', '#003B49']
					},
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#coaches #image',
					{ opacity: [0, 1], filter: ['blur(2px)', 'blur(0)'] },
					{ duration: 0.4, easing: 'ease-out' }
				],
				[
					'#coaches #middle',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.1, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#coaches #middle #name',
					{ opacity: [0, 1], x: [-10, 0] },
					{ duration: 0.3, easing: 'ease-out', delay: 0.2 }
				],
				[
					'#coaches #top',
					{
						opacity: [0, 1],
						clipPath: [
							'polygon(0% 100%, 100% 100%, 90% 70%)',
							'polygon(0% 100%, 100% 100%, 73.49% 50.75%)'
						]
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				[
					'#coaches #bottom',
					{
						opacity: [0, 1],
						clipPath: ['polygon(40% 70%, 0 0, 100% 0)', 'polygon(32% 60%, 0 0, 100% 0)']
					},
					{ duration: 0.2, easing: 'ease-out' }
				],
				['#coaches ul h3', { opacity: [0, 1], y: [-10, 0] }, { duration: 1, easing: 'ease-out' }],
				[
					'#coaches ul li',
					{ opacity: [0, 1], y: [10, 0] },
					{ duration: 1, easing: 'ease-out', delay: stagger(0.2) }
				]
			],
			{
				duration: 2
			}
		);
	});
</script>

<section
	id="banner"
	class="snap-start snap-always bg-#003B49 flex flex-col items-center pt-14 lg:pt-18"
>
	<div class="w-full">
		<div
			id="top"
			class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#ACC37E lg:h-80px"
		/>
		<div class="w-full h-36 relative overflow-hidden lg:h-300px">
			<div
				id="middle"
				class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#ACC37E/50 gap-2 z-2"
			>
				<h4 id="name" class="text-#003B49 font-bold text-2xl md:text-3xl lg:text-4xl">
					Entrenamiento
				</h4>
			</div>
			<img
				id="image"
				class="md:min-w-full min-h-full object-cover object-center"
				src={trainingsBanner}
				alt="Training banner"
			/>
		</div>
		<div
			id="bottom"
			class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#ACC37E lg:h-80px"
		/>
	</div>

	<div class="-mt-12 bg-#fff w-full min-h-full md:px-12 lg:-mt-20">
		<div class="max-w-[90%] mx-auto py-12 md:py-20 text-start">
			<p class=" text-xl md:text-2xl leading-relaxed text-gray-600">
				Diseñamos planes personalizados con entrenadores especializados y alianzas estratégicas para
				un ecosistema de entrenamiento completo. Se ofrecen TRES tipos de planes, todos con
				planificación y ajustes diarios según necesidades del atleta. La diferencia radica en el
				grado de seguimiento deseado.
			</p>

			<div class="mt-20 snap-start snap-always mb-5 w-full flex justify-center">
				<h4 id="name" class="text-#003B49 font-bold text-4xl">Planes</h4>
			</div>

			<p class="text-xl md:text-2xl leading-relaxed text-gray-600">
				La inscripción que incluye asesoría nutricional con nuestra especialista Carolina Lairet y
				escoges algunos de estos 3 planes.
			</p>

			<div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				<div class="bg-gray-100 rounded-xl p-4 md:p-6 text-center flex flex-col">
					<h3 class="font-bold text-2xl mb-4 text-#003B49">Plan 1</h3>
					<div class="bg-[#93B7BB] rounded-lg p-6 text-start h-full flex-grow">
						<div class="mb-5">
							<p class="font-bold text-#003B49">Planificación</p>
							<p class="text-sm text-gray-700">Salvatore Cali</p>
						</div>
						<div class="mb-5">
							<p class="font-bold text-#003B49">Seguimiento</p>
							<p class="text-sm text-gray-700">Oscar Arapé. 1 vez al mes</p>
						</div>
						<div>
							<p class="font-bold text-#003B49">Análisis de data</p>
							<p class="text-sm text-gray-700">Johnny Frias. 1 vez al mes</p>
						</div>
					</div>
				</div>

				<div class="bg-gray-100 rounded-xl p-4 md:p-6 text-center flex flex-col">
					<h3 class="font-bold text-2xl mb-4 text-#003B49">Plan 2</h3>
					<div class="bg-[#ACC37E] rounded-lg p-6 text-start h-full flex-grow">
						<div class="mb-5">
							<p class="font-bold text-#003B49">Planificación</p>
							<p class="text-sm text-gray-700">Salvatore Cali</p>
						</div>
						<div class="mb-5">
							<p class="font-bold text-#003B49">Seguimiento</p>
							<p class="text-sm text-gray-700">Salvatore Cali/Oscar Arapé. 1 vez al mes</p>
						</div>
						<div>
							<p class="font-bold text-#003B49">Análisis de data</p>
							<p class="text-sm text-gray-700">Johnny Frias. 1 vez al mes</p>
						</div>
					</div>
				</div>

				<div class="bg-gray-100 rounded-xl p-4 md:p-6 text-center flex flex-col">
					<h3 class="font-bold text-2xl mb-4 text-#003B49">Plan 3</h3>
					<div class="bg-[#E3D268] rounded-lg p-6 text-start h-full flex-grow">
						<div class="mb-5">
							<p class="font-bold text-#003B49">Planificación</p>
							<p class="text-sm text-gray-700">Salvatore Cali</p>
						</div>
						<div class="mb-5">
							<p class="font-bold text-#003B49">Seguimiento</p>
							<p class="text-sm text-gray-700">
								Salvatore Cali/Oscar Arapé. Más de una vez por semana
							</p>
						</div>
						<div>
							<p class="font-bold text-#003B49">Análisis de data</p>
							<p class="text-sm text-gray-700">Salvatore Cali/Johnny Frias. Semanalmente</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section
	class="snap-start snap-always min-h-screen w-full relative overflow-hidden filtered-background"
	style="--bg-image: url({trainingInfoBg});"
>
	<div class="w-full min-h-[100dvh] flex flex-col items-center justify-center">
		<div class="mt-20 w-full flex justify-center">
			<h4 id="name" class="text-#e3d268 font-bold text-4xl">¿Qué más incluyen los planes?</h4>
		</div>

		<div class="max-w-[90%] xl:max-w-[80%] mx-auto text-center">
			<ul
				class="w-full py-12 md:py-20 grid justify-center gap-x-8 gap-y-22 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
			>
				{#each info as i, index}
					<li class="w-full bg-white p-6 flex-1 md:mx-auto relative border lg:(last:mx-0 p-8)">
						<div
							id="coachesTop"
							class="w-full absolute left-0 -top-65px h-16
							[clip-path:polygon(0%_100%,_100%_100%,_75%_50%)]
							) {getColors(index).path}"
						/>

						<div class="flex gap-2">
							<span
								class="{getColors(index)
									.path} flex justify-center items-center w-16 h-16 rounded-full"
							>
								<img class="w-8 h-8" src={i.icon} alt={i.label} />
							</span>

							<h5 class="text-pretty text-#003B49 font-bold text-sm mt-2 md:(text-base mt-4)">
								{i.label}
							</h5>
						</div>

						<p class="text-start text-#55555A text-sm mt-2 md:(mt-4) whitespace-pre-line">
							{i.desc}
						</p>

						<div
							id="coachesBottom"
							class="absolute -bottom-48px left-0 w-full h-12
							[clip-path:polygon(25%_50%,_0_0,_100%_0)]
							) {getColors(index).path}"
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section
	id="allies"
	class="snap-start snap-always bg-white flex flex-col items-center pt-14 lg:pt-18"
>
	<div
		class="w-full max-w-[90%] lg:max-w-[80%] min-h-[100dvh] flex flex-col items-center justify-center"
	>
		<div class="w-full flex flex-col justify-center items-center">
			<h4 id="name" class="text-#003B49 text-#003B49 font-bold text-4xl">Aliados</h4>

			<p class="mt-4 text-xl md:text-2xl leading-relaxed text-gray-600">
				Contamos con el apoyo de destacadas instituciones y profesionales que suman un gran valor a
				nuestros servicios.
			</p>
		</div>

		<ul
			class="w-full py-12 md:py-20 grid justify-center gap-x-8 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
		>
			{#if allies.length}
				{#each allies as allie}
					<li class="flex justify-start items-center gap-4">
						<div class="flex-shrink-0 w-24 h-24">
							<img
								src={allie.avatar}
								alt="Avatar de {allie.name}"
								class="w-full h-full rounded-full object-cover ring-2 ring-gray-200"
							/>
						</div>

						<div class="w-full flex flex-col">
							<h3 class="font-bold text-lg text-[#003B49]">
								{allie.name}
							</h3>
							<p class="text-gray-500 text-sm mt-1">
								{allie.description}
							</p>

							<a
								href="/#"
								rel="noopener noreferrer"
								class="mt-3 inline-block bg-gray-200 text-003B49 font-bold text-sm
                               py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
							>
								Ver más información
							</a>
						</div>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</section>

<section
	id="coaches"
	class="snap-start snap-always bg-#003B49 flex flex-col items-center pt-14 lg:pt-18"
>
	<div class="  w-full min-h-[100dvh] flex flex-col items-center justify-center">
		<div class="w-full flex justify-center">
			<h4 id="name" class="text-#e3d268 text-lg md:text-3xl lg:text-4xl">Coaches</h4>
		</div>

		<div class="max-w-[90%] lg:max-w-[80%] mx-auto text-center">
			<ul
				class="px-12 pt-45 pb-12 flex flex-col gap-40 min-h-screen md:(mt-40 gap-70) lg:(flex-row min-h-full justify-center mx-auto mb-0 pt-10 gap-6 px-0)"
			>
				{#each coaches as coach, index}
					<li
						class="p-6 flex-1 md:mx-auto relative border md:p-16 lg:(last:mx-0 p-8 pt-12 pb-12) {getColors(
							index
						).li}"
					>
						<div
							id="coachesTop"
							class="w-full absolute left-0 -top-65px h-16 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] md:[clip-path:polygon(0%_100%,_100%_100%,_73.49%_0%)] lg:(h-80px -top-81px [clip-path:polygon(0%_100%,_100%_100%,_80.35%_35%)]) {getColors(
								index
							).path}"
						/>
						<div
							class="absolute flex justify-center left-0 right-0 -top-100px md:-top-180px lg:-top-8.5rem"
						>
							<img
								class="max-w-128px md:max-w-14rem lg:max-w-12rem"
								src={coach.avatar}
								alt={coach.name}
							/>
						</div>
						<div class="flex justify-center">
							<a
								href={coach.instagramProfile}
								target="_blank"
								class="flex items-center gap-2 text-2xl text-#55555A hover:text-#47474d"
							>
								<h4 class=" text-center font-bold mt-4 text-xl md:text-3xl">
									{coach.name}
								</h4>
								<div class="i-fa6-brands-instagram mt-4"></div>
							</a>
						</div>
						<div class="text-#55555A font-700 text-sm text-center md:text-base">
							Especialidad: <span class="text-sm font-300 md:text-base">{coach.speciality}</span>
						</div>
						<p class="text-pretty text-#55555A text-sm mt-2 md:(text-base mt-4)">
							{coach.shortBio}
						</p>
						<div
							id="coachesBottom"
							class="absolute -bottom-48px left-0 w-full h-12 [clip-path:polygon(32%_60%,_0_0,_100%_0)] md:[clip-path:polygon(14%_97%,_0_0,_100%_0)] lg:(h-80px -bottom-81px [clip-path:polygon(18%_50%,_0_0,_100%_0)]) {getColors(
								index
							).path}"
						/>
					</li>
				{/each}
			</ul>
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

		filter: brightness(0.5) grayscale(100%);

		z-index: -1;
	}
</style>
