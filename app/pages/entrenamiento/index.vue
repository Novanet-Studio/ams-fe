<script setup lang="ts">
import { animate, stagger } from "motion-v";
import { training as content } from "~/utils/content";

useHead({ title: content.page_title });

function getColors(index: number) {
  const colorSets = [
    { li: "bg-color-2 border-color-2", path: "bg-color-2" },
    { li: "bg-color-3 border-color-3", path: "bg-color-3" },
    { li: "bg-color-4 border-color-4", path: "bg-color-4" },
  ];
  return colorSets[index % colorSets.length];
}

onMounted(() => {
  animate(
    [
      [
        "#coaches",
        { opacity: [0, 1], background: ["#fff", "#003B49"] },
        { duration: 0.4, ease: "ease-out" },
      ],
      [
        "#coaches #image",
        { opacity: [0, 1], filter: ["blur(2px)", "blur(0)"] },
        { duration: 0.4, ease: "ease-out" },
      ],
      [
        "#coaches #middle",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.1, ease: "ease-out", delay: 0.2 },
      ],
      [
        "#coaches #middle #name",
        { opacity: [0, 1], x: [-10, 0] },
        { duration: 0.3, ease: "ease-out", delay: 0.2 },
      ],
      [
        "#coaches #top",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(0% 100%, 100% 100%, 90% 70%)",
            "polygon(0% 100%, 100% 100%, 73.49% 50.75%)",
          ],
        },
        { duration: 0.2, ease: "ease-out" },
      ],
      [
        "#coaches #bottom",
        {
          opacity: [0, 1],
          clipPath: [
            "polygon(40% 70%, 0 0, 100% 0)",
            "polygon(32% 60%, 0 0, 100% 0)",
          ],
        },
        { duration: 0.2, ease: "ease-out" },
      ],
      [
        "#coaches ul h3",
        { opacity: [0, 1], y: [-10, 0] },
        { duration: 1, ease: "ease-out" },
      ],
      [
        "#coaches ul li",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 1, ease: "ease-out", delay: stagger(0.2) },
      ],
    ] as any,
    { duration: 2 },
  );
});
</script>

