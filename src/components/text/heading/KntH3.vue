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
  <h3
    class="mb-5 text-3xl text-gray-900 font-bold antialiased lg:mb-3 lg:text-3xl dark:text-white"
  >
    {{ text }}
  </h3>
</template>
