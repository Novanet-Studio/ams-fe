<script setup lang="ts">
import { animate } from 'motion-v'
import { useIntersectionObserver } from '@vueuse/core'

const { isDesktop } = useUiState()
const sectionRef = ref<HTMLElement>()

function animateElements() {
  animate(
    [
      [
        '#featuredMessage > div.max-h-screen',
        {
          clipPath: [
            'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
            isDesktop.value
              ? 'polygon(0% 0%,80% 0%,100% 100%,0% 100%)'
              : 'polygon(0% 0%,70% 0%,100% 100%,0% 100%)',
          ],
        },
        { duration: 0.5 },
      ],
      [
        '#featuredMessage > div.absolute',
        {
          opacity: [0, 1],
          x: [-200, 0],
          clipPath: [
            'polygon(0% 0%, 100% 0%, 100% 99.41%, 0% 100%)',
            'polygon(0.08% 0.12%, 100% 0%, 82.52% 41.59%, 1.2% 89.93%)',
          ],
        },
        { duration: 0.5, delay: 0.3 },
      ],
      ['#featuredMessage h4', { opacity: [0, 1], x: [-100, 0] }, { duration: 0.5, delay: 0.2 }],
      ['#featuredMessage p', { opacity: [0, 1], x: [-100, 0] }, { duration: 0.5, delay: 0.4 }],
    ] as any,
    { duration: 2 },
  )
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
    id="featuredMessage"
    ref="sectionRef"
    data-color="light"
    class="relative max-h-screen min-h-screen w-full snap-start snap-always 2xl:w-1/2"
  >
    <div
      class="z-[3] flex h-screen max-h-screen flex-col justify-center bg-[#003B49] pl-6 md:pl-10 xl:gap-8 xl:pl-16"
    >
      <h4
        class="z-[4] max-w-[18rem] text-2xl font-light opacity-0 text-[#E3D268] md:max-w-lg md:text-3xl md:text-balance lg:max-w-[40rem]"
      >
        Somos representantes exclusivos de Wilier e Inspire Fitness. También, distribuidores
        autorizados de equipos True, Castelli, Miche, Speedsix y Scicon.
      </h4>
      <p
        class="mt-4 max-w-[18rem] text-xl font-light opacity-0 text-[#DDDDDD] md:max-w-sm md:text-2xl xl:max-w-[40rem] xl:text-xl"
      >
        Ofrecemos su garantía comercial además de brindarte el servicio que te mereces. Tenemos a tu
        disposición una selección de las mejores bicicletas y equipos.
      </p>
    </div>
    <div
      class="absolute top-0 right-0 bottom-0 -z-[1] w-full bg-[#93B7BB]"
      style="clip-path: polygon(70.23% 0%, 100% 0%, 82.52% 41.59%, 72.71% 10.19%)"
    />
  </section>
</template>
