<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  uppercase: {
    type: Boolean,
    required: false,
    default: false
  }
});

const headingStyle = "mb-2 text-md font-bold antialiased";
const defaultTypographyStyle = "text-gray-700 dark:text-gray-400";
const uppercaseTypographyStyle = "uppercase text-gray-500 dark:text-gray-400";
</script>

<template v-slot="title">
  <h6
    :class="headingStyle + (uppercase ? ' ' + uppercaseTypographyStyle : defaultTypographyStyle)"
  >
    {{ text }}
  </h6>
</template>
