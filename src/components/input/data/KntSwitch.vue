<script setup>
const model = defineModel();

defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="antialiased leading-none">
    <label :for="name" class="relative inline-flex items-center cursor-pointer align-middle">
      <input v-model="model" :id="name" type="checkbox" :name="name" :value="true" class="sr-only peer" >
      <span class="w-9 h-5 shadow bg-gray-50 peer-checked:bg-blue-500 outline-none border border-gray-300 rounded-full peer-focus:ring-4 peer-focus:ring-blue-500/25 peer peer-focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 peer-checked:border-none dark:peer-checked:border-blue-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border dark:after:border-none peer-checked:after:border-none after:rounded-full after:size-4 after:transition-all"></span>
      <span class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ label }}</span>
    </label>
  </div>
</template>
