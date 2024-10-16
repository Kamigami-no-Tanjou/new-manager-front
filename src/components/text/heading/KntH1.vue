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
  <h1
    class="mb-9 text-4xl text-center font-bold tracking-tight text-gray-900 antialiased lg:font-extrabold lg:text-6xl lg:leading-none lg:mb-7 dark:text-white"
  >
    {{ text }}
  </h1>
</template>
