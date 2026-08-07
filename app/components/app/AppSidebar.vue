<script setup lang="ts">
import { animate, stagger } from "motion-v";

const { isOpen } = useUiState();
const route = useRoute();

const menuItems = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Productos", path: "/productos" },
  { name: "Entrenamiento", path: "/entrenamiento" },
  { name: "Eventos", path: "/eventos" },
  { name: "Contacto", path: "/contacto" },
];

const ADDITIONAL_OFFSET = 13;

const current = computed(() => route.path);

function isActive(itemPath: string) {
  if (current.value === itemPath) return true;
  return current.value.includes("productos") && itemPath === "/productos";
}

function moveMarker(el: HTMLElement | null) {
  const marker = document.querySelector<HTMLElement>(".sidebar-marker");
  if (marker && el) marker.style.top = `${el.offsetTop + ADDITIONAL_OFFSET}px`;
}

function moveMarkerToActive() {
  nextTick(() => {
    const active = menuItems.find((item) => isActive(item.path));
    if (!active) return;
    const el = document.querySelector<HTMLElement>(`a[href="${active.path}"]`);
    moveMarker(el);
  });
}

watch(isOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? "hidden" : "auto";
    document.body.style.userSelect = open ? "none" : "auto";
  }

  if (open) {
    animate(
      ".sidebar-link",
      { x: [-200, 0], opacity: [0, 1] },
      { delay: stagger(0.1), duration: 0.2, ease: [0.22, 0.03, 0.26, 0.1] },
    );
    moveMarkerToActive();
  }
});

const router = useRouter();
router.afterEach(() => {
  isOpen.value = false;
});
</script>

<template>
  <menu
    class="fixed top-0 bottom-0 z-10 max-h-screen min-h-screen w-full min-h-screen overflow-hidden bg-[#003B49] text-white shadow-lg transition-[right] ease-in-out lg:w-[36%] lg:p-4 xl:w-[25%]"
    :class="isOpen ? 'right-0' : '-right-full'"
  >
    <nav
      class="relative mt-24 flex flex-col items-center gap-4 p-12 text-2xl lg:items-end lg:pr-20"
    >
      <a
        v-for="item in menuItems"
        :key="item.path"
        class="sidebar-link block"
        :class="isActive(item.path) ? 'text-[#e3d268]' : ''"
        :href="item.path"
        @click.prevent="
          () => {
            $router.push(item.path);
          }
        "
      >
        {{ item.name }}
      </a>

      <div
        class="sidebar-marker absolute top-10 right-15 hidden h-2 w-2 animate-pulse rounded-full bg-[#e3d268] transition-[top] lg:block"
      />
    </nav>
  </menu>
</template>
