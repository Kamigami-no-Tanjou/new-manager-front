<script setup>
const cellStyle = "px-6 py-2 ";

defineProps({
  extraClasses: {
    type: String,
    required: false,
    default: '',
  },
  colspan: {
    type: Number,
    required: false,
    default: 1,
  }
});
</script>

<template>
  <td :colspan="colspan" :class="cellStyle + extraClasses">
    <slot></slot>
  </td>
</template>
