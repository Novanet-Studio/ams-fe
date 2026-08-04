<script setup lang="ts">
import { animate, stagger } from 'motion-v'
import { getImageUrl } from '~/utils/functions'

const route = useRoute()
const subcategoriaSlug = route.params.product as string

const { getProductos } = useProductos()
const { data: productosResponse, pending } = await useAsyncData(
  `productos-${subcategoriaSlug}`,
  () => getProductos(subcategoriaSlug),
)

const productos = computed(() => productosResponse.value?.data ?? [])
const subcategoria = computed(() => productos.value[0]?.subcategoria)

function animation() {
  animate(
    [
      [
        '#products',
        { opacity: [0, 1], background: ['#fff', '#003B49'] },
        { duration: 0.4, ease: 'easeOut' },
      ],
      ['#products #image', { opacity: [0, 1] }, { duration: 0.4, ease: 'easeOut' }],
      [
        '#products #middle',
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.1, ease: 'easeOut', delay: 0.2 },
      ],
      [
        '#products #middle #name',
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.3, ease: 'easeOut', delay: 0.2 },
      ],
      [
        '#products #top',
        {
          opacity: [0, 1],
          clipPath: [
            'polygon(0% 100%, 100% 100%, 90% 70%)',
            'polygon(0% 100%, 100% 100%, 73.49% 50.75%)',
          ],
        },
        { duration: 0.2, ease: 'easeOut' },
      ],
      [
        '#products #bottom',
        {
          opacity: [0, 1],
          clipPath: ['polygon(40% 70%, 0 0, 100% 0)', 'polygon(32% 60%, 0 0, 100% 0)'],
        },
        { duration: 0.2, ease: 'easeOut' },
      ],
      ['#products h3', { opacity: [0, 1], y: [-10, 0] }, { duration: 1, ease: 'easeOut' }],
      [
        '#products ul li',
        { opacity: [0, 1], y: [10, 0] },
        { duration: 1, ease: 'easeOut', delay: stagger(0.1) },
      ],
    ] as any,
    { duration: 2 },
  )
}

onMounted(() => {
  animation()
})
</script>

<template>
  <section
    id="products"
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
          <h4 id="name" class="text-[#003B49] font-bold text-2xl md:text-4xl lg:text-5xl">
            {{ subcategoria?.nombre ?? 'Productos' }}
          </h4>
        </div>
        <img
          id="image"
          class="w-full h-full object-cover object-center grayscale"
          :src="getImageUrl(subcategoria?.imagen)"
          :alt="subcategoria?.nombre"
        />
      </div>
      <div class="bottom-0 left-0 w-full h-10 bg-[#93B7BB] lg:h-20" />
    </div>

    <div class="w-full bg-white pb-20 lg:-mt-20">
      <div class="max-w-4xl mx-auto px-6 pt-12 md:pt-20 text-center">
        <h3 class="font-bold text-3xl text-[#003B49] first-letter:uppercase">
          {{ subcategoria?.nombre }}
        </h3>
      </div>

      <ul class="max-w-7xl mx-auto w-full px-6 py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <li v-if="pending" class="col-span-full text-center text-gray-500">
          Cargando productos...
        </li>
        <li v-else-if="!productos.length" class="col-span-full text-center text-gray-500">
          No hay productos disponibles en esta subcategoría.
        </li>
        <template v-else>
          <ProductCard
            v-for="producto in productos"
            :key="producto.slug"
            :name="producto.nombre"
            :brand="producto.marca"
            :image-url="getImageUrl(producto.imagen)"
            :link="producto.link"
          />
        </template>
        <!-- ponytail: componente es <ProductCard>, no <ProductProductCard>: Nuxt deduplica el prefijo de carpeta cuando el archivo ya empieza con él (product/ProductCard.vue → ProductCard) -->

      </ul>
    </div>
  </section>
</template>
