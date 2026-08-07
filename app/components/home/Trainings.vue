<script setup lang="ts">
import backgroundImage from "~/assets/main/avila-multisports-training-info-bg-alt.webp";

const plans = [
  {
    number: 1,
    color: "bg-[#93B7BB]",
    details: [
      { title: "Planificación", text: "Salvatore Cali" },
      { title: "Seguimiento", text: "Oscar Arapé. 1 vez al mes" },
      { title: "Análisis de data", text: "Johnny Frias. 1 vez al mes" },
    ],
  },
  {
    number: 2,
    color: "bg-[#ACC37E]",
    details: [
      { title: "Planificación", text: "Salvatore Cali" },
      {
        title: "Seguimiento",
        text: "Salvatore Cali/Oscar Arapé. 1 vez al mes",
      },
      { title: "Análisis de data", text: "Johnny Frias. 1 vez al mes" },
    ],
  },
  {
    number: 3,
    color: "bg-[#E3D268]",
    details: [
      { title: "Planificación", text: "Salvatore Cali" },
      {
        title: "Seguimiento",
        text: "Salvatore Cali/Oscar Arapé. Más de una vez por semana",
      },
      {
        title: "Análisis de data",
        text: "Salvatore Cali/Johnny Frias. Semanalmente",
      },
    ],
  },
];

const colorSets = ["bg-[#93B7BB]", "bg-[#ACC37E]", "bg-[#E3D268]"];

function getPathColor(index: number) {
  return colorSets[index % colorSets.length];
}
</script>

<template>
  <section
    id="entrenamiento"
    data-color="light"
    class="filtered-background relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-[6.5rem] pb-20 snap-start snap-always md:px-12 md:pb-0"
    :style="{ '--bg-image': `url(${backgroundImage})` }"
  >
    <div class="mx-auto flex w-full max-w-7xl flex-col items-center">
      <div class="text-center">
        <h4 class="text-3xl text-[#E3D268]">Entrenamiento</h4>
        <p
          class="mx-auto mt-4 w-full leading-relaxed text-white/90 md:text-2xl lg:text-2xl"
        >
          Nuestros planes se adaptan a tus necesidades y nivel, con ajustes
          diarios si los requieres. La diferencia entre ellos radica en el nivel
          de seguimiento que prefieras. Todo el equipo de Ávila Multisport está
          disponible para resolver tus dudas.
        </p>
      </div>

      <div
        class="mt-28 grid w-full grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(plan, index) in plans"
          :key="plan.number"
          class="relative z-[1]"
        >
          <div
            class="absolute -top-12 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-[#e5e7eb]/90 backdrop-blur-sm md:h-24 md:w-24"
          >
            <span class="text-4xl font-bold text-[#003B49]">{{
              plan.number
            }}</span>
          </div>

          <div
            id="coachesTop"
            class="absolute -top-[63px] left-0 z-[1] h-16 w-full"
            :class="getPathColor(index)"
            style="clip-path: polygon(0% 100%, 100% 100%, 75% 50%)"
          />

          <div
            class="flex h-full flex-col gap-4 p-8 pt-16 text-start"
            :class="plan.color"
          >
            <div v-for="item in plan.details" :key="item.title">
              <p class="text-center text-lg font-bold text-[#003B49]">
                {{ item.title }}
              </p>
              <p class="text-center text-lg text-black/60">{{ item.text }}</p>
            </div>
          </div>

          <div
            id="coachesBottom"
            class="absolute -bottom-[47px] left-0 h-12 w-full"
            :class="getPathColor(index)"
            style="clip-path: polygon(25% 50%, 0 0, 100% 0)"
          />
        </div>
      </div>

      <div class="mt-16 bg-white p-6 text-center text-[#003B49]">
        <NuxtLink
          to="/entrenamiento"
          class="text-lg font-bold transition-colors hover:bg-[#e5e7eb]"
        >
          Ver toda la información de los planes
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.filtered-background::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;

  z-index: -1;
}
</style>
