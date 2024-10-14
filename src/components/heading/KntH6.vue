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
  <h6
    class="mb-2 text-md font-bold text-gray-700 antialiased dark:text-gray-400"
  >
    {{ text }}
  </h6>
</template>
