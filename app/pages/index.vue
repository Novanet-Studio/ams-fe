<script setup lang="ts">
import { home } from "~/utils/content";

useHead({ title: home.title });
</script>

<template>
  <div>
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
