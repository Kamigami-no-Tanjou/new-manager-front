<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: ''
  },
  unmargined: {
    type: Boolean,
    required: false,
    default: false
  }
});

const headingStyle = "text-2xl text-gray-900 font-bold antialiased dark:text-white";
const marginStyle = "mb-4 lg:mb-3";
</script>

<template v-slot="title">
  <h4
    :class="headingStyle + (unmargined ? '' : ' ' + marginStyle)"
  >
    {{ text }}
  </h4>
</template>
