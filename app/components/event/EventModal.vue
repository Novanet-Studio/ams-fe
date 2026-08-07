<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import type { Evento } from "~/types";
import { getImageUrl } from "~/utils/functions";

defineProps<{ event: Evento }>();
const emit = defineEmits<{ close: [] }>();

const panel = ref<HTMLElement>();
onClickOutside(panel, () => emit("close"));
</script>

<template>
  <Transition name="modal-backdrop" appear>
    <div
      class="fixed inset-0 z-40 flex items-center justify-center bg-[#003B49]/90 p-4"
    >
      <Transition name="modal-panel" appear>
        <div
          ref="panel"
          class="relative flex max-h-full w-full max-w-6xl flex-col bg-white pt-0 pr-0 pb-0 pl-0 shadow-xl md:flex-row"
        >
          <button
            type="button"
            class="absolute top-3 right-3 z-50 bg-[#E3D268] p-1 shadow-lg hover:bg-gray-200"
            @click="emit('close')"
          >
            <Icon name="ph:x-bold" class="text-xl text-gray-700" />
          </button>

          <div class="flex w-full flex-shrink-0 flex-col gap-2 md:w-1/3">
            <img
              :src="getImageUrl(event.imagen_portada)"
              :alt="event.titulo"
              class="h-full w-full object-cover md:rounded-t-none"
            />

            <a
              v-if="event.brochure"
              :href="getImageUrl(event.brochure)"
              download
              target="_blank"
              class="flex items-center justify-center gap-2 rounded-md bg-[#e3d268] px-8 py-3 text-sm text-[#003B49] transition-colors duration-300 hover:bg-[#e3d268]/80"
            >
              Descarga el brochure del evento
              <Icon name="ph:arrow-down-bold" class="text-sm text-[#003B49]" />
            </a>
          </div>

          <div
            class="max-h-[50vh] overflow-y-scroll p-6 lg:max-h-none lg:overflow-hidden"
          >
            <h3 class="text-2xl font-bold text-[#003B49]">
              {{ event.titulo }}
            </h3>
            <h4 class="text-xl font-bold text-[#003B49]/50">
              {{ event.ubicacion }}
            </h4>

            <div class="mt-4 space-y-2 text-gray-600">
              <p>{{ event.descripcion }}</p>

              <p>
                <b class="text-[#003B49]">Inicio:</b>
                {{ event.fecha_inicio ?? "Por confirmar" }}
                | <b class="text-[#003B49]">Finalización:</b>
                {{ event.fecha_fin ?? "Por confirmar" }}
              </p>

              <p>
                <b class="text-[#003B49]">Organizador:</b>
                {{ event.organizador ?? "Información no disponible" }}
              </p>

              <p>
                <b class="text-[#003B49]">Tipo de evento:</b>
                {{ event.tipo_evento ?? "Por definir" }}
              </p>

              <p v-if="event.brochure && event.info" class="text-gray-600">
                {{ event.info }}
              </p>

              <template v-if="event.brochure">
                Para más detalles del recorrido, recomendaciones logísticas y
                hoteles,
                <b>descarga el brochure del evento</b>
              </template>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.modal-panel-enter-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  transition-delay: 0.1s;
}
.modal-panel-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.modal-panel-enter-from,
.modal-panel-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
