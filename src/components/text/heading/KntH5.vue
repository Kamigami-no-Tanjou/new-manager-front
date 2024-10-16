<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  }
});
</script>

<template v-slot="title">
  <h5
    class="mb-3 text-xl font-medium text-gray-900 antialiased lg:mb-1 dark:text-white"
  >
    {{ text }}
  </h5>
</template>
