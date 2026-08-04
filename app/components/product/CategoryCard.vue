<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    imageUrl: string
    imageClass?: string
    panelDurationClass?: string
  }>(),
  {
    imageClass: 'h-40 md:h-auto',
    panelDurationClass: 'duration-[250ms]',
  },
)

defineEmits<{ click: [] }>()
</script>

<template>
  <button class="group block w-full overflow-hidden relative" @click="$emit('click')">
    <img
      id="image"
      :src="imageUrl"
      :alt="name"
      :class="['w-full object-cover', imageClass]"
    />

    <div class="flex justify-center p-3 bg-[#93B7BB]">
      <h4 id="name" class="text-[#003B49] font-bold text-xl sm:text-2xl lg:text-2xl">
        {{ name }}
      </h4>
      <Icon
        name="ph:arrow-right-bold"
        class="mt-1 ml-1 text-xl md:text-2xl text-[#003B49]"
      />
    </div>

    <div
      class="absolute inset-0 bg-transparent transition-colors duration-300 ease-in-out group-hover:bg-[#93B7BB]/70 flex items-center justify-center"
    >
      <div
        class="relative w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div
          :class="[
            'absolute top-0 left-0 w-full h-full bg-[#93B7BB] transform -translate-y-full group-hover:translate-y-0 transition-transform ease-out',
            panelDurationClass,
          ]"
          style="clip-path: polygon(0% 0%, 100% 0%, 25% 15%)"
        />

        <div
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
        >
          <h4 class="text-[#003B49] font-bold text-xl">
            {{ name }}
          </h4>
        </div>

        <div
          :class="[
            'absolute bottom-0 left-0 w-full h-full bg-[#93B7BB] transform translate-y-full group-hover:translate-y-0 transition-transform ease-out',
            panelDurationClass,
          ]"
          style="clip-path: inset(80% 0 0 0);"
        />
      </div>
    </div>
  </button>
</template>
