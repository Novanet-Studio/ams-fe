<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string;
    position?: "left" | "right";
  }>(),
  { position: "left" },
);

defineEmits<{ click: [e: MouseEvent] }>();
</script>

<template>
  <button
    class="absolute bottom-[47%] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#55555A]/50 hover:bg-[#55555A]/80 md:h-12 md:w-12"
    :class="position === 'left' ? 'left-2' : 'right-2'"
    @click="(e) => $emit('click', e)"
  >
    <Icon :name="icon" class="text-md text-white md:text-lg" />
  </button>
</template>
