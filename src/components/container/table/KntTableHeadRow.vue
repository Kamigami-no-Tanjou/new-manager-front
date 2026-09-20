<script setup>
defineProps({
  fixed: {
    type: Boolean,
    required: false,
    default: false
  },
  actions: {
    type: Number,
    required: false,
    default: 0
  }
});

const baseActionColumnStyles = 'px-6 py-3 text-center';
const fixedActionColumnStyles = ' w-13/128';
</script>

<template>
  <tr>
    <slot></slot>

    <th v-for="action in actions" :key="action" :class="baseActionColumnStyles + (fixed ? fixedActionColumnStyles : '')"></th>
  </tr>
</template>
