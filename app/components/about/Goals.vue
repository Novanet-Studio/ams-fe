<script setup lang="ts">
import { animate, stagger } from 'motion-v'
import { useIntersectionObserver } from '@vueuse/core'

interface Topic {
  title: string
  description: string
}

defineProps<{ info: { title: string; content: Topic[] } }>()

const target = ref<HTMLElement>()

function enterAnimation() {
  animate(
    [
      [
        '#goals',
        { opacity: [0, 1] },
        { duration: 1, delay: 0.3, ease: [0.17, 0.55, 0.55, 1] },
      ],
      [
        '#goals > div',
        {
          opacity: [0, 1],
          clipPath: [
            'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            'polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)',
          ],
        },
        { duration: 1 },
      ],
      [
        '#goals > div > ul > li',
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 1.5, delay: stagger(0.1) },
      ],
    ] as any,
    { duration: 2 },
  )
}

useIntersectionObserver(
  target,
  ([entry]) => entry?.isIntersecting && enterAnimation(),
  { rootMargin: '-100px 0px -100px 0px' },
)
</script>

<template>
  <section id="goals" data-color="light" data-copyright-color="dark" class="relative h-screen w-full snap-start snap-always">
    <div
      ref="target"
      class="h-[94vh] bg-[#003B49] p-8 pt-24 [clip-path:polygon(0px_0px,_100%_0px,_100%_85.77%,_0%_91.23%)] md:p-12 md:pt-32 lg:px-16"
    >
      <ul class="grid grid-cols-1">
        <div
          class="max-h-[60vh] overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <li v-for="item in info.content" :key="item.title" class="mb-4">
            <h4 class="mb-2 mt-4 text-2xl text-[#E3D268] md:text-2xl lg:text-3xl">
              {{ item.title }}
            </h4>
            <p class="text-[#ddd] md:max-w-full md:text-xl lg:text-lg">
              {{ item.description }}
            </p>
          </li>
        </div>
      </ul>
    </div>
  </section>
</template>
