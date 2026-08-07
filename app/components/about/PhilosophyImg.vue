<script setup lang="ts">
import { animate } from "motion-v";
import { useIntersectionObserver } from "@vueuse/core";
import image from "~/assets/web/avila-multisports-nosotros-2-miembros-equipos-ciclismo.webp";

const target = ref<HTMLElement>();

function enterAnimation() {
  animate(
    [
      [
        "#philosophyImg",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            "polygon(0% 0%,100% 0%,100% 92%,0% 99%)",
          ],
        },
        { duration: 1, delay: 0.2 },
      ],
      [
        "#philosophyImg > img",
        { opacity: [0, 1], filter: ["blur(10px)", "blur(0px)"] },
        { duration: 1, delay: 0.3 },
      ],
      [
        "#philosophyImgFill",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 88.75%, 0% 83.06%)",
          ],
        },
        { duration: 1, delay: 0 },
      ],
    ] as any,
    { duration: 2 },
  );
}

useIntersectionObserver(
  target,
  ([entry]) => entry?.isIntersecting && enterAnimation(),
  { rootMargin: "-100px 0px -100px 0px" },
);
</script>

<template>
  <section ref="target" class="relative h-screen w-full snap-start snap-always">
    <div id="philosophyImg" class="h-[84vh] lg:h-[81.4vh]">
      <img
        :src="image"
        alt="Ciclista"
        class="h-full object-cover md:min-w-full"
      />
    </div>
    <div
      id="philosophyImgFill"
      class="absolute bottom-0 right-0 top-0 -z-[1] w-full bg-[#93B7BB] [clip-path:polygon(0%_0.59%,_100%_0%,_100%_88.75%,_0.4%_83.06%)] lg:h-[97.2vh]"
    />
  </section>
</template>
