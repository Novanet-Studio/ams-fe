<script setup lang="ts">
import { animate, stagger } from 'motion-v'
import type { Evento } from '~/types'
import { eventsBanner } from '~/utils/banners'

const { data: eventosResult } = await useAsyncData('eventos', () =>
  useEventos().getEventos(),
)
const eventos = computed<Evento[]>(() => eventosResult.value?.data ?? [])

const activeEvent = ref<Evento | null>(null)

function handleActive(event: Evento) {
  activeEvent.value = event
}

function closeModal() {
  activeEvent.value = null
}

onMounted(() => {
  animate(
    '.event-arrow',
    { x: [-10, 0], opacity: [0, 1] },
    { duration: 0.3, delay: stagger(0.05, { startDelay: 0.5 }) },
  )
})
</script>

<template>
  <section
    id="eventos"
    data-color="dark"
    class="relative flex flex-col items-center bg-[#003B49] pt-14 lg:pt-20"
  >
    <div class="w-full">
      <div
        class="h-10 w-full bg-[#e3d268] [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] lg:h-20"
      />
      <div class="relative h-48 w-full overflow-hidden lg:h-72">
        <div
          class="absolute inset-0 z-2 flex items-center justify-center gap-2 bg-[#e3d268]/70"
        >
          <h4 class="text-2xl font-bold text-[#003B49] md:text-4xl lg:text-5xl">Eventos</h4>
        </div>
        <img
          class="h-full w-full object-cover object-center"
          :src="eventsBanner"
          alt="eventsBanner"
        />
      </div>
      <div
        class="bottom-0 left-0 h-10 w-full bg-[#e3d268] [clip-path:polygon(32%_60%,_0_0,_100%_0)] lg:h-20"
      />
    </div>

    <div class="-mt-10 w-full bg-white pb-20 lg:-mt-20">
      <div class="mx-auto max-w-[90%] py-12 text-left md:py-20 lg:max-w-[80%]">
        <p class="text-xl leading-relaxed text-gray-600 md:text-2xl">
          En Ávila Multisport, cada evento refleja nuestro espíritu de comunidad, montaña y
          superación. Participamos y organizamos experiencias que celebran el deporte, el
          bienestar y la conexión con la naturaleza. Acompáñanos en cada kilómetro, cada reto y
          cada logro.
        </p>
      </div>

      <ul
        v-if="eventos.length"
        class="mx-auto grid w-full max-w-[90%] grid-cols-1 gap-8 pb-20 sm:grid-cols-2 lg:max-w-[80%] lg:grid-cols-3"
      >
        <EventCard
          v-for="event in eventos"
          :key="event.slug"
          :event="event"
          @select="handleActive"
        />
      </ul>
    </div>

    <EventModal v-if="activeEvent" :event="activeEvent" @close="closeModal" />
  </section>
</template>
