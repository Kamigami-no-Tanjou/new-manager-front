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
  <h4
    class="mb-4 text-2xl text-gray-900 font-bold antialiased lg:mb-3 dark:text-white"
  >
    {{ text }}
  </h4>
</template>
