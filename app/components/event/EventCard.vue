<script setup lang="ts">
import type { Evento } from '~/types'
import { getImageUrl } from '~/utils/functions'

defineProps<{ event: Evento }>()
defineEmits<{ select: [event: Evento] }>()
</script>

<template>
  <button
    type="button"
    class="w-full text-left transition-all duration-300"
    @click.prevent="$emit('select', event)"
  >
    <li class="relative w-full list-none overflow-hidden">
      <img
        :src="getImageUrl(event.imagen_portada)"
        :alt="event.titulo"
        class="h-56 w-full object-cover"
      />
    </li>

    <div class="flex justify-center bg-[#e3d268] p-3">
      <h4 class="text-xl font-bold text-[#003B49] sm:text-2xl lg:text-2xl">
        {{ event.titulo }}
      </h4>
      <Icon
        name="ph:arrow-right-bold"
        class="event-arrow mt-1 ml-1 text-3xl text-[#003B49] md:mt-2"
      />
    </div>
  </button>
</template>
