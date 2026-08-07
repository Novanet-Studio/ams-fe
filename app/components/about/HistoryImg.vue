<script setup lang="ts">
import { animate } from "motion-v";
import image from "~/assets/web/avila-multisports-nosotros-grupo-ciclistas.webp";

const { isDesktop } = useUiState();

onMounted(() => {
  animate(
    [
      [
        "#historyImg",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            "polygon(0% 0%,100% 0%,100% 91%,0% 98.5%)",
          ],
        },
        { duration: 0.5, delay: 0.2 },
      ],
      [
        "#historyImg > img",
        { opacity: [0, 1], filter: ["blur(10px)", "blur(0px)"] },
        { duration: 0.5, delay: 0.3 },
      ],
      [
        "#historyImgFill",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            isDesktop.value
              ? "polygon(0% 0%, 100% 0%, 100% 88.75%, 0% 82.7%)"
              : "polygon(0% 0%, 100% 0%, 100% 88.75%, 0% 83.06%)",
          ],
        },
        { duration: 0.5, delay: 0 },
      ],
    ] as any,
    { duration: 2 },
  );
});
</script>

<template>
  <section class="relative h-screen w-full snap-start snap-always">
    <div id="historyImg" class="h-[84vh] bg-[#003B49] lg:h-[81.4vh]">
      <img
        :src="image"
        alt="Ciclistas"
        class="h-full object-cover md:min-w-full"
      />
    </div>
    <div
      id="historyImgFill"
      class="absolute bottom-0 right-0 top-0 -z-[1] w-full bg-[#E3D268] [clip-path:polygon(0%_0%,_100%_0%,_100%_88.75%,_0%_83.06%)] lg:h-[97.2vh]"
    />
  </section>
</template>
