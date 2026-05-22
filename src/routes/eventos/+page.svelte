<script lang="ts">
	import { getImageUrl } from '$lib/utils';
	import { onMount } from 'svelte';
	import { animate } from 'motion';
	import { fly } from 'svelte/transition';
	import { clickOutside } from '$lib/actions/clickOutside';
	import { elementColors } from '$lib/store';

	//? banner
	import { eventsBanner } from '$lib/events';

	let { data }: { data: any } = $props();
	let Events = $derived(data.Events);

	let activeEvent = $state<any>(null);

	function handleActive(event: any) {
		activeEvent = event;
	}

	function closeModal() {
		activeEvent = null;
	}

	function animateElements() {
		animate([], {
			duration: 2
		});
	}

	onMount(() => {
		animateElements();
		$elementColors.copyright = 'dark';
	});
</script>

<section
	id="productCategories"
	class="relative bg-#003B49 flex flex-col items-center pt-14 lg:pt-20"
>
	<div class="w-full">
		<div
			id="top"
			class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#e3d268 lg:h-20"
		/>
		<div class="w-full h-48 relative overflow-hidden lg:h-72">
			<div
				id="middle"
				class="absolute inset-0 flex justify-center items-center bg-#e3d268/70 gap-2 z-2"
			>
				<h4 id="name" class="text-#003B49 font-bold text-2xl md:text-4xl lg:text-5xl">Eventos</h4>
			</div>
			<img
				id="image"
				class="w-full h-full object-cover object-center"
				src={eventsBanner}
				alt="eventsBanner"
			/>
		</div>
		<div
			id="bottom"
			class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#e3d268 lg:h-20"
		/>
	</div>

	<div class="w-full bg-white pb-20 -mt-10 lg:-mt-20">
		<div class="max-w-[90%] lg:max-w-[80%] mx-auto py-12 md:py-20 text-left">
			<p class="text-xl md:text-2xl leading-relaxed text-gray-600">
				En Ávila Multisport, cada evento refleja nuestro espíritu de comunidad, montaña y
				superación. Participamos y organizamos experiencias que celebran el deporte, el bienestar y
				la conexión con la naturaleza. Acompáñanos en cada kilómetro, cada reto y cada logro.
			</p>
		</div>

		<ul
			class="max-w-[90%] lg:max-w-[80%] mx-auto w-full pb-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
			use:clickOutside
			onclickoutside={() => null}
		>
			{#if $Events.data?.events?.length}
				{#each $Events.data?.events as event (event?.title)}
					<button
						onclick={(e) => {
							e.preventDefault();
							handleActive(event);
						}}
						class="text-left w-full transition-all duration-300"
					>
						<li id={event?.title?.toLowerCase()} class="relative w-full overflow-hidden">
							<img
								id="image"
								src={getImageUrl(event?.portraid_url?.url)}
								alt={event?.title}
								class="w-full h-56 object-cover"
							/>
						</li>

						<div class=" flex justify-center p-3 bg-#e3d268">
							<h4 class="text-#003B49 font-bold text-xl sm:text-2xl lg:text-2xl">
								{event?.title}
							</h4>
							<div
								class="i-ph-arrow-right-bold mt-1 md:mt-2 ml-1 text-xl text-3xl text-#003B49"
								transition:fly={{ x: -10, delay: 0.5 }}
							/>
						</div>
					</button>
				{/each}
			{/if}
		</ul>
	</div>

	{#if activeEvent}
		<div
			class="fixed inset-0 bg-[#003B49]/90 z-40 flex items-center justify-center p-4"
			transition:fly={{ y: 20, duration: 300 }}
		>
			<div
				class="bg-white shadow-xl max-w-6xl w-full pt-0 pb-0 pl-0 flex flex-col md:flex-row relative
                       max-h-full"
				use:clickOutside
				onclickoutside={closeModal}
				transition:fly={{ y: -20, duration: 300, delay: 100 }}
			>
				<button
					onclick={closeModal}
					class="absolute top-3 right-3 bg-[#E3D268] p-1 shadow-lg z-50 hover:bg-gray-200"
				>
					<div class="i-ph-x-bold text-xl text-gray-700" />
				</button>

				<div class="w-full md:w-1/3 flex-shrink-0 flex flex-col gap-2">
					<img
						src={getImageUrl(activeEvent?.portraid_url?.url)}
						alt={activeEvent?.title}
						class="w-full h-full object-cover md:rounded-t-none"
					/>

					{#if activeEvent?.brochure?.url}
						<a
							href={getImageUrl(activeEvent?.brochure?.url)}
							download
							target="_blank"
							class="bg-#e3d268 text-[#003B49] py-3 px-8 rounded-md text-sm hover:bg-#e3d268/80 transition-colors duration-300 flex justify-center items-center gap-2"
						>
							Descarga el brochure del evento
							<div class="i-ph-arrow-down-bold text-sm text-[#003B49]" />
						</a>
					{/if}
				</div>
				<div class="p-6 overflow-y-scroll max-h-[50vh] md:(max-h-auto overflow-hidden)">
					<h3 class="text-2xl font-bold text-[#003B49]">{activeEvent?.title}</h3>
					<h4 class="text-xl font-bold text-#003B49/50">{activeEvent?.location}</h4>

					<div class="mt-4 text-gray-600 space-y-2">
						<p>{activeEvent?.description}</p>

						<p>
							<b class="text-#003B49">Inicio:</b>

							{activeEvent?.date_start ?? 'Por confirmar'}

							| <b class="text-#003B49">Finalización:</b>

							{activeEvent?.date_end ?? 'Por confirmar'}
						</p>

						<p>
							<b class="text-#003B49">Organizador:</b>
							{activeEvent?.organizer ?? 'Información no disponible'}
						</p>

						<p>
							<b class="text-#003B49">Tipo de evento:</b>
							{activeEvent?.event_type ?? 'Por definir'}
						</p>

						{#if activeEvent?.brochure?.url && activeEvent?.info}
							<p class="text-gray-600">
								{activeEvent?.info}
							</p>
						{/if}

						{#if activeEvent?.brochure?.url}
							Para más detalles del recorrido, recomendaciones logísticas y hoteles, <b>
								descarga el brochure del evento</b
							>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>
