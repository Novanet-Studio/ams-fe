<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { animate } from "motion-v";
import { useIntersectionObserver } from "@vueuse/core";
import type { Swiper as SwiperType } from "swiper/types";
import { carousel } from "~/utils/brands";

const swiperInstance = ref<SwiperType>();
const sectionRef = ref<HTMLElement>();

function animateActiveSlide(repeat = false) {
  const slide = document.querySelector("#mainSlider .swiper-slide-active");
  if (!slide) return;
  animate(
    slide.querySelector("h3") as Element,
    { opacity: [0, 1], x: [-100, 0] },
    { duration: 1.5, delay: repeat ? 0.1 : 0.5, ease: [0.17, 0.55, 0.55, 1] },
  );
  animate(
    slide.querySelector("p") as Element,
    { opacity: [0, 1], x: [-100, 0] },
    { duration: 1.5, delay: repeat ? 0.3 : 0.7, ease: [0.17, 0.55, 0.55, 1] },
  );
  animate(
    slide.querySelector("img#banner") as Element,
    { opacity: [0, 1] },
    { duration: 1.5, delay: repeat ? 0.5 : 0.9, ease: [0.17, 0.55, 0.55, 1] },
  );
}

useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    if (entry?.isIntersecting) animateActiveSlide();
  },
  { rootMargin: "-100px 0px -100px 0px" },
);

onMounted(() => {
  animateActiveSlide();
});
</script>

<template>
  <section
    id="main"
    ref="sectionRef"
    data-color="light"
    class="relative h-screen snap-start snap-always"
  >
    <CommonNavigationBtn
      icon="fa6-solid:arrow-left"
      class="main-prev-btn"
      @click="swiperInstance?.slidePrev()"
    />
    <Swiper
      id="mainSlider"
      class="w-full"
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :space-between="10"
      :centered-slides="true"
      :navigation="{
        enabled: false,
        nextEl: '.main-next-btn',
        prevEl: '.main-prev-btn',
        disabledClass: 'opacity-90',
      }"
      :pagination="{}"
      :breakpoints="{ 1024: { pagination: false, navigation: true } }"
      @swiper="(s: SwiperType) => (swiperInstance = s)"
      @slide-change="() => animateActiveSlide(true)"
    >
      <SwiperSlide
        v-for="item in carousel.hardware"
        :key="item.name"
        class="flex! min-h-screen min-w-full flex-col items-start justify-start bg-cover bg-[position:-45em] pt-36 pl-10 md:bg-center md:pt-40 lg:px-16 lg:pt-52"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
        <div class="flex min-w-full flex-col items-start justify-start gap-4 bg-cover bg-[position:-45em] md:gap-6 md:bg-center">
          <h3
            class="text-3xl font-light text-[#E3D268] [text-shadow:1px_1px_3px_rgb(0_0_0/0.29),2px_4px_7px_rgb(73_64_125/0.35)] md:max-w-[70%] md:text-4xl lg:text-5xl"
          >
            {{ item.copy.main }}
          </h3>
          <p
            class="max-w-[100%] text-2xl text-white md:max-w-[60%] md:text-xl lg:max-w-[45%] lg:text-2xl"
          >
            {{ item.copy.secondary }}
          </p>
          <img
            id="banner"
            :src="item.logo"
            :alt="item.name"
            loading="lazy"
            class="w-[60%] md:mt-12 md:w-[20%]"
            :class="item.name === 'Inspire logo' ? 'invert' : ''"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <CommonNavigationBtn
      icon="fa6-solid:arrow-right"
      class="main-next-btn z-[1]"
      position="right"
      @click="swiperInstance?.slideNext()"
    />
  </section>
</template>

<style scoped>
:deep(.swiper-pagination) {
  --swiper-pagination-bottom: 15vh;
  --swiper-pagination-color: #fff;
}
</style>
