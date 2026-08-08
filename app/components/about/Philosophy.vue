<script setup lang="ts">
import { animate } from "motion-v";
import { useIntersectionObserver } from "@vueuse/core";

interface Topic {
  title: string;
  description: string;
}

defineProps<{ topic: Topic }>();

const target = ref<HTMLElement>();

function enterAnimation() {
  animate(
    [
      [
        "#philosophy",
        { opacity: [0, 1] },
        { duration: 0.5, delay: 0.5, ease: [0.17, 0.55, 0.55, 1] },
      ],
      [
        "#philosophy > div",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            "polygon(0 0, 100% 0, 100% 85.77%, 0% 91.23%)",
          ],
        },
        { duration: 0.5 },
      ],
      [
        "#philosophy > div > h3",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: 0.3 },
      ],
      [
        "#philosophy > div > p",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.5, delay: 0.3 },
      ],
    ] as any,
    { duration: 2.5 },
  );
}

useIntersectionObserver(
  target,
  ([entry]) => entry?.isIntersecting && enterAnimation(),
  { threshold: 0.2 },
);
</script>

<template>
  <section
    id="philosophy"
    ref="target"
    data-color="light"
    data-copyright-color="dark"
    class="relative h-screen w-full snap-start snap-always"
  >
    <div
      class="h-[94vh] bg-[#55555A] p-8 pt-24 [clip-path:polygon(0px_0px,_100%_0px,_100%_85.77%,_0%_91.23%)] md:p-12 md:pt-32"
    >
      <h3 class="mb-4 mt-4 text-3xl text-[#ACC37E] md:text-4xl">
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
