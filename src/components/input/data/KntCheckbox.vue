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
  <div class="flex items-center antialiased">
    <input v-model="model" :id="name" type="checkbox" :name="name" class="size-4 shadow bg-gray-50 text-blue-500 outline-none appearance-none border border-gray-300 rounded focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600">
    <label :for="name" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ label }}</label>
  </div>
</template>

<style scoped>
[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E");
}

.dark [type="checkbox"]:checked, [type="checkbox"]:checked {
  background-color: currentColor;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-color: transparent;
}
</style>
