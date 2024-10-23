<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <p class="text-base text-gray-900 dark:text-white">{{ text }}</p>
</template>
