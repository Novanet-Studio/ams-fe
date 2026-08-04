<script setup lang="ts">
defineProps<{
  name: string
  brand?: string
  imageUrl: string
  link?: string
}>()
</script>

<template>
  <li class="rounded-lg shadow-md overflow-hidden bg-white flex flex-col">
    <img class="w-full h-64 object-cover" :src="imageUrl" :alt="name" />
    <div class="p-4 flex flex-col flex-grow">
      <p v-if="brand" class="text-sm font-semibold text-gray-500">Marca: {{ brand }}</p>
      <h4 class="text-xl font-bold text-[#003B49] mt-1">{{ name }}</h4>
      <div class="flex-grow" />
      <a
        class="mt-4 w-full bg-[#e3d268] text-[#003B49] text-center font-bold py-2 rounded"
        :href="link"
        target="_blank"
      >
        Ver especificaciones
      </a>
    </div>
  </li>
</template>
