<script setup lang="ts">
import { animate } from "motion-v";

const route = useRoute();
const { scrollY, isOpen } = useUiState();
const { currentColor, currentEmblemColor } = useSectionObserver();

const sticky = computed(
  () => scrollY.value > 100 && route.path.includes("productos"),
);

const logoSrc = computed(
  () =>
    // currentColor.value === 'light' ? '/ams-light.svg' : '/ams-dark.svg',
    "/ams-light.svg",
);

const burgerIdleColors = { light: "#ddd", dark: "#fff" };
const burgerColor = computed(() =>
  isOpen.value ? "white" : burgerIdleColors[currentEmblemColor.value],
);

function animateOpen() {
  return animate(
    [
      "burg",
      [
        ".burger-top",
        { y: -9, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "burg" },
      ],
      [
        ".burger-mid",
        { scale: 0.1, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "burg" },
      ],
      [
        ".burger-bot",
        { y: 9, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "burg" },
      ],
      "rotate",
      [
        ".burger-top",
        { y: 4 },
        { duration: 0.2, ease: "easeIn", at: "rotate" },
      ],
      [
        ".burger-bot",
        { y: -4 },
        { duration: 0.2, ease: "easeIn", at: "rotate" },
      ],
      [
        ".burger-top",
        { rotateZ: 45, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "rotate" },
      ],
      [
        ".burger-bot",
        { rotateZ: -45, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "rotate" },
      ],
    ] as any,
    { duration: 0.5 },
  );
}

function animateClose() {
  return animate(
    [
      "rotate",
      [
        ".burger-top",
        { y: 0 },
        { duration: 0.2, ease: "easeIn", at: "rotate" },
      ],
      [
        ".burger-bot",
        { y: 0 },
        { duration: 0.2, ease: "easeIn", at: "rotate" },
      ],
      [
        ".burger-top",
        { rotateZ: 0, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "rotate" },
      ],
      [
        ".burger-bot",
        { rotateZ: 0, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "rotate" },
      ],
      "burg",
      [
        ".burger-top",
        { y: 0, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "burg" },
      ],
      [
        ".burger-mid",
        { scale: [1.1, 1], opacity: [0.1, 1], x: [-20, 0] },
        { duration: 0.2, ease: "easeIn", at: "burg" },
      ],
      [
        ".burger-bot",
        { y: 0, transformOrigin: "50% 50%" },
        { duration: 0.5, ease: "easeIn", at: "burg" },
      ],
    ] as any,
    { duration: 0.5 },
  );
}

watch(isOpen, (open) => (open ? animateOpen() : animateClose()));
</script>

<template>
  <header
    class="fixed top-0 z-99 flex w-full items-center justify-between p-4 transition ease-[ease] lg:py-12 lg:px-16"
    :class="sticky ? 'bg-[#003B49]' : 'bg-transparent'"
  >
    <NuxtLink to="/">
      <picture class="z-10">
        <img
          :src="logoSrc"
          alt="AMS Logo"
          class="w-60 [filter:drop-shadow(0_4px_3px_#444)_drop-shadow(0_2px_2px_#444)] md:w-73"
        />
      </picture>
    </NuxtLink>

    <button
      class="z-36 rounded-full bg-[#003B49] p-4"
      @click="isOpen = !isOpen"
    >
      <svg
        id="burger"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        :fill="burgerColor"
        style="perspective: 800px"
      >
        <path class="burger-top" d="M0 9h30v2H0z" />
        <line
          class="burger-mid"
          x1="0"
          y1="15"
          x2="30"
          y2="15"
          :stroke="burgerColor"
          fill="none"
          stroke-width="2"
          vector-effect="non-scaling-stroke"
        />
        <path class="burger-bot" d="M0 19h30v2H0z" />
      </svg>
    </button>
  </header>
</template>
