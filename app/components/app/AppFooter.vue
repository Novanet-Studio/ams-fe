<script setup lang="ts">
import { useUiState } from "~/composables/useUiState";
import { useSectionObserver } from "~/composables/useSectionObserver";

const { isOpen, isDesktop } = useUiState();
const { currentCopyrightColor } = useSectionObserver();
const route = useRoute();

onMounted(() => {
  isDesktop.value = window.matchMedia("(min-width: 1024px)").matches;
});

const isLight = computed(
  () =>
    currentCopyrightColor.value === "light" ||
    isOpen.value ||
    (isDesktop.value && route.path === "/"),
);
</script>

<template>
  <footer
    class="fixed bottom-6 z-10 flex w-full items-center justify-between px-8 lg:px-24"
  >
    <section class="flex items-center gap-2">
      <p
        class="text-xs md:text-sm"
        :class="isLight ? 'text-white' : 'text-[#55555A]'"
      >
        Sitio hecho por
      </p>
      <CommonNovanetLogo
        :height="24"
        class="w-18 m-0 p-0 md:w-24"
        :is-dark="!isLight"
      />
    </section>
    <section class="flex gap-2 md:gap-4">
      <button
        class="flex h-8 w-8 items-center justify-center rounded-full bg-[#ACC37E] text-[#003B49] md:h-10 md:w-10"
      >
        <a
          href="https://www.youtube.com/@Avilamultisport"
          target="_blank"
          class="flex items-center justify-center"
        >
          <Icon name="fa6-brands:youtube" class="text-lg" />
        </a>
      </button>

      <button
        class="flex h-8 w-8 items-center justify-center rounded-full bg-[#E3D268] text-[#003B49] md:h-10 md:w-10"
      >
        <a
          href="https://www.instagram.com/avilamultisport/"
          target="_blank"
          class="flex items-center justify-center"
        >
          <Icon name="fa6-brands:instagram" class="text-lg" />
        </a>
      </button>
    </section>
  </footer>
</template>
