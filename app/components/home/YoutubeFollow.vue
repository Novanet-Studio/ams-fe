<script setup lang="ts">
import backgroundImage from "~/assets/main/avila-multisports-shared-bg.webp";
</script>

<template>
  <section
    id="youtube"
    data-color="light"
    class="relative z-[1] h-screen w-full snap-start snap-always overflow-hidden bg-cover"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div
      class="relative z-20 flex h-screen w-full flex-col justify-center pr-6 pl-6 md:pr-10 md:pl-16"
    >
      <div>
        <div class="flex items-center">
          <div
            class="z-[1] flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#e3d268]"
          >
            <Icon name="ph:youtube-logo-fill" class="text-5xl text-[#003B49]" />
          </div>
          <div class="-ml-4 bg-[#003B49] py-2 pr-4 pl-8">
            <h2 class="text-3xl text-white md:text-4xl">Estamos en YouTube</h2>
          </div>
        </div>

        <p class="mt-6 py-6 text-xl leading-relaxed text-white lg:text-3xl">
          Compartimos experiencias, entrenamientos y la filosofía que nos
          impulsa a vivir una vida activa y plena.
        </p>

        <a
          href="https://www.youtube.com/@Avilamultisport"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-block bg-[#003B49] px-8 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-white"
        >
          Visítanos
        </a>
      </div>
    </div>
  </section>
</template>