<template>
  <div>
    <!-- ponytail: raíz única obligatoria para app.pageTransition (out-in); comentario DENTRO del div -->
    <section
      id="banner"
      data-color="dark"
      class="snap-start snap-always flex flex-col items-center bg-color-1 pt-14 lg:pt-18"
    >
      <div class="w-full">
        <div
          id="top"
          class="h-10 w-full bg-color-3 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] lg:h-[80px]"
        />
        <div class="relative h-36 w-full overflow-hidden lg:h-[300px]">
          <div
            id="middle"
            class="absolute left-0 top-0 z-2 flex h-full w-full items-center justify-center gap-2 bg-color-3/50"
          >
            <h4
              id="name"
              class="text-2xl font-bold text-color-1 md:text-3xl lg:text-4xl"
            >
              {{ content.page_title }}
            </h4>
          </div>
          <img
            id="image"
            class="min-h-full object-cover object-center md:min-w-full"
            :src="content.trainingsBanner"
            alt="Training banner"
          />
        </div>
        <div
          id="bottom"
          class="bottom-0 left-0 h-10 w-full bg-color-3 [clip-path:polygon(32%_60%,_0_0,_100%_0)] lg:h-[80px]"
        />
      </div>

      <div class="-mt-12 min-h-full w-full bg-white md:px-12 lg:-mt-20">
        <div class="mx-auto max-w-[90%] py-12 text-start md:py-20">
          <p class="text-xl leading-relaxed text-gray-600 md:text-2xl">
            Diseñamos planes personalizados con entrenadores especializados y
            alianzas estratégicas para un ecosistema de entrenamiento completo.
            Se ofrecen TRES tipos de planes, todos con planificación y ajustes
            diarios según necesidades del atleta. La diferencia radica en el
            grado de seguimiento deseado.
          </p>

          <div
            class="mt-20 mb-5 flex w-full snap-start snap-always justify-center"
          >
            <h4 id="name" class="text-3xl text-color-1 md:text-4xl">Planes</h4>
          </div>

          <p class="text-xl leading-relaxed text-gray-600 md:text-2xl">
            La inscripción que incluye asesoría nutricional con nuestra
            especialista Carolina Lairet y escoges algunos de estos 3 planes.
          </p>

          <div
            class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            <div class="flex flex-col bg-gray-100 p-4 text-center md:p-6">
              <h3 class="mb-4 text-2xl font-bold text-color-1">Plan 1</h3>
              <div class="h-full flex-grow bg-color-2 p-6 text-start">
                <div class="mb-5">
                  <p class="font-bold text-color-1">Planificación</p>
                  <p class="text-sm text-gray-700">Salvatore Cali</p>
                </div>
                <div class="mb-5">
                  <p class="font-bold text-color-1">Seguimiento</p>
                  <p class="text-sm text-gray-700">Oscar Arapé. 1 vez al mes</p>
                </div>
                <div>
                  <p class="font-bold text-color-1">Análisis de data</p>
                  <p class="text-sm text-gray-700">
                    Johnny Frias. 1 vez al mes
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col bg-gray-100 p-4 text-center md:p-6">
              <h3 class="mb-4 text-2xl font-bold text-color-1">Plan 2</h3>
              <div class="h-full flex-grow bg-color-3 p-6 text-start">
                <div class="mb-5">
                  <p class="font-bold text-color-1">Planificación</p>
                  <p class="text-sm text-gray-700">Salvatore Cali</p>
                </div>
                <div class="mb-5">
                  <p class="font-bold text-color-1">Seguimiento</p>
                  <p class="text-sm text-gray-700">
                    Salvatore Cali/Oscar Arapé. 1 vez al mes
                  </p>
                </div>
                <div>
                  <p class="font-bold text-color-1">Análisis de data</p>
                  <p class="text-sm text-gray-700">
                    Johnny Frias. 1 vez al mes
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col bg-gray-100 p-4 text-center md:p-6">
              <h3 class="mb-4 text-2xl font-bold text-color-1">Plan 3</h3>
              <div class="h-full flex-grow bg-color-4 p-6 text-start">
                <div class="mb-5">
                  <p class="font-bold text-color-1">Planificación</p>
                  <p class="text-sm text-gray-700">Salvatore Cali</p>
                </div>
                <div class="mb-5">
                  <p class="font-bold text-color-1">Seguimiento</p>
                  <p class="text-sm text-gray-700">
                    Salvatore Cali/Oscar Arapé. Más de una vez por semana
                  </p>
                </div>
                <div>
                  <p class="font-bold text-color-1">Análisis de data</p>
                  <p class="text-sm text-gray-700">
                    Salvatore Cali/Johnny Frias. Semanalmente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="training-info"
      data-color="light"
      data-copyright-color="dark"
      class="filtered-background relative w-full min-h-screen snap-start snap-always overflow-hidden"
      :style="{ '--bg-image': `url(${content.trainingInfoBg})` }"
    >
      <div
        class="flex w-full min-h-[100dvh] flex-col items-center justify-center pt-10"
      >
        <div class="mt-20 flex w-full justify-center">
          <h4 id="name" class="text-center text-3xl text-color-4 lg:text-4xl">
            ¿Qué más incluyen los planes?
          </h4>
        </div>

        <div class="mx-auto max-w-[90%] text-center xl:max-w-[80%]">
          <ul
            class="grid w-full grid-cols-1 justify-center gap-x-8 gap-y-[5.5rem] py-12 md:grid-cols-2 md:py-20 lg:grid-cols-3"
          >
            <li
              v-for="(i, index) in content.info"
              :key="i.label"
              class="relative w-full flex-1 border bg-white p-6 md:mx-auto lg:p-8 lg:last:mx-0"
            >
              <div
                id="coachesTop"
                class="absolute -top-[64px] left-0 h-16 w-full [clip-path:polygon(0%_100%,_100%_100%,_75%_50%)]"
                :class="getColors(index).path"
              />

              <div class="flex gap-2">
                <span
                  class="flex h-16 w-16 items-center justify-center rounded-full"
                  :class="getColors(index).path"
                >
                  <img class="h-8 w-8" :src="i.icon" :alt="i.label" />
                </span>

                <h5
                  class="mt-2 text-sm text-pretty font-bold text-color-1 md:mt-4 md:text-base"
                >
                  {{ i.label }}
                </h5>
              </div>

              <p
                class="mt-2 text-start text-sm whitespace-pre-line text-color-5 md:mt-4"
              >
                {{ i.desc }}
              </p>

              <div
                id="coachesBottom"
                class="absolute -bottom-[48px] left-0 h-12 w-full [clip-path:polygon(25%_50%,_0_0,_100%_0)]"
                :class="getColors(index).path"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      id="allies"
      data-color="dark"
      class="flex snap-start snap-always flex-col items-center bg-white pt-14 lg:pt-18"
    >
      <div
        class="flex min-h-[100dvh] w-full max-w-[90%] flex-col items-center justify-center lg:max-w-[80%]"
      >
        <div class="flex w-full flex-col items-center justify-center">
          <h4 id="name" class="text-4xl font-bold text-color-1">Aliados</h4>

          <p class="mt-4 text-xl leading-relaxed text-gray-600 md:text-2xl">
            Contamos con el apoyo de destacadas instituciones y profesionales
            que suman un gran valor a nuestros servicios.
          </p>
        </div>

        <ul
          class="grid w-full grid-cols-1 justify-center gap-x-8 gap-y-12 py-12 sm:grid-cols-2 md:py-20 lg:grid-cols-3"
        >
          <li
            v-for="allie in content.allies"
            :key="allie.name"
            class="flex items-center justify-start gap-4"
          >
            <div class="h-24 w-24 flex-shrink-0">
              <img
                :src="allie.avatar"
                :alt="`Avatar de ${allie.name}`"
                class="h-full w-full rounded-full object-cover ring-2 ring-gray-200"
              />
            </div>

            <div class="flex w-full flex-col">
              <h3 class="text-lg font-bold text-color-1">
                {{ allie.name }}
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                {{ allie.description }}
              </p>

              <a
                :href="allie.url || '/#'"
                rel="noopener noreferrer"
                class="mt-3 w-fit bg-gray-200 px-4 py-2 text-sm font-bold text-color-1 transition-colors hover:bg-gray-300"
              >
                Ver más información
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section
      id="coaches"
      data-color="light"
      data-copyright-color="dark"
      class="flex snap-start snap-always flex-col items-center bg-color-1 pt-12 pb-26 lg:pt-18"
    >
      <div
        class="flex min-h-[100dvh] w-full flex-col items-center justify-center"
      >
        <div class="flex w-full justify-center">
          <h4 id="name" class="text-2xl text-color-4 md:text-3xl lg:text-4xl">
            Coaches
          </h4>
        </div>

        <div class="mx-auto max-w-[90%] text-center lg:max-w-[80%]">
          <ul
            class="flex flex-col gap-40 px-12 pt-[11.25rem] pb-12 min-h-screen md:mt-40 md:gap-[17.5rem] lg:mx-auto lg:mb-0 lg:flex-row lg:min-h-full lg:justify-center lg:gap-6 lg:px-0 lg:pt-10"
          >
            <li
              v-for="(coach, index) in content.coaches"
              :key="coach.name"
              class="relative flex-1 border p-6 md:mx-auto md:p-8 lg:p-5 lg:pt-12 lg:pb-12 lg:last:mx-0"
              :class="getColors(index).li"
            >
              <div
                id="coachesTop"
                class="absolute -top-[64px] left-0 h-16 w-full [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] md:[clip-path:polygon(0%_100%,_100%_100%,_73.49%_0%)] lg:-top-[80px] lg:h-[80px] lg:[clip-path:polygon(0%_100%,_100%_100%,_80.35%_35%)]"
                :class="getColors(index).path"
              />
              <div
                class="absolute left-0 right-0 -top-[100px] flex justify-center md:-top-[180px] lg:-top-[8.5rem]"
              >
                <img
                  class="max-w-[128px] md:max-w-[14rem] lg:max-w-[12rem]"
                  :src="coach.avatar"
                  :alt="coach.name"
                />
              </div>
              <div class="flex justify-left">
                <a
                  :href="coach.instagramProfile"
                  target="_blank"
                  class="items-left flex gap-2 text-2xl text-color-5 hover:text-[#47474d]"
                >
                  <h4 class="mt-4 text-left text-xl font-bold md:text-3xl">
                    {{ coach.name }}
                  </h4>
                  <Icon name="fa6-brands:instagram" class="mt-4" />
                </a>
              </div>
              <div
                class="text-left text-sm font-bold text-color-5 md:text-base"
              >
                Especialidad:
                <span class="text-sm font-light md:text-base">{{
                  coach.speciality
                }}</span>
              </div>
              <p
                class="mt-2 text-left text-sm text-color-5 md:mt-4 md:text-base"
              >
                {{ coach.shortBio }}
              </p>
              <div
                id="coachesBottom"
                class="absolute -bottom-[48px] left-0 h-12 w-full [clip-path:polygon(32%_60%,_0_0,_100%_0)] md:[clip-path:polygon(14%_97%,_0_0,_100%_0)] lg:-bottom-[81px] lg:h-[80px] lg:[clip-path:polygon(18%_50%,_0_0,_100%_0)]"
                :class="getColors(index).path"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.filtered-background::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  filter: brightness(0.5) grayscale(100%);
  z-index: -1;
}
</style>
