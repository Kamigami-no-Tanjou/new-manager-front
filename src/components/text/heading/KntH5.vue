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
  },
  thick: {
    type: Boolean,
    required: false,
    default: false
  }
});

const headingStyle = "text-xl text-gray-900 antialiased dark:text-white";
const normalStyle = "font-medium";
const thickStyle = "font-semibold";
const marginStyle = "mb-3 lg:mb-1";
</script>

<template v-slot="title">
  <h5
    :class="headingStyle + (unmargined ? '' : ' ' + marginStyle) + (thick ? ' ' + thickStyle : ' ' + normalStyle)"
  >
    {{ text }}
  </h5>
</template>
