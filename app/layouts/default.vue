<script setup lang="ts">
const { scrollY } = useUiState();
const { initObserver } = useSectionObserver();
const route = useRoute();
const mainEl = ref<HTMLElement | null>(null);
const wheelSnap = useWheelSnap(mainEl);

onMounted(() => {
  initObserver();
  wheelSnap.init();
  scrollY.value = window.scrollY;
  const onScroll = () => (scrollY.value = window.scrollY);
  window.addEventListener("scroll", onScroll, { passive: true });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    wheelSnap.cleanup();
  });
});

watch(
  () => route.path,
  () => {
    mainEl.value?.scrollTo(0, 0);
    nextTick(initObserver);
  },
);
</script>

<template>
  <div class="font-primary">
    <AppHeader />
    <AppSidebar />
    <main
      ref="mainEl"
      class="h-screen overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
