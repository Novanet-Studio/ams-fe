<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const { getCategorias } = useCategorias();
const { data } = await useAsyncData(
  "home-categorias",
  async () => {
    const response = await getCategorias();
    return response.status === "ok" ? response.data : [];
  },
  { lazy: true },
);

const categorias = computed(() => data.value ?? []);

const active = ref("");
const listRef = ref<HTMLElement>();

function handleActive(slug: string | undefined) {
  if (!slug) return;
  if (slug === active.value) {
    navigateTo(`/productos/${slug}`);
    return;
  }
  active.value = slug;
}

onClickOutside(listRef, () => (active.value = ""));
</script>

<template>
  <section
    id="productos"
    data-color="light"
    class="relative bg-[#003B49] pt-6 snap-start snap-always lg:pt-[4.5rem]"
  >
    <div
      class="z-[3] flex h-screen max-h-screen flex-col justify-center px-6 lg:px-0"
    >
      <div class="flex w-full justify-center">
        <h4 class="mb-8 text-3xl text-[#e3d268] md:mb-16 lg:text-4xl">
          Productos
        </h4>
      </div>

      <ul
        ref="listRef"
        class="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:px-16 lg:pt-[7.5rem]"
      >
        <button
          v-for="category in categorias"
          :key="category.slug"
          class="group relative block w-full overflow-hidden"
          @click.prevent="handleActive(category.slug)"
        >
          <img
            :src="getImageUrl(category.imagen)"
            :alt="category.nombre"
            class="h-40 w-full object-cover md:h-auto"
          />

          <div class="bg-[#93B7BB] py-3">
            <h4 class="text-sm font-bold text-[#003B49] md:text-xl lg:text-2xl">
              {{ category.nombre }}
            </h4>
          </div>

          <div
            class="absolute inset-0 flex items-center justify-center bg-transparent transition-colors duration-300 ease-in-out group-hover:bg-[#93B7BB]/70"
          >
            <div
              class="relative h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <div
                class="absolute top-0 left-0 h-full w-full -translate-y-full transform bg-[#93B7BB] transition-transform duration-500 ease-out group-hover:translate-y-0"
                style="clip-path: polygon(0% 0%, 100% 0%, 25% 15%)"
              />

              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100"
              >
                <h4 class="text-2xl font-bold text-[#003B49]">
                  {{ category.nombre }}
                </h4>
              </div>

              <div
                class="absolute bottom-0 left-0 h-full w-full translate-y-full transform bg-[#93B7BB] transition-transform duration-500 ease-out group-hover:translate-y-0"
                style="clip-path: polygon(0% 100%, 100% 100%, 75% 85%)"
              />
            </div>
          </div>
        </button>
      </ul>
    </div>
  </section>
</template>
