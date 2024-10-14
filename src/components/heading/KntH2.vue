<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template v-slot="title">
  <h2
    class="mb-7 text-3xl text-gray-900 font-bold antialiased lg:mb-3 lg:text-4xl dark:text-white"
  >
    {{ text }}
  </h2>
</template>
