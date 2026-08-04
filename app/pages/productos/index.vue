<script setup lang="ts">
import { animate, stagger } from 'motion-v'
import { productsBanner } from '~/utils/banners'
import { getImageUrl } from '~/utils/functions'

const { getCategorias } = useCategorias()
const { data: categoriasResponse } = await useAsyncData('categorias', () =>
  getCategorias(),
)
const categorias = computed(() => categoriasResponse.value?.data ?? [])

function handleActive(slug: string | undefined) {
  if (!slug) return
  navigateTo(`/productos/${slug}`)
}

function animateElements() {
  animate(
    [
      [
        '#productCategories',
        { opacity: [0, 1], background: ['#fff', '#003B49'] },
        { duration: 0.5, ease: 'easeOut' },
      ],
      [
        '#productCategories > h3',
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, ease: 'easeOut' },
      ],
      [
        '#productCategories > ul > button',
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.5, ease: 'easeOut', delay: stagger(0.1) },
      ],
    ] as any,
    { duration: 2 },
  )
}

onMounted(() => {
  animateElements()
})
</script>

<template>
  <section
    id="productCategories"
    data-color="light"
    class="bg-[#003B49] flex flex-col justify-center items-center pt-26 pb-12 lg:pt-18"
  >
    <div class="w-full">
      <div
        id="top"
        class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-[#93B7BB] lg:h-[80px]"
      />
      <div class="w-full h-36 relative overflow-hidden lg:h-[300px]">
        <div
          id="middle"
          class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#93B7BB]/70 gap-2 z-2"
        >
          <h4 id="name" class="text-[#003B49] font-bold text-2xl md:text-3xl lg:text-4xl">
            Productos
          </h4>
        </div>
        <img
          id="image"
          class="md:min-w-full h-full object-cover object-center grayscale"
          :src="productsBanner"
          alt="productBanner"
        />
      </div>
      <div
        id="bottom"
        class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-[#93B7BB] lg:h-[80px]"
      />
    </div>

    <ul
      class="max-w-[90%] lg:max-w-[80%] mx-auto w-full py-12 md:py-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li v-for="categoria in categorias" :key="categoria.slug">
        <ProductCategoryCard
          :name="categoria.nombre"
          :image-url="getImageUrl(categoria.imagen)"
          @click="handleActive(categoria.slug)"
        />
      </li>
    </ul>
  </section>
</template>
