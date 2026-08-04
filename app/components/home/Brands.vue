<script setup lang="ts">
import { animate, stagger } from 'motion-v'
import { useIntersectionObserver } from '@vueuse/core'
import { brands } from '~/utils/brands'

const invertedBrands = new Set(['Miche logo', 'Speedsix logo', 'Scicon logo', 'Rocket logo'])

const sectionRef = ref<HTMLElement>()

function animateElements() {
  animate('#brands > div.flex', { x: [-100, 0], opacity: [0, 1] }, { duration: 1, delay: stagger(0.1) })
}

useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    if (entry?.isIntersecting) animateElements()
  },
  { rootMargin: '-100px 0px -100px 0px' },
)
</script>

<template>
  <section
    id="brands"
    ref="sectionRef"
    data-color="dark"
    class="grid h-screen min-h-screen grid-cols-2 place-content-center place-items-center gap-[4.5rem] px-12 snap-start snap-always md:px-0 lg:w-1/3"
  >
    <div v-for="brand in brands" :key="brand.name" class="flex items-center justify-center">
      <img
        :src="brand.image"
        :alt="brand.name"
        class="max-h-[2.6rem] md:max-h-[3.75rem]"
        :class="invertedBrands.has(brand.name) ? 'invert' : ''"
      />
    </div>
  </section>
</template>
