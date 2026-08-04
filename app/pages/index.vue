<script setup lang="ts">
import { home } from '~/utils/content'

useHead({ title: home.title })
</script>

<template>
  <div>
    <!-- ponytail: raíz única obligatoria para app.pageTransition (out-in); el comentario va DENTRO del div, si no cuenta como 2ª raíz (NUXT_E4004) -->
    <HomeMain />
    <div class="lg:flex relative h-screen snap-start snap-always">
      <HomeFeaturedMessage class="lg:w-1/2" />
      <HomeBrands />
    </div>
    <HomeProducts />
    <HomeTrainings />
    <HomeYoutubeFollow />
  </div>
</template>
