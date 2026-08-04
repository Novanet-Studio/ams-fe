<script setup lang="ts">
import { animate } from 'motion-v'
import { useIntersectionObserver } from '@vueuse/core'

interface Topic {
  title: string
  description: string
}

defineProps<{ topic: Topic }>()

const { isDesktop } = useUiState()
const target = ref<HTMLElement>()

function enterAnimation() {
  animate(
    [
      [
        '#history',
        { opacity: [0, 1] },
        { duration: 0.5, delay: 0.5, ease: [0.17, 0.55, 0.55, 1] },
      ],
      [
        '#history > div',
        {
          opacity: [0, 1],
          clipPath: [
            'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            isDesktop.value
              ? 'polygon(0 0, 100% 0, 100% 85.4%, 0% 91.23%)'
              : 'polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)',
          ],
        },
        { duration: 0.5 },
      ],
      [
        '#history > div > h3',
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: 0.5 },
      ],
      [
        '#history > div > p',
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: 0.5 },
      ],
    ] as any,
    { duration: 2.2 },
  )
}

function exitAnimation() {
  animate(
    '#history',
    { opacity: [1, 0] },
    { duration: 0.5, delay: 0.5, ease: [0.17, 0.55, 0.55, 1] },
  )
}

useIntersectionObserver(
  target,
  ([entry]) => (entry?.isIntersecting ? enterAnimation() : exitAnimation()),
  { rootMargin: '-100px 0px -100px 0px' },
)
</script>

<template>
  <section
    id="history"
    ref="target"
    data-color="light"
    data-copyright-color="dark"
    class="relative h-screen w-full snap-start snap-always"
  >
    <div class="h-[94vh] bg-[#003B49] p-8 pt-24 md:p-12 md:pt-32 lg:pl-16">
      <h3 class="mb-4 mt-4 text-3xl text-[#E3D268] md:text-4xl">
        {{ topic.title }}
      </h3>
      <div
        class="max-h-[50vh] overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <p
          class="text-[#ddd] md:max-w-full md:text-xl lg:text-lg"
          v-html="topic.description"
        />
      </div>
    </div>
  </section>
</template>
