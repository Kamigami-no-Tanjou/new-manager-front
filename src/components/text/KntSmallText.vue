<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  }
});
</script>

<template>
  <span
    class="text-sm text-gray-500 antialiased dark:text-gray-400"
  >
    {{ text }}
  </span>
</template>
