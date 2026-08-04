<script setup lang="ts">
const { scrollY } = useUiState()
const { initObserver } = useSectionObserver()

onMounted(() => {
  initObserver()
  scrollY.value = window.scrollY
  const onScroll = () => (scrollY.value = window.scrollY)
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <div class="font-primary">
    <AppHeader />
    <AppSidebar />
    <main class="h-screen snap-y snap-mandatory overflow-y-scroll">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
