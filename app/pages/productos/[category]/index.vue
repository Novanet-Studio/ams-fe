<script setup lang="ts">
import { animate, stagger } from "motion-v";
import { getImageUrl } from "~/utils/functions";

const route = useRoute();
const categoriaSlug = route.params.category as string;

const { getSubcategorias } = useSubcategorias();
const { data: subcategoriasResponse, pending } = await useAsyncData(
  `subcategorias-${categoriaSlug}`,
  () => getSubcategorias(categoriaSlug),
);

const subcategorias = computed(() => subcategoriasResponse.value?.data ?? []);
const categoria = computed(() => subcategorias.value[0]?.categoria);

function handleActive(slug: string) {
  navigateTo(`/productos/${categoriaSlug}/${slug}`);
}

function animation() {
  animate(
    [
      [
        "#categories",
        { opacity: [0, 1], background: ["#fff", "#003B49"] },
        { duration: 0.4, ease: "easeOut" },
      ],
      [
        "#categories #image",
        { opacity: [0, 1] },
        { duration: 0.4, ease: "easeOut" },
      ],
      [
        "#categories #middle",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.1, ease: "easeOut" },
      ],
      [
        "#categories #middle #name",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.3, ease: "easeOut" },
      ],
      [
        "#categories #top",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(0% 100%, 100% 100%, 90% 70%)",
            "polygon(0% 100%, 100% 100%, 73.49% 50.75%)",
          ],
        },
        { duration: 0.2, ease: "easeOut" },
      ],
      [
        "#categories #bottom",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(40% 70%, 0 0, 100% 0)",
            "polygon(32% 60%, 0 0, 100% 0)",
          ],
        },
        { duration: 0.2, ease: "easeOut" },
      ],
      [
        "#categories ul > button",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.5, ease: "easeOut", delay: stagger(0.1) },
      ],
    ] as any,
    { duration: 2 },
  );
}

onMounted(() => {
  animation();
});
</script>

<template>
  <section
    id="categories"
    data-color="dark"
    class="bg-[#003B49] flex flex-col items-center pt-14 lg:pt-18"
  >
    <div class="w-full">
      <div
        id="top"
        class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-[#93B7BB] lg:h-20"
      />
      <div class="w-full h-48 relative overflow-hidden lg:h-72">
        <div
          id="middle"
          class="absolute inset-0 flex justify-center items-center bg-[#93B7BB]/70 gap-2 z-2"
        >
          <h4
            id="name"
            class="text-[#003B49] font-bold text-2xl md:text-4xl lg:text-5xl"
          >
            {{ categoria?.nombre ?? categoriaSlug }}
          </h4>
        </div>
        <img
          id="image"
          class="w-full h-full object-cover object-center grayscale"
          :src="getImageUrl(categoria?.imagen)"
          :alt="categoria?.nombre"
        />
      </div>
      <div
        id="bottom"
        class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-[#93B7BB] lg:h-20"
      />
    </div>

    <div class="w-full bg-white pb-20 -mt-10 lg:-mt-20">
      <div class="max-w-[90%] lg:max-w-[80%] mx-auto py-12 md:py-20 text-left">
        <p class="text-xl md:text-2xl leading-relaxed text-gray-600">
          {{ categoria?.descripcion }}
        </p>
      </div>
      <ul
        class="max-w-[90%] lg:max-w-[80%] mx-auto w-full py-12 md:py-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li v-if="pending" class="col-span-full text-center text-gray-500">
          Cargando subcategorías...
        </li>
        <li
          v-else-if="!subcategorias.length"
          class="col-span-full text-center text-gray-500"
        >
          No hay subcategorías disponibles.
        </li>
        <template v-else>
          <li v-for="subcategoria in subcategorias" :key="subcategoria.slug">
            <ProductCategoryCard
              :name="subcategoria.nombre"
              :image-url="getImageUrl(subcategoria.imagen)"
              image-class="h-56"
              panel-duration-class="duration-[500ms]"
              @click="handleActive(subcategoria.slug)"
            />
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>
